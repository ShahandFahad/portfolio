import { Github } from "lucide-react";
import { useData } from "../hooks/useData";

export const Footer = () => {
    const data = useData();

    return (
        <footer className="footer footer-horizontal footer-center text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover" href="#skills">Skills</a>
                <a className="link link-hover" href="#experience">Experience</a>
                <a className="link link-hover" href="#projects">Projects</a>
                <a className="link link-hover" href="#contact">Contact</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a target="_blank" href={data.sections.otherlinks.gitprojects.link}>
                        <Github fill="white" />
                    </a>
                </div>
            </nav>
            <aside>
                {/* <p>Copyright © {new Date().getFullYear()} - All right reserved by Shah Fahad</p> */}
                <p className="text-lg text-red-500">{data.footer}</p>
            </aside>
        </footer>
    );
};
