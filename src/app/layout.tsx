import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AlpineHosting – Leistungsstarkes Hosting aus den Alpen",
    template: "%s – AlpineHosting",
  },
  description:
    "Sicheres, schnelles und zuverlässiges Webhosting, VPS- und Dedicated Server – Made in den Alpen.",
  openGraph: {
    title: "AlpineHosting – Hosting aus den Alpen",
    description: "Sicher, schnell, zuverlässig. Hosting-Lösungen für Privatkunden und Unternehmen.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
