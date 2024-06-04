import React from "react";
import { icons } from "../../assets/icons/icons";
/**
 * This is a special link. Used incase of providing a visiting link to specific document, webpage etc
 * @returns a link
 */
export default function SpecialButton({ title, icon, path, label }) {
  return (
    <div className="mt-12">
      <a
        className="inline-flex font-medium item-baseline leading-tight text-gray-200 hover:text-cyan-300 focus-visible:text-cyan-300 group/link text-base"
        href={`${path}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={label}
      >
        {title}
        <span className="inline-block">{icons[icon]}</span>
      </a>
    </div>
  );
}
