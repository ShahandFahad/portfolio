"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CenteredContentWrapper } from "@/layouts/CenteredContentWrapper";
import { TypographyH1 } from "./ui/TypographyH1";
import { TypographyP } from "./ui/TypographyP";
import { StatTile } from "./ui/StatTile";
import { KanjiWatermark } from "./motifs/KanjiWatermark";
import { InkBleedReveal } from "./motifs/InkBleedReveal";
import { HeroData } from "@/data/portfolioData";

/**
 * HeroSection Component — "The Dojo"
 * Content is passed in via the `data` prop (resolved in `page.tsx` from Sanity,
 * falling back to `portfolioData.hero`) to separate the copy/data layer from
 * the UI presentation layer.
 */
export const HeroSection = ({ data: hero }: { data: HeroData }) => {
  const reduceMotion = useReducedMotion();

  return (
    <CenteredContentWrapper>
      <section
        id="hero"
        className="relative flex min-h-screen flex-col justify-center gap-12 overflow-hidden py-24 md:flex-row md:items-center md:gap-10 md:py-16"
      >
        <KanjiWatermark
          glyph="samurai"
          className="absolute -top-16 -right-10 text-[16rem] md:-top-24 md:-right-16 md:text-[28rem]"
        />

        {/*
          One-shot slash reveal on load — not a persistent effect. `initial`
          and the child structure below stay constant regardless of
          `reduceMotion` on purpose: useReducedMotion() resolves synchronously
          on the client but is always null during SSR, so branching the
          initial style or conditionally mounting the blade streak on it
          causes a server/client hydration mismatch. Only `transition`
          (post-hydration timing, never part of the SSR'd markup) varies.
        */}
        <motion.div
          className="relative z-10 flex flex-col gap-5 md:w-3/5"
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          transition={{ duration: reduceMotion ? 0 : 0.85, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-y-6 left-0 z-20 w-[3px] bg-torii-red"
            style={{ transformOrigin: "top" }}
            initial={{ x: 0, scaleY: 0, opacity: 1 }}
            animate={{ x: "110vw", scaleY: 1, opacity: [1, 1, 0] }}
            transition={{ duration: reduceMotion ? 0 : 0.85, ease: [0.65, 0, 0.35, 1] }}
          />

          <p className="font-mono text-sm text-torii-red md:text-base">
            <span aria-hidden="true" className="font-kanji">侍</span> {hero.greeting}
          </p>

          <TypographyH1
            text={hero.name}
            styles="text-left font-display font-bold leading-[1.05] md:text-7xl text-4xl text-foreground"
          />
          <TypographyH1
            text={hero.subtitle}
            styles="text-left font-display text-muted-foreground md:text-4xl text-xl"
          />

          <TypographyP
            text={hero.description}
            styles="md:w-4/5 text-foreground/85 md:text-base text-sm"
          />

          <span className="-mt-2 hidden font-mono text-sm text-muted-foreground md:block md:w-4/5">
            {"// "}
            {hero.extraSkillLine}
          </span>

          {hero.stats && hero.stats.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-6">
              {hero.stats.map((stat, index) => (
                <StatTile key={index} value={stat.value} label={stat.label} delay={index * 0.1} />
              ))}
            </div>
          )}

          <div className="mt-2">
            <Link href="#contact">
              <button className="inline-flex h-12 items-center justify-center rounded-sm border border-torii-red bg-primary px-10 text-sm font-medium tracking-wide text-primary-foreground transition-colors duration-200 hover:bg-torii-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]">
                {hero.ctaText}
              </button>
            </Link>
          </div>
        </motion.div>

        <InkBleedReveal delay={0.3} className="relative z-10 md:w-2/5">
          <figure className="relative">
            <div className="relative aspect-[952/1400] w-full max-w-sm overflow-hidden border border-gold-leaf/40 md:max-w-none">
              <Image
                src="/images/samurai-hero.webp"
                alt="Stylized illustration of a samurai in a conical hat drawing a katana in front of a large red sun"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sumi-ink via-transparent to-transparent" />
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-sumi-ink to-transparent md:block hidden" />
            </div>
          </figure>
        </InkBleedReveal>
      </section>
    </CenteredContentWrapper>
  );
};
