/*
import { useData } from "../hooks/useData";
import { GridLayout } from "../layouts/GridLayout";
import { Card } from "./Card";
import { Title } from "./Title";
export const Projects = () => {
    const data = useData();

    return (
        <div id="projects">
            <Title title="Legacy of the" coloredText="Code Ronin" />

            <GridLayout>
                {
                    data.sections.projects.project.map((prj, index) => (
                        <Card
                            key={index}
                            title={prj.title}
                            type={prj.type}
                            link={prj.link}
                            description={prj.description}
                            technologies={prj.technologies}
                            image={prj.image} />
                    ))
                }
            </GridLayout>
        </div>
    );
};
*/
