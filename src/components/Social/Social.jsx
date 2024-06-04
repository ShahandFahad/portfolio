import React, { useContext } from "react";
import { DataContext } from "../../context/Context";
import SocialLink from "./SocialLink";

/**
 * Social Icon List: Contains Social Icons and Incase of Screen Reader: Display Name
 * @returns Social Icons List
 */
export default function Social() {
  const { socials } = useContext(DataContext); // Consume and Destructure Data
  return (
    <ul className="ml-1 mt-8 flex items-center " aria-label="Social Media">
      {socials.map((social, index) => (
        <SocialLink
          title={social.title}
          link={social.link}
          label={social.label}
          icon={social.icon}
          index={index}
          key={index}
        />
      ))}
    </ul>
  );
}
