"use client";

import { CountUp } from "@/components/motion/count-up";
import { FadeIn } from "@/components/motion/fade-in";

const stats = [
  { type: "count" as const, value: 25, suffix: "+", label: "aktive Kunden" },
  { type: "count" as const, value: 99.9, decimals: 1, suffix: " %", label: "Uptime-Garantie" },
  { type: "static" as const, value: "24/7", label: "Support" },
  { type: "static" as const, value: "EU", label: "Rechenzentren" },
];

/** Client island – animated stats bar with count-up */
export function HomeStats() {
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="container-page grid grid-cols-2 gap-6 py-8 text-center md:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.06}>
            <div>
              <div className="text-2xl font-bold text-foreground">
                {stat.type === "count" ? (
                  <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
