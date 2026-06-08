import type { Metadata } from "next";
import Link from "next/link";
import { Layout } from "@/components/site/Layout";
import { FadeIn } from "@/components/motion/fade-in";
import { InteractiveCard } from "@/components/motion/interactive-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Referenzprojekte und Kundenerfolge – wie AlpineHosting Unternehmen mit stabiler Infrastruktur unterstützt.",
  openGraph: {
    title: "Projekte – AlpineHosting",
    description: "Ausgewählte Projekte aus E-Commerce, SaaS und Agentur-Umfeld.",
  },
};

/** Server Component */
export default function ProjektePage() {
  return (
    <Layout>
      <section className="container-page py-20 md:py-28">
        <FadeIn className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Projekte
          </span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Infrastruktur, die im Hintergrund überzeugt.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Ein Auszug aus Projekten, die wir betreuen – von schnellen Shop-Migrationen bis zu
            hochverfügbaren SaaS-Plattformen.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <InteractiveCard key={project.name} delay={i * 0.1} className="flex flex-col p-8">
              <span className="text-xs font-medium uppercase tracking-widest text-accent">
                {project.category}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{project.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {m}
                  </span>
                ))}
              </div>
              {project.url && (
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-interactive mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  Projekt ansehen <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              )}
            </InteractiveCard>
          ))}
        </div>

        <FadeIn className="mt-20 rounded-2xl bg-primary px-8 py-12 text-primary-foreground md:px-12">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Ihr Projekt als Nächstes?</h2>
              <p className="mt-3 max-w-lg text-primary-foreground/70">
                Erzählen Sie uns von Ihrem Vorhaben – wir zeigen Ihnen, wie stabile Infrastruktur
                Ihr Business voranbringt.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="btn-cta bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/kontakt">
                Projekt besprechen <ArrowRight className="arrow-shift ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
}
