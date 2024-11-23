import React from "react";
import { images } from "../../../assets/images/images";

type PropTypes = { image: string; certificateimage: boolean };

export default function Image({ image, certificateimage = false }: PropTypes) {
  // for certificate image apply different css
  const imgcss = certificateimage
    ? "z-10 col-span-2 rounded border-2 border-gray-200/10 transition group-hover:border-gray-200/30 sm:col-span-2"
    : "rounded border-2 border-gray-200/10 transition group-hover:border-gray-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1";
  return (
    <img
      alt=""
      loading="lazy"
      width={200}
      height={48}
      decoding="async"
      data-nimg="1"
      className={imgcss}
      style={{ color: "transparent" }}
      srcSet={images[image]}
      src={images[image]}
    />
  );
}
