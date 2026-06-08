import type { Metadata } from "next";
import Link from "next/link";
import { Layout } from "@/components/site/Layout";
import { FadeIn } from "@/components/motion/fade-in";
import { InteractiveCard } from "@/components/motion/interactive-card";
import { Button } from "@/components/ui/button";
import { pricingPlans, productOverview } from "@/data/pricing";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Preise",
  description:
    "Transparente Hosting-Preise – Starter, Business und Enterprise. Alle Pakete mit 99,9 % Uptime-Garantie.",
  openGraph: {
    title: "Preise – AlpineHosting",
    description:
      "Hosting-Pakete für Privatkunden und Unternehmen – fair kalkuliert, ohne versteckte Kosten.",
  },
};

/** Server Component */
export default function PreisePage() {
  return (
    <Layout>
      <section className="container-page py-20 md:py-28">
        <FadeIn className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">Preise</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Klare Preise. Keine Überraschungen.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Wählen Sie das Paket, das zu Ihrem Projekt passt – jederzeit skalierbar. Alle Preise in
            CHF, monatlich kündbar.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <InteractiveCard
                key={plan.id}
                delay={i * 0.1}
                featured={plan.recommended}
                className="relative flex flex-col p-8"
              >
                {plan.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Empfohlen
                  </span>
                )}
                <div className="icon-hover grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold">CHF {plan.price}</span>
                  <span className="text-sm text-muted-foreground"> / {plan.period}</span>
                </div>
                <ul className="mt-6 flex-1 space-y-2 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-accent" /> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="btn-interactive mt-8 w-full"
                  variant={plan.recommended ? "default" : "outline"}
                >
                  <Link href="/kontakt">Jetzt anfragen</Link>
                </Button>
              </InteractiveCard>
            );
          })}
        </div>

        <div className="mt-24">
          <FadeIn className="max-w-xl">
            <h2 className="text-3xl font-bold md:text-4xl">Alle Produkte im Überblick</h2>
            <p className="mt-3 text-muted-foreground">
              Neben unseren Paketen bieten wir individuelle Konfigurationen und Zusatzservices.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {productOverview.map(({ icon: Icon, title, desc, features }, i) => (
              <InteractiveCard key={title} delay={i * 0.08} className="p-6">
                <div className="icon-hover grid h-10 w-10 place-items-center rounded-lg bg-primary/5 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <ul className="mt-4 space-y-1 text-sm">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-accent" /> {f}
                    </li>
                  ))}
                </ul>
              </InteractiveCard>
            ))}
          </div>
        </div>

        <FadeIn className="mt-20 rounded-2xl border border-border bg-secondary/40 p-10 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Sie sind unsicher, welches Paket passt?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Unser Team berät Sie unverbindlich und ehrlich – ohne Verkaufsdruck.
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild size="lg" className="btn-interactive">
              <Link href="/kontakt">
                Kontakt aufnehmen <ArrowRight className="arrow-shift ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
}
