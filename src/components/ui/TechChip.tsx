type TechChipProps = {
    label: string;
};

export function TechChip({ label }: TechChipProps) {
    return (
        <span className="text-xs font-mono bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700/50">
            {label}
        </span>
    );
}
