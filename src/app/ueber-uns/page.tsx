import type { Metadata } from "next";
import { Layout } from "@/components/site/Layout";
import { FadeIn } from "@/components/motion/fade-in";
import { InteractiveCard } from "@/components/motion/interactive-card";
import { FeatureCard } from "@/components/site/feature-card";
import { teamMembers } from "@/data/team";
import { Card } from "@/components/ui/card";
import { Shield, Zap, Activity, Headphones, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "AlpineHosting – gegründet 2026 in der Schweiz. Wir bauen Hosting, das funktioniert, ohne Kompromisse.",
  openGraph: {
    title: "Über AlpineHosting",
    description: "Wer wir sind, wofür wir stehen und warum wir anders arbeiten.",
  },
};

const values = [
  {
    icon: Shield,
    title: "Sicherheit",
    desc: "DSGVO-konform by default. Backups verschlüsselt, DDoS-Schutz inklusive – keine Extras, die separat kosten.",
  },
  {
    icon: Zap,
    title: "Geschwindigkeit",
    desc: "NVMe-SSDs und modernes Caching als Standard. Nicht als Aufpreis, nicht auf Anfrage.",
  },
  {
    icon: Activity,
    title: "Stabilität",
    desc: "Redundante Systeme, 24/7-Monitoring, 99,9 % Uptime – schriftlich garantiert.",
  },
  {
    icon: Headphones,
    title: "Support",
    desc: "Kein Bot, kein Ticket-Roulette. Echte Techniker, direkt erreichbar, die dein Setup kennen.",
  },
];

const milestones = [
  {
    year: "2026",
    label: "Gründung",
    desc: "AlpineHosting startet mit einem klaren Ziel: kein Massenmarkt, sondern Kunden, denen wir wirklich helfen können.",
  },
  {
    year: "2026",
    label: "Erste Rechenzentren",
    desc: "Eigene Infrastruktur in der Schweiz und Deutschland – streng nach europäischem Datenschutzrecht.",
  },
  {
    year: "Heute",
    label: "Wachstum",
    desc: "Ein kleines, eingespieltes Team. Wir wachsen bewusst langsam – Qualität vor Quantität.",
  },
];

export default function UeberUnsPage() {
  return (
    <Layout>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="container-page pt-20 pb-0 md:pt-28">
        <FadeIn className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium uppercase tracking-widest text-accent">
              Zürich · Schweiz
            </span>
          </div>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Hosting mit Haltung – aus dem Herzen Europas.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            AlpineHosting wurde 2026 gegründet mit einem klaren Ziel: stabile, sichere und
            ehrliche Hosting-Lösungen, die ohne Kompromisse zwischen Preis, Leistung und Support
            auskommen.
          </p>
        </FadeIn>
      </section>

      {/* ── Manifest-Streifen ─────────────────────────────────────── */}
      <div className="mt-16 bg-primary text-primary-foreground py-12 px-0">
        <div className="container-page">
          <FadeIn>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { num: "100%", label: "Daten in Europa" },
                { num: "24/7", label: "Techniker erreichbar" },
                { num: "99,9%", label: "Uptime-Garantie" },
              ].map(({ num, label }) => (
                <div key={label} className="border-l-2 border-primary-foreground/20 pl-6">
                  <div className="text-4xl font-bold tracking-tight">{num}</div>
                  <div className="mt-1 text-sm text-primary-foreground/60 uppercase tracking-widest">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <section className="container-page py-20 md:py-28 space-y-28">

        {/* ── Warum wir ─────────────────────────────────────────────── */}
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <FadeIn>
            <span className="text-sm font-medium uppercase tracking-widest text-accent">
              Unsere Geschichte
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl leading-tight">
              Frisch gegründet.<br />Klare Haltung.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              AlpineHosting ist 2026 mit einem klaren Fokus gestartet: Infrastruktur, die zuverlässig
              läuft – und ein Support, der wirklich antwortet. Keine ausgelagerten Callcenter, keine
              Standardantworten, sondern Techniker, die dein Setup kennen.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Wir verbinden technische Tiefe mit persönlicher Erreichbarkeit – und betreiben unsere
              Infrastruktur ausschliesslich nach europäischen Datenschutzstandards.
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-accent group cursor-default">
              <span>Rechenzentren in der Schweiz & Deutschland</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </FadeIn>

          {/* Timeline */}
          <FadeIn delay={0.1}>
            <div className="relative space-y-0">
              {milestones.map((m, i) => (
                <div key={i} className="relative flex gap-6 pb-8 last:pb-0">
                  {/* vertical line */}
                  {i < milestones.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-border" />
                  )}
                  {/* dot */}
                  <div className="relative z-10 mt-1 h-10 w-10 shrink-0 rounded-full bg-primary flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                  </div>
                  <div className="pt-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-accent">
                        {m.year}
                      </span>
                      <span className="text-base font-semibold">{m.label}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* ── Werte ─────────────────────────────────────────────────── */}
        <div>
          <FadeIn className="max-w-xl">
            <span className="text-sm font-medium uppercase tracking-widest text-accent">
              Werte
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Vier Prinzipien.<br />Keine Kompromisse.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Was wir versprechen, halten wir – unabhängig davon, wie gross oder klein dein Projekt ist.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="relative">
                <span className="absolute -top-3 -left-1 text-6xl font-bold text-border/60 select-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative pt-8">
                  <FeatureCard {...v} delay={i * 0.08} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Team ──────────────────────────────────────────────────── */}
        <div id="team" className="scroll-mt-24">
          <FadeIn className="max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-widest text-accent">Team</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Klein, eingespielt,{" "}
              <span className="text-muted-foreground font-light italic">persönlich.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
            Direkter Kontakt mit dem Team, das die Infrastruktur betreibt.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((m, i) => (
              <InteractiveCard key={m.name} delay={i * 0.08} className="p-6 text-center">
                <div
                  className="mx-auto grid h-20 w-20 place-items-center rounded-full text-xl font-semibold text-primary-foreground"
                  style={{
                    background: "linear-gradient(135deg, var(--primary), oklch(0.35 0.06 255))",
                  }}
                >
                  {m.initials}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{m.name}</h3>
                <div className="text-xs uppercase tracking-wider text-accent">{m.role}</div>
                <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
              </InteractiveCard>
            ))}
          </div>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <FadeIn>
          <Card className="card-interactive overflow-hidden">
            <div className="relative p-10 md:p-16">
              {/* decorative background text */}
              <span
                className="pointer-events-none absolute right-8 top-4 select-none text-[8rem] font-bold leading-none text-border/20 md:text-[12rem]"
                aria-hidden
              >
                /
              </span>
              <div className="relative max-w-lg">
                <span className="text-sm font-medium uppercase tracking-widest text-accent">
                  Bereit?
                </span>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Dein Projekt verdient besseres Hosting.
                </h2>
                <p className="mt-4 text-muted-foreground">
                    Schreib uns direkt – wir antworten dir zeitnah.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/kontakt"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Kontakt aufnehmen
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/preise"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                  >
                    Pläne ansehen
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </FadeIn>

      </section>
    </Layout>
  );
}
