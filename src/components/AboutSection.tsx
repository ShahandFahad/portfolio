import { CenteredContentWrapper } from "@/layouts/CenteredContentWrapper";
import { TypographyP } from "./ui/TypographyP";
import Image from "next/image";
import { TypographyH2 } from "./ui/TypographyH2";
import { SendHorizonal } from "lucide-react";

export const AboutSection = () => {
    return (
        <CenteredContentWrapper>
            <section id="about" className="min-h-screen container flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 md:items-center bg-gradient-to-r">


                <div className="">
                    <div className="py-3 flex items-center after:flex-1 after:border-t after:border-slate-700 md:after:ms-6 after:ms-4">
                        <span className="block text-orange-500 text-left text-2xl" >
                            01.{" "}
                            <TypographyH2 text="About Me" styles="inline text-slate-200 text-left" />
                        </span>
                    </div>

                    <TypographyP
                        text="Hello! I’m a Fahad, a software engineer specializing as a full-stack developer, passionate about building robust full-stack systems, reliable backends, and integrating AI technologies to create smarter, more intuitive applications. My journey began with a curiosity for how software components connect, and since then, I’ve been dedicated to crafting seamless digital experiences that solve real-world problems."
                        styles="text-balance text-slate-400 md:text-md"
                    />

                    <TypographyP
                        text="Over the years, I’ve had the opportunity to work across diverse environments — from dynamic startups to established enterprises — constantly refining my skills and embracing new challenges. These days, my focus is on blending traditional software engineering with cutting-edge AI techniques to push the boundaries of what applications can do."
                        styles="text-balance text-slate-400 md:text-md"
                    />

                    <TypographyP
                        text="I’m also continuously expanding my expertise in AI engineering, exploring everything from machine learning models to natural language processing, ensuring that the solutions I build are not only functional but also intelligent and adaptive."
                        styles="text-balance text-slate-400 md:text-md"
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
                            <SendHorizonal className="text-orange-500" width="8" /> Python
                        </li>

                        <li className="flex gap-2">
                            <SendHorizonal className="text-orange-500" width="8" /> Golang / Java / C++
                        </li>

                        <li className="flex gap-2">
                            <SendHorizonal className="text-orange-500" width="8" /> React.js / Next.js & Redux
                        </li>
                        
                        <li className="flex gap-2">
                            <SendHorizonal className="text-orange-500" width="8" /> Tailwind & ShadCN
                        </li>

                        <li className="flex gap-2">
                            <SendHorizonal className="text-orange-500" width="8" /> Node.js / Express.js
                        </li>

                        <li className="flex gap-2">
                            <SendHorizonal className="text-orange-500" width="8" /> Flask / FastAPI
                        </li>


                        <li className="flex gap-2">
                            <SendHorizonal className="text-orange-500" width="8" /> Socket.IO
                        </li>

                        <li className="flex gap-2">
                            <SendHorizonal className="text-orange-500" width="8" /> MongoDB
                        </li>

                        <li className="flex gap-2">
                            <SendHorizonal className="text-orange-500" width="8" /> MySQL
                        </li>

                        <li className="flex gap-2">
                            <SendHorizonal className="text-orange-500" width="8" /> PostgresSQL
                        </li>

                        <li className="flex gap-2">
                            <SendHorizonal className="text-orange-500" width="8" /> AWS / DigitalOcean
                        </li>

                        <li className="flex gap-2">
                            <SendHorizonal className="text-orange-500" width="8" /> Git & CI/CD & Docker
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
