import React from "react";
import Sticker from "../Sticker/Sticker";
type PropTypes = { technologies: string[] };
/**
 *
 * @returns Sticker list
 */
export default function StickerList({ technologies }: PropTypes) {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="technologies Used">
      {/* Iterate over tech name list */}
      {technologies.map((tech, index) => (
        <li className="mr-1.5 mt-2" key={index}>
          <Sticker value={tech} />
        </li>
      ))}
    </ul>
  );
}
