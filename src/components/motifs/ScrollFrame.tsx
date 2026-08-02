import { ReactNode } from "react";

export const ROLLER_GRADIENT = "linear-gradient(to bottom, #4a3524, #241a10 45%, #1a1209 55%, #4a3524)";

/**
 * The shared kakemono chrome — wooden roller bars top and bottom, a thin
 * gold mounting rule framing whatever sits inside. `HangingScroll` adds a
 * cord loop and tassel around this for portrait artwork; other sections can
 * use it directly to frame wider content (e.g. the Experience timeline).
 */
export function ScrollFrame({
  children,
  className = "",
  topBarClassName = "h-3 md:h-4",
  bottomBarClassName = "h-4 md:h-5",
}: {
  children: ReactNode;
  className?: string;
  topBarClassName?: string;
  bottomBarClassName?: string;
}) {
  return (
    <div className={className}>
      <div
        aria-hidden="true"
        className={`relative rounded-full shadow-md ${topBarClassName}`}
        style={{ background: ROLLER_GRADIENT }}
      />

      <div className="border-x-[3px] border-gold-leaf/70 bg-sumi-ink-2 shadow-2xl shadow-black/40">
        <div className="h-1.5 bg-gradient-to-r from-gold-leaf/10 via-gold-leaf/70 to-gold-leaf/10" />
        {children}
        <div className="h-1.5 bg-gradient-to-r from-gold-leaf/10 via-gold-leaf/70 to-gold-leaf/10" />
      </div>

      <div
        aria-hidden="true"
        className={`relative rounded-full shadow-lg ${bottomBarClassName}`}
        style={{ background: ROLLER_GRADIENT }}
      />
    </div>
  );
}
