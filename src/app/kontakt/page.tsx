import type { Metadata } from "next";
import { KontaktForm } from "./kontakt-form";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie unser Team – per Formular, E-Mail oder Telefon. Wir antworten in der Regel innerhalb von 30 Minuten.",
  openGraph: {
    title: "Kontakt – AlpineHosting",
    description: "Wir sind für Sie da – schnell, kompetent und persönlich.",
  },
};

export default function KontaktPage() {
  return <KontaktForm />;
}
