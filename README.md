# Eli Studio — Portfolio Website

A Next.js portfolio/studio website built with the Next.js `app` router and TypeScript. This repository contains the source for a small studio/portfolio site, including reusable components, modular sections, and content-driven pages for projects and articles.

## Key Features

- App router-based Next.js project (React 19 / Next 16+)
- TypeScript support and ESLint configuration
- Tailwind / PostCSS utility-based styling (project includes `tailwindcss` and `@tailwindcss/postcss`)
- Framer Motion for animations and `lucide-react` for icons
- Organized `sections` and `components` directories for composable UI

## Tech Stack

- Next.js 16.x
- React 19.x
- TypeScript
- Tailwind CSS + PostCSS
- Framer Motion, Lucide icons

Exact dependencies are listed in `package.json`.

## Quickstart

Prerequisites:

- Node.js (v18+ recommended)
- npm (or yarn / pnpm)

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Available npm scripts (from `package.json`):

- `dev` — starts the Next.js development server (`next dev`)
- `build` — builds the app for production (`next build`)
- `start` — runs the production server (`next start`)
- `lint` — runs ESLint

Open http://localhost:3000 in your browser after `npm run dev`.

## Project Structure

Top-level layout (important folders and files):

- `app/` — Next.js app routes and layouts using the app router
  - `globals.css`, root `layout.tsx`
  - `(pages)/` — content routes organized for root and studio sections
- `components/` — reusable React components (headers, footers, forms)
- `sections/` — page-specific sections such as `hero`, `projects`, and `articles`
- `data/` — static data files and helpers
- `public/` — static assets
- `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`

Example important files:

- Project entry: `app/layout.tsx` and `app/page.tsx`
- Studio pages: `app/(studio)/articles`, `app/(studio)/contact`
- Project pages: `app/(pages)/(root)/projects/[slug]/page.tsx`

## Conventions & Patterns

- The project uses the Next.js app router conventions (nested layouts with the `app/` directory).
- Components are small and composable; major page sections live in `sections/` grouped by feature area.
- Route groups are used for visual/functional separation (folders like `(pages)` and `(studio)`).

## Development Notes

- Styling: Tailwind utilities configured via `postcss.config.mjs`. If you change Tailwind config, restart the dev server.
- Fonts: Custom fonts are loaded from `app` using Next.js font optimizations if configured.
- Linting: Run `npm run lint` to check code quality.

## Testing & Build

Build for production:

```bash
npm run build
```

Serve the production build locally:

```bash
npm run start
```

If you add server-only code or environment-specific configuration, ensure `.env` files are documented and not checked into source control.

## Deployment

Recommended: Vercel — seamless Next.js support. Connect the repository and use the default build command (`npm run build`) and output settings.

Other hosts (Netlify, Render) can also host Next.js apps but may require adapter or configuration changes.

## Contributing

- Fork the repo, create a feature branch, and open a PR with a descriptive title.
- Keep changes focused and add notes to the PR describing intent and testing steps.

## Troubleshooting

- Dev server issues: delete `.next` and restart `npm run dev`.
- Lint errors: run `npm run lint` and follow ESLint suggestions.

## Where to look in the code

- Header and navigation: `app/components/Header.tsx` and `components/WhiteHeader.tsx`
- Contact form: `components/ContactForm.tsx`
- Project pages + templates: `sections/(projects)` and `app/(pages)/(root)/projects`
- Article templates: `sections/(articles)` and `app/(studio)/articles`

## License

This repository does not include a license file. Add a `LICENSE` if you want to open-source the project.

---

If you want, I can also:

- Add a short `CONTRIBUTING.md` template
- Add CI config for linting and build on push
- Create a minimal `README` badge section for dependencies and build status

Last updated: replace this line if you regenerate the README.
