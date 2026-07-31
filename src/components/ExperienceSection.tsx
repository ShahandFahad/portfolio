"use client";

import { CenteredContentWrapper } from "@/layouts/CenteredContentWrapper";
import { useState } from "react";
import { TypographyH2 } from "./ui/TypographyH2";
import { TypographyP } from "./ui/TypographyP";
import { TechChip } from "./ui/TechChip";
import { SendHorizonal, Calendar, MapPin } from "lucide-react";
import { ExperienceData } from "@/data/portfolioData";

/**
 * ExperienceSection Component
 * Displays a tabbed interface for work history.
 * Content is passed in via the `data` prop (resolved in `page.tsx` from Sanity,
 * falling back to `portfolioData.experience`), allowing company, role, duration,
 * description, and list items to be updated independently.
 */
export const ExperienceSection = ({ data: experience }: { data: ExperienceData }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const content = experience.jobs[activeIndex] || experience.jobs[0];

    return (
        <CenteredContentWrapper>
            <section id="about" className="min-h-screen backdrop-blur-sm py-5 lg:py-20 pb-20 container mx-auto px-4 md:px-0">

                <div className="">
                    <div className="py-3 flex items-center after:flex-1 after:border-t after:border-slate-700 md:after:ms-6 after:ms-4">
                        <span className="block font-mono text-orange-500 text-left text-2xl" >
                            {experience.sectionNumber}{" "}
                            <TypographyH2 text={experience.title} styles="inline text-slate-200 text-left" />
                        </span>
                    </div>

                    <div className="flex md:flex-row flex-col gap-4">

                        <div className="w-full md:w-1/5 border-l border-slate-800 flex md:flex-col flex-row overflow-x-auto md:overflow-x-visible" role="tablist" aria-label="Work Experience Tabs">
                            {experience.jobs.map((job, index) => (
                                <button
                                    key={index}
                                    role="tab"
                                    aria-selected={activeIndex === index}
                                    className={`text-left p-4 cursor-pointer border-l-2 transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 hover:bg-slate-800/40 text-sm whitespace-nowrap ${
                                        activeIndex === index
                                            ? "border-l-orange-500 bg-slate-800 text-orange-500 font-semibold"
                                            : "border-l-transparent text-slate-400 hover:text-slate-200"
                                    }`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {job.company}
                                </button>
                            ))}
                        </div>

                        {content && (
                            <div className="p-4 space-y-4">
                                <div>
                                    <TypographyH2 text={content.title} styles="text-lg font-bold text-slate-100" />
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 font-mono text-sm">
                                        <span className="flex items-center gap-1.5 text-orange-500">
                                            <Calendar className="shrink-0" width="14" height="14" />
                                            {content.duration}
                                        </span>
                                        {content.location && (
                                            <span className="flex items-center gap-1.5 text-slate-400">
                                                <MapPin className="shrink-0" width="14" height="14" />
                                                {content.location}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-3 mt-4">
                                    {content.description.map((item, index) => (
                                        <div className="flex items-start gap-3" key={index}>
                                            <SendHorizonal className="text-orange-500 mt-1.5 shrink-0" width="8" />
                                            <TypographyP text={item} styles="inline pl-0 text-slate-300 text-sm md:text-base leading-relaxed" />
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
                            </div>
                        )}

                    </div>
                </div>
            </section>
        </CenteredContentWrapper>

    );
}
