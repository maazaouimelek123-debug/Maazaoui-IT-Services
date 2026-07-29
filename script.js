/* ============================================================
   Melek Maazaoui — Portfolio
   Interactions : i18n FR/EN, nav, reveals, dialogs, contact
   ============================================================ */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============ i18n ============
     Le HTML contient le texte français (source de vérité).
     Le dictionnaire ci-dessous contient la version anglaise.
     Le français est capturé depuis le DOM au chargement. */

  var EN = {
    'a11y.skip': 'Skip to content',
    'nav.projects': 'Work',
    'nav.services': 'Services',
    'nav.method': 'Process',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': "Let's talk",
    'hero.badge': 'Available for new projects',
    'hero.title': 'Websites that make <em>customers walk in</em>.',
    'hero.lede': "I'm Melek Maazaoui, a freelance web developer based in Tunis. I design showcase websites, online ordering and business tools that give cafés, restaurants and local businesses the image they deserve.",
    'hero.cta1': 'See my work',
    'hero.cta2': 'Get in touch',
    'hero.stat1': 'Projects built',
    'hero.stat2': 'Custom-built, no templates',
    'hero.stat3': 'Response time',
    'mq.1': 'Showcase websites',
    'mq.2': 'QR digital menus',
    'mq.3': 'Web applications',
    'mq.4': 'Custom design',
    'mq.5': 'WhatsApp booking',
    'mq.6': 'Deployment &amp; support',
    'mq.7': 'AI tools',
    'sec.projects.kicker': 'Selected work',
    'sec.projects.title': 'Real work, for <em>real clients</em>.',
    'sec.projects.sub': "Every project starts from the client's identity — their colours, their menu, their atmosphere — and turns it into an online experience.",
    'proj.view': 'View project',
    'case.visit': 'Visit the live site',
    'case.wip': 'Coming soon',
    'p.bisou.type': 'Website + online ordering',
    'p.bisou.live': 'Live',
    'p.bisou.desc': 'Much more than a showcase: table ordering by QR code, a cart, and real-time order tracking.',
    'p.mornaco.type': 'Showcase website',
    'p.mornaco.desc': "The printed menu's identity — turquoise, cream, neon violet — turned into a one-page site carrying the full menu: 11 categories, ~200 items.",
    'p.tarkan.type': 'Restaurant website',
    'p.tarkan.desc': "Four pages, a photo gallery and WhatsApp booking for the first Turkish restaurant in Tunis' southern suburbs.",
    'p.porche.type': 'Fine pâtisserie website',
    'p.porche.status': 'In progress',
    'p.porche.desc': 'Cream, black and gold for a fine pâtisserie in Ennasr — signature Cubissimo collection and online ordering included.',
    'p.ps5.type': 'Desktop &amp; mobile application',
    'p.ps5.status': 'In progress',
    'p.ps5.desc': "Managing a gaming café's PS5 stations and billiard tables: timers, slice-based billing, printable receipts, mobile access.",
    'p.douane.type': 'Management software · AI',
    'p.douane.status': 'In progress',
    'p.douane.desc': 'Complete software for a customs brokerage office, assisted by 10 AI agents — AI drafts, the licensed broker validates.',
    'p.caisse.type': 'Management application',
    'p.caisse.status': 'In progress',
    'p.caisse.desc': 'Tracking cash handed to field agents and its justification by invoice, per-company budgets and automatic reminders.',
    'p.ejrijarri.type': 'E-commerce website',
    'p.ejrijarri.desc': 'A Tunisian football card game: 330 cards, online shop and cash-on-delivery anywhere in Tunisia.',
    'p.misterm.type': 'Website + online ordering',
    'p.misterm.desc': 'Tea room and restaurant in Mornag: full menu, cart, real-time order tracking and a staff area.',
    'sec.services.kicker': 'Services',
    'sec.services.title': 'What I can <em>build for you</em>.',
    's1.title': 'Showcase website',
    's1.desc': 'A fast, elegant site true to your identity, designed to convince in seconds.',
    's1.i1': 'Custom design',
    's1.i2': 'Mobile &amp; tablet ready',
    's1.i3': 'Basic local SEO',
    's2.title': 'Digital menu &amp; QR',
    's2.desc': 'Your menu one scan away, editable in real time — no more reprints.',
    's2.i1': 'QR code on the table',
    's2.i2': 'Simple admin panel',
    's2.i3': 'Ordering cart',
    's3.title': 'Apps &amp; business tools',
    's3.desc': 'Tools that fit the way you actually work: management, billing, AI assistants.',
    's3.i1': 'Web, desktop or Android',
    's3.i2': 'Real-time data',
    's3.i3': 'Fully custom',
    's4.title': 'Launch &amp; follow-up',
    's4.desc': 'I handle everything: hosting, domain name — and I stay available after delivery.',
    's4.i1': 'Deployment (Vercel)',
    's4.i2': 'Domain name',
    's4.i3': 'Post-delivery support',
    'sec.method.kicker': 'Process',
    'sec.method.title': 'Simple, clear, <em>no surprises</em>.',
    'm1.title': 'Discovery',
    'm1.desc': 'We talk about your business, your customers and what the site needs to achieve.',
    'm2.title': 'Proposal',
    'm2.desc': 'You receive a mockup and a clear quote, with a precise scope and timeline.',
    'm3.title': 'Build',
    'm3.desc': 'I build the site while you follow the progress — your feedback is folded in as we go.',
    'm4.title': 'Launch',
    'm4.desc': 'Going live, final checks — and I stay around for what comes next.',
    'sec.about.kicker': 'About',
    'sec.about.title': 'Behind the code, <em>an obsession with detail</em>.',
    'about.role': 'Web developer — Tunis',
    'about.p1': "I'm a freelance web developer based in Tunis, working with cafés, restaurants and businesses that want to exist online beyond a simple Facebook page.",
    'about.p2': 'My approach: start from your real identity — your menu, your colours, your atmosphere — and translate it into a website your customers actually want to open. Every project is built by hand, no templates.',
    'about.stack.label': 'Tools &amp; technologies',
    'about.langs.label': 'Languages',
    'about.lang1': 'Arabic',
    'about.lang2': 'French',
    'about.lang3': 'English',
    'tl1.title': 'Freelance — websites &amp; online ordering for hospitality',
    'tl1.desc': 'BISOU (live), Le Porche, Mornaco, Tarkan: showcase sites, full menus and table ordering for Tunisian venues.',
    'tl2.title': 'Business tools &amp; AI',
    'tl2.desc': 'PS5 Manager (gaming café, desktop + mobile) and Douane Manager, customs management software assisted by 10 AI agents.',
    'sec.contact.kicker': 'Contact',
    'contact.title': 'Have a project in mind? <em>Let’s talk.</em>',
    'contact.sub': 'Tell me about your business in a few lines — I reply within 24 hours with first ideas.',
    'contact.copy': 'Copy email',
    'contact.time': 'Local time',
    'contact.avail': 'Available for new projects',
    'footer.credit': 'designed &amp; built by hand',
    'footer.top': 'Back to top',
    'case.context': 'Context',
    'case.work': 'What I did',
    'case.stack': 'Stack',
    'd.bisou.ctx': 'The BISOU café wanted more than a showcase site: letting customers order from their table and follow their order live.',
    'd.bisou.w1': 'Menu by category with a floating cart and checkout, order confirmation by scanning a QR code at the table.',
    'd.bisou.w2': 'Real-time order tracking (pending → preparing → ready → served) and an admin panel for the staff.',
    'd.bisou.w3': 'In production on Vercel with Supabase — every update deploys automatically.',
    'd.mornaco.ctx': 'MORNACO had a strong visual identity on its printed menu — turquoise, cream, neon violet — but no online presence at all.',
    'd.mornaco.w1': "One-page site faithfully carrying over the printed menu's identity, down to the neon sign recreated in CSS.",
    'd.mornaco.w2': 'Complete menu — 11 categories, around 200 items — with tabs, every price editable from a single file.',
    'd.mornaco.w3': "Integration of the venue's real photos, optimised for mobile and performance.",
    'd.tarkan.ctx': "The first Turkish restaurant in Tunis' southern suburbs, highly rated — but without any website.",
    'd.tarkan.w1': 'Four-page site: home, tabbed menu, lightbox gallery, contact with WhatsApp booking.',
    'd.tarkan.w2': 'Terracotta and gold palette inspired by charcoal cooking, with a custom-drawn Ottoman motif.',
    'd.tarkan.w3': 'Scroll animations that respect reduced-motion preferences.',
    'd.porche.ctx': 'Le Porche, a fine pâtisserie and café lounge in Ennasr (Ariana), needed an online presence matching its high-end positioning.',
    'd.porche.w1': 'A strict cream, black and gold identity with elegant typography — luxury through restraint.',
    'd.porche.w2': 'A menu of 49 creations across 8 categories, including the signature Cubissimo collection and specialty coffee options.',
    'd.porche.w3': "Full online ordering (cart, checkout, tracking) reusing BISOU's proven system.",
    'd.ps5.ctx': 'A gaming café needed to manage its PS5 stations and billiard tables — FIFA/EA FC sessions, play time, billing — with no suitable software on the market.',
    'd.ps5.w1': 'Real-time timers per station, slice-based billing with editable rates, prorated billiards, history and CSV export.',
    'd.ps5.w2': 'Automatic FIFA/EA FC match detection through the PSN API, printable receipts (80 mm thermal), 100% local data (SQLite).',
    'd.ps5.w3': "Windows desktop app (Electron) + mobile access over the café's WiFi: installable PWA and Android APK.",
    'd.douane.ctx': 'A customs brokerage office was managing files, declarations and invoicing by hand — a slow, error-prone process.',
    'd.douane.w1': 'Complete software: an 11-step file pipeline, client management, invoicing with VAT and fee schedule, legal archiving.',
    'd.douane.w2': '10 specialised AI agents (document extraction, HS classification, duty calculation, declaration drafting…) — AI drafts, the licensed broker always validates.',
    'd.douane.w3': '100% French interface, full demo mode without an API key, complete data backup and restore.',
    'd.caisse.ctx': 'A company was handing cash to its field agents with no reliable way to track amounts justified by invoice.',
    'd.caisse.w1': 'Per-agent tracking of cash handed out and supporting invoices, with expense categories and an instant visual status.',
    'd.caisse.w2': 'Per-company cash budget with automatic countdown and overspend warnings, history and summary.',
    'd.caisse.w3': 'PIN-protected access, automatic SMS reminders to agents, installable app (PWA).',
    'd.ejrijarri.ctx': 'A physical card game built around Tunisian football needed an online shop to sell nationwide.',
    'd.ejrijarri.w1': "Showcase and shop: the game presented at a glance (330 cards, 12 categories, 7 special cards) with the rules front and centre.",
    'd.ejrijarri.w2': 'Online ordering with cash on delivery, shipping anywhere in Tunisia.',
    'd.ejrijarri.w3': 'Festive design in football colours, built to convince in seconds on mobile.',
    'd.misterm.ctx': 'Mister M, a tea room and restaurant in Mornag, wanted its full menu online and smooth ordering from the table.',
    'd.misterm.w1': 'Full menu across 9 categories — coffee, ice treats, mojitos, pastries, crêpes, restaurant and shisha — with cart and online ordering.',
    'd.misterm.w2': 'Real-time order tracking (received → preparing → ready → served) and a dedicated staff area.',
    'd.misterm.w3': 'Black, gold and cream identity, designed for a warm room with a family corner and a big screen.'
  };

  var META = {
    fr: {
      title: 'Melek Maazaoui — Développeur web freelance à Tunis',
      desc: 'Sites vitrines, menus digitaux QR et outils métier pour cafés, restaurants et commerces. Développeur web freelance basé à Tunis — projets sur-mesure, sans template.',
      langBtn: 'EN',
      langBtnLabel: 'Switch to English',
      menuLabel: 'Ouvrir le menu',
      closeLabel: 'Fermer',
      copied: 'Copié !'
    },
    en: {
      title: 'Melek Maazaoui — Freelance web developer in Tunis',
      desc: 'Showcase websites, QR digital menus and business tools for cafés, restaurants and local businesses. Freelance web developer based in Tunis — custom work, no templates.',
      langBtn: 'FR',
      langBtnLabel: 'Passer en français',
      menuLabel: 'Open menu',
      closeLabel: 'Close',
      copied: 'Copied!'
    }
  };

  var FR = {};
  var i18nNodes = document.querySelectorAll('[data-i18n]');
  i18nNodes.forEach(function (el) {
    var k = el.getAttribute('data-i18n');
    if (!(k in FR)) FR[k] = el.innerHTML;
  });

  var currentLang = 'fr';
  var langBtn = document.getElementById('lang-toggle');
  var menuBtn = document.getElementById('menu-toggle');
  var metaDesc = document.querySelector('meta[name="description"]');

  function setLang(lang) {
    var dict = lang === 'en' ? EN : FR;
    i18nNodes.forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v != null) el.innerHTML = v;
    });
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    if (metaDesc) metaDesc.setAttribute('content', META[lang].desc);
    langBtn.textContent = META[lang].langBtn;
    langBtn.setAttribute('aria-label', META[lang].langBtnLabel);
    menuBtn.setAttribute('aria-label', META[lang].menuLabel);
    document.querySelectorAll('.case-close').forEach(function (btn) {
      btn.setAttribute('aria-label', META[lang].closeLabel);
    });
    currentLang = lang;
    try { localStorage.setItem('lang', lang); } catch (e) { /* stockage indisponible */ }
    updateClock();
  }

  var storedLang = null;
  try { storedLang = localStorage.getItem('lang'); } catch (e) { /* stockage indisponible */ }
  var initialLang = storedLang || ((navigator.language || 'fr').toLowerCase().indexOf('fr') === 0 ? 'fr' : 'en');
  if (initialLang === 'en') setLang('en');

  langBtn.addEventListener('click', function () {
    setLang(currentLang === 'fr' ? 'en' : 'fr');
  });

  /* ============ Header on scroll ============ */
  var header = document.querySelector('.site-header');
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ============ Mobile menu ============ */
  var mobileMenu = document.getElementById('mobile-menu');

  function toggleMenu(open) {
    var isOpen = typeof open === 'boolean' ? open : mobileMenu.hidden;
    mobileMenu.hidden = !isOpen;
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('no-scroll', isOpen);
  }

  menuBtn.addEventListener('click', function () { toggleMenu(); });
  mobileMenu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { toggleMenu(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !mobileMenu.hidden) toggleMenu(false);
  });

  /* ============ Scroll spy ============ */
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  var sections = [];
  navLinks.forEach(function (a) {
    var sec = document.querySelector(a.getAttribute('href'));
    if (sec) sections.push({ link: a, sec: sec });
  });
  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        sections.forEach(function (s) {
          s.link.setAttribute('aria-current', String(s.sec === entry.target));
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { spy.observe(s.sec); });
  }

  /* ============ Reveal on scroll ============ */
  var reveals = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var ro = new IntersectionObserver(function (entries) {
      var i = 0;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.style.setProperty('--reveal-delay', Math.min(i * 70, 280) + 'ms');
        entry.target.classList.add('in');
        ro.unobserve(entry.target);
        i++;
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    reveals.forEach(function (el) { ro.observe(el); });

    /* Filet de sécurité : si l'observer ne s'est jamais déclenché
       (webview qui ne rend pas, etc.), on affiche tout. */
    var revealFailsafe = function () {
      setTimeout(function () {
        if (document.visibilityState !== 'visible') return;
        if (!document.querySelector('.reveal.in')) {
          reveals.forEach(function (el) { el.classList.add('in'); });
        }
      }, 800);
    };
    revealFailsafe();
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') revealFailsafe();
    });
  }

  /* ============ Compteurs ============ */
  var counters = document.querySelectorAll('[data-count]');
  function runCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (reduceMotion) { el.textContent = target; return; }
    var start = null;
    var dur = 1100;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ('IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        runCounter(entry.target);
        co.unobserve(entry.target);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { co.observe(el); });
  } else {
    counters.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
  }

  /* ============ Dialogs études de cas ============ */
  document.querySelectorAll('[data-dialog]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var dlg = document.getElementById(btn.getAttribute('data-dialog'));
      if (!dlg) return;
      if (typeof dlg.showModal === 'function') {
        dlg.showModal();
        document.body.classList.add('no-scroll');
      }
    });
  });
  document.querySelectorAll('dialog.case').forEach(function (dlg) {
    dlg.querySelector('.case-close').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) {
      if (e.target === dlg) dlg.close();
    });
    dlg.addEventListener('close', function () {
      document.body.classList.remove('no-scroll');
    });
  });

  /* ============ Copier l'email ============ */
  var copyBtn = document.getElementById('copy-email');
  if (copyBtn) {
    var copyLabel = copyBtn.querySelector('[data-i18n]');
    var icCopy = copyBtn.querySelector('.ic-copy');
    var icCheck = copyBtn.querySelector('.ic-check');
    var copyTimer = null;

    function showCopied() {
      copyLabel.textContent = META[currentLang].copied;
      icCopy.hidden = true;
      icCheck.hidden = false;
      clearTimeout(copyTimer);
      copyTimer = setTimeout(function () {
        copyLabel.innerHTML = (currentLang === 'en' ? EN : FR)['contact.copy'];
        icCopy.hidden = false;
        icCheck.hidden = true;
      }, 2000);
    }

    copyBtn.addEventListener('click', function () {
      var email = copyBtn.getAttribute('data-email');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(showCopied, function () { fallbackCopy(email); });
      } else {
        fallbackCopy(email);
      }
    });

    function fallbackCopy(text) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); showCopied(); } catch (e) { /* copie impossible */ }
      document.body.removeChild(ta);
    }
  }

  /* ============ Heure locale (Tunis) ============ */
  var timeEl = document.getElementById('local-time');
  function updateClock() {
    if (!timeEl) return;
    try {
      timeEl.textContent = new Intl.DateTimeFormat(currentLang === 'fr' ? 'fr-FR' : 'en-GB', {
        timeZone: 'Africa/Tunis',
        hour: '2-digit',
        minute: '2-digit'
      }).format(new Date());
    } catch (e) {
      timeEl.textContent = new Date().toLocaleTimeString().slice(0, 5);
    }
  }
  updateClock();
  setInterval(updateClock, 30000);

  /* ============ Année ============ */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
