import React from "react";

/**
 *
 * @returns Card Body
 */
export default function Body({
  haseImage = false,
  children,
  certificateimage = false,
}) {
  // Incase of image, add order on small screen
  const order = haseImage ? "sm:order-2" : "";

  // Incase of certificate section use this css
  const colspan = certificateimage ? "col-span-6" : "sm:col-span-6";
  return <div className={`z-10 ${order} ${colspan}`}>{children}</div>;
}
