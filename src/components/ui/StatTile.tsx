"use client";

import { motion } from "framer-motion";

type StatTileProps = {
    value: string;
    label: string;
    delay?: number;
};

export function StatTile({ value, label, delay = 0 }: StatTileProps) {
    return (
        <motion.div
            className="border-l-2 border-slate-700 pl-3"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut", delay }}
        >
            <div className="text-2xl font-mono text-orange-500">{value}</div>
            <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>
        </motion.div>
    );
}
