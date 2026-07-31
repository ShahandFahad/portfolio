---
name: sync-sanity-schema
description: This skill should be used when the user asks to "sync the sanity schemas", "check studio schema drift", or after any edit to a file under src/sanity/schemas/ or studio/schemaTypes/. This repo keeps two independent copies of each Sanity schema that must stay identical.
version: 1.0.0
---

# Sync Sanity Schema

`src/sanity/schemas/{project,experience}.ts` and `studio/schemaTypes/{project,experience}.ts` are two separate files defining the same content types — one used by the app's `cmsClient.ts` typings/queries, one used by the actual Sanity Studio app in `studio/`. Nothing imports one from the other; they must be kept manually in sync.

## Steps

1. Diff each pair:
   ```bash
   diff studio/schemaTypes/project.ts src/sanity/schemas/project.ts
   diff studio/schemaTypes/experience.ts src/sanity/schemas/experience.ts
   ```
2. If either diff is non-empty, determine which side has the intended change (usually whichever the user just edited) and apply the identical edit to the other file.
3. If a field was added/removed/renamed, also check `src/lib/cmsClient.ts` — its GROQ query field lists and its `ProjectItem`/`ExperienceItem` return types (imported from `@/data/portfolioData`) need to match the new shape.
4. Re-run the diffs to confirm both pairs are empty before finishing.
