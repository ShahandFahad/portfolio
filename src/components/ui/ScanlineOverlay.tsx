export function ScanlineOverlay() {
    return (
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 scanlines opacity-60" />
            <div className="absolute inset-x-0 top-0 h-24 scanline-sweep bg-gradient-to-b from-neon-cyan/10 via-neon-cyan/0 to-transparent" />
        </div>
    );
}
