"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Mountain, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  MOTION_DURATION,
  MOTION_EASE,
  NAV_SCROLL_THRESHOLD,
  slideInRight,
} from "@/lib/motion/config";

const nav = [
  { href: "/", label: "Home" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/preise", label: "Preise" },
  { href: "/projekte", label: "Projekte" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

/** Client island – scroll-aware navbar + mobile slide-in menu */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const isHome = pathname === "/";

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > NAV_SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const showSolidNav = scrolled || !isHome;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300",
        showSolidNav
          ? "border-b border-border/60 bg-background/85 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            <Mountain className="h-4 w-4" />
          </span>
          <span className={cn(!showSolidNav && isHome && "text-white")}>AlpineHosting</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => {
            const active = isActive(pathname, n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "relative text-sm transition-colors",
                  !showSolidNav && isHome ? "text-white/70 hover:text-white" : "hover:text-foreground",
                  active
                    ? !showSolidNav && isHome
                      ? "text-white"
                      : "text-foreground"
                    : !showSolidNav && isHome
                      ? "text-white/70"
                      : "text-muted-foreground",
                )}
              >
                {n.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/kontakt">Kontakt aufnehmen</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={open}
          className={cn("md:hidden", !showSolidNav && isHome && "text-white")}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-16 z-40 md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={reduced ? undefined : slideInRight}
            transition={{ duration: MOTION_DURATION.normal, ease: MOTION_EASE.out }}
          >
            <div
              className="absolute inset-0 bg-background/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <nav className="absolute right-0 top-0 h-full w-[min(100%,20rem)] border-l border-border/60 bg-background p-6 shadow-xl">
              <div className="flex flex-col gap-4">
                {nav.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-base transition-colors",
                      isActive(pathname, n.href)
                        ? "font-medium text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {n.label}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href="/kontakt" onClick={() => setOpen(false)}>
                    Kontakt aufnehmen
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
