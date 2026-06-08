import type { Metadata } from "next";
import { Layout } from "@/components/site/Layout";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – AlpineHosting",
  description: "Informationen zum Datenschutz bei AlpineHosting.",
};

export default function DatenschutzPage() {
  return (
    <Layout>
      <section className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold md:text-4xl">Datenschutzerklärung</h1>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">
                1. Allgemeine Hinweise
              </h2>
              <p>
                Diese Website kann genutzt werden, ohne dass personenbezogene Daten angegeben oder
                gespeichert werden müssen. Wir respektieren Ihre Privatsphäre und halten uns an die
                Vorgaben des schweizerischen Datenschutzgesetzes (DSG).
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">
                2. Speicherung von IP-Adressen
              </h2>
              <p>
                Beim Besuch unserer Website speichern wir Ihre IP-Adresse. Weitere personenbezogene
                Daten wie Name, Adresse oder Telefonnummer werden nicht gespeichert. Auch Formulare
                werden nicht serverseitig gespeichert – stattdessen öffnen sie lediglich Ihr
                E-Mail-Programm.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">
                3. Tracking- und Analysetools
              </h2>
              <p>
                Diese Website verwendet derzeit keine Tracking- oder Analysetools von
                Drittanbietern. Sollten wir künftig solche Dienste einsetzen, werden wir diese
                Datenschutzerklärung entsprechend aktualisieren.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">
                4. Kontaktaufnahme per E-Mail
              </h2>
              <p>
                Wenn Sie uns über das Kontaktformular kontaktieren, wird Ihre Nachricht direkt über
                Ihr E-Mail-Programm gesendet. Diese E-Mails werden ausschliesslich zur Bearbeitung
                Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">5. Ihre Rechte</h2>
              <p>
                Da wir keine weiteren personenbezogenen Daten speichern, entfällt die Notwendigkeit
                eines Auskunfts- oder Löschungsantrags. Sollten Sie dennoch Fragen zum Datenschutz
                haben, kontaktieren Sie uns gerne:
              </p>

              <p className="mt-4">
                <a
                  href="mailto:support@alpinehosting.ch"
                  className="text-foreground underline underline-offset-4 hover:text-accent transition-colors"
                >
                  support@alpinehosting.ch
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-3">6. Änderungen</h2>
              <p>
                Wir behalten uns das Recht vor, diese Datenschutzerklärung bei Bedarf anzupassen,
                insbesondere bei gesetzlichen Änderungen. Die jeweils aktuelle Version finden Sie
                immer auf dieser Seite.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
