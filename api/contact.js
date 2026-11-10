// MITS — formulaire de contact (fonction serverless Vercel)
//
// Reçoit le formulaire en POST, le valide côté serveur et l'envoie par e-mail via l'API Resend.
// Les secrets restent dans les variables d'environnement Vercel, jamais dans le navigateur.
//
// Variables d'environnement (Vercel > Project > Settings > Environment Variables) :
//   RESEND_API_KEY      obligatoire — clé API créée sur https://resend.com
//   CONTACT_TO_EMAIL    obligatoire — adresse qui reçoit les demandes (celle du compte Resend tant
//                       qu'aucun nom de domaine n'est vérifié dans Resend)
//   CONTACT_FROM_EMAIL  facultatif — expéditeur ; par défaut « MITS <onboarding@resend.dev> »
//                       (adresse de test Resend). Avec un domaine vérifié : « MITS <contact@votre-domaine> »
//   ALLOWED_ORIGINS     facultatif — autres origines autorisées, séparées par des virgules

'use strict';

const MAX_BODY_BYTES = 16 * 1024;
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[A-Za-z]{2,}$/;
const PHONE_RE = /^[0-9+()\-.\s]*$/;
const LANGS = ['fr', 'en', 'ar'];

// nom : [obligatoire, longueur max, plusieurs lignes autorisées]
const FIELDS = {
  name: [true, 100, false],
  email: [true, 254, false],
  phone: [false, 40, false],
  message: [true, 3000, true],
  lang: [false, 5, false]
};

// Au mieux seulement : chaque instance serverless a sa propre mémoire.
// Pour une vraie limite, ajouter une règle de rate limit sur /api/contact dans le Vercel Firewall.
const hits = new Map();

function httpError(status, code) {
  const e = new Error(code);
  e.status = status;
  e.code = code;
  return e;
}

function clientIp(req) {
  const fwd = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  return String(req.headers['x-real-ip'] || fwd || (req.socket && req.socket.remoteAddress) || 'unknown');
}

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(function (t) { return now - t < RATE_LIMIT.windowMs; });
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [key, list] of hits) {
      if (!list.length || now - list[list.length - 1] > RATE_LIMIT.windowMs) hits.delete(key);
    }
  }
  return recent.length > RATE_LIMIT.max;
}

// N'accepte que les envois venant du site lui-même (son propre hôte) ou d'ALLOWED_ORIGINS.
function originAllowed(req) {
  const source = req.headers.origin || req.headers.referer;
  if (!source) return false;
  let origin;
  try { origin = new URL(source); } catch (e) { return false; }
  const host = String(req.headers['x-forwarded-host'] || req.headers.host || '').split(',')[0].trim().toLowerCase();
  if (host && origin.host.toLowerCase() === host) return true;
  const extra = String(process.env.ALLOWED_ORIGINS || '').split(',').map(function (s) { return s.trim().toLowerCase(); }).filter(Boolean);
  return extra.indexOf(origin.origin.toLowerCase()) !== -1;
}

function readStream(req) {
  return new Promise(function (resolve, reject) {
    let size = 0;
    const chunks = [];
    req.on('data', function (chunk) {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) { reject(httpError(413, 'too_large')); req.destroy(); return; }
      chunks.push(chunk);
    });
    req.on('end', function () { resolve(Buffer.concat(chunks).toString('utf8')); });
    req.on('error', reject);
  });
}

async function readBody(req, isJson) {
  if (Number(req.headers['content-length'] || 0) > MAX_BODY_BYTES) throw httpError(413, 'too_large');
  let body;
  try { body = req.body; } catch (e) { throw httpError(400, 'bad_body'); } // Vercel lève une erreur sur un JSON invalide
  if (body && typeof body === 'object' && !Buffer.isBuffer(body)) return body;
  const raw = typeof body === 'string' ? body : Buffer.isBuffer(body) ? body.toString('utf8') : await readStream(req);
  if (Buffer.byteLength(raw) > MAX_BODY_BYTES) throw httpError(413, 'too_large');
  if (!isJson) return Object.fromEntries(new URLSearchParams(raw));
  try { return JSON.parse(raw); } catch (e) { throw httpError(400, 'bad_body'); }
}

function clean(value, multiline) {
  if (value == null) return '';
  if (typeof value !== 'string' && typeof value !== 'number' && typeof value !== 'boolean') throw httpError(400, 'invalid');
  let s = String(value).normalize('NFC');
  // Retire les caractères de contrôle (et les retours à la ligne sur les champs d'une ligne,
  // pour que rien ne puisse casser un en-tête ou l'objet de l'e-mail).
  s = multiline
    ? s.replace(/\r\n?/g, '\n').replace(/[\u0000-\u0008\u000B-\u001F\u007F\u2028\u2029]/g, '')
    : s.replace(/[\u0000-\u001F\u007F\u2028\u2029]/g, ' ');
  return s.trim();
}

