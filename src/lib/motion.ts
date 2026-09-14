/**
 * Global motion tokens. Every animated component reads from here so the
 * whole site shares one rhythm. Mirrors the CSS variables in globals.css.
 */
import type { Transition, Variants } from "motion/react";

export const DURATION = {
  fast: 0.16,
  normal: 0.26,
  section: 0.62,
  story: 0.95,
} as const;

export const EASE = {
  outSoft: [0.22, 1, 0.36, 1] as const,
  outQuart: [0.16, 1, 0.3, 1] as const,
  inOutSoft: [0.65, 0, 0.35, 1] as const,
};

export const springSoft: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 34,
  mass: 0.9,
};
export const springSnappy: Transition = {
  type: "spring",
  stiffness: 480,
  damping: 32,
  mass: 0.7,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.section, ease: EASE.outQuart },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: DURATION.section, ease: EASE.outSoft },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.965, y: 16 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: DURATION.section, ease: EASE.outQuart },
  },
};

export const staggerParent = (stagger = 0.07, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const viewportOnce = { once: true, amount: 0.25 } as const;

/**
 * Stagger (ms) for the CSS hero entrance — `hero-settle` / `hero-rise` in
 * globals.css. Shared so both homepage heroes enter identically.
 */
export const HERO_STAGGER = {
  eyebrow: 0,
  headline: 60,
  lead: 130,
  actions: 200,
  reassure: 280,
  channels: 340,
} as const;

export const heroDelay = (ms: number) => ({ animationDelay: `${ms}ms` });
