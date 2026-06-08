import type { LucideIcon } from "lucide-react";
import { InteractiveCard } from "@/components/motion/interactive-card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  delay?: number;
}

/** Server Component shell – animation delegated to InteractiveCard client island */
export function FeatureCard({ icon: Icon, title, desc, delay = 0 }: FeatureCardProps) {
  return (
    <InteractiveCard delay={delay} className="p-6">
      <div className="icon-hover grid h-11 w-11 place-items-center rounded-lg bg-primary/5 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </InteractiveCard>
  );
}
