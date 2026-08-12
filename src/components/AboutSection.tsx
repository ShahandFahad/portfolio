import { CenteredContentWrapper } from "@/layouts/CenteredContentWrapper";
import { TypographyP } from "./ui/TypographyP";
import { TypographyH2 } from "./ui/TypographyH2";
import { TechChip } from "./ui/TechChip";
import { HangingScroll } from "./motifs/HangingScroll";
import { KanjiWatermark } from "./motifs/KanjiWatermark";
import { InkBleedReveal } from "./motifs/InkBleedReveal";
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
                    <div className="py-3 flex items-center after:flex-1 after:border-t after:border-border md:after:ms-6 after:ms-4">
                        <span className="block font-mono text-accent text-left text-2xl" >
                            {about.sectionNumber}{" "}
                            <TypographyH2 text={about.title} styles="inline text-foreground text-left" />
                        </span>
                    </div>

                    <div className="relative mt-4 border-l-2 border-gold-leaf/30 pl-6 md:pl-8">
                        <KanjiWatermark
                            glyph="build"
                            className="pointer-events-none absolute -right-4 -top-6 -z-10 text-[9rem] md:-right-8 md:text-[13rem]"
                        />
                        {about.paragraphs.map((para, index) => (
                            <TypographyP
                                key={index}
                                text={para}
                                styles={
                                    index === 0
                                        ? "text-pretty text-foreground text-base md:text-lg first-letter:font-display first-letter:text-5xl first-letter:text-torii-red first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-[0.85] md:first-letter:text-6xl"
                                        : "text-pretty text-foreground/80 md:text-md"
                                }
                            />
                        ))}
                    </div>

                    <div className="mt-10">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-gold-leaf/50" aria-hidden="true" />
                            <span className="font-mono text-xs tracking-wider text-accent uppercase">Arsenal</span>
                        </div>
                        <TypographyP
                            text={`// ${about.skillsListTitle}`}
                            styles="font-mono text-muted-foreground text-sm"
                        />

                        <InkBleedReveal>
                            <ul className="flex flex-wrap gap-2 mt-4 list-none">
                                {about.skills.map((skill, index) => (
                                    <li key={index}>
                                        <TechChip label={skill} />
                                    </li>
                                ))}
                            </ul>
                        </InkBleedReveal>
                    </div>

                </div>
                <div className="">
                    <HangingScroll src={about.imageSrc} alt={about.imageAlt} />
                </div>

            </section>
        </CenteredContentWrapper>
    );
};
