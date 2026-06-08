import type { Metadata } from "next";
import { Layout } from "@/components/site/Layout";

export const metadata: Metadata = {
  title: "AGB – AlpineHosting",
  description: "Allgemeine Geschäftsbedingungen von AlpineHosting.",
};

export default function AgbPage() {
  return (
    <Layout>
      <section className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold md:text-4xl">Allgemeine Geschäftsbedingungen</h1>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">1. Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen
                AlpineHosting und seinen Kunden über Hosting-, Server- und Domain-Dienstleistungen.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">2. Leistungsumfang</h2>
              <p>
                Der konkrete Leistungsumfang ergibt sich aus der jeweiligen Produktbeschreibung und
                dem gebuchten Tarif. AlpineHosting bemüht sich um eine Verfügbarkeit von 99,9 % im
                Jahresmittel, sofern nicht höhere Garantien vereinbart wurden.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">
                3. Pflichten des Kunden
              </h2>
              <p>
                Der Kunde ist verpflichtet, die Dienste nur im Rahmen geltender Gesetze zu nutzen
                und keine Inhalte zu verbreiten, die Rechte Dritter verletzen oder die Sicherheit
                der Infrastruktur gefährden.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">
                4. Zahlung und Laufzeit
              </h2>
              <p>
                Preise und Abrechnungsintervalle werden bei Vertragsabschluss mitgeteilt. Bei
                Zahlungsverzug kann AlpineHosting Leistungen vorübergehend einschränken oder
                aussetzen.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">5. Haftung</h2>
              <p>
                AlpineHosting haftet nur für Schäden, die durch vorsätzliches oder grob fahrlässiges
                Verhalten verursacht wurden. Für Datenverluste haftet AlpineHosting nur, soweit der
                Kunde angemessene eigene Sicherungsmassnahmen getroffen hat.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">6. Kündigung</h2>
              <p>
                Verträge können gemäss den im jeweiligen Tarif genannten Kündigungsfristen beendet
                werden. Das Recht zur ausserordentlichen Kündigung aus wichtigem Grund bleibt
                unberührt.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">7. Anwendbares Recht</h2>
              <p>
                Es gilt schweizerisches Recht. Gerichtsstand ist, soweit gesetzlich zulässig, der
                Sitz von AlpineHosting in der Schweiz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
