import { createClient } from '@sanity/client'
import { ProjectItem, ExperienceItem, HeroData, AboutData, ContactData } from '@/data/portfolioData'

// Initialize the Sanity Client. In production, define these environment variables.
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-07-23',
  useCdn: false, // Talk directly to the live API so time-based revalidation (below) reflects real freshness
})

// Revalidate every 60s: Studio edits show up within a minute without needing a redeploy or webhook.
const FETCH_OPTIONS = { next: { revalidate: 60 } }

/**
 * Fetch dynamic projects from Sanity CMS.
 * Queries all documents of type "project" and returns typed project items.
 */
export async function getProjects(): Promise<ProjectItem[]> {
  const query = `*[_type == "project"] {
    title,
    description,
    tech,
    preview,
    repo
  }`
  return await client.fetch(query, {}, FETCH_OPTIONS)
}

/**
 * Fetch dynamic experiences from Sanity CMS.
 * Queries all documents of type "experience", ordered by display order.
 */
export async function getExperiences(): Promise<ExperienceItem[]> {
  const query = `*[_type == "experience"] | order(order asc) {
    title,
    company,
    duration,
    location,
    description,
    tech
  }`
  return await client.fetch(query, {}, FETCH_OPTIONS)
}

/**
 * Fetch the singleton Hero section content from Sanity CMS.
 */
export async function getHero(): Promise<HeroData> {
  const query = `*[_type == "hero"][0]{
    greeting,
    name,
    subtitle,
    description,
    extraSkillLine,
    ctaText,
    stats
  }`
  return await client.fetch(query, {}, FETCH_OPTIONS)
}

/**
 * Fetch the singleton About section content from Sanity CMS.
 */
export async function getAboutContent(): Promise<AboutData> {
  const query = `*[_type == "about"][0]{
    sectionNumber,
    title,
    paragraphs,
    skillsListTitle,
    skills,
    imageSrc,
    imageAlt,
    education,
    certifications
  }`
  return await client.fetch(query, {}, FETCH_OPTIONS)
}

/**
 * Fetch the singleton Contact section content from Sanity CMS.
 */
export async function getContactInfo(): Promise<ContactData> {
  const query = `*[_type == "contact"][0]{
    sectionNumber,
    title,
    subtitle,
    description,
    socials
  }`
  return await client.fetch(query, {}, FETCH_OPTIONS)
}
