"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { routeTransition } from "@/lib/motion/transitions";

interface PageTransitionProps {
  children: ReactNode;
}

/** Client island – 200ms route fade-in via template.tsx */
export function PageTransition({ children }: PageTransitionProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={routeTransition(!!reduced)}
    >
      {children}
    </motion.div>
  );
}
