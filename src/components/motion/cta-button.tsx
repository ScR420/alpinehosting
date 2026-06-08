"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaButtonProps extends Omit<ComponentProps<typeof Link>, "children"> {
  children: React.ReactNode;
  showArrow?: boolean;
  size?: "default" | "sm" | "lg";
  variant?: "accent" | "outline-light";
}

/** Client island – accent CTA with CSS glow + animated arrow (transform only) */
export function CtaButton({
  children,
  showArrow = true,
  size = "lg",
  variant = "accent",
  className,
  ...linkProps
}: CtaButtonProps) {
  return (
    <Button
      asChild
      size={size}
      className={cn(
        "btn-cta group",
        variant === "accent" && "bg-accent text-accent-foreground hover:bg-accent/90",
        variant === "outline-light" &&
          "border border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white",
        className,
      )}
    >
      <Link {...linkProps}>
        {children}
        {showArrow && (
          <ArrowRight className="arrow-shift ml-1 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        )}
      </Link>
    </Button>
  );
}
