import { ReactNode } from "react";

type TerminalPromptProps = {
    prefix?: string;
    styles?: string;
    children: ReactNode;
};

export function TerminalPrompt({ prefix = "$", styles = "", children }: TerminalPromptProps) {
    return (
        <p className={`font-mono ${styles}`}>
            <span className="text-orange-500">{prefix}</span> {children}
            <span className="animate-blink text-orange-500">_</span>
        </p>
    );
}
