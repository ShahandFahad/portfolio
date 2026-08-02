"use client";

import { CenteredContentWrapper } from "@/layouts/CenteredContentWrapper";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { TypographyH2 } from "./ui/TypographyH2";
import { TypographyP } from "./ui/TypographyP";
import { TechChip } from "./ui/TechChip";
import { KanjiWatermark } from "./motifs/KanjiWatermark";
import { ScrollFrame } from "./motifs/ScrollFrame";
import { SendHorizonal, Calendar, MapPin } from "lucide-react";
import { ExperienceData } from "@/data/portfolioData";

/**
 * ExperienceSection Component — "Honor-Code Timeline"
 * A tabbed work-history view, mounted in the same scroll chrome as the
 * About-section artwork. Content is passed in via the `data` prop
 * (resolved in `page.tsx` from Sanity, falling back to `portfolioData.experience`).
 */
export const ExperienceSection = ({ data: experience }: { data: ExperienceData }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const content = experience.jobs[activeIndex] || experience.jobs[0];
    const reduceMotion = useReducedMotion();
    const panelId = `experience-panel-${activeIndex}`;
    const tabId = `experience-tab-${activeIndex}`;

    return (
        <CenteredContentWrapper>
            <section id="experience" className="relative min-h-screen backdrop-blur-sm py-5 lg:py-20 pb-20 container mx-auto px-4 md:px-0 overflow-hidden">

                <KanjiWatermark
                    glyph="craft"
                    className="absolute -top-10 -right-6 text-[12rem] md:-top-16 md:-right-10 md:text-[20rem]"
                />

                <div className="relative">
                    <div className="py-3 flex items-center after:flex-1 after:border-t after:border-border md:after:ms-6 after:ms-4">
                        <span className="block font-mono text-accent text-left text-2xl" >
                            {experience.sectionNumber}{" "}
                            <TypographyH2 text={experience.title} styles="inline text-foreground text-left" />
                        </span>
                    </div>

                    <ScrollFrame className="mt-6">
                        <div className="flex md:flex-row flex-col">

                            <div
                                className="flex overflow-x-auto border-b border-border bg-muted/40 md:w-64 md:flex-none md:flex-col md:overflow-x-visible md:border-r md:border-b-0 md:py-2"
                                role="tablist"
                                aria-label="Work Experience Tabs"
                                aria-orientation="vertical"
                            >
                                {experience.jobs.map((job, index) => (
                                    <button
                                        key={index}
                                        id={`experience-tab-${index}`}
                                        role="tab"
                                        aria-selected={activeIndex === index}
                                        aria-controls={`experience-panel-${index}`}
                                        tabIndex={activeIndex === index ? 0 : -1}
                                        className={`group relative flex shrink-0 items-baseline gap-2 whitespace-nowrap px-4 py-5 text-left transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:shrink ${
                                            activeIndex === index ? "bg-muted" : "hover:bg-muted/50"
                                        }`}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        {activeIndex === index && (
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-y-0 left-0 w-[3px] bg-primary"
                                                style={{ clipPath: "polygon(0 6px, 100% 0, 100% 100%, 0 calc(100% - 6px))" }}
                                            />
                                        )}
                                        <span className={`font-mono text-xs ${activeIndex === index ? "text-primary" : "text-muted-foreground/60"}`}>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span className="flex flex-col gap-0.5">
                                            <span className={`font-display text-sm ${activeIndex === index ? "text-accent font-semibold" : "text-muted-foreground group-hover:text-foreground"}`}>
                                                {job.company}
                                            </span>
                                            <span className="font-mono text-[11px] text-muted-foreground/70">{job.duration}</span>
                                        </span>
                                    </button>
                                ))}
                            </div>

                            {content && (
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        id={panelId}
                                        role="tabpanel"
                                        aria-labelledby={tabId}
                                        tabIndex={0}
                                        className="flex-1 p-6 space-y-4"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
                                    >
                                        <div>
                                            <TypographyH2 text={content.title} styles="text-lg font-bold font-display text-foreground" />
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 font-mono text-sm">
                                                <span className="flex items-center gap-1.5 text-accent">
                                                    <Calendar className="shrink-0" width="14" height="14" />
                                                    {content.duration}
                                                </span>
                                                {content.location && (
                                                    <span className="flex items-center gap-1.5 text-muted-foreground">
                                                        <MapPin className="shrink-0" width="14" height="14" />
                                                        {content.location}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="space-y-3 mt-4">
                                            {content.description.map((item, index) => (
                                                <div className="flex items-start gap-3" key={index}>
                                                    <SendHorizonal className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                                                    <TypographyP text={item} styles="inline pl-0 !mt-0 text-foreground/85 text-sm md:text-base leading-relaxed" />
                                                </div>
                                            ))}
                                        </div>
                                        {content.tech.length > 0 && (
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {content.tech.map((t, index) => (
                                                    <TechChip key={index} label={t} />
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            )}

                        </div>
                    </ScrollFrame>
                </div>
            </section>
        </CenteredContentWrapper>

    );
}
