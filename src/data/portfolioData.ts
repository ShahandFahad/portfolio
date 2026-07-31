/**
 * Interface representing an individual Hero stat/metric tile.
 */
export interface HeroStat {
  value: string;
  label: string;
}

/**
 * Interface representing the Hero section data schema.
 */
export interface HeroData {
  greeting: string;
  name: string;
  subtitle: string;
  description: string;
  extraSkillLine: string;
  ctaText: string;
  stats?: HeroStat[];
}

/**
 * Interface representing the About section data schema.
 */
export interface AboutData {
  sectionNumber: string;
  title: string;
  paragraphs: string[];
  skillsListTitle: string;
  skills: string[];
  imageSrc: string;
  imageAlt: string;
  education: EducationItem[];
  certifications: CertificationItem[];
}

/**
 * Interface representing an individual education entry.
 */
export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
}

/**
 * Interface representing an individual certification entry.
 */
export interface CertificationItem {
  title: string;
  issuer?: string;
  link?: string;
}

/**
 * Interface representing an individual work experience item.
 */
export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  tech: string[];
}

/**
 * Interface representing the Experience section data schema.
 */
export interface ExperienceData {
  sectionNumber: string;
  title: string;
  jobs: ExperienceItem[];
}

/**
 * Interface representing an individual project item.
 */
export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  preview?: string;
  repo?: string;
}

/**
 * Interface representing the Projects section data schema.
 */
export interface ProjectsData {
  sectionNumber?: string;
  title: string;
  subtitle: string;
  notice: string;
  list: ProjectItem[];
}

/**
 * Interface representing the Contact section data schema.
 */
export interface ContactData {
  sectionNumber: string;
  title: string;
  subtitle: string;
  description: string;
  socials: SocialLink[];
}

/**
 * Interface representing an individual social/contact link (e.g. GitHub, LinkedIn).
 */
export interface SocialLink {
  label: string;
  url: string;
}

/**
 * Interface representing an individual link in the navigation header.
 */
export interface HeaderLink {
  label: string;
  href: string;
  number?: string;
  alertMsg?: string;
}

/**
 * Interface representing the Header section data schema.
 */
export interface HeaderData {
  logoText: string;
  links: HeaderLink[];
  resumeText: string;
  resumeAlertMsg: string;
  statusText?: string;
}

/**
 * Interface representing the Footer section data schema.
 */
export interface FooterData {
  text: string;
  githubLink: string;
}

/**
 * Aggregate interface representing all data sections of the portfolio.
 */
export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  experience: ExperienceData;
  projects: ProjectsData;
  contact: ContactData;
  header: HeaderData;
  footer: FooterData;
}

