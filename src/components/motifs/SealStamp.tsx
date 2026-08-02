/**
 * Hanko-style circular mark for "featured" / status flags. `mark` takes a
 * short kanji or kana string (2 characters reads best in the circle).
 *
 * Renders in the embedded kanji subset (see KanjiWatermark), which only
 * covers 侍技開発結 — stick to those characters, or extend the subset
 * pipeline (src/app/fonts/ShipporiMincho-Kanji.woff2) before using others.
 */
export function SealStamp({
  mark,
  label,
  className = "",
}: {
  mark: string;
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-11 w-11 shrink-0 -rotate-6 items-center justify-center rounded-full border-[1.5px] border-torii-red font-kanji text-lg text-torii-red ${className}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {mark}
    </span>
  );
}
