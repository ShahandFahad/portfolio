import React, { useContext } from "react";
import { DataContext } from "../../context/Context";
/**
 * It is the hero section which introudce user
 * @returns Title, subtitle and Description of user
 */
export default function Hero() {
  const { header } = useContext(DataContext); // Consume data from context and Destructure

  return (
    <>
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl">
        <a href="/">{header.title}</a>
      </h1>
      {/* Subtitle */}
      <h2 className="mt-3 tracking-tight text-lg font-medium text-gray-200 sm:text-xl">
        {header.subtitle}
      </h2>
      {/* Description */}
      <p className="mt-4 max-w-xs leading-normal">{header.description}</p>
    </>
  );
}
