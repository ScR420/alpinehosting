import type { Metadata } from "next";
import { Layout } from "@/components/site/Layout";
import { FadeIn } from "@/components/motion/fade-in";
import { InteractiveCard } from "@/components/motion/interactive-card";
import { FeatureCard } from "@/components/site/feature-card";
import { teamMembers } from "@/data/team";
import { Card } from "@/components/ui/card";
import { Shield, Zap, Activity, Headphones, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "AlpineHosting steht für Performance, Sicherheit und persönlichen Support – mit Wurzeln im Herzen der Alpen.",
  openGraph: {
    title: "Über AlpineHosting",
    description: "Unsere Werte, Geschichte und das Team hinter Ihrer Infrastruktur.",
  },
};

const values = [
  {
    icon: Shield,
    title: "Sicherheit",
    desc: "Verschlüsselte Backups, DDoS-Schutz und strikte Datenschutz-Standards nach europäischem Recht.",
  },
  {
    icon: Zap,
    title: "Geschwindigkeit",
    desc: "NVMe-SSDs, modernes Caching und ein redundantes Backbone für minimale Latenz.",
  },
  {
    icon: Activity,
    title: "Stabilität",
    desc: "Redundante Systeme und ein 24/7-Monitoring sorgen für 99,9 % Uptime-Garantie.",
  },
  {
    icon: Headphones,
    title: "Support",
    desc: "Persönliche Ansprechpartner mit Technik-Hintergrund – kein Ticket-Roulette.",
  },
];

/** Server Component – Team integriert unter #team */
export default function UeberUnsPage() {
  return (
    <Layout>
      <section className="container-page py-20 md:py-28">
        <FadeIn className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">Über uns</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Hosting mit Haltung – aus dem Herzen Europas.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            AlpineHosting wurde mit einem klaren Ziel gegründet: stabile, sichere und ehrliche
            Hosting-Lösungen anzubieten. Wir verbinden technische Exzellenz mit der Verlässlichkeit
            und Sorgfalt, für die unsere Region seit Jahrhunderten steht.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> Zürich · Schweiz
            </div>
            <h2 className="mt-4 text-2xl font-semibold md:text-3xl">Die Idee „aus den Alpen“</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Die Alpen stehen für Beständigkeit, Klarheit und Kraft. Eigenschaften, die wir auch in
              unserer Infrastruktur leben: redundante Systeme, durchdachte Prozesse und ein Team,
              das technische Tiefe mit gelassener Verlässlichkeit verbindet.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Unsere Rechenzentren befinden sich in der Schweiz und in Deutschland – streng nach
              europäischen Datenschutzstandards betrieben. Daten unserer Kunden bleiben dort, wo sie
              hingehören: in Europa.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Card className="card-interactive p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  ["2018", "Gegründet"],
                  ["500+", "Aktive Kunden"],
                  ["12", "Mitarbeitende"],
                  ["3", "Rechenzentren"],
                ].map(([k, v]) => (
                  <div key={v}>
                    <div className="text-3xl font-bold text-primary">{k}</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>
        </div>

        <div className="mt-24">
          <FadeIn className="max-w-xl">
            <h2 className="text-3xl font-bold md:text-4xl">Unsere Werte</h2>
            <p className="mt-3 text-muted-foreground">
              Vier Prinzipien, die unser tägliches Handeln bestimmen.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <FeatureCard key={v.title} {...v} delay={i * 0.08} />
            ))}
          </div>
        </div>

        {/* Team – ehemals /team */}
        <div id="team" className="mt-24 scroll-mt-24">
          <FadeIn className="max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-widest text-accent">Team</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Menschen, die hinter Ihrer Infrastruktur stehen.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ein kleines, eingespieltes Team aus erfahrenen Spezialisten – persönlich erreichbar und
              mit Leidenschaft für stabile Systeme.
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
      </section>
    </Layout>
  );
}
