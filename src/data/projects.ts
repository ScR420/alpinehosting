export const projects = [
  {
    name: "Oslo Tailor",
    category: "E-Commerce",
    desc: "Migration eines internationalen Online-Shops auf unsere VPS-Infrastruktur – Ladezeiten um 40 % reduziert.",
    metrics: ["40 % schneller", "99,9 % Uptime", "EU-Hosting"],
    url: "https://oslo-tailor.com/",
  },
  {
    name: "NordShop AG",
    category: "Retail",
    desc: "Skalierbare Multi-Store-Plattform mit automatisierten Backups und DDoS-Schutz für Peak-Traffic.",
    metrics: ["3 Rechenzentren", "Auto-Scaling", "24/7 Monitoring"],
    url: null,
  },
  {
    name: "Vogt Studio",
    category: "Agentur",
    desc: "Portfolio- und Kundenportal auf Shared Hosting – schnell eingerichtet, zuverlässig betrieben.",
    metrics: ["< 1s LCP", "SSL inklusive", "Persönlicher Support"],
    url: null,
  },
  {
    name: "Alpine Analytics",
    category: "SaaS",
    desc: "Dedicated Server für datenintensive Workloads mit strikten Compliance-Anforderungen.",
    metrics: ["10 Gbit/s", "ISO-Rechenzentrum", "Georedundanz"],
    url: null,
  },
] as const;
