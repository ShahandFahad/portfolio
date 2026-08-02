/**
 * Oversized, low-opacity single-character background mark. One per section,
 * drawn from a fixed set — texture, not decoration to be read.
 *
 * The glyph set is deliberately small: each character is embedded as a hand
 * subset of Shippori Mincho (src/app/fonts/ShipporiMincho-Kanji.woff2, ~2KB)
 * so rendering never depends on the visitor having a CJK system font
 * installed. Adding a glyph here means re-running the subset pipeline first.
 */
const KANJI = {
  samurai: "侍", // bushi — warrior
  craft: "技", // waza — skill/craft
  build: "開発", // kaihatsu — development
  bond: "結", // musubu — to tie/conclude
} as const;

export function KanjiWatermark({
  glyph,
  className = "",
}: {
  glyph: keyof typeof KANJI;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none select-none font-kanji leading-none text-foreground/[0.04] ${className}`}
    >
      {KANJI[glyph]}
    </span>
  );
}
