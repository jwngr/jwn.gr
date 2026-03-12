# Deploy

Deploys are handled by GitHub Actions and Firebase Hosting.

## CI

- PRs run lint and build.
- PRs get preview deploys.

## Production

- Merges to `main` deploy to production.
- Build output lives in `dist/`.
