import React from "react";
type PropTypes = { name: string };
/**
 *
 * @returns Nav link with small line follwed by link name
 */
export default function Navlink({ name }: PropTypes) {
  return (
    <li>
      {/* Navlink */}
      <a className="group flex items-center py-3 active" href={`#${name}`}>
        {/* Nav Indicator: A small thin line */}
        <span className="nav-indicator mr-4 h-px w-8 bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-200 group-focus-visible:w-16 group-focus-visible:bg-gray-200 motion-reduce:transition-none"></span>
        {/* Link name */}
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-200 group-focus-visible:text-gray-200">
          {name}
        </span>
      </a>
    </li>
  );
}
