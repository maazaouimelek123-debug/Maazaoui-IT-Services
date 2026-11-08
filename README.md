# Portfolio — Melek Maazaoui

Site portfolio statique (HTML/CSS/JS, sans build) : éditorial, trilingue **FR / EN / AR**
(l'arabe s'affiche de droite à gauche),
avec **mode clair et mode sombre** (palette « Méditerranée » bleu roi + bleu clair).
Les 7 projets présentés sont ceux hébergés sur Vercel, plus SINDA Agent :
Garrara International Trading, Eight’In Flour & Coffee, Mister M Coffee, Ejry & Jarry,
Mornaco (tous en ligne, avec lien vers le site), Caisse Tracker et SINDA Agent (en cours).
Chaque carte reprend les couleurs de la marque du client.

## Lancer en local

Aucune installation nécessaire. Au choix :

```bash
npx http-server . -p 5510        # puis http://localhost:5510
# ou simplement double-cliquer index.html
```

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Tout le contenu **en français** (source de vérité) |
| `script.js` | Traductions **anglaises** (objet `EN`) et **arabes** (objet `AR`) + interactions |
| `styles.css` | Design complet (couleurs dans `:root` en haut du fichier) |

## Personnaliser

- **Textes FR** → modifier directement dans `index.html`.
- **Textes EN / AR** → modifier les objets `EN` et `AR` au début de `script.js` (mêmes clés `data-i18n`).
  Toute nouvelle clé doit être ajoutée dans les deux objets.
- **Couleurs** → en haut de `styles.css` : le bloc `:root` contient le mode clair,
  `:root[data-theme="dark"]` le mode sombre.
  `--accent` = bleu roi (boutons, liens), `--sky` / `--sky-text` = bleu clair (accents).
- **Thème** : le site s'ouvre toujours en mode clair ; le bouton soleil/lune passe en
  mode sombre et le choix est mémorisé (`localStorage`, clé `theme`).
- **Statistiques du hero** → chiffres dans la section `hero-stats` de `index.html`.
- **Photo** : le bloc « MM » de la section À propos (`.about-card`) est prévu pour être
  remplacé par une vraie photo de vous — recommandé pour la confiance client.
- **Ajouter un projet** : dupliquer un bloc `<article class="project">` + son
  `<dialog class="case">`, puis ajouter les clés EN et AR correspondantes dans `script.js`.

## À compléter quand vous les aurez

- **Témoignages clients** : la section existe dans `index.html` mais est en commentaire
  (cherchez `TÉMOIGNAGES`). Décommentez-la avec de **vraies** citations uniquement.
- **Liens vers les sites en ligne** : quand un projet « en cours » sera déployé,
  ajoutez un lien public dans son dialog (copiez le bouton `case-link` de Garrara)
  et remplacez le statut « En cours » par la pastille `proj.live` (« En ligne »).
- **Réseaux** (LinkedIn, Instagram, GitHub) dans la section contact si souhaité.
- **Parcours** : ajoutez formation/expériences antérieures dans la `timeline`
  (section À propos) — seuls les éléments vérifiables ont été inclus.
- **Image Open Graph** (`og:image`) pour un bel aperçu lors des partages.

## Déployer (Vercel — comme vos autres projets)

```bash
npx vercel --prod
```

Pas de framework à configurer : c'est un site statique (aucun build).
Fonctionne aussi sur Netlify, GitHub Pages, Cloudflare Pages.

## Logo

Monogramme MITS « Toit avec découpe » : M sombre, T et I bleus (le I traverse le M).

| Fichier | Usage |
|---|---|
| `favicon.svg` | Icône d'onglet (fond bleu roi) |
| `apple-touch-icon.png` | Icône d'écran d'accueil iPhone (180 × 180) |
| `og-image.png` | Image d'aperçu sur WhatsApp, Facebook, LinkedIn (1200 × 630) |
| `assets/logo-mark.svg` | Monogramme seul, pour documents et signatures |

Dans la barre de navigation, le logo est dessiné en SVG directement dans `index.html`
et ses couleurs suivent le thème clair/sombre (classes `.brand-mark` dans `styles.css`).
