import { CenteredContentWrapper } from "@/layouts/CenteredContentWrapper";
import { TypographyP } from "./ui/TypographyP";
import Image from "next/image";
import { TypographyH2 } from "./ui/TypographyH2";
import { SendHorizonal } from "lucide-react";

export const AboutSection = () => {
    return (
        <CenteredContentWrapper>
            <section className="min-h-screen container flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 md:items-center bg-gradient-to-r">


                <div className="">
                    <div className="py-3 flex items-center after:flex-1 after:border-t after:border-slate-700 md:after:ms-6 after:ms-4">
                        <span className="block text-orange-500 text-left text-2xl" >
                            01.{" "}
                            <TypographyH2 text="About Me" styles="inline text-slate-200 text-left" />
                        </span>
                    </div>

                    <TypographyP
                        text="Paragraph 1"
                        styles="text-slate-400 md:text-md"
                    />

                    <TypographyP
                        text="Paragraph 2"
                        styles="text-slate-400 md:text-md"
                    />

                    <TypographyP
                        text="Paragraph 3"
                        styles="text-slate-400 md:text-md"
                    />

                    <TypographyP
                        text="Here are a few technologies I’ve been working with recently:"
                        styles="text-slate-400 md:text-md"
                    />

                    <ul className="text-slate-400 grid grid-cols-2 list-none mt-4">
                        <li className="flex gap-2">
                            <SendHorizonal className="text-orange-500" width="8" /> JavaScript (ES6+)
                        </li>
                        <li className="flex gap-2">
                            <SendHorizonal className="text-orange-500" width="8" /> TypeScript
                        </li>
                        <li className="flex gap-2">
                            <SendHorizonal className="text-orange-500" width="8" /> React
                        </li>
                        <li className="flex gap-2">
                            <SendHorizonal className="text-orange-500" width="8" /> Redux
                        </li>
                        <li className="flex gap-2">
                            <SendHorizonal className="text-orange-500" width="8" /> Node.js
                        </li>
                        <li className="flex gap-2">
                            <SendHorizonal className="text-orange-500" width="8" /> Golang
                        </li>
                    </ul>

                </div>
                <div className="">
                    <Image
                        className="rounded-md p-1"
                        src={`/samurai.svg`}
                        // src={`/sword-boy.jpg`}
                        // src={`/two-swords.jpg`}
                        // src={`/robot-ball.jpg`}
                        height="1000" width="1000"
                        loading="lazy"
                        alt="Profile" />
                </div>

            </section>
        </CenteredContentWrapper>
    );
};
