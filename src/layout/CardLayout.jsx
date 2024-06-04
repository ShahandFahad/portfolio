import React from "react";
import BgBlurEffect from "../components/BgBlurEffect/BgBlurEffect";

/**
 * @returns General card layout
 */
export default function CardLayout({
  hasImage = false,
  children,
  certificationSection = false,
}) {
  // Incase if the card has image then add gap
  const gap = hasImage ? "gap-4" : "";

  // This css will be applied to cards of certification section is true else the other
  const gridcssforcertificationsection = certificationSection
    ? "grid-cols-8 sm:items-center"
    : "sm:grid-cols-8 pb-1";

  return (
    <div
      className={`group relative grid ${gap} ${gridcssforcertificationsection} sm:gap-8 md:gap-4 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50`}
    >
      {/* Background Blur Effect on Hover */}
      <BgBlurEffect />
      {/* Content */}
      {children}
    </div>
  );
}
