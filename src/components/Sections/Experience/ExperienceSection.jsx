import React, { useContext } from "react";
import SectionLayout from "../../../layout/SectionLayout";
import { DataContext } from "../../../context/Context";
import SpecialButton from "../../SpecialButton/SpecialButton";
import CardLayout from "../../../layout/CardLayout";
import CardHeader from "../../Card/Header/CardHeader";
import Body from "../../Card/Body/Body";
import Title from "../../Card/Title/Title";
import Description from "../../Card/Description/Description";
import StickerList from "../../Card/StickerList/StickerList";

/**
 * Experince section with list of scrollable cards
 * Components of cards are defined seperately
 * Here, By combining those card components as per the requirements, result in a
 * specific card design
 * @returns list of experince card
 */
export default function ExperienceSection() {
  // Consume and Destructure data
  const { workexperience, otherlinks } = useContext(DataContext).sections;
  return (
    <SectionLayout id={workexperience.id} title={workexperience.title}>
      {/* List of experince cards */}
      <ol className="group/list">
        {workexperience.experience.map((exp, index) => (
          <li className="mb-12" key={index}>
            <CardLayout>
              <CardHeader duration={exp.duration} />
              <Body>
                <Title
                  title={exp.title}
                  link={exp.link}
                  subtitle={exp.place}
                  icon={exp.icon}
                />
                <Description description={exp.description} />
                <StickerList technologies={exp.technologies} />
              </Body>
            </CardLayout>
          </li>
        ))}
      </ol>

      {/* Special Link: View Resume */}
      {/* TODO: Fix this button to open pdf file */}
      <SpecialButton
        title={otherlinks.resume.title}
        icon={otherlinks.resume.icon}
        path={`../assets/files/${otherlinks.resume.link}`}
        label={otherlinks.resume.label}
      />
    </SectionLayout>
  );
}
