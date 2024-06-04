import React from "react";
import Sticker from "../Sticker/Sticker";
/**
 *
 * @returns Sticker list
 */
export default function StickerList({ technologies }) {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="technologies Used">
      {technologies.map((tech, index) => (
        <li class="mr-1.5 mt-2" key={index}>
          <Sticker value={tech} />
        </li>
      ))}
    </ul>
  );
}
