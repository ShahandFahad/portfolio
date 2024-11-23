import React from "react";
type PropTypes = { description: string };
/**
 *
 * @returns paragraph
 */
export default function Description({ description }: PropTypes) {
  return <p className="mt-2 text-sm leading-normal">{description}</p>;
}
