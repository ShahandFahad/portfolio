---
name: add-experience
description: This skill should be used when the user asks to "add a job", "add work experience", "add an experience entry", or wants a new role added to the Experience section. Adds a properly-shaped entry to portfolioData.ts.
version: 1.0.0
---

# Add Experience

Adds a new entry to `portfolioData.experience.jobs` in `src/data/portfolioData.ts`.

## Required fields (`ExperienceItem`)

```typescript
{
  title: string;       // job title
  company: string;
  duration: string;    // e.g. "Jan 2023 - Present"
  location: string;
  description: string[]; // bullet points
  tech: string[];
}
```

## Steps

1. Ask for (or use given) real values for all fields — title, company, duration, location, description bullets, tech stack. Don't invent achievements.
2. **Placement matters**: `ExperienceSection.tsx` defaults `activeIndex` to `0` and renders `jobs` in array order as tabs — put the most recent role first unless the user says otherwise.
3. Add the object to `portfolioData.experience.jobs` in `src/data/portfolioData.ts`.
4. If the user also maintains this in Sanity Studio, mention that the `experience` schema (`src/sanity/schemas/experience.ts` / `studio/schemaTypes/experience.ts`) additionally has an `order` field for explicit sort order — the local static array has no such field, ordering is purely array position.
5. Run `npx tsc --noEmit` to confirm the addition type-checks.
