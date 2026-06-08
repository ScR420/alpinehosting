import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/site/Layout";
import { HomeHero } from "@/components/home/home-hero";
import { HomeStats } from "@/components/home/home-stats";
import { FeatureCard } from "@/components/site/feature-card";
import { FadeIn } from "@/components/motion/fade-in";
import { InteractiveCard } from "@/components/motion/interactive-card";
import { CtaButton } from "@/components/motion/cta-button";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Zap,
  Activity,
  Headphones,
  ArrowRight,
  Server,
  Globe,
  HardDrive,
  Check,
  Star,
} from "lucide-react";
import osloTailorLogo from "@/assets/oslotailor.png";
import heroAlps from "@/assets/hero-alps.jpg";

export const metadata: Metadata = {
  title: "AlpineHosting – Leistungsstarkes Hosting aus den Alpen",
  description:
    "Webhosting, VPS- und Dedicated Server aus den Alpen. Sicher, schnell und zuverlässig – mit 99,9 % Uptime-Garantie.",
};

const values = [
  {
    icon: Shield,
    title: "Sicherheit",
    desc: "DDoS-Schutz, verschlüsselte Backups und ISO-konforme Rechenzentren.",
  },
  {
    icon: Zap,
    title: "Geschwindigkeit",
    desc: "NVMe-SSD-Speicher, HTTP/3 und ein globales Backbone-Netzwerk.",
  },
  {
    icon: Activity,
    title: "Stabilität",
    desc: "99,9 % Uptime-Garantie – redundant, georedundant überwacht.",
  },
  {
    icon: Headphones,
    title: "Support",
    desc: "Persönlicher Support von echten Technikern, rund um die Uhr.",
  },
];

const products = [
  {
    icon: Globe,
    title: "Webhosting",
    desc: "Ideal für Websites, Blogs und Online-Shops.",
    features: ["NVMe SSD", "Kostenlose SSL", "Tägliche Backups"],
  },
  {
    icon: Server,
    title: "VPS-Server",
    desc: "Virtuelle Server mit voller Root-Kontrolle.",
    features: ["Skalierbare Ressourcen", "KVM-Virtualisierung", "DDoS-Schutz"],
  },
  {
    icon: HardDrive,
    title: "Dedicated Server",
    desc: "Eigene Hardware, maximale Performance.",
    features: ["Enterprise CPUs", "10 Gbit/s Uplink", "24/7 On-Site"],
  },
];

const testimonials = [
  {
    name: "Mona",
    role: "Geschäftsführerin, Oslo Tailor",
    text: "Sehr stabiler Service und ein schneller, kompetenter Support. Genau das, was wir gesucht haben.",
  },
  {
    name: "Markus Keller",
    role: "CTO, NordShop AG",
    text: "Beste Performance für unseren Shop – seit der Migration deutlich kürzere Ladezeiten.",
  },
  {
    name: "Sophie Vogt",
    role: "Founder, Vogt Studio",
    text: "Endlich ein Hoster, der hält was er verspricht. Sauber, sicher und ehrlich.",
  },
];

/** Server Component – animation via small client islands */
export default function HomePage() {
  return (
    <Layout>
      <HomeHero image={heroAlps} />
      <HomeStats />

      <section className="container-page py-24">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Worauf es bei Hosting wirklich ankommt</h2>
          <p className="mt-4 text-muted-foreground">
            Vier Prinzipien, die jede unserer Entscheidungen leiten.
          </p>
        </FadeIn>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <FeatureCard key={v.title} {...v} delay={i * 0.08} />
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-page">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
            <FadeIn className="max-w-xl">
              <h2 className="text-3xl font-bold md:text-4xl">Unsere Hosting-Lösungen</h2>
              <p className="mt-4 text-muted-foreground">
                Vom einfachen Webhosting bis zum dedizierten Server – wir liefern die passende
                Infrastruktur.
              </p>
            </FadeIn>
            <Button asChild variant="ghost" className="btn-interactive">
              <Link href="/preise">
                Alle Preise ansehen <ArrowRight className="arrow-shift ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map(({ icon: Icon, title, desc, features }, i) => (
              <InteractiveCard key={title} delay={i * 0.1} className="flex flex-col p-7">
                <div className="icon-hover grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" /> {f}
                    </li>
                  ))}
                </ul>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Was unsere Kunden sagen</h2>
          <p className="mt-4 text-muted-foreground">
            Mehr als 500 Unternehmen vertrauen auf AlpineHosting.
          </p>
        </FadeIn>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <InteractiveCard key={t.name} delay={i * 0.1} className="p-7">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed">{`„${t.text}"`}</p>
              <div className="mt-6">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </InteractiveCard>
          ))}
        </div>

        <FadeIn className="mt-16 flex flex-wrap items-center justify-center gap-16 opacity-70">
          <Link
            href="https://oslo-tailor.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-opacity hover:opacity-100"
          >
            <Image
              src={osloTailorLogo}
              alt="Oslo Tailor"
              height={48}
              className="w-auto object-contain"
            />
            <span className="text-sm font-semibold tracking-widest text-muted-foreground">
              OSLO TAILOR
            </span>
          </Link>
          <span className="text-sm font-semibold tracking-widest text-muted-foreground">
            MUSTER AG
          </span>
        </FadeIn>
      </section>

      <section className="container-page pb-24">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl bg-primary px-8 py-14 text-primary-foreground md:px-14">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">Bereit für stabiles Hosting?</h2>
                <p className="mt-3 max-w-xl text-primary-foreground/70">
                  Sprechen Sie mit unserem Team – wir finden gemeinsam die passende Lösung für Ihr
                  Projekt.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <CtaButton href="/kontakt" showArrow={false}>
                  Kontakt aufnehmen
                </CtaButton>
                <CtaButton href="/preise" variant="outline-light">
                  Pakete ansehen
                </CtaButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
}
