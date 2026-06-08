"use client";

import { HeroBackground } from "@/components/motion/hero-background";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { CtaButton } from "@/components/motion/cta-button";
import type { StaticImageData } from "next/image";

interface HomeHeroProps {
  image: StaticImageData;
}

/** Client island – hero entrance + background effects */
export function HomeHero({ image }: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <HeroBackground image={image} />
      <div className="container-page relative pt-24 pb-32 md:pt-36 md:pb-44">
        <StaggerGroup className="max-w-3xl" immediate>
          <StaggerItem>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Hosting ohne Unterbrechungen
            </span>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-white md:text-6xl">
              Leistungsstarkes Hosting <br className="hidden md:block" />
              aus den Alpen.
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Sicher, schnell, zuverlässig. AlpineHosting bietet professionelle Hosting-Lösungen für
              Privatkunden und Unternehmen – betrieben in europäischen Rechenzentren.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href="/preise">Pakete ansehen</CtaButton>
              <CtaButton href="/kontakt" variant="outline-light" showArrow={false}>
                Kontakt aufnehmen
              </CtaButton>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
