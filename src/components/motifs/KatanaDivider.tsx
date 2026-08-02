/**
 * The single recurring section divider — a hairline with one diagonal cut,
 * like a katana stroke. Used between major sections only; not a decoration
 * to sprinkle inside cards.
 */
export function KatanaDivider({ className = "" }: { className?: string }) {
  return <div role="presentation" aria-hidden="true" className={`katana-rule my-12 md:my-16 ${className}`} />;
}
