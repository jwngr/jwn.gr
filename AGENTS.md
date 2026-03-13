# Agents Guide

This repo is the personal website for Jacob Wenger (https://jwn.gr).

## Stack

- Astro
- TypeScript
- ESLint
- Prettier
- Firebase Hosting

## Common Commands

- Install: `npm install`
- Dev server: `npm run start` (http://localhost:4321)
- Lint: `npm run lint`
- Format: `npm run format`
- Build: `npm run build`
- Preview: `npm run preview`
- Utility scripts: `npx tsx scripts/<script>.ts`

## Repo Structure

- `docs/` - Project docs and AI guidance (guides/, plans/, vendors/)
- `src/` - Application code
  - `pages/` - Astro routes (homepage, blog posts, RSS, 404)
  - `components/` - `atoms/`, `home/`, `blog/`, `layout/`
  - `data/posts/` - MDX blog posts (using content collections)
  - `lib/` - Shared types, data constants, utilities
  - `layouts/` - Page layouts
  - `styles/` - Global CSS and custom properties
  - `images/` - Static images organized by section
- `public/` - Static assets
- `scripts/` - Utility scripts
- `astro.config.mjs` - Astro config
- `eslint.config.mjs`, `.prettierrc` - Lint/format config
- `firebase.json` - Firebase Hosting config

## Guides Index

More detailed rules are in `docs/guides/`. Always read the relevant guide(s) before starting work in that area.

- **[architecture.md](docs/guides/architecture.md)** — Content model, routing, layouts, component patterns, styling.
  Consult when: understanding how the site is structured or adding new pages/sections.

- **[codeStyle.md](docs/guides/codeStyle.md)** — Types, naming, imports/exports, errors, comments.
  Consult when: writing or reviewing any code.

- **[astro.md](docs/guides/astro.md)** — Astro pages, components, layouts, data usage.
  Consult when: working with Astro pages, layouts, or components.

- **[commands.md](docs/guides/commands.md)** — Dev/build/format/lint commands.
  Consult when: running or recommending commands.

- **[deploy.md](docs/guides/deploy.md)** — CI/CD and Firebase hosting notes.
  Consult when: understanding or modifying deployment/hosting.

## Agent Notes

- Prefer `npm run <script>` over ad-hoc commands
- Run TypeScript utility scripts in `scripts/` with `npx tsx scripts/<script>.ts`
- Avoid editing `dist/`, `node_modules/`, or `.astro/` directly
- Keep edits minimal and aligned with existing code style
- Check `docs/guides/` for area-specific guidance before making changes
