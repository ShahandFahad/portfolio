import React, { useContext } from "react";
import SectionLayout from "../../../layout/SectionLayout";
import { DataContext } from "../../../context/Context";
import CardLayout from "../../../layout/CardLayout";
import Image from "../../Card/Image/Image";
import Body from "../../Card/Body/Body";
import Title from "../../Card/Title/Title";

/**
 *
 * @returns List of certificate cards
 */
export default function CertificationSection() {
  const { certification } = useContext(DataContext).sections;

  return (
    <SectionLayout id={certification.id} title={certification.title}>
      {/* List of certificate Cards */}
      <ol class="group/list">
        {certification.field.map((certificate, index) => (
          <li className="mb-12" key={index}>
            <CardLayout hasImage={true} certificationSection={true}>
              <Image image={certificate.image} certificateimage={true} />
              <Body certificateimage={true}>
                <Title
                  title={certificate.title}
                  link={certificate.link}
                  date={certificate.date}
                  icon={certificate.icon}
                />
              </Body>
            </CardLayout>
          </li>
        ))}
      </ol>
    </SectionLayout>
  );
}
