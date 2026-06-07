import Link from "next/link";
import { Mountain } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
              <Mountain className="h-4 w-4" />
            </span>
            AlpineHosting
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Leistungsstarkes Hosting aus den Alpen – sicher, schnell und zuverlässig.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Leistungen</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Webhosting</li>
            <li>VPS-Server</li>
            <li>Dedicated Server</li>
            <li>Domains</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Unternehmen</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/ueber-uns" className="hover:text-foreground">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-foreground">
                Team
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-foreground">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Kontakt</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>support@alpinehosting.eu</li>
            <li>+41 44 000 00 00</li>
            <li>Zürich, Schweiz</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} AlpineHosting AG. Alle Rechte vorbehalten.</span>
          <span>Impressum · Datenschutz · AGB</span>
        </div>
      </div>
    </footer>
  );
}
