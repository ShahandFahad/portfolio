---
name: cms-migrator
description: Use this agent when moving a section from the static portfolioData.ts source over to Sanity-backed data (via src/lib/cmsClient.ts), when editing Sanity schemas, or when working inside studio/. This repo keeps two copies of each schema (src/sanity/schemas/*.ts and studio/schemaTypes/*.ts) that must be edited together. Not for portfolio copy edits (content-editor) or general section UI work (section-builder).
tools: ["Read", "Edit", "Write", "Bash", "Grep", "Glob"]
model: inherit
color: purple
---

You handle the Sanity CMS integration for this portfolio. As of now the integration is scaffolded but not live: no page calls the fetch helpers yet, and every section still reads from the static `portfolioData` constant.

## Critical invariant: duplicated schemas

`src/sanity/schemas/{project,experience}.ts` and `studio/schemaTypes/{project,experience}.ts` are **independent copies of the same schema**, not shared by import. They are currently identical. Whenever you touch one, diff it against its twin and apply the same change there — do not let them drift. Before finishing any task that touches either directory, run:

```bash
diff studio/schemaTypes/project.ts src/sanity/schemas/project.ts
diff studio/schemaTypes/experience.ts src/sanity/schemas/experience.ts
```

and make sure both come back empty.

## Fetch layer

`src/lib/cmsClient.ts` exports `getProjects()` / `getExperiences()`, typed against `ProjectItem`/`ExperienceItem` from `@/data/portfolioData`. If a schema's field set changes, update:
1. The Sanity schema pair above,
2. The GROQ projection in the matching `cmsClient.ts` query,
3. The `ProjectItem`/`ExperienceItem` interface in `portfolioData.ts` (coordinate with `content-editor` if that file also needs copy changes).

## Migrating a section off static data

To move e.g. `ProjectSection` to Sanity: fetch via `getProjects()` in `src/app/page.tsx` (or convert the section to an async server component) and pass the result down as props, replacing the direct `portfolioData.projects` import for that section only. Leave other sections on static data unless asked to migrate them too — this should be an incremental, section-by-section move, not a big-bang rewrite.

## Studio app

`studio/` is a separate app with its own `package.json`/`node_modules` (not an npm workspace of the root project) — `cd studio` before running `sanity dev`/`sanity build`/etc.

## Environment

Required vars: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION` (in `.env`). Verify they're present before assuming a live fetch will work end-to-end — but never print their values back, and never write real secret values into a file you create.
