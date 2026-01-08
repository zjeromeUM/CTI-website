# Copilot instructions for CTI-website

This repo is a Next.js 15 + React 19 + Tailwind CSS v4 TypeScript template customized under `src/`. Use these guardrails to be productive, precise, and consistent with the existing patterns.

## Architecture quick map
- App Router (Next.js) under `src/app/**`.
  - `layout.tsx` is client-side and wraps pages with `Providers`, `Header`, `Footer`, and `ScrollToTop`.
  - `providers.tsx` sets up `next-themes` ThemeProvider with `attribute="class"`, `defaultTheme="dark"` and system disabled. Theme toggling relies on adding/removing `dark` class on `<html>`.
  - Pages present: `/` (home), `/about`, `/blog`, `/blog-details`, `/blog-sidebar`, `/contact`, `/error`, `/signin`, `/signup`.
  - Each page exports `metadata: Metadata` for title/description.
- Components live in `src/components/**` with feature folders (About, Blog, Brands, Common, Contact, Features, Footer, Header, Hero, Pricing, ScrollToTop, Testimonials, Video).
  - Navigation is driven by `src/components/Header/menuData.tsx` and rendered in `src/components/Header/index.tsx` using `next/navigation` for active path.
  - The theme button is `src/components/Header/ThemeToggler.tsx` using `next-themes`.
- Styling is Tailwind v4 via `src/styles/index.css` (uses `@theme`, `@utility`, `@layer` APIs and a `dark` custom variant). Avoid adding separate Tailwind config files—styles are colocated here.
- Data types are in `src/types/**` and light, e.g. `Feature`, `Blog`, `Menu`, `Testimonial`. Demo content like `Blog/blogData.tsx` and `Brands/brandsData.tsx` are simple arrays.
- Images are in `public/images/**`. `next.config.js` whitelists `cdn.sanity.io` for remote images.

## Conventions and patterns
- Use path alias `@/*` to import from `src/*` (configured in `tsconfig.json`). Example: `import Hero from "@/components/Hero"`.
- All top-level UI in the layout is client-side ("use client"). Prefer server components for pages unless they need state/effects; current pages are simple client-side components with static content and `metadata`.
- Tailwind v4-only features are used (`@theme`, `@custom-variant`, `@utility`). When adding utilities or tokens, extend `src/styles/index.css` not a separate config.
- Dark mode is class-based. Only toggle via `next-themes` and respect `defaultTheme="dark"`. Use `dark:` in classnames or the provided `@custom-variant dark`.
- Header behavior uses runtime window scroll listeners for sticky state. If adding global listeners, clean them up in `useEffect`.
- Blog and other demo lists are static. Keep the shape consistent with `src/types/*` when extending.

## Developer workflows
- Scripts (package.json):
  - `dev`: next dev
  - `build`: next build
  - `start`: next start
  - `lint`: next lint
- Tailwind/PostCSS: `postcss.config.js` loads `@tailwindcss/postcss`; no separate tailwind.config.* file.
- TypeScript: non-strict, `noEmit`, React 19 types. `paths` alias is required for imports; keep it intact when moving files.

## How to add features the "repo way"
- New page/route: create `src/app/<route>/page.tsx`, export `metadata`, and compose existing section components. Use `Breadcrumb` for inner pages where appropriate.
- Navigation: update `src/components/Header/menuData.tsx`. Submenus are supported via a `submenu` array.
- New section/component: create under `src/components/<Feature>/` with an `index.tsx` entry; mirror how `Features`, `Pricing`, etc. are structured and imported on pages.
- Styles/tokens: add design tokens or utilities inside `src/styles/index.css` using `@theme` and `@utility`.
- Images/assets: place under `public/images/...` and reference with absolute paths (e.g., `/images/hero/hero-light.svg`). For external URLs, ensure the host is allowed in `next.config.js`.

## Examples from the codebase
- Page metadata example: see `src/app/page.tsx` and `src/app/about/page.tsx` exporting `export const metadata: Metadata = { title, description }`.
- Data typing: `src/components/Features/featuresData.tsx` imports `Feature` type from `src/types/feature.ts` and exports a typed array.
- Theming: `src/app/providers.tsx` wraps children in `ThemeProvider`; `ThemeToggler.tsx` flips between `dark` and `light`.
- Routing + active link: `Header/index.tsx` uses `usePathname()` to set active styles.

## Gotchas
- Many components are client components and rely on browser APIs; keep "use client" at the top when adding state/effects.
- Sticky header and mobile menu depend on CSS utilities defined in `index.css` (e.g., `sticky`, `header-logo`). Reuse these instead of duplicating styles.
- Tailwind v4 syntax differs from v3. Don’t assume `tailwind.config.js` exists; add tokens/utilities in CSS.
- Image optimization: prefer `next/image` and `fill`/`width`/`height` as used across components; dark/light variants are implemented via conditional CSS classes.

## Run and debug locally (Windows PowerShell)
- Start dev server:
  - `npm run dev`
- Build and preview:
  - `npm run build` then `npm start`
- Lint:
  - `npm run lint`

If something seems off or missing (tests, APIs, CMS, etc.), it likely isn’t part of this free template. Keep additions minimal and consistent with existing modules.
