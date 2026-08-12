/**
 * One-time (but idempotent/re-runnable) seed script for the portfolio's
 * Sanity dataset. Populates the singleton `hero`/`about`/`contact` documents
 * plus the `experience`/`project` document lists with the site owner's real
 * resume content.
 *
 * Usage:
 *   node scripts/seed-sanity.mjs
 *
 * Requires a write-capable Sanity API token in `SANITY_WRITE_TOKEN`
 * (Editor role or higher). This is deliberately NOT the `NEXT_PUBLIC_`-prefixed
 * client used by the read-only app (see src/lib/cmsClient.ts) — it's a secret
 * and must never be exposed to the browser.
 *
 * Every document is written with `createOrReplace` against a fixed,
 * deterministic `_id`, so re-running this script updates the same documents
 * in place instead of creating duplicates.
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, '..')

/**
 * Minimal, dependency-free `.env` parser. Reads KEY=VALUE pairs from a
 * dotenv-style file into `process.env` (without overwriting anything
 * already set in the real environment). Skips blank lines and comments.
 */
function loadEnvFile(path) {
  let raw
  try {
    raw = readFileSync(path, 'utf-8')
  } catch {
    return
  }

  for (const line of raw.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue

    const eqIndex = trimmed.indexOf('=')
    if (eqIndex === -1) continue

    const key = trimmed.slice(0, eqIndex).trim()
    let value = trimmed.slice(eqIndex + 1).trim()

    // Strip matching surrounding quotes, if present.
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }

    if (process.env[key] === undefined) {
      process.env[key] = value
    }
  }
}

loadEnvFile(join(rootDir, '.env'))

// --- Safety check: bail out clearly instead of silently no-op'ing/hanging ---
if (!process.env.SANITY_WRITE_TOKEN) {
  console.error(
    '[seed-sanity] ERROR: SANITY_WRITE_TOKEN is not set.\n' +
      '  Add a write-capable (Editor role) Sanity API token to your .env as:\n' +
      '    SANITY_WRITE_TOKEN=...\n' +
      '  This script will not run without it.'
  )
  process.exit(1)
}

const projectId = 'oipme8lr'
const dataset = 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

if (!apiVersion) {
  console.error(
    '[seed-sanity] ERROR: NEXT_PUBLIC_SANITY_API_VERSION is not set in .env.'
  )
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // writes must bypass the CDN
  token: process.env.SANITY_WRITE_TOKEN,
})

// --- Document definitions -------------------------------------------------

const heroDoc = {
  _id: 'singleton-hero',
  _type: 'hero',
  greeting: 'Hi, my name is',
  name: 'Shah Fahad',
  subtitle:
    "I build scalable APIs, distributed services, and production-grade SaaS platforms.",
  description:
    'Backend Software Engineer with 3+ years of experience building scalable APIs, distributed services, and production-grade SaaS applications using Node.js, Express.js, MongoDB, Redis, and RabbitMQ.',
  extraSkillLine:
    'Focusing on distributed systems, caching, and production reliability at scale.',
  ctaText: "Let's Connect",
  stats: [
    { value: '3+', label: 'Years Experience' },
    { value: '5', label: 'SaaS Platforms Scaled' },
    { value: '3', label: 'Companies' },
  ],
}

