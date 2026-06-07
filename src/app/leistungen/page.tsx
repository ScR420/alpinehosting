import type { Metadata } from "next";
import Link from "next/link";
import { Layout } from "@/components/site/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Server, HardDrive, Gamepad2, Tag, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Webhosting, VPS, Dedicated Server, Domains und Game Server Hosting – alle Lösungen im Überblick.",
  openGraph: {
    title: "Leistungen – AlpineHosting",
    description:
      "Hosting-Produkte für Privatkunden und Unternehmen, betrieben in europäischen Rechenzentren.",
  },
};

const products = [
  {
    icon: Globe,
    title: "Webhosting",
    desc: "Schnelles, sicheres Hosting für Websites, Blogs und Online-Shops – inklusive kostenloser SSL-Zertifikate.",
    features: [
      "NVMe SSD-Speicher",
      "Kostenlose SSL",
      "Tägliche Backups",
      "PHP 8.x & MariaDB",
      "Cron-Jobs & SSH",
    ],
  },
  {
    icon: Server,
    title: "VPS-Server",
    desc: "Virtuelle Server mit voller Root-Kontrolle, flexibel skalierbar nach Ihren Anforderungen.",
    features: [
      "KVM-Virtualisierung",
      "Skalierbare CPU & RAM",
      "DDoS-Schutz inklusive",
      "Snapshot-Backups",
      "Linux & Windows",
    ],
  },
  {
    icon: HardDrive,
    title: "Dedicated Server",
    desc: "Dedizierte Hardware für höchste Performance und maximale Kontrolle – ideal für anspruchsvolle Workloads.",
    features: [
      "Enterprise Intel/AMD CPUs",
      "ECC RAM, NVMe SSD",
      "10 Gbit/s Uplink",
      "24/7 On-Site Support",
      "BGP & eigene IP-Range",
    ],
  },
  {
    icon: Tag,
    title: "Domain Services",
    desc: "Über 500 Endungen verfügbar – inklusive WHOIS-Schutz und einfacher DNS-Verwaltung.",
    features: [
      ".ch / .de / .com / .eu",
      "DNSSEC",
      "Free WHOIS Privacy",
      "E-Mail-Forwarding",
      "Transparente Preise",
    ],
  },
  {
    icon: Gamepad2,
    title: "Game Server Hosting",
    desc: "Latenzarme Game Server für die beliebtesten Titel – mit One-Click-Setup und DDoS-Schutz.",
    features: [
      "Minecraft, CS2, Rust u.v.m.",
      "DDoS-Schutz inklusive",
      "Mod & Plugin Manager",
      "Niedrige Latenz EU-weit",
      "24/7 Verfügbarkeit",
    ],
  },
];

export default function LeistungenPage() {
  return (
    <Layout>
      <section className="container-page py-20 md:py-28">
        <div className="max-w-3xl reveal">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Leistungen
          </span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Hosting-Lösungen für jeden Anspruch.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Von der ersten Website bis zur skalierbaren Server-Infrastruktur. Alle Produkte werden
            in europäischen Rechenzentren betrieben und kommen mit 99,9 % Uptime-Garantie.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {products.map(({ icon: Icon, title, desc, features }) => (
            <Card
              key={title}
              className="reveal flex flex-col p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <ul className="mt-6 grid gap-2 text-sm">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" /> {f}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="reveal mt-20 rounded-2xl border border-border bg-secondary/40 p-10 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Sie sind unsicher, welche Lösung passt?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Unser Team berät Sie unverbindlich und ehrlich – ohne Verkaufsdruck.
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild size="lg">
              <Link href="/kontakt">
                Kontakt aufnehmen <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
