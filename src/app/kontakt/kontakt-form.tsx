"use client";

import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/motion/fade-in";
import { InteractiveCard } from "@/components/motion/interactive-card";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { toast } from "sonner";

export function KontaktForm() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <section className="container-page py-20 md:py-28">
        <FadeIn className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">Kontakt</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Sprechen wir über Ihr Projekt.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Schreiben Sie uns – wir melden uns in der Regel innerhalb von 30 Minuten zurück.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "E-Mail", value: "support@alpinehosting.ch" },
              { icon: Phone, label: "Telefon", value: "+41 44 000 00 00" },
              { icon: MapPin, label: "Adresse", value: "Bahnhofstrasse 1, 8001 Zürich" },
            ].map(({ icon: Icon, label, value }, i) => (
              <InteractiveCard key={label} delay={i * 0.08} className="flex items-center gap-4 p-5">
                <div className="icon-hover grid h-11 w-11 place-items-center rounded-lg bg-primary/5 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {label}
                  </div>
                  <div className="text-sm font-medium">{value}</div>
                </div>
              </InteractiveCard>
            ))}
          </div>

          <FadeIn delay={0.15}>
            <Card className="p-8">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold">Vielen Dank!</h2>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Ihre Nachricht ist bei uns eingegangen. Wir melden uns in Kürze persönlich bei
                    Ihnen.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const data = new FormData(form);
                    const name = String(data.get("name") ?? "");
                    const email = String(data.get("email") ?? "");
                    const subject = String(data.get("subject") ?? "");
                    const message = String(data.get("message") ?? "");
                    const mailto = `mailto:support@alpinehosting.ch?subject=${encodeURIComponent(`[Kontakt] ${subject}`)}&body=${encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\n${message}`)}`;
                    window.location.href = mailto;
                    setSent(true);
                    toast.success("Ihr E-Mail-Programm wird geöffnet.");
                  }}
                  className="space-y-5"
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="mt-2"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-Mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-2"
                        placeholder="ihre@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Betreff</Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      className="mt-2"
                      placeholder="Worum geht es?"
                    />
                  </div>
                  <div>
                    <Label htmlFor="msg">Nachricht</Label>
                    <Textarea
                      id="msg"
                      name="message"
                      required
                      rows={6}
                      className="mt-2"
                      placeholder="Beschreiben Sie kurz Ihr Anliegen…"
                    />
                  </div>
                  <Button type="submit" size="lg" className="btn-interactive w-full">
                    Nachricht senden
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                  </p>
                </form>
              )}
            </Card>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
