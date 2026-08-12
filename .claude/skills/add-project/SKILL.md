---
name: add-project
description: This skill should be used when the user asks to "add a project", "add this project to my portfolio", "create a new project entry", or wants a new item added to the Projects section. Adds a properly-shaped entry to portfolioData.ts.
version: 1.0.0
---

# Add Project

Adds a new entry to `portfolioData.projects.list` in `src/data/portfolioData.ts`.

## Required fields (`ProjectItem`)

```typescript
{
  title: string;
  description: string;
  tech: string[];
  preview: string; // live/demo URL
  repo: string;    // source repo URL
}
```

There is no `image` field on `ProjectItem` — the project cards don't render screenshots. Don't invent one unless the user explicitly wants to extend the interface (in which case update `ProjectItem` and every place that maps over `projects.list`).

## Steps

1. Ask for (or use given) values for all five fields above — don't fabricate a description, tech stack, or links.
2. Decide placement in `list`: newest/most-relevant projects should go first, matching the pattern of the existing entries.
3. Add the object to `portfolioData.projects.list` in `src/data/portfolioData.ts`, keeping the existing formatting/quote style.
4. If the user is also using Sanity Studio for content, mention (don't do it silently) that the same project can be added as a document in Studio via the `project` schema (`src/sanity/schemas/project.ts` / `studio/schemaTypes/project.ts`) — that's a separate, optional step, not required for the static site to show it.
5. Run `npx tsc --noEmit` to confirm the addition type-checks (the interface has no optional fields, so a missing key will error).
