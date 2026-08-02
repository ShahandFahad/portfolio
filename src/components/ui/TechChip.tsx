type TechChipProps = {
    label: string;
    /** Use inside permanently-dark surfaces (e.g. ScrollFrame) that don't
     * follow the page theme — fixed palette colors instead of theme tokens,
     * so the chip stays legible even when the page itself is on light mode. */
    fixedDark?: boolean;
};

export function TechChip({ label, fixedDark = false }: TechChipProps) {
    return (
        <span
            className={`text-xs font-mono px-2.5 py-1 rounded-full border transition-colors ${
                fixedDark
                    ? "bg-sumi-ink-3 text-ink-grey border-washi-white/10 hover:border-torii-red/60 hover:text-torii-red"
                    : "bg-muted text-muted-foreground border-border hover:border-accent/60 hover:text-accent"
            }`}
        >
            {label}
        </span>
    );
}
