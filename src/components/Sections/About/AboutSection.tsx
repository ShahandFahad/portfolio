import React, { useContext } from "react";
import SectionLayout from "../../../layout/SectionLayout";
import { DataContext } from "../../../context/Context";
/**
 * Paragraph of decriptions
 * @returns About Description
 */
export default function AboutSection() {
  const { about } = useContext(DataContext).sections; // Consume and Destruture data form context

  return (
    <SectionLayout id={about.id} title={about.title}>
      {/* Iterate over text stored in list from */}
      {about.description.map((text, index) => (
        <p className="mb-4" key={index}>
          {text}
        </p>
      ))}
    </SectionLayout>
  );
}