const aboutDoc = {
  _id: 'singleton-about',
  _type: 'about',
  sectionNumber: '01.',
  title: 'About Me',
  paragraphs: [
    "I'm a Backend Software Engineer with 3+ years of experience building scalable APIs, distributed services, and production-grade SaaS applications using Node.js, Express.js, MongoDB, Redis, and RabbitMQ. I focus on designing high-performance backend architectures, optimizing database operations, and implementing caching and asynchronous processing for business-critical platforms.",
    "My career has progressed from full-stack MERN development at SLF-IT Solutions, where I built internal MIS tools, Python microservices for demand forecasting, and real-time Socket.IO chat systems, to backend-focused work at Preesoft Pvt Ltd, engineering the backend for SkyIQ, an airport management platform, with Google OAuth authentication, role-based access control, and event-driven notification services.",
    "Currently at Codecoy, I scale and maintain five production SaaS platforms, designing distributed RabbitMQ-based workflows for bulk email delivery and asynchronous report processing, optimizing MongoDB aggregation pipelines and Redis caching, and managing Linux-based production infrastructure with Prometheus, Grafana, CI/CD automation, Docker, PM2, and Nginx.",
  ],
  skillsListTitle: "Here are a few technologies I've been working with recently:",
  skills: [
    'JavaScript',
    'TypeScript',
    'Python',
    'Go',
    'Node.js / Express.js',
    'MongoDB (Aggregation Pipelines, Indexing)',
    'Redis',
    'PostgreSQL',
    'RabbitMQ / Event-Driven Architecture',
    'Docker',
    'Nginx',
    'PM2',
    'Prometheus / Grafana',
    'React.js',
    'RESTful APIs / WebSockets (Socket.IO)',
  ],
  imageSrc: '/samurai.svg',
  imageAlt: 'Profile',
  education: [
    {
      _key: 'education-cust-bse',
      degree: 'Bachelor of Software Engineering',
      institution: 'City University of Science & Technology, Peshawar',
      duration: '2020 – 2024',
    },
  ],
  certifications: [
    {
      _key: 'cert-aws-cloud-practitioner',
      title: 'AWS Cloud Practitioner Essentials',
      issuer: 'TBD',
      link: '#',
    },
    {
      _key: 'cert-meta-backend',
      title: 'Meta Back-End Developer',
      issuer: 'TBD',
      link: '#',
    },
    {
      _key: 'cert-ibm-fullstack',
      title: 'IBM Full Stack Software Developer',
      issuer: 'TBD',
      link: '#',
    },
    {
      _key: 'cert-meta-frontend',
      title: 'Meta Front-End Developer',
      issuer: 'TBD',
      link: '#',
    },
  ],
}

const contactDoc = {
  _id: 'singleton-contact',
  _type: 'contact',
  sectionNumber: '04.',
  subtitle: "What's Next?",
  title: 'Get In Touch',
  description:
    "I gladly welcome any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
  socials: [
    {
      _key: 'social-github',
      label: 'GitHub',
      url: 'https://github.com/ShahandFahad',
    },
    {
      _key: 'social-linkedin',
      label: 'LinkedIn',
      url: '#',
    },
  ],
}

const experienceDocs = [
  {
    _id: 'experience-codecoy',
    _type: 'experience',
    company: 'Codecoy',
    title: 'Backend Engineer',
    duration: 'Oct 2025 – Present',
    location: 'Lahore, Pakistan',
    description: [
      'Scaled and maintained five production SaaS platforms by improving backend architecture, infrastructure reliability, and deployment automation across web and mobile applications.',
      'Designed distributed RabbitMQ-based workflows for bulk email delivery and asynchronous report processing, improving system scalability and API responsiveness.',
      'Optimized reporting and dashboard performance through MongoDB aggregation pipelines, indexing strategies, and Redis caching.',
      'Developed RESTful APIs and microservices supporting attendance tracking, workforce management, payroll processing, scheduling, and real-time mobile synchronization.',
      'Implemented production observability, CI/CD automation, and high-availability infrastructure using Prometheus, Grafana, GitHub Actions, Docker, PM2, and Nginx.',
      'Managed Linux-based production environments, including deployments, database migrations, backups, troubleshooting, and operational support.',
    ],
    tech: [
      'Node.js',
      'TypeScript',
      'MongoDB',
      'Redis',
      'RabbitMQ',
      'Docker',
      'PM2',
      'Nginx',
      'Prometheus',
      'Grafana',
      'GitHub Actions',
      'React.js',
      'Flutter APIs',
    ],
    order: 1,
  },
  {
    _id: 'experience-preesoft',
    _type: 'experience',
    company: 'Preesoft Pvt Ltd',
    title: 'Backend Developer',
    duration: 'Jun 2025 – Aug 2025',
    location: 'Lahore, Pakistan',
    description: [
      'Engineered the backend for SkyIQ, an airport management platform, and designed database schemas, validation pipelines, and transactional workflows for large-scale data ingestion and processing.',
      'Implemented Google OAuth authentication and role-based access control (RBAC) across multiple user tiers and protected system resources.',
      'Developed event-driven notification services and automated email workflows for operational alerts and status updates.',
    ],
    tech: [
      'Node.js',
      'TypeScript',
      'Express.js',
      'Prisma',
      'PostgreSQL',
      'Google OAuth',
      'RBAC',
      'Docker',
    ],
    order: 2,
  },
  {
    _id: 'experience-slf-it',
    _type: 'experience',
    company: 'SLF-IT Solutions',
    title: 'MERN Stack Developer',
    duration: 'Jan 2024 - Mar 2025',
    location: 'Peshawar, KPK',
    description: [
      'Designed and deployed full-stack web applications and internal MIS tools using the MERN stack with modular Python microservices (Flask/FastAPI) for demand forecasting and reporting.',
      'Built real-time chat systems using Socket.IO with JWT-secured bidirectional channels and modular event handling (connect, disconnect, private messaging, room management).',
      'Containerized projects with Docker, standardizing dev/prod environment parity and enabling faster onboarding across distributed team workflows.',
    ],
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'TypeScript',
      'Socket.IO',
      'Flask',
      'FastAPI',
      'Docker',
      'MySQL',
      'JWT',
      'Git',
    ],
    order: 3,
  },
]

