import { createContext } from "react";
import data from "../assets/data/data.json";

// types
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

// App Types
export interface AppDataContextType {
  header: Header;
  navigation: Navigation;
  socials: Socials;
  sections: {
    about: About;
    workexperience: WorkExperience;
    projects: Projects;
    certification: Certification;
    otherlinks: OtherLinks;
  };
  footer: string;
}

// Defines App Data Context
export const DataContext = createContext<AppDataContextType>(data);
