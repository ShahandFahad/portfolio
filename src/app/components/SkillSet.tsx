import Image from "next/image";
// import { GridLayout } from "../layouts/GridLayout";
import { Title } from "./Title";
import { useData } from "../hooks/useData";

/*
const SkillBox = ({ skill }) => {
    return (
        <span key={skill} className="rounded p-2 bg-red-500 mb-1 text-center border h-24 w-32">{skill}</span>);
}
*/

export const SkillSet = () => {
    const data = useData();

    return (
        <div id="skills" className="flex flex-col gap-2 justify-center items-center ">
            <Title title="Arsenal of the" coloredText="Code Ronin" />

            {/*<span className="border w-5xl m-10 md:mx-24 inline-grid gap-2 grid-cols-6 md:grid-cols-8 content-center justify-items-center text-white"> */}
            <span className="grid grid-cols-6 md:grid-cols-14 lg:grid-cols-28 gap-4 justify-center items-center p-4">
                {
                    data.technicalSkillsSvgs.programmingSkills.map((skill) => (
                        <Image className="bg-gray-100 rounded p-1" key={skill} src={`/${skill}`} height="36" width="36" loading="lazy" alt={skill} />
                    ))
                }
                {
                    data.technicalSkillsSvgs.frontendDevelopment.map((skill) => (
                        <Image className="bg-gray-100 rounded p-1" key={skill} src={`/${skill}`} height="36" width="36" loading="lazy" alt={skill} />
                    ))
                }
                {
                    data.technicalSkillsSvgs.backendDevelopment.map((skill) => (
                        <Image className="bg-gray-100 rounded p-1" key={skill} src={`/${skill}`} height="36" width="36" loading="lazy" alt={skill} />
                    ))
                }
                {
                    data.technicalSkillsSvgs.toolsAndPlatform.map((skill) => (
                        <Image className="bg-gray-100 rounded p-1" key={skill} src={`/${skill}`} height="36" width="36" loading="lazy" alt={skill} />
                    ))
                }
                {
                    data.technicalSkillsSvgs.testingAndDevOps.map((skill) => (
                        <Image className="bg-gray-100 rounded p-1" key={skill} src={`/${skill}`} height="36" width="36" loading="lazy" alt={skill} />
                    ))
                }
            </span>
            <q className="text-center">A warrior sharpens his blade, just as a coder refines his craft 🗡🔥</q>
        </div>
    );
};
