/*
import { useData } from "../hooks/useData";
import { Title } from "./Title";

export const Experience = () => {
    const data = useData(); // workexperience
    return (
        <div id="experience">
            <Title title="Chronicles of the" coloredText="Code Ronin" />

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {
                    data.sections.workexperience.experience.map((exp, index) => (
                        <li key={exp.title}>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className={`${index % 2 == 0 ? 'timeline-start mb-10 md:text-end' : 'timeline-end md:mb-10'}`}>
                                <time className="font-mono italic text-green-500">{exp.duration}</time>
                                <div className="text-lg font-black">{exp.title}</div>
                                <div className="text-md font-black text-sky-500">{exp.place}</div>
                                {exp.description}
                                <br />
                                {
                                    exp.technologies.map((tech) => (<div key={tech} className="badge badge-success mx-1">{tech}</div>))
                                }
                            </div>
                            {(index + 1) === data.sections.workexperience.experience.length ?  <></> : <hr />}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
*/