function validate(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw httpError(400, 'invalid');
  const data = {};
  for (const key of Object.keys(FIELDS)) {
    const rule = FIELDS[key];
    const v = clean(input[key], rule[2]);
    if (rule[0] && !v) throw httpError(400, 'missing_' + key);
    if (v.length > rule[1]) throw httpError(400, 'too_long_' + key);
    data[key] = v;
  }
  if (!EMAIL_RE.test(data.email)) throw httpError(400, 'invalid_email');
  if (!PHONE_RE.test(data.phone)) throw httpError(400, 'invalid_phone');
  if (data.message.length < 10) throw httpError(400, 'too_short_message');
  if (LANGS.indexOf(data.lang) === -1) data.lang = 'fr';
  return data;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function buildEmail(d) {
  const subject = 'Nouvelle demande MITS — ' + d.name.slice(0, 80);
  const rows = [
    ['Nom', d.name],
    ['Email', d.email],
    ['Téléphone / WhatsApp', d.phone || '—'],
    ['Langue du site', d.lang.toUpperCase()]
  ];
  const text = rows.map(function (r) { return r[0] + ' : ' + r[1]; }).join('\n') +
    '\n\nBesoin décrit :\n' + d.message +
    '\n\n— Envoyé depuis le formulaire de contact de maazaoui-it-services.vercel.app. Répondez directement à cet e-mail pour écrire au client.';
  const html = '<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#0E1B2A">' +
    '<h2 style="margin:0 0 12px;font-size:18px">Nouvelle demande depuis le site MITS</h2>' +
    '<table style="border-collapse:collapse">' +
    rows.map(function (r) {
      return '<tr><td style="padding:4px 16px 4px 0;color:#55697A;vertical-align:top">' + escapeHtml(r[0]) +
        '</td><td style="padding:4px 0">' + escapeHtml(r[1]) + '</td></tr>';
    }).join('') +
    '</table>' +
    '<h3 style="margin:20px 0 6px;font-size:15px">Besoin décrit</h3>' +
    '<p style="margin:0;white-space:pre-wrap">' + escapeHtml(d.message) + '</p>' +
    '<p style="margin:24px 0 0;font-size:13px;color:#55697A">Répondez directement à cet e-mail pour écrire au client.</p></div>';
  return { subject: subject, text: text, html: html };
}

async function sendEmail(d) {
  const key = process.env.RESEND_API_KEY;
  const to = String(process.env.CONTACT_TO_EMAIL || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
  const from = process.env.CONTACT_FROM_EMAIL || 'MITS <onboarding@resend.dev>';
  if (!key || !to.length) throw httpError(503, 'not_configured');
  const mail = buildEmail(d);
  let res;
  try {
    res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: from, to: to, reply_to: d.email, subject: mail.subject, text: mail.text, html: mail.html }),
      signal: AbortSignal.timeout(8000)
    });
  } catch (e) {
    throw httpError(502, 'mail_unreachable');
  }
  if (!res.ok) throw httpError(502, 'mail_rejected_' + res.status);
}

function respond(req, res, status, payload) {
  res.statusCode = status;
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Robots-Tag', 'noindex');
  const wantsJson = /application\/json/.test(String(req.headers.accept || '')) ||
    /application\/json/.test(String(req.headers['content-type'] || ''));
  if (wantsJson) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(payload));
    return;
  }
  // Navigateur sans JavaScript : le formulaire est envoyé nativement, on répond par une petite page.
  const ok = payload.ok;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<title>MITS — Maazaoui IT Services</title></head><body style="font-family:system-ui,sans-serif;max-width:560px;margin:15vh auto;padding:0 24px;line-height:1.6">' +
    (ok
      ? '<h1>Merci — votre demande a bien été envoyée.</h1><p>Thank you — your request has been sent. Réponse sous 24 h.</p>'
      : '<h1>Votre demande n’a pas pu être envoyée.</h1><p>Your request could not be sent. Écrivez directement à maazaouiservices@gmail.com.</p>') +
    '<p><a href="/#contact">← Retour au site / Back to the site</a></p></body></html>');
}

module.exports = async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      throw httpError(405, 'method_not_allowed');
    }
    if (!originAllowed(req)) throw httpError(403, 'forbidden_origin');
    const type = String(req.headers['content-type'] || '').toLowerCase();
    const isJson = type.indexOf('application/json') === 0;
    if (!isJson && type.indexOf('application/x-www-form-urlencoded') !== 0) throw httpError(415, 'unsupported_type');
    if (rateLimited(clientIp(req))) throw httpError(429, 'rate_limited');

    const input = await readBody(req, isJson);
    // Pot de miel : un champ caché que les humains ne voient pas. Les robots le remplissent :
    // on fait semblant d'avoir réussi et on jette le message.
    if (input && typeof input === 'object' && clean(input.website, false)) {
      console.warn('[contact] honeypot triggered');
      return respond(req, res, 200, { ok: true });
    }
    const data = validate(input);
    await sendEmail(data);
    return respond(req, res, 200, { ok: true });
  } catch (e) {
    const status = e.status || 500;
    // On journalise seulement la raison, jamais les données du visiteur.
    if (status >= 500) console.error('[contact]', e.code || e.message);
    const code = status >= 500 ? 'server_error' : (e.code || 'error');
    return respond(req, res, status, { ok: false, error: code });
  }
};
