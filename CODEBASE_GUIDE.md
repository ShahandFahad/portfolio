# Codebase Architecture & Integration Guide

This guide provides an overview of the design patterns, data flows, and accessibility features implemented in this portfolio application to support future updates and development.

---

## 1. Architectural Overview

The codebase is built on **Next.js 15**, **Tailwind CSS**, and **Framer Motion**. It adheres to a decoupled architecture separating the presentation layer (UI components) from the content layer (copy, details, assets). 

### File Map
* **Data Schema**: [portfolioData.ts](file:///home/archer/Work/Repositries/portfolio/src/data/portfolioData.ts) — Holds all static copy, contact details, experiences, and project lists.
* **Dynamic Client**: [cmsClient.ts](file:///home/archer/Work/Repositries/portfolio/src/lib/cmsClient.ts) — Pre-configured Sanity CMS client to fetch data dynamically.
* **Sanity Schemas**:
  * [project.ts](file:///home/archer/Work/Repositries/portfolio/src/sanity/schemas/project.ts) — Content type representing projects.
  * [experience.ts](file:///home/archer/Work/Repositries/portfolio/src/sanity/schemas/experience.ts) — Content type representing career experiences.

---

## 2. The Data Layer

All display copy is centralized in `src/data/portfolioData.ts` and managed via strongly typed TypeScript interfaces:

```typescript
export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  experience: ExperienceData;
  projects: ProjectsData;
  contact: ContactData;
  header: HeaderData;
  footer: FooterData;
}
```

To update any text, links, or skills list on the portfolio, edit the corresponding sections within the `portfolioData` constant.

---

## 3. UI Component Ingestion

Components import `portfolioData` and bind properties dynamically:

* **Hero Section**: Loaded dynamically from `portfolioData.hero` to display name, subtitles, and CTA.
* **About Section**: Dynamically maps through descriptions, paragraphs, and list technologies.
* **Experience Tabs**: Operates on `portfolioData.experience.jobs`. It implements an active job index state to toggle job listings without hardcoded indices.
* **Projects Grid**: maps over `portfolioData.projects.list` using a responsive, animated card layout.

---

## 4. Accessibility (WCAG AAA) & Visual Polish

* **Contrast Ratios**: All primary text, tag list containers, and description elements use `text-slate-300` on dark backgrounds. This maintains a contrast ratio above **7:1**, achieving WCAG AAA compliance.
* **Keyboard Navigation**:
  * The tabs list in the experience section implements a semantic `<div role="tablist">` with `<button role="tab">` triggers, exposing `aria-selected` status and keyboard support.
  * Interactive elements feature high-visibility outline rings (`focus-visible:ring-2 focus-visible:ring-orange-500`) to guarantee focus tracking.
* **Micro-interactions**: Project cards leverage Framer Motion’s `whileHover={{ y: -6, scale: 1.02 }}` properties. This uses GPU-accelerated transforms for smooth 60fps animations.

---

## 5. Transitioning to Headless CMS (Sanity)

When you are ready to transition from local file-based data to dynamic backend database updates:

1. **Install Client Dependencies**:
   ```bash
   npm install @sanity/client
   ```
2. **Configure Environment Variables**:
   Define `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in your `.env` file.
3. **Refactor Ingestion**:
   In your page router (e.g., `src/app/page.tsx`), replace local imports from `portfolioData.ts` with async fetches from [cmsClient.ts](file:///home/archer/Work/Repositries/portfolio/src/lib/cmsClient.ts):
   ```typescript
   import { getProjects, getExperiences } from '@/lib/cmsClient'
   
   // Fetch dynamic content
   const projects = await getProjects();
   const experiences = await getExperiences();
   ```
