import React from "react";
type PropTypes = { duration: string };
/**
 * This is Special Header for the Card. Do not confuse it with the Main
 * Header
 * @returns Card Header
 */
export default function CardHeader({ duration }: PropTypes) {
  return (
    <header
      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2"
      aria-label={duration}
    >
      {duration}
    </header>
  );
}
