import { PageTransition } from "@/components/motion/page-transition";

/** Client island wrapper – 200ms route fade on every page change */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
