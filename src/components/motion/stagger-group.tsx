"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/motion/config";
import { heroTransition } from "@/lib/motion/transitions";

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  immediate?: boolean;
}

/** Client island – staggers direct StaggerItem children */
export function StaggerGroup({ children, className, immediate = false }: StaggerGroupProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate={immediate ? "visible" : undefined}
      whileInView={immediate ? undefined : "visible"}
      viewport={immediate ? undefined : VIEWPORT_ONCE}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={fadeUp} transition={heroTransition(false)}>
      {children}
    </motion.div>
  );
}
