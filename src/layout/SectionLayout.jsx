import React from "react";

/**
 * It defines how, sections would behave in the main container
 * @returns Section Layout for Main content
 */
export default function SectionLayout({ id, title, children }) {
  return (
    <section
      id={id}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={title}
    >
      {/* The Title will be visible on small screens only, and will stick to top */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-gray-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg-sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-200 lg-sr-only">
          {title}
        </h2>
      </div>
      {/* Content goes here */}
      <div>{children}</div>
    </section>
  );
}
