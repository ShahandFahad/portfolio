"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Folder, Github, ScrollText, Swords } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { TechChip } from "./ui/TechChip";
import { ProjectItem } from "@/data/portfolioData";

const FALLBACK_LINK = "https://github.com/ShahandFahad";

/**
 * A project rendered as a "Scroll of Mastery" — a compact card that opens
 * into a case-study drawer: Mission (description), Arsenal (tech), Critical
 * Battles (challenges overcome), Live Demo.
 */
export function ScrollCard({ project, index }: { project: ProjectItem; index: number }) {
  const label = `SCROLL_${String(index + 1).padStart(2, "0")}`;
  const preview = project.preview ?? FALLBACK_LINK;
  const repo = project.repo ?? FALLBACK_LINK;

  return (
    <motion.article
      className="flex h-full flex-col border border-border bg-card/40 p-6 backdrop-blur-md transition-colors hover:border-accent/60"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex items-start justify-between">
        <div className="mb-4 flex items-center gap-2">
          <Folder className="h-8 w-8 text-accent" />
          <span className="font-mono text-xs text-muted-foreground">{label}</span>
        </div>
        <div className="mb-4 flex gap-2">
          <Link
            target="_blank"
            href={repo}
            aria-label={`${project.title} — repository`}
            className="rounded p-1 text-foreground/70 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            target="_blank"
            href={preview}
            aria-label={`${project.title} — live preview`}
            className="rounded p-1 text-foreground/70 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ExternalLink className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <h3 className="mb-2 text-xl font-semibold text-foreground">{project.title}</h3>
      <p className="line-clamp-4 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {project.tech.slice(0, 4).map((t, i) => (
          <TechChip key={i} label={t} />
        ))}
        {project.tech.length > 4 && (
          <span className="font-mono text-xs text-muted-foreground">+{project.tech.length - 4} more</span>
        )}
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <button className="mt-5 inline-flex w-fit items-center gap-2 rounded font-mono text-xs tracking-wide text-accent transition-colors hover:text-torii-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <ScrollText className="h-4 w-4" />
            Read the Scroll
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="flex w-full flex-col gap-0 overflow-y-auto border-l border-border bg-background p-0 sm:max-w-md"
        >
          <SheetHeader className="gap-1 border-b border-border">
            <span className="font-mono text-xs text-muted-foreground">{label}</span>
            <SheetTitle className="font-display text-2xl font-bold">{project.title}</SheetTitle>
          </SheetHeader>

          <div className="flex flex-1 flex-col gap-6 p-4">
            <section>
              <h4 className="mb-2 font-mono text-xs tracking-wider text-accent uppercase">Mission</h4>
              <SheetDescription className="text-sm leading-relaxed text-foreground/85">
                {project.description}
              </SheetDescription>
            </section>

            <section>
              <h4 className="mb-2 font-mono text-xs tracking-wider text-accent uppercase">Arsenal</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <TechChip key={i} label={t} />
                ))}
              </div>
            </section>

            {project.challenges && project.challenges.length > 0 && (
              <section>
                <h4 className="mb-2 font-mono text-xs tracking-wider text-torii-red uppercase">Critical Battles</h4>
                <ul className="flex flex-col gap-2.5">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                      <Swords className="mt-0.5 h-3.5 w-3.5 shrink-0 text-torii-red" aria-hidden="true" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <SheetFooter className="flex-row gap-3 border-t border-border">
            <Link
              href={preview}
              target="_blank"
              className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-sm border border-torii-red bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-torii-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Link>
            <Link
              href={repo}
              target="_blank"
              className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-sm border border-border text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Github className="h-4 w-4" />
              Repo
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </motion.article>
  );
}
