import { CenteredContentWrapper } from "@/layouts/CenteredContentWrapper";
import { TypographyP } from "./ui/TypographyP";
import Image from "next/image";
import { TypographyH2 } from "./ui/TypographyH2";
import { TechChip } from "./ui/TechChip";
import { AboutData } from "@/data/portfolioData";

/**
 * AboutSection Component
 * Displays personal details, descriptions, and a grid of core technical skills.
 * Content is passed in via the `data` prop (resolved in `page.tsx` from Sanity,
 * falling back to `portfolioData.about`).
 */
export const AboutSection = ({ data: about }: { data: AboutData }) => {
    return (
        <CenteredContentWrapper>
            <section id="about" className="min-h-screen container flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 md:items-center bg-gradient-to-r">


                <div className="">
                    <div className="py-3 flex items-center after:flex-1 after:border-t after:border-slate-700 md:after:ms-6 after:ms-4">
                        <span className="block font-mono text-neon-cyan text-left text-2xl" >
                            {about.sectionNumber}{" "}
                            <TypographyH2 text={about.title} styles="inline text-slate-200 text-left" />
                        </span>
                    </div>

                    {about.paragraphs.map((para, index) => (
                        <TypographyP
                            key={index}
                            text={para}
                            styles="text-balance text-slate-300 md:text-md"
                        />
                    ))}

                    <TypographyP
                        text={`// ${about.skillsListTitle}`}
                        styles="font-mono text-slate-400 text-sm"
                    />

                    <ul className="flex flex-wrap gap-2 mt-4 list-none">
                        {about.skills.map((skill, index) => (
                            <li key={index}>
                                <TechChip label={skill} />
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="">
                    <Image
                        className="rounded-md p-1"
                        src={about.imageSrc}
                        // src={`/sword-boy.jpg`}
                        // src={`/two-swords.jpg`}
                        // src={`/robot-ball.jpg`}
                        height="1000" width="1000"
                        loading="lazy"
                        alt={about.imageAlt} />
                </div>

            </section>
        </CenteredContentWrapper>
    );
};
