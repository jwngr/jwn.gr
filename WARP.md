# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

**Initial setup:**
```bash
npm install
```

**Core development:**
```bash
npm run start    # Start dev server at http://localhost:4321
npm run build    # Type check and build for production  
npm run preview  # Preview production build locally
```

**Code quality:**
```bash
npm run lint     # Run Prettier + ESLint with zero warnings policy
npm run format   # Auto-format all code with Prettier
```

**Maintenance:**
```bash
npm run update-deps  # Update all dependencies to latest versions
```

## Architecture Overview

This is Jacob Wenger's personal website (https://jwn.gr) built with **Astro 5** as a static site generator. The site emphasizes performance, simplicity, and maintainability after migrating from an aging Gatsby 1.x setup.

### Key Architectural Decisions

- **Multi-Page Application (MPA)** approach: Ships minimal JavaScript, delivers static HTML
- **Content Collections**: Type-safe blog post management via Astro's content system
- **Component-based**: Atomic design with reusable `.astro` components
- **TypeScript throughout**: Full type safety across the codebase
- **Firebase Hosting**: Continuous deployment via GitHub Actions

### Directory Structure

```
src/
├── components/           # Reusable UI components
│   ├── atoms/           # Basic building blocks (Text, Spacer, Link, etc.)
│   ├── blog/            # Blog-specific components
│   └── home/            # Homepage sections
├── layouts/             # Page layouts (BlogPostLayout, HomeLayout)
├── pages/               # Astro routing (index, 404, posts/[id], rss.xml)
├── lib/                 # Business logic and utilities
│   ├── posts.ts         # Blog post fetching and filtering
│   ├── projects.ts      # Project data and types
│   ├── types.ts         # TypeScript type definitions
│   └── *.ts             # Other utilities (dates, URLs, etc.)
├── data/posts/          # Blog content as .mdx files
├── images/              # Static images
└── styles/              # Global CSS
```

### Content Management

**Blog posts** are managed through Astro Content Collections:
- Written as `.mdx` files in `src/data/posts/`
- Frontmatter schema defined in `src/content.config.ts`
- Type-safe access via `getCollection('posts')`
- Draft posts filtered out in production builds
- Support for React components within MDX (e.g., newsletter signup)

**Static data** (projects, work history, social links) is defined as TypeScript objects in `src/lib/`, providing compile-time validation and excellent IDE support.

### Component System

The site uses a **atomic design** approach:
- **Atoms**: Basic UI primitives (`Text`, `Spacer`, `Flex`, `Link`)
- **Molecules**: Combined atoms (`BlogPostListItem`, `ProjectListItem`)
- **Organisms**: Full sections (`AboutSection`, `ProjectsSection`)

Most components are `.astro` files for static content, with selective use of React (`.tsx`) for interactivity like the newsletter signup form.

### Styling Strategy

- **CSS Custom Properties** for theming and consistent spacing
- **Component-scoped styles** using Astro's built-in CSS scoping
- **Global styles** for typography and shared utilities
- **Responsive design** with mobile-first approach
- Uses system fonts for performance (no web font loading)

### Build & Deployment

- **GitHub Actions** handle CI/CD:
  - PR previews via Firebase Hosting
  - Automatic production deploys on merge to `master`
  - Lint and build validation on all PRs
- **Astro build** generates optimized static HTML/CSS/JS to `dist/`
- **Type checking** runs before each build via `astro check`

## Development Notes

**Content Collections**: Blog posts use Astro's content collections system. The schema is defined in `src/content.config.ts` and posts live in `src/data/posts/` as `.mdx` files.

**Static Generation**: All pages are statically generated at build time. Dynamic routes like `/posts/[id]` use `getStaticPaths()` to generate pages for each blog post.

**Component Limitations**: `.astro` files don't support multiple exports, so shared components like `Flex` (used by `FlexRow`/`FlexColumn`) must be separate files.

**TypeScript Integration**: The site has comprehensive TypeScript coverage including strict frontmatter validation for blog posts.

**Performance Focus**: The build outputs minimal JavaScript (~few hundred KB total), loads in ~few hundred ms, and achieves near-perfect Lighthouse scores.