export const portfolioData: PortfolioData = {
  hero: {
    greeting: "Hi, my name is",
    name: "Shah Fahad",
    subtitle: "I build scalable backend systems & distributed services.",
    description: "Backend Software Engineer with 3+ years of experience specializing in Node.js, distributed systems (Redis, RabbitMQ), cloud infrastructure, and database optimization.",
    extraSkillLine: "Focusing on system reliability, asynchronous processing, and high-performance APIs.",
    ctaText: "Let's Connect",
    stats: [
      { value: "3+", label: "Years Experience" },
      { value: "5", label: "SaaS Platforms Scaled" },
      { value: "3", label: "Companies" },
    ],
  },
  about: {
    sectionNumber: "01.",
    title: "About Me",
    paragraphs: [
      "Hello! I'm Shah Fahad, a Backend Software Engineer dedicated to designing high-performance backend architectures, optimizing database systems, and building robust, distributed services that solve business-critical needs.",
      "Over the past 3+ years, I have worked across fast-paced environments, scaling SaaS platforms and airport management systems. I specialize in backend engineering using Node.js, Express.js, TypeScript, Python, and Go, while managing cloud infrastructure (Linux, Nginx, Docker, PM2) and ensuring reliability through Grafana and Prometheus monitoring.",
      "I'm passionate about writing clean, maintainable code, implementing message queues (RabbitMQ) for asynchronous processing, and optimizing databases (MongoDB aggregate pipelines, PostgreSQL with Prisma) for maximum efficiency."
    ],
    skillsListTitle: "Here are a few technologies I've been working with recently:",
    skills: [
      "Node.js / Express.js",
      "TypeScript / JavaScript",
      "Go / Python",
      "PostgreSQL / MySQL",
      "MongoDB (Aggregation)",
      "Redis (Caching)",
      "RabbitMQ (Message Queues)",
      "Docker / Linux",
      "Nginx / PM2",
      "Prometheus / Grafana",
      "CI/CD (GitHub Actions)",
      "RESTful APIs / WebSockets"
    ],
    imageSrc: "/samurai.svg",
    imageAlt: "Profile",
    education: [],
    certifications: [],
  },
  experience: {
    sectionNumber: "02.",
    title: "Where Have I Worked",
    jobs: [
      {
        company: "Codecoy",
        title: "Backend Engineer",
        duration: "Oct 2025 – Present",
        location: "Lahore, Pakistan",
        description: [
          "Scaled and maintained 5 production SaaS platforms, improving infrastructure reliability and deployment automation across web/mobile applications.",
          "Designed distributed RabbitMQ workflows for bulk email delivery and asynchronous report processing, improving API responsiveness.",
          "Optimized dashboard performance and reports query speeds through MongoDB aggregation pipelines, indexing, and Redis caching.",
          "Developed RESTful APIs and microservices for payroll processing, workforce tracking, scheduling, and real-time mobile sync.",
          "Established system observability using Prometheus and Grafana, alongside CI/CD pipelines via GitHub Actions, Docker, PM2, and Nginx."
        ],
        tech: ["Node.js", "TypeScript", "MongoDB", "Redis", "RabbitMQ", "Docker", "PM2", "Nginx", "Prometheus", "Grafana", "GitHub Actions"],
      },
      {
        company: "Preesoft Pvt Ltd",
        title: "Backend Developer",
        duration: "Jun 2025 – Aug 2025",
        location: "Lahore, Pakistan",
        description: [
          "Engineered the backend API structure for SkyIQ, an airport management platform handling large-scale operational data ingestion.",
          "Designed database schemas, validation pipelines, and complex transactional workflows.",
          "Implemented secure Google OAuth authentication and hierarchical role-based access control (RBAC) tiers to protect system resources.",
          "Developed event-driven alert triggers and automated notification/email workflows."
        ],
        tech: ["Node.js", "TypeScript", "Express.js", "Prisma", "PostgreSQL", "Google OAuth", "RBAC", "Docker"],
      },
      {
        company: "SLF-IT Solutions",
        title: "MERN Stack Developer",
        duration: "Jan 2024 – Mar 2025",
        location: "Peshawar, KPK",
        description: [
          "Designed and deployed full-stack web applications and internal MIS tools with Flask/FastAPI microservices for demand forecasting.",
          "Built real-time chat systems using Socket.IO with JWT-secured bidirectional channels and custom event handlers.",
          "Containerized applications with Docker to achieve dev/prod parity and streamline onboarding processes."
        ],
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Socket.IO", "Flask", "FastAPI", "Docker", "MySQL", "JWT", "Git"],
      },
    ],
  },
  projects: {
    sectionNumber: "03.",
    title: "Networthy Projects",
    subtitle: "view the projects",
    notice: "*please note that some of the projects are private",
    list: [
      {
        title: "Workforce & Attendance Systems (SSPlus / SwiftOne)",
        description: "Architected and maintained a multi-role workforce management SaaS ecosystem featuring payroll, reporting, mobile sync, RabbitMQ messaging, Redis caching, MongoDB optimization, and PM2/Nginx high-availability infrastructure.",
        tech: ["Node.js", "TypeScript", "React.js", "MongoDB", "Redis", "RabbitMQ", "Docker", "PM2", "Nginx", "Prometheus", "Grafana"],
        preview: "https://github.com/ShahandFahad",
        repo: "https://github.com/ShahandFahad",
      },
      {
        title: "Multi-Threaded Media Processing API",
        description: "Built a high-performance media processing API utilizing Node.js Worker Threads to offload CPU-intensive image resizing and video operations, keeping request throughput non-blocking.",
        tech: ["Node.js", "TypeScript", "Express.js", "Worker Threads"],
        preview: "https://github.com/ShahandFahad/media-processor-worker-api.git",
        repo: "https://github.com/ShahandFahad/media-processor-worker-api.git",
      },
      {
        title: "Ignis - AI Chatbot",
        description: "Developed an AI-powered chatbot with OpenAI integration, JWT authentication, stateful conversation management, and scalable backend APIs.",
        tech: ["Node.js", "TypeScript", "OpenAI API", "MongoDB", "Docker"],
        preview: "https://github.com/ShahandFahad/ignis.git",
        repo: "https://github.com/ShahandFahad/ignis.git",
      },
      {
        title: "E-Drawer / SCECO",
        description: "Developed real-time communication and eCommerce backends utilizing Socket.IO, secure REST APIs, role-based access control, and Firebase media integration.",
        tech: ["Next.js", "Socket.IO", "MongoDB", "Firebase", "JWT"],
        preview: "https://github.com/ShahandFahad",
        repo: "https://github.com/ShahandFahad",
      },
    ],
  },
  contact: {
    sectionNumber: "04.",
    subtitle: "What's Next?",
    title: "Get In Touch",
    description: "I gladly welcome any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
    socials: [
      { label: "GitHub", url: "https://github.com/ShahandFahad" },
      { label: "LinkedIn", url: "#" },
    ],
  },
  header: {
    logoText: "Shah Fahad",
    links: [
      {
        label: "About",
        href: "#about",
        number: "01.",
      },
      {
        label: "Experience",
        href: "#",
        number: "02.",
        alertMsg: "🚧 Under Work 🚀 | Part of v3.0.0 Update! 🔧✨",
      },
      {
        label: "Work",
        href: "#projects",
        number: "03.",
      },
      {
        label: "Contact",
        href: "#contact",
        number: "04.",
      },
    ],
    resumeText: "Resume",
    resumeAlertMsg: "🚧 Under Work 🚀 | Part of v3.0.0 Update! 🔧✨",
    statusText: "Available",
  },
  footer: {
    text: "Designed & Built by Shah Fahad",
    githubLink: "https://github.com/ShahandFahad/portfolio",
  },
};
