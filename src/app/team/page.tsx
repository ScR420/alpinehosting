import type { Metadata } from "next";
import { Layout } from "@/components/site/Layout";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Lernen Sie das Team hinter AlpineHosting kennen – Technik, Support und Administration.",
  openGraph: {
    title: "Unser Team – AlpineHosting",
    description: "Erfahrene Spezialisten für Technik, Support und Administration.",
  },
};

const team = [
  {
    name: "Andreas Hofer",
    role: "Geschäftsführung",
    initials: "AH",
    bio: "15+ Jahre Erfahrung im Aufbau europäischer Hosting-Infrastruktur.",
  },
  {
    name: "Mira Lindqvist",
    role: "Lead Engineering",
    initials: "ML",
    bio: "Verantwortlich für unsere Server-Architektur und Automatisierung.",
  },
  {
    name: "Tobias Steiner",
    role: "Head of Support",
    initials: "TS",
    bio: "Sorgt dafür, dass jede Anfrage schnell und kompetent beantwortet wird.",
  },
  {
    name: "Elena Costa",
    role: "Security & Administration",
    initials: "EC",
    bio: "Plant und überwacht unsere Sicherheits- und Backup-Strategien.",
  },
];

export default function TeamPage() {
  return (
    <Layout>
      <section className="container-page py-20 md:py-28">
        <div className="max-w-3xl reveal">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">Team</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Menschen, die hinter Ihrer Infrastruktur stehen.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Ein kleines, eingespieltes Team aus erfahrenen Spezialisten – persönlich erreichbar und
            mit Leidenschaft für stabile Systeme.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <Card
              key={m.name}
              className="reveal p-6 text-center transition-transform duration-300 hover:-translate-y-1"
            >
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
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}
