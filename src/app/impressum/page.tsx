import type { Metadata } from "next";
import { Layout } from "@/components/site/Layout";

export const metadata: Metadata = {
  title: "Impressum – AlpineHosting",
  description: "Impressum und rechtliche Hinweise von AlpineHosting.",
};

export default function ImpressumPage() {
  return (
    <Layout>
      <section className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold md:text-4xl">Impressum</h1>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">
                Verantwortlich für den Inhalt dieser Website
              </h2>

              <address className="not-italic space-y-1">
                <p>Raffael Schären</p>
                <p>Rietweg 31</p>
                <p>8477 Oberstammheim</p>
                <p>Schweiz</p>

                <p className="pt-2">
                  E-Mail:{" "}
                  <a
                    href="mailto:support@alpinehosting.ch"
                    className="text-foreground underline underline-offset-4 hover:text-accent transition-colors"
                  >
                    support@alpinehosting.ch
                  </a>
                </p>
              </address>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">
                Haftungsausschluss
              </h2>

              <p>
                Alle Inhalte dieser Website wurden mit grösster Sorgfalt
                erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                der Inhalte übernehmen wir jedoch keine Gewähr.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">
                Urheberrecht
              </h2>

              <p>
                Die auf dieser Website veröffentlichten Inhalte und Werke
                unterliegen dem schweizerischen Urheberrecht. Die
                Vervielfältigung, Bearbeitung oder Verbreitung ist ohne
                schriftliche Zustimmung nicht gestattet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}


