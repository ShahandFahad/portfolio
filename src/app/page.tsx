'use client'
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { SkillSet } from "./components/SkillSet";
import { HomeLayout } from "./layouts/HomeLayout";
import { DataProvider } from "./provider/DataProvider";
import { ThemeProvider } from "./provider/ThemeProvider";

export default function Home() {
    return (
        <DataProvider>
            <ThemeProvider>
                <HomeLayout>
                    <SkillSet />
                    <Experience />
                    <Projects />
                </HomeLayout>
            </ThemeProvider>
        </DataProvider>
    );
};
