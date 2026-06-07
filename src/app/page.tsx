import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80";

export default function HomePage() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `linear-gradient(180deg, oklch(0.14 0.025 255 / 0.92) 0%, oklch(0.18 0.03 255 / 0.85) 60%, var(--background) 100%), url(${HERO_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container-page relative pt-24 pb-32 md:pt-36 md:pb-44">
          <div className="max-w-3xl reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Hosting ohne Unterbrechungen
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-white md:text-6xl">
              Leistungsstarkes Hosting <br className="hidden md:block" />
              aus den Alpen.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Sicher, schnell, zuverlässig. AlpineHosting bietet professionelle Hosting-Lösungen für
              Privatkunden und Unternehmen – betrieben in europäischen Rechenzentren.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/leistungen">
                  Pakete ansehen <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="container-page grid grid-cols-2 gap-6 py-8 text-center md:grid-cols-4">
          {[
            ["25+", "aktive Kunden"],
            ["99,9 %", "Uptime-Garantie"],
            ["24/7", "Support"],
            ["EU", "Rechenzentren"],
          ].map(([k, v]) => (
            <div key={v}>
              <div className="text-2xl font-bold text-foreground">{k}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-24">
        <div className="mx-auto max-w-2xl text-center reveal">
          <h2 className="text-3xl font-bold md:text-4xl">Worauf es bei Hosting wirklich ankommt</h2>
          <p className="mt-4 text-muted-foreground">
            Vier Prinzipien, die jede unserer Entscheidungen leiten.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, desc }) => (
            <Card
              key={title}
              className="reveal p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/5 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-page">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
            <div className="reveal max-w-xl">
              <h2 className="text-3xl font-bold md:text-4xl">Unsere Hosting-Lösungen</h2>
              <p className="mt-4 text-muted-foreground">
                Vom einfachen Webhosting bis zum dedizierten Server – wir liefern die passende
                Infrastruktur.
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link href="/leistungen">
                Alle Leistungen ansehen <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map(({ icon: Icon, title, desc, features }) => (
              <Card
                key={title}
                className="reveal flex flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground">
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="mx-auto max-w-2xl text-center reveal">
          <h2 className="text-3xl font-bold md:text-4xl">Was unsere Kunden sagen</h2>
          <p className="mt-4 text-muted-foreground">
            Mehr als 500 Unternehmen vertrauen auf AlpineHosting.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="reveal p-7">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed">{`„${t.text}"`}</p>
              <div className="mt-6">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Kundenlogos */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-16 opacity-70">
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
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-opacity hover:opacity-100"
          >
    <span className="text-sm font-semibold tracking-widest text-muted-foreground">
      MUSTER AG
    </span>
          </Link>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="reveal overflow-hidden rounded-2xl bg-primary px-8 py-14 text-primary-foreground md:px-14">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Bereit für stabiles Hosting?</h2>
              <p className="mt-3 max-w-xl text-primary-foreground/70">
                Sprechen Sie mit unserem Team – wir finden gemeinsam die passende Lösung für Ihr
                Projekt.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/leistungen">Pakete ansehen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
