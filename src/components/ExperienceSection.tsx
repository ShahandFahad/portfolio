import { CenteredContentWrapper } from "@/layouts/CenteredContentWrapper";
import { useState } from "react";
import { TypographyH2 } from "./ui/TypographyH2";
import { TypographyH1 } from "./ui/TypographyH1";
import { TypographyP } from "./ui/TypographyP";
import { SendHorizonal } from "lucide-react";

// TODO: Fix this type for workExpereice array list
// Tech type
type Tech = [string];

// Single Expereice Interface
interface ExperienceInterface {
    title: string;
    company: string;
    duration: string;
    location: string;
    description: string;
    tech: Tech;
};

// Expereice list implement experience interface
type ExpereienceType = [ExperienceInterface];


const workExperience = [
    {
        title: "MERN Stack Developer",
        company: "SLF-IT Solutions",
        duration: "Jan 2024 – Mar 2025",
        location: "Peshawar, KPK",
        description: [
            "Built full-stack web apps and internal MIS tools and Real Time Chat Systems using MERN stack.",
            "Developed scalable REST APIs, and collaborated with stakeholders for UI/UX."
        ],
        tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Git", "Docker", "Flask", "FastAPI", "MySQL"],
    },
    {
        title: "Web Developer",
        company: "YMS",
        duration: "Nov 2022 – Aug 2023",
        location: "Peshawar, KPK",
        description: [
            "Developed eCommerce platforms using PHP, MySQL, and JavaScript.",
            "Handled backend logic, server integration, and delivered client- ready features"
        ],
        tech: ["PHP", "MYSQL", "JavaScript", "jQuery", "Git"],
    },
];

export const ExperienceSection = () => {
    const [content, setContent] = useState(workExperience.at(0));

    const handleExperience = (exp_type: number) => {

        switch (exp_type) {
            case 1:
                setContent(workExperience.at(0));
                break;
            case 2:
                setContent(workExperience.at(1));
                break;
            default:
                setContent(workExperience.at(0));
        }

    }
    // min-h-screen backdrop-blur-sm py-5 lg:py-20 pb-20 container mx-auto px-4 md:px-0
    // border min-h-screen container bg-gradient-to-r
    // <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 md:items-center border">
    return (
        <CenteredContentWrapper>
            <section id="about" className="min-h-screen backdrop-blur-sm py-5 lg:py-20 pb-20 container mx-auto px-4 md:px-0">

                <div className="">
                    <div className="py-3 flex items-center after:flex-1 after:border-t after:border-slate-700 md:after:ms-6 after:ms-4">
                        <span className="block text-orange-500 text-left text-2xl" >
                            02.{" "}
                            <TypographyH2 text="Where Have I Worked" styles="inline text-slate-200 text-left" />
                        </span>
                    </div>

                    <div className="flex md:flex-row flex-col gap-4">

                        <ol className="w-1/5 border-l border-slate-800 flex md:flex-col flex-row">

                            <li className="p-4 cursor-pointer hover:bg-slate-800 border-l border-slate-800 hover:border-l hover:border-orange-500 transition-all duration-300 ease-in-out" onClick={() => handleExperience(1)}>
                                {workExperience[0].company}
                            </li>

                            <li className="p-4 cursor-pointer hover:bg-slate-800 border-l border-slate-800 hover:border-l hover:border-orange-500 transition-all duration-300 ease-in-out" onClick={() => handleExperience(2)}>
                                {workExperience[1].company}
                            </li>

                        </ol>

                        <div className="p-4">
                            <TypographyH2 text={`${content.title}`} styles="text-md" />
                            {/*<TypographyH2 text={`${content.company}`} styles="" />*/}
                            <TypographyH2 text={`${content.duration}`} styles="text-orange-500 text-lg mb-4" />
                            {
                                content?.description.map((item, index) => (
                                    <div className="" key={index}>
                                        <SendHorizonal className="text-orange-500 inline" width="8" />
                                        <TypographyP text={item} styles="inline pl-4" />
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </section>
        </CenteredContentWrapper>

    );
}
