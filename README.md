# Portfolio Front-End

Sommaire
- [FR](#portfolio-front-end)
- [EN](#frontend-portfolio)

Portfolio personnel construit avec React + Vite.

## Fonctionnalités

- Contenu i18n FR/EN
- Projets avec modale et navigation
- Cartes skills avec interaction d'ouverture
- Formulaire de contact connecté à Google Forms
- Accessibilité et navigation clavier

## Stack technique

- React (Vite)
- SCSS
- Fichiers JSON pour i18n et données

## Démarrage

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Déploiement (GitHub Pages)

- `base` est défini dans `vite.config.js` : `/frontend-portfolio/`.
- Build : `npm run build`
- Publier le dossier `dist/` avec GitHub Pages.

## Structure du projet

- `src/components/sections` — sections de la page
- `src/components/ui` — composants UI réutilisables
- `src/data` — données techniques (projects, categories, social links)
- `src/i18n` — traductions (FR/EN)
- `src/styles` — styles globaux, variables, mixins

## Règles i18n et accessibilité

- Tout texte visible doit venir des fichiers i18n (`src/i18n/fr.json` et `src/i18n/en.json`).
- Cela inclut les textes lus par les lecteurs d'écran : `alt`, `aria-label`, `aria-describedby`, libellés de boutons, labels de formulaires et placeholders.
- Pas de traduction partielle : si une liste existe dans une langue, la même liste existe dans l'autre langue, même pour des termes techniques.
- Exception autorisée uniquement si explicitement validée : noms propres fixes (ex. nom du propriétaire du site).
- Prioriser le HTML sémantique ; n'utiliser ARIA que si le HTML ne suffit pas.
- Ne pas ajouter de `aria-label` sur un élément qui a déjà un texte visible ; si utilisé, il doit correspondre au texte visible.
- Utiliser un `alt` pertinent pour les images informatives.
- Utiliser un `alt` vide (`alt=''`) pour les images décoratives.
- Garder la cohérence des `alt` avec les règles i18n.

## Règles CSS / BEM

- Nommage BEM avec bloc `app__*` et blocs spécifiques aux composants.
- Utiliser du HTML sémantique et ajouter des classes uniquement si nécessaire.
- Éviter le CSS redondant (aucune propriété sans effet).
- Desktop-first, responsive uniquement dans les media queries en fin de fichier.
- Styles de composant dans leur fichier ; styles globaux uniquement dans `src/styles/index.scss`.

---

# Frontend Portfolio

Personal portfolio built with React + Vite.

## Features

- FR/EN i18n content
- Projects with modal navigation
- Skills cards with reveal interaction
- Contact form connected to Google Forms
- Accessibility and keyboard navigation

## Tech Stack

- React (Vite)
- SCSS
- JSON i18n + data files

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

- `base` is set in `vite.config.js`: `/frontend-portfolio/`.
- Build: `npm run build`
- Publish the `dist/` folder with GitHub Pages.

## Project Structure

- `src/components/sections` — page sections
- `src/components/ui` — reusable UI components
- `src/data` — technical data (projects, categories, social links)
- `src/i18n` — translations (FR/EN)
- `src/styles` — global styles, variables, mixins

## I18n And Accessibility Rules

- All user-facing text must come from i18n files (`src/i18n/fr.json` and `src/i18n/en.json`).
- This includes text read by assistive technologies: `alt`, `aria-label`, `aria-describedby`, button labels, form labels, and placeholders.
- No partial translation: if a list exists in one language, the same list exists in the other language, even for technical terms.
- Allowed exception only when explicitly validated: fixed proper names that never change (example: the site owner's name).
- Prefer semantic HTML first; use ARIA only when semantics are not enough.
- Do not add `aria-label` to elements that already have visible text; it must match the visible text if used.
- Use a meaningful `alt` for informative images.
- Use empty `alt` (`alt=''`) for decorative images.
- Keep `alt` content consistent with the i18n rules above.

## CSS / BEM Rules

- BEM naming with block `app__*` and component-specific blocks.
- Use semantic HTML and add classes only when necessary.
- Avoid redundant CSS (no property without effect).
- Desktop-first, responsive rules only inside media queries at file end.
- Keep component styles scoped to their file; global styles only in `src/styles/index.scss`.
