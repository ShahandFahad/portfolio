import { CenteredContentWrapper } from "@/layouts/CenteredContentWrapper";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { TypographyH1 } from "./ui/TypographyH1";
import { TypographyP } from "./ui/TypographyP";
import { TerminalPrompt } from "./ui/TerminalPrompt";
import { StatTile } from "./ui/StatTile";
import Link from "next/link";
import { HeroData } from "@/data/portfolioData";

/**
 * HeroSection Component
 * Renders the landing section with animated background beams and typography.
 * Content is passed in via the `data` prop (resolved in `page.tsx` from Sanity,
 * falling back to `portfolioData.hero`) to separate the copy/data layer from
 * the UI presentation layer.
 */
export const HeroSection = ({ data: hero }: { data: HeroData }) => {
    return (
        <CenteredContentWrapper>
            <BackgroundBeamsWithCollision>
                <div className="w-5/5 mt-0 flex flex-col justify-center gap-4">
                    <TerminalPrompt
                        prefix="$"
                        styles="text-orange-500 md:text-lg text-md"
                    >
                        {hero.greeting}
                    </TerminalPrompt>

                    <TypographyH1
                        text={hero.name}
                        styles="text-left md:text-6xl text-4xl"
                    />
                    <TypographyH1
                        text={hero.subtitle}
                        styles="text-left text-slate-300 md:text-5xl text-xl"
                    />

                    {/* 
                        text="I’m a software engineer specializing as a full-stack developer, with a strong focus on building reliable backend systems while continuously expanding my skills in AI engineering. I currently work as a full-stack developer, integrating AI technologies to build smarter applications."
                    */}
                    <TypographyP
                        text={hero.description}
                        styles="md:w-3/5 md:text-md text-slate-300"
                    />
                    <span
                        className="-mt-4 md:w-3/5 md:text-md md:block hidden font-mono text-slate-400"
                    >
                        {"// "}{hero.extraSkillLine}
                    </span>

                    {hero.stats && hero.stats.length > 0 && (
                        <div className="flex flex-wrap gap-6 mt-2">
                            {hero.stats.map((stat, index) => (
                                <StatTile
                                    key={index}
                                    value={stat.value}
                                    label={stat.label}
                                    delay={index * 0.1}
                                />
                            ))}
                        </div>
                    )}

                    <div className="">
                        <Link href="#contact" className="focus:outline-none rounded-full">
                            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all active:scale-95 duration-200">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffedd5_0%,#ea580c_50%,#ffedd5_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-16 py-5 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-900/90 transition-colors">
                                    {hero.ctaText}
                                </span>
                            </button>
                        </Link>
                    </div>

                </div>
            </BackgroundBeamsWithCollision>
        </CenteredContentWrapper>
    );
};
