"use client";

import { CenteredContentWrapper } from "@/layouts/CenteredContentWrapper";
import { TypographyH2 } from "./ui/TypographyH2";
import { ScrollCard } from "./ScrollCard";
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

                <div className="py-3 flex items-center after:flex-1 after:border-t after:border-border md:after:ms-6 after:ms-4">
                    <span className="block font-mono text-accent text-left text-2xl" >
                        {projects.sectionNumber}{" "}
                        <TypographyH2 text={projects.title} styles="inline text-foreground text-left" />
                    </span>
                </div>
                <p className="font-mono text-muted-foreground text-sm" >
                    {"// "}{projects.subtitle}
                </p>
                <p className="text-torii-red text-xs italic mt-1" >
                    {projects.notice}
                </p>

                {/* Scrolls of Mastery — each card opens a case-study drawer */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                    {
                        projects.list.map((project, index) => (
                            <ScrollCard key={index} project={project} index={index} />
                        ))
                    }
                </div>


            </section>
        </CenteredContentWrapper>
    );
};
