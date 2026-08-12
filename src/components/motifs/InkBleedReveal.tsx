"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

/**
 * One-shot opacity + blur-in reveal, triggered once on first scroll-into-view.
 * Not a persistent/looping effect — see Sprint 1 plan for why that restraint matters.
 *
 * `initial`/`whileInView` stay constant regardless of `reduceMotion`, on
 * purpose: useReducedMotion() resolves synchronously on the client but is
 * always null during SSR, so an early-return that swaps `motion.div` for a
 * plain `div` based on it causes a server/client hydration mismatch for
 * anyone with the OS preference enabled. Only `transition` duration varies.
 */
export function InkBleedReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(6px)", y: 10 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
