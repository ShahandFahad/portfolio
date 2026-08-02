"use client";

import { motion, useReducedMotion } from "framer-motion";

type StatTileProps = {
    value: string;
    label: string;
    delay?: number;
};

export function StatTile({ value, label, delay = 0 }: StatTileProps) {
    const reduceMotion = useReducedMotion();
    return (
        <motion.div
            className="border-l-2 border-accent/40 pl-3"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut", delay: reduceMotion ? 0 : delay }}
        >
            <div className="text-2xl font-mono text-accent">{value}</div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
        </motion.div>
    );
}
