"use client";

import { CenteredContentWrapper } from "@/layouts/CenteredContentWrapper";
import { TypographyH2 } from "./ui/TypographyH2";
import Link from "next/link";
import { ExternalLink, Folder, Github } from "lucide-react";
import { motion } from "framer-motion";
import { TypographyP } from "./ui/TypographyP";
import { TechChip } from "./ui/TechChip";
import { ProjectsData } from "@/data/portfolioData";

/**
 * ProjectSection Component
 * Displays a list of projects in a grid layout with motion animations.
 * Content is passed in via the `data` prop (resolved in `page.tsx` from Sanity,
 * falling back to `portfolioData.projects`).
 */
export const ProjectSection = ({ data: projects }: { data: ProjectsData }) => {
    return (
        <CenteredContentWrapper>
            <section
                id="projects"
                className="min-h-screen backdrop-blur-sm py-5 lg:py-20 pb-20 container mx-auto px-4 md:px-0"
            >

                <div className="py-3 flex items-center after:flex-1 after:border-t after:border-slate-700 md:after:ms-6 after:ms-4">
                    <span className="block font-mono text-orange-500 text-left text-2xl" >
                        {projects.sectionNumber}{" "}
                        <TypographyH2 text={projects.title} styles="inline text-slate-200 text-left" />
                    </span>
                </div>
                <p className="font-mono text-slate-400 text-sm" >
                    {"// "}{projects.subtitle}
                </p>
                <p className="text-red-500 text-xs italic mt-1" >
                    {projects.notice}
                </p>

                {/* PROJECTS GRID: bg: from-black via-pink-950 to-pink-800 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                    {
                        projects.list.map((project, index) => (
                             <motion.div
                                key={index}
                                className="text-slate-200 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 hover:cursor-pointer rounded shadow-lg p-6 transition-colors border border-slate-800/60 hover:border-slate-700/80"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -6, scale: 1.02 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div className="flex justify-between items-start">
                                    <div className="mb-4 flex items-center gap-2">
                                        <Folder className="h-8 w-8 text-orange-500" />
                                        <span className="font-mono text-xs text-slate-600">
                                            PROJECT_{String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <div className="mb-4 flex gap-2">
                                        <Link target="_blank" href={project.repo ?? "https://github.com/ShahandFahad"} className="bg-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded p-1">
                                            <Github className="text-slate-200 hover:text-orange-500 transition-colors" />
                                        </Link>
                                        <Link target="_blank" href={project.preview ?? "https://github.com/ShahandFahad"} className="bg-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded p-1">
                                            <ExternalLink className="text-slate-200 hover:text-orange-500 transition-colors" />
                                        </Link>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    <Link href={project.preview ?? "https://github.com/ShahandFahad"} className="hover:text-orange-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded">
                                        {project.title}
                                    </Link>
                                </h3>
                                <TypographyP
                                    text={project.description}
                                    styles="text-slate-300 xl:h-44 lg:h-68 md:h-78 h-auto leading-relaxed text-sm md:text-base"
                                />
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {
                                        project.tech.map((t, techIndex) => (
                                            <TechChip key={techIndex} label={t} />
                                        ))
                                    }
                                </div>

                            </motion.div>
                        ))
                    }
                </div>


            </section>
        </CenteredContentWrapper>
    );
};
