import { createContext } from "react";

// Different Section Types
type Header = {
    title: string;
    subtitle: string;
    description: string;
};

type Navigation = Array<string>;

type Socials = Array<{
    title: string;
    link: string;
    label: string;
    icon: string;
}>;

type TechnicalSkills = {
    programmingSkills: Array<string>;
    frontendDevelopment: Array<string>;
    backendDevelopment: Array<string>;
    toolsAndPlatform: Array<string>;
    testingAndDevOps: Array<string>;
};

type About = {
    id: string;
    title: string;
    description: string[];
};

type Experience = Array<{
    duration: string;
    title: string;
    link: string;
    place: string;
    icon: string;
    description: string;
    technologies: string[];
}>;

type WorkExperience = {
    id: string;
    title: string;
    experience: Experience;
};

type Project = Array<{
    title: string;
    type: string;
    link: string;
    icon: string;
    description: string;
    technologies: string[];
    image: string;
}>;

type Projects = {
    id: string;
    title: string;
    project: Project;
};

type Field = Array<{
    title: string;
    from: string;
    date: string;
    link: string;
    image: string;
    icon: string;
}>;

type Certification = {
    id: string;
    title: string;
    field: Field;
};

type OtherLinks = {
    resume: {
        title: string;
        icon: string;
        link: string;
        label: string;
    };
    gitprojects: {
        title: string;
        icon: string;
        link: string;
        label: string;
    };
};

// Data Types for the static json data
export interface DataContextType {
    header: Header;
    navigation: Navigation;
    socials: Socials;
    technicalSkills: TechnicalSkills;
    technicalSkillsSvgs: TechnicalSkills;
    sections: {
        about: About;
        workexperience: WorkExperience;
        projects: Projects;
        certification: Certification;
        otherlinks: OtherLinks;
    };
    footer: string;
}

export const DataContext = createContext<DataContextType | null>(null);
