# Deploy

Deploys are handled by GitHub Actions and Firebase Hosting.

## CI

- PRs run lint, `astro check`, and build.
- PRs get Firebase Hosting preview deploys.

## Production

- Merges to `main` deploy to production.
- Build output lives in `dist/`.
