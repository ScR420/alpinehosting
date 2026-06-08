"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface CountUpProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

/** Client island – rAF count-up, triggers once on viewport entry */
export function CountUp({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1.4,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!isInView) return;

    if (reduced) {
      setDisplay(value);
      return;
    }

    let start: number | null = null;
    let frame = 0;

    const tick = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(eased * value);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, duration, reduced]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals).replace(".", ",") : String(Math.round(display));

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
