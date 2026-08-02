type TechChipProps = {
    label: string;
};

export function TechChip({ label }: TechChipProps) {
    return (
        <span className="text-xs font-mono px-2.5 py-1 rounded-full border transition-colors bg-muted text-muted-foreground border-border hover:border-accent/60 hover:text-accent">
            {label}
        </span>
    );
}
