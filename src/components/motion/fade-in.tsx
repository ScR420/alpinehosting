"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/motion/config";
import { revealTransition } from "@/lib/motion/transitions";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** When true, animates on mount (e.g. hero). When false, triggers on scroll into view. */
  immediate?: boolean;
}

/** Client island – GPU-only fade-up reveal */
export function FadeIn({ children, className, delay = 0, immediate = false }: FadeInProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      animate={immediate ? "visible" : undefined}
      whileInView={immediate ? undefined : "visible"}
      viewport={immediate ? undefined : VIEWPORT_ONCE}
      transition={{ ...revealTransition(false), delay }}
    >
      {children}
    </motion.div>
  );
}
