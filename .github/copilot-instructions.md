# GitHub Copilot Instructions for this repository

## Project overview
- This is a React + Vite frontend site built with Tailwind CSS and motion utilities.
- Primary source lives in `src/`, including `src/components/` and `src/pages/`.
- The repo is a static SPA-style website; there is no backend code in this workspace.

## Local setup and commands
- Install dependencies with `npm install` (the repo uses `package-lock.json`).
- Start development server with `npm run dev`.
- Build production assets with `npm run build`.
- Preview the production build with `npm run preview`.
- Run linting with `npm run lint`.

## Key conventions
- Uses Vite with ESM modules (`type: "module"` in `package.json`).
- Tailwind CSS v4 is configured through `tailwind.config.js`, `postcss.config.mjs`, and `@tailwindcss/vite`.
- ESLint config is in `eslint.config.js`; it applies to `*.js`/`*.jsx` files and ignores `dist`.
- React components are function components in `.jsx` files.
- Styling is applied with Tailwind utility classes directly inside JSX.

## Important files and folders
- `src/App.jsx` — main app structure and page composition.
- `src/components/` — reusable UI sections.
- `src/pages/` — page-level content assets.
- `vite.config.js` — Vite plugin setup for React and Tailwind.
- `tailwind.config.js` — Tailwind theme and plugin config.
- `package.json` — scripts, dependencies, and project type.
- `README.md` — general Vite + React template information and context.

## Guidance for Copilot
- Prefer editing source files under `src/` rather than generated or build output.
- Keep changes consistent with the current component + Tailwind style.
- If a feature request involves routing or pages, note that `react-router-dom` is available.
- Do not add backend assumptions or server-side code; this repo is frontend-only.

## Example prompts
- "Update the hero section in `src/components/Hero.jsx` to include a new CTA and a gradient background."
- "Refactor `Nav.jsx` so the mobile menu animates with `framer-motion`."
- "Add a new page under `src/pages/` and wire it into the app navigation."
- "Improve accessibility for the site navigation and hero button states."
