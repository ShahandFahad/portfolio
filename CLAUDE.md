# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Turbopack) at localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint (next/core-web-vitals + next/typescript)
```

There is no test suite configured in this repo.

Note: `next.config.ts` sets `eslint.ignoreDuringBuilds: true` and `typescript.ignoreBuildErrors: true`, so `npm run build` will succeed even with lint/type errors. Always run `npm run lint` and `npx tsc --noEmit` manually before considering a change done.

### Sanity Studio (`studio/`)

The `studio/` directory is a separate Sanity Studio app with its own `package.json`/`node_modules` (not a workspace of the root project). `cd studio` before running its scripts (`sanity dev`, `sanity build`, etc.).

## Architecture

This is a Next.js 15 (App Router) single-page portfolio site. The app is one page (`src/app/page.tsx`) that stacks section components: `Header → HeroSection → AboutSection → ExperienceSection → ProjectSection → ContactSection → Footer`.

### v3 rewrite: one live system (legacy generation removed)

The repo is mid-migration (branch `v3.0.0`) from an older JSON/context-driven implementation to a typed-data implementation. The live path — what `page.tsx` actually renders — is `HeroSection`, `AboutSection`, `ExperienceSection`, `ProjectSection`, `ContactSection`, `Header`, `Footer` in `src/components/`. These read from **`src/data/portfolioData.ts`**, a single typed `portfolioData` constant (interfaces: `HeroData`, `AboutData`, `ExperienceItem`/`ExperienceData`, `ProjectItem`/`ProjectsData`, `ContactData`, plus header/footer types). To change site copy, links, skills, jobs, or projects, edit this file.

The prior generation (`Hero.tsx`, `Card.tsx`, `Contact.tsx`, `Projects.tsx`, `Experience.tsx`, `SkillSet.tsx`, `Title.tsx`, `src/context/DataContext.tsx` + `src/provider/DataProvider.tsx` + `src/hooks/useData.tsx`, the old `ThemeContext`/`ThemeProvider`/`useTheme`/`ThemeController` trio, `src/layouts/layouts/{GridLayout,HomeLayout}.tsx`, and `src/data/portfolio.json`) was unused dead code — none of it was imported from `page.tsx` or any live component, and several files had broken relative imports (e.g. `../contexts/DataContext` pointing at a folder that was actually named `context/`, singular). It has been deleted. If you find similarly unreferenced components/hooks/providers in the future, verify with a repo-wide grep before assuming they're load-bearing — this codebase has a history of half-finished migrations leaving orphaned files behind.

### Sanity CMS integration (present but not wired into the live UI)

- `src/lib/cmsClient.ts` sets up a `@sanity/client` instance and exposes `getProjects()` / `getExperiences()`, typed against `ProjectItem`/`ExperienceItem` from `portfolioData.ts`.
- `src/sanity/schemas/{project,experience}.ts` define the corresponding Sanity document schemas; `studio/` is the actual Studio app using them.
- No page currently calls `getProjects`/`getExperiences` — sections still read directly from the static `portfolioData` constant. To move a section to CMS-backed data, fetch via `cmsClient.ts` in `page.tsx` (or convert the relevant section to a server component) and pass the result down instead of importing from `portfolioData.ts`.
- Sanity env vars (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`) live in `.env`.

### Contact form → email flow

`ContactSection`/`ContactForm` (react-hook-form + zod via `@hookform/resolvers`) posts to `src/app/api/contact/route.ts`, a Next.js route handler that validates the body and sends mail through `Resend`, rendering `EmailTemplate.tsx` as the message body. Required env vars: `RESEND_API_KEY`, `TO`, `FROM`.

### UI components

`src/components/ui/` holds shadcn/ui primitives (config in `components.json`: style `new-york`, base color `slate`, no prefix, icon library `lucide`) plus a couple of Aceternity-style effects (`vortex.tsx`, `background-beams-with-collision.tsx`). Path alias `@/*` → `src/*` (see `tsconfig.json`). Styling is Tailwind CSS v4 (`@tailwindcss/postcss`, config in `tailwind.config.ts`); animation is via `framer-motion`/`motion`.

### Theming

Dark mode is handled purely via `next-themes` (used directly inside `src/components/ui/sonner.tsx`); there is no custom theme context/provider/hook layer in the codebase.

## Accessibility conventions (established, follow these for new sections)

- Body text on dark backgrounds should use `text-slate-300` or lighter to keep contrast ≥ 7:1 (WCAG AAA).
- Tab-like UI (e.g. experience list) should use `role="tablist"` / `role="tab"` with `aria-selected`, not implicit divs/buttons alone.
- Interactive elements need visible focus rings, e.g. `focus-visible:ring-2 focus-visible:ring-orange-500`.
