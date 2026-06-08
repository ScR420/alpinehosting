/** Shared motion tokens – importable from Server & Client Components */

export const MOTION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  reveal: 0.5,
  hero: 0.55,
  route: 0.2,
} as const;

/** Cubic-bezier tuples for Motion `ease` */
export const MOTION_EASE = {
  out: [0.22, 1, 0.36, 1] as const,
  inOut: [0.4, 0, 0.2, 1] as const,
} as const;

export const MOTION_STAGGER = {
  tight: 0.08,
  normal: 0.12,
  relaxed: 0.16,
} as const;

export const NAV_SCROLL_THRESHOLD = 80;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
} as const;

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} as const;

export const slideInRight = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100%" },
} as const;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: MOTION_STAGGER.normal,
      delayChildren: 0.08,
    },
  },
} as const;

export const VIEWPORT_ONCE = {
  once: true,
  margin: "-60px" as const,
  amount: 0.15,
} as const;
