**Frontend Portfolio**

**I18n And Accessibility Rules**

- All user-facing text must come from i18n files (`src/i18n/fr.json` now, `src/i18n/en.json` later).
- This includes text read by assistive technologies: `alt`, `aria-label`, `aria-describedby`, button labels, form labels, and placeholders.
- No partial translation: if a list exists in one language, the same list exists in the other language, even for technical terms.
- Allowed exception only when explicitly validated: fixed proper names that never change (example: the site owner’s name).
- Prefer semantic HTML first; use ARIA only when semantics are not enough.
- Do not add `aria-label` to elements that already have visible text; it must match the visible text if used.
- Use a meaningful `alt` for informative images.
- Use empty `alt` (`alt=''`) for decorative images.
- Keep `alt` content consistent with the i18n rules above.

**Template Notes**
**React + Vite**

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
