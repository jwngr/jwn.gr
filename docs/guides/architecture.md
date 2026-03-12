# Architecture

Static personal site for Jacob Wenger (https://jwn.gr). Fully pre-rendered at build time with Astro.

## Content & Data

**Blog posts** use Astro Content Collections. MDX files live in `src/data/posts/`. Schema is
defined in `src/content.config.ts`. Drafts are filtered out in production. Fetch helpers live in `src/lib/posts.ts`.

**Work history and projects** are TypeScript constants (`src/lib/workHistory.ts`,
`src/lib/projects.ts`) with enum-based IDs.

**Social links** are defined in `src/lib/social.ts`.

## Pages & Routing

| Route         | File                     | Notes                                                 |
| ------------- | ------------------------ | ----------------------------------------------------- |
| `/`           | `pages/index.astro`      | Homepage — 4 sections: About, Writing, Projects, Work |
| `/posts/[id]` | `pages/posts/[id].astro` | Dynamic blog posts via `getStaticPaths`               |
| `/rss.xml`    | `pages/rss.xml.ts`       | RSS feed from published posts                         |
| `/robots.txt` | `pages/robots.txt.ts`    |                                                       |
| `/404`        | `pages/404.astro`        |                                                       |

URL builders are centralized in `src/lib/urls.ts`.

## Layouts

Layouts are defined in `src/layouts/`.

## Component Patterns

Components follow an **atoms → sections** hierarchy:

- `src/components/atoms/` — Primitive building blocks: `Flex`, `FlexRow`, `FlexColumn`, `Text`,
  `Spacer`, `Link`, `ListItem`, `Divider`, etc.
- `src/components/home/` — Homepage sections (`AboutSection`, `WritingSection`, `ProjectsSection`,
  `WorkSection`).
- `src/components/blog/` — Blog-specific components (`BlogPostList`, `NewsletterSignupForm`).
- `src/components/layout/` — `BaseHead`, `Header`, `Footer`.

**Responsive gaps** — `Flex`/`Spacer` accept `{mobile, desktop}` objects for responsive values,
injected via `define:vars` and toggled with media queries. Mobile breakpoint is ~768px.

**React is only used for** `NewsletterSignupForm` (via `@astrojs/react`). Everything else is Astro.

**`.astro` files don't support multiple exports**, so related components like `Flex`, `FlexRow`, and
`FlexColumn` must be separate files.

## Styling

Global styles in `src/styles/index.css` define CSS custom properties (e.g, `--background`, `--accent`,
`--black-0`) and base typography.

Components use scoped `<style>` blocks with `define:vars` for dynamic CSS custom properties.

## Integrations

- `@astrojs/mdx` — Blog post rendering
- `@astrojs/react` — Newsletter signup form
- `@astrojs/sitemap` — Auto-generated sitemap

## TypeScript

Shared types and enums live in `src/lib/types.ts`.

`astro check` runs before builds to catch type errors early.
