import React from "react";
import { icons } from "../../../assets/icons/icons";
type PropTypes = {
  title: string;
  link: string;
  subtitle: string;
  icon: string;
  date: string;
};
export default function Title({
  title = "",
  link = "",
  subtitle = "",
  icon = "",
  date = "",
}: PropTypes) {
  return (
    <>
      {date && <p className="-mt-1 text-sm font-semibold leading-6">{date}</p>}
      <h3 className="font-medium leading-snug text-gray-200">
        <div>
          <a
            className="inline-flex items-baseline font-medium leading-tight text-gray-200 hover:text-cyan-300 focus-visible:text-cyan-300 group/link text-base"
            href={link}
            target="_blank"
            rel="noreferrer noopner"
            aria-label={`${title} (Opens in new tab)`}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              {title}
              <span className="inline-block">
                {subtitle}
                {icons[icon]}
              </span>
            </span>
          </a>
        </div>
      </h3>
    </>
  );
}
