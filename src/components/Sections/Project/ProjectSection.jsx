import React, { useContext } from "react";
import { DataContext } from "../../../context/Context";
import SectionLayout from "../../../layout/SectionLayout";
import SpecialButton from "../../SpecialButton/SpecialButton";
import CardLayout from "../../../layout/CardLayout";
import Body from "../../Card/Body/Body";
import Title from "../../Card/Title/Title";
import Description from "../../Card/Description/Description";
import StickerList from "../../Card/StickerList/StickerList";
import Image from "../../Card/Image/Image";
/**
 * Contains List of project card. Setup manually
 * @returns Project Section
 */
export default function ProjectSection() {
  // Consume and Destructure data
  const { projects, otherlinks } = useContext(DataContext).sections;
  return (
    <SectionLayout id={projects.id} title={projects.title}>
      {/* List of project cards */}
      <ol className="group/list">
        {projects.project.map((proj) => (
          <li className="mb-12">
            <CardLayout hasImage={true}>
              <Body haseImage={true}>
                <Title
                  title={proj.title}
                  link={proj.link}
                  subtitle=""
                  icon={proj.icon}
                />
                <Description description={proj.description} />
                <StickerList technologies={proj.technologies} />
              </Body>
              <Image image={proj.image} />
            </CardLayout>
          </li>
        ))}
      </ol>
      {/* Special Buttons To github for projects */}
      <SpecialButton
        title={otherlinks.gitprojects.title}
        icon={otherlinks.gitprojects.icon}
        path={otherlinks.gitprojects.link}
        label={otherlinks.gitprojects.label}
      />
    </SectionLayout>
  );
}