const projectDocs = [
  {
    _id: 'project-workforce-systems',
    _type: 'project',
    title:
      'SSPlus / Reta TNA / Swift Attend / SwiftOne / Vortex360 — Workforce & Attendance Systems',
    description:
      'Architected and maintained a multi-role workforce management SaaS ecosystem featuring attendance tracking, scheduling, payroll, reporting, mobile synchronization, RabbitMQ-based messaging, Redis caching, MongoDB optimization, CI/CD automation, and highly available PM2/Nginx-backed infrastructure.',
    tech: [
      'Node.js',
      'TypeScript',
      'React.js',
      'MongoDB',
      'Redis',
      'RabbitMQ',
      'Docker',
      'PM2',
      'Nginx',
      'Prometheus',
      'Grafana',
      'GitHub',
    ],
  },
  {
    _id: 'project-media-processing-api',
    _type: 'project',
    title: 'Multi-Threaded Media Processing API',
    description:
      'Built a high-performance media processing API using Node.js Worker Threads to handle CPU-intensive image and video operations without blocking request throughput.',
    tech: ['Node.js', 'TypeScript', 'Express.js', 'Worker Threads'],
  },
  {
    _id: 'project-ignis-chatbot',
    _type: 'project',
    title: 'Ignis - AI Chatbot',
    description:
      'Developed an AI-powered chatbot with OpenAI integration, JWT auth, conversation management, and scalable backend APIs.',
    tech: ['Node.js', 'TypeScript', 'OpenAI API', 'MongoDB', 'Docker'],
  },
  {
    _id: 'project-edrawer-sceco',
    _type: 'project',
    title: 'E-Drawer / SCECO',
    description:
      'Built real-time communication and eCommerce platforms featuring Socket.IO messaging, RBAC, secure APIs, and cloud-based storage integration.',
    tech: ['Next.js', 'Socket.IO', 'MongoDB', 'Firebase', 'JWT'],
  },
]

const allDocs = [heroDoc, aboutDoc, contactDoc, ...experienceDocs, ...projectDocs]

// --- Seed ------------------------------------------------------------------

async function seed() {
  console.log(`[seed-sanity] Seeding ${allDocs.length} documents into "${dataset}" (project ${projectId})...`)

  for (const doc of allDocs) {
    process.stdout.write(`[seed-sanity] createOrReplace ${doc._type} "${doc._id}"... `)
    await client.createOrReplace(doc)
    console.log('done')
  }

  console.log('[seed-sanity] Seed complete.')
}

seed().catch((err) => {
  console.error('[seed-sanity] Seed failed:', err)
  process.exit(1)
})
