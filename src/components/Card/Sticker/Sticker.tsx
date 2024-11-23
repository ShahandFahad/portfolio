import React from "react";
type PropTypes = { value: string };
/**
 * Small Stickers
 */
export default function Sticker({ value }: PropTypes) {
  return (
    <div className="flex items-center rounded-full bg-slate-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
      {value}
    </div>
  );
}
