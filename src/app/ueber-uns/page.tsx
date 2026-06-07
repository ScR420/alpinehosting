import type { Metadata } from "next";
import { Layout } from "@/components/site/Layout";
import { Card } from "@/components/ui/card";
import { Shield, Zap, Activity, Headphones, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "AlpineHosting steht für Performance, Sicherheit und persönlichen Support – mit Wurzeln im Herzen der Alpen.",
  openGraph: {
    title: "Über AlpineHosting",
    description: "Unsere Werte: Sicherheit, Geschwindigkeit, Stabilität und Support.",
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

export default function UeberUnsPage() {
  return (
    <Layout>
      <section className="container-page py-20 md:py-28">
        <div className="max-w-3xl reveal">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Über uns
          </span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Hosting mit Haltung – aus dem Herzen Europas.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            AlpineHosting wurde mit einem klaren Ziel gegründet: stabile, sichere und ehrliche
            Hosting-Lösungen anzubieten. Wir verbinden technische Exzellenz mit der Verlässlichkeit
            und Sorgfalt, für die unsere Region seit Jahrhunderten steht.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
          <div className="reveal">
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
          </div>
          <Card className="reveal p-8">
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
        </div>

        <div className="mt-24">
          <div className="max-w-xl reveal">
            <h2 className="text-3xl font-bold md:text-4xl">Unsere Werte</h2>
            <p className="mt-3 text-muted-foreground">
              Vier Prinzipien, die unser tägliches Handeln bestimmen.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <Card
                key={title}
                className="reveal p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/5 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
