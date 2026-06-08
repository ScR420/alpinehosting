"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { StaticImageData } from "next/image";

interface HeroBackgroundProps {
  image: StaticImageData;
}

/** Client island – CSS gradient drift + subtle mountain parallax (transform only) */
export function HeroBackground({ image }: HeroBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "8%"]);

  return (
    <div ref={ref} className="absolute inset-0 -z-10 overflow-hidden">
      {/* Drifting gradient overlay – pure CSS, no JS loop */}
      <div className="hero-gradient-drift absolute inset-0" aria-hidden />

      {/* Mountain silhouette with scroll parallax */}
      <motion.div className="absolute inset-0" style={{ y: imageY }} aria-hidden>
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.025_255/0.88)] via-[oklch(0.18_0.03_255/0.82)] to-background" />
      </motion.div>
    </div>
  );
}
