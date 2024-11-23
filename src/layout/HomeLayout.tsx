import React from "react";
/**
 * This Layout Defines the main page layout for the application
 * It recieves Header and Other contents like main etc from
 *
 * @param {*} any
 * @returns Home page of the application
 */
export default function HomeLayout({ children }: any) {
  return (
    <div className="bg-gray-950 leading-relaxed text-gray-400 antialised selection:bg-cyan-900 selecton:text-cyan-300">
      <div id="content">
        {/* Main Page width and Height setup */}
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          {/* Content Box */}
          {/*
            Content Box: Contains Header, Main and Footer
            -> On Large Screen the flex direction is set to row
            -> On Small No Flex
          */}
          <div className="lg:flex lg:justify-between lg:gap-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
