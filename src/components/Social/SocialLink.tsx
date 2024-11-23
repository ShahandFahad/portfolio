import React from "react";
import { icons } from "../../assets/icons/icons";

type PropTypes = {
  title: string;
  link: string;
  label: string;
  icon: string;
  index: number;
};

/**
 * Socials Icons with links
 * @returns Socila Link Icon
 */
export default function SocialLink({ title, link, label, icon }: PropTypes) {
  return (
    <li className="mr-5 text-xs shrink-0">
      <a
        className="block hover:text-gray-200"
        href={`${link}`}
        target="_blank"
        rel="noopner noreferrer"
        aria-label={`${label}`}
        title={`${title}`}
      >
        {/* Only for screen readers */}
        <span className="sr-only">{title}</span>
        {/* Read Icon by name */}
        {icons[icon]}
      </a>
    </li>
  );
}
