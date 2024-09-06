# Contributing

The website is built using [Astro](https://astro.build/) and
[TypeScript](https://www.typescriptlang.org/).

## Running the site

```bash
$ npm install
$ npm run start
```

The site will be available at [http://localhost:4321](http://localhost:4321). A local network
address for testing on a mobile device will also be shown.

## Continuous integration

A [GitHub action](./workflows/frontend-ci.yml) is configured to run lint and build for every PR.

To lint locally, run `npm run lint`.

## Deploys

GitHub actions are configured for continuous deployment:
* **[PR deploy previews](./workflows/firebase-hosting-pull-request.yml)** - A live preview branch is
  built for every PR
* **[Continuous prod deployments](./workflows/firebase-hosting-merge.yml)** - Changes merged into
  `master` get automatically deployed to prod

To create a production build locally, run `npm run build`. Output will be available in `/dist`
