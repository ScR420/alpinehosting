"use client";

import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Highlight with accent border pulse (e.g. recommended pricing plan) */
  featured?: boolean;
}

/** Client island – scroll reveal + CSS hover lift/glow */
export function InteractiveCard({
  children,
  className,
  delay = 0,
  featured = false,
}: InteractiveCardProps) {
  return (
    <FadeIn delay={delay}>
      <Card
        className={cn(
          "card-interactive",
          featured && "pricing-featured border-accent/50",
          className,
        )}
      >
        {children}
      </Card>
    </FadeIn>
  );
}
