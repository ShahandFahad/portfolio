import { AboutSection } from "@/components/AboutSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectSection";
import { Toaster } from "sonner";
import { portfolioData } from "@/data/portfolioData";
import { getAboutContent, getContactInfo, getExperiences, getHero, getProjects } from "@/lib/cmsClient";

// Sometime Try: Use this for project card bg: from-black via-pink-950 to-pink-800
export default async function Home() {
    const [heroData, aboutData, contactData, experienceJobs, projectList] = await Promise.all([
        getHero(),
        getAboutContent(),
        getContactInfo(),
        getExperiences(),
        getProjects(),
    ]);

    const hero = heroData ?? portfolioData.hero;
    const about = aboutData ?? portfolioData.about;
    const contact = contactData ?? portfolioData.contact;
    const experience = experienceJobs?.length
        ? { ...portfolioData.experience, jobs: experienceJobs }
        : portfolioData.experience;
    const projects = projectList?.length
        ? { ...portfolioData.projects, list: projectList }
        : portfolioData.projects;

    return (
        <div className="min-h-screen bg-gradient-to-r from-black via-slate-900 to-black text-white font-sans relative overflow-hidden">
            <AnimatedBackground />
            <div className="relative z-10">
                <Header />

                <main className="">
                    <Toaster />

                    {/* Site Sections */}

                    <HeroSection data={hero} />
                    <AboutSection data={about} />
                    <ExperienceSection data={experience} />
                    <ProjectSection data={projects} />
                    <ContactSection data={contact} />

                </main>

                <Footer />
            </div>
        </div>
    );
};
