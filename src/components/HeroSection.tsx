import { CenteredContentWrapper } from "@/layouts/CenteredContentWrapper";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { TypographyH1 } from "./ui/TypographyH1";
import { TypographyP } from "./ui/TypographyP";

export const HeroSection = () => {
    const versionAlert = () => {
        alert("🚧 Under Work 🚀 | Part of v3.0.0 Update! 🔧✨");
    }
    return (
        <CenteredContentWrapper>
            <BackgroundBeamsWithCollision>
                <div className="w-5/5 mt-0 flex flex-col justify-center gap-4">
                    <TypographyP
                        text="Hi, my name is"
                        styles="text-orange-500 md:text-lg text-md"
                    />

                    <TypographyH1
                        text="Shah Fahad"
                        styles="text-left md:text-6xl text-4xl"
                    />
                    <TypographyH1
                        text="I build web systems powered by AI."
                        styles="text-left text-slate-400 md:text-5xl text-xl"
                    />

                    {/* 
                        text="I’m a software engineer specializing as a full-stack developer, with a strong focus on building reliable backend systems while continuously expanding my skills in AI engineering. I currently work as a full-stack developer, integrating AI technologies to build smarter applications."
                    */}
                    <TypographyP
                        text="I’m a software engineer specializing as a full-stack developer, building full-stack systems, reliable backends, & integrating AI technologies to build smarter applications."
                        styles="md:w-3/5 md:text-md"
                    />
                    <span
                        className="-mt-4 md:w-3/5 md:text-md md:block hidden"
                    >
                        And continuously expanding my skills in AI engineering.
                    </span>

                    <div className="">
                        <button onClick={() => versionAlert()} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-16 py-5 text-sm font-medium text-white backdrop-blur-3xl">
                                {"Let's Connect"}
                            </span>
                        </button>
                    </div>

                </div>
            </BackgroundBeamsWithCollision>
        </CenteredContentWrapper>
    );
};
