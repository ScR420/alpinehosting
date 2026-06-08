import { Globe, Server, HardDrive } from "lucide-react";

export const pricingPlans = [
  {
    id: "starter",
    icon: Globe,
    name: "Starter",
    tagline: "Ideal für Websites & Blogs",
    price: "9.90",
    period: "Monat",
    features: [
      "10 GB NVMe SSD",
      "Kostenlose SSL",
      "Tägliche Backups",
      "PHP 8.x & MariaDB",
      "E-Mail-Support",
    ],
    recommended: false,
  },
  {
    id: "business",
    icon: Server,
    name: "Business",
    tagline: "Für wachsende Unternehmen",
    price: "49.90",
    period: "Monat",
    features: [
      "4 vCPU · 8 GB RAM",
      "80 GB NVMe SSD",
      "DDoS-Schutz inklusive",
      "Snapshot-Backups",
      "Prioritäts-Support 24/7",
    ],
    recommended: true,
  },
  {
    id: "enterprise",
    icon: HardDrive,
    name: "Enterprise",
    tagline: "Dedizierte Hardware",
    price: "199",
    period: "Monat",
    features: [
      "Enterprise Intel/AMD CPUs",
      "ECC RAM · NVMe RAID",
      "10 Gbit/s Uplink",
      "24/7 On-Site Support",
      "Eigene IP-Range & BGP",
    ],
    recommended: false,
  },
] as const;

export const productOverview = [
  {
    icon: Globe,
    title: "Webhosting",
    desc: "Schnelles, sicheres Hosting für Websites, Blogs und Online-Shops.",
    features: ["NVMe SSD", "Kostenlose SSL", "Tägliche Backups", "PHP 8.x & MariaDB"],
  },
  {
    icon: Server,
    title: "VPS-Server",
    desc: "Virtuelle Server mit voller Root-Kontrolle, flexibel skalierbar.",
    features: ["KVM-Virtualisierung", "Skalierbare Ressourcen", "DDoS-Schutz", "Snapshots"],
  },
  {
    icon: HardDrive,
    title: "Dedicated Server",
    desc: "Dedizierte Hardware für höchste Performance und Kontrolle.",
    features: ["Enterprise CPUs", "10 Gbit/s Uplink", "24/7 On-Site", "BGP & IP-Range"],
  },
] as const;
