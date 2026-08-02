import Image from "next/image";
import { ScrollFrame } from "./ScrollFrame";

/**
 * A kakemono-style hanging scroll: `ScrollFrame`'s rollers and gold rule,
 * plus a cord loop and weighted tassel specific to displaying a portrait
 * artwork. Built from plain shapes rather than a fabric texture asset —
 * restraint over pattern, consistent with the rest of the motif set.
 */
export function HangingScroll({
  src,
  alt,
  aspectRatio = "660/880",
  className = "",
}: {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-sm md:max-w-none ${className}`}>
      {/* cord loop */}
      <div
        aria-hidden="true"
        className="mx-auto h-4 w-4 rounded-t-full border-2 border-b-0 border-gold-leaf/50"
      />

      <ScrollFrame
        topBarClassName="-mx-3 h-3 md:-mx-4 md:h-4"
        bottomBarClassName="-mx-4 h-4 md:-mx-5 md:h-5"
      >
        <div className="relative w-full overflow-hidden" style={{ aspectRatio }}>
          <Image src={src} alt={alt} fill sizes="(min-width: 768px) 40vw, 90vw" className="object-cover" />
        </div>
      </ScrollFrame>

      {/* weighted tassel */}
      <div aria-hidden="true" className="mx-auto flex w-px flex-col items-center">
        <div className="h-5 w-px bg-gold-leaf/50" />
        <div className="h-2 w-2 rounded-full bg-gold-leaf/50" />
      </div>
    </div>
  );
}
