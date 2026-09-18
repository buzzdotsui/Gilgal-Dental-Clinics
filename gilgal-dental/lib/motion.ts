// ─── Centralized Motion System — Gilgal Dental Clinics ───────────────────────
// All animation values sourced from here. Never define ad-hoc durations or
// easings in component files. Reference these constants instead.

import type { Variants, Easing } from "framer-motion";

// ─── Easing ───────────────────────────────────────────────────────────────────

export const ease = {
  /** Standard smooth cubic — most transitions */
  smooth: [0.4, 0, 0.2, 1] as unknown as Easing,
  /** Gentle deceleration — entrances */
  out: [0, 0, 0.2, 1] as unknown as Easing,
  /** Gentle acceleration — exits */
  in: [0.4, 0, 1, 1] as unknown as Easing,
  /** Subtle spring feel — interactive elements */
  spring: { type: "spring" as const, stiffness: 280, damping: 30, mass: 0.8 },
} as const;

// ─── Durations ────────────────────────────────────────────────────────────────

export const duration = {
  /** Micro-interactions: hover, focus, press */
  fast: 0.15,
  /** Standard UI transitions */
  base: 0.25,
  /** Reveal animations */
  reveal: 0.55,
  /** Hero / page entrances */
  slow: 0.7,
} as const;

// ─── Fade + Slide Variants ────────────────────────────────────────────────────

/** Fade in + gentle rise — standard section element */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.reveal, ease: ease.out },
  },
};

/** Fade in only — images, backgrounds */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.slow, ease: ease.out },
  },
};

/** Fade in from left */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.slow, ease: ease.out },
  },
};

/** Fade in from right */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.slow, ease: ease.out },
  },
};

// ─── Stagger Containers ───────────────────────────────────────────────────────

/** Stagger children with 80ms gap — cards, credentials, list items */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Stagger children with 120ms gap — testimonials, longer lists */
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

// ─── Hero Entrance ────────────────────────────────────────────────────────────

/** Tighter hero stagger — badge, headline, body, buttons, stats */
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
};

export const heroBadge: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: ease.out },
  },
};

export const heroHeadline: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: ease.out },
  },
};

export const heroBody: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: ease.out },
  },
};

export const heroCTAs: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: ease.out },
  },
};

export const heroStats: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: ease.out },
  },
};

export const heroImage: Variants = {
  hidden: { opacity: 0, x: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.75, ease: ease.out },
  },
};

// ─── Success State ────────────────────────────────────────────────────────────

export const successContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export const successIcon: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.base, ease: ease.out },
  },
};

export const successText: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: ease.out },
  },
};

// ─── WhatsApp Float Idle Animation ───────────────────────────────────────────

/** Slow, barely-perceptible float — CSS keyframe preferred but here for reference */
export const floatIdle = {
  y: [0, -5, 0],
  transition: {
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut",
    repeatType: "loop" as const,
  },
};
