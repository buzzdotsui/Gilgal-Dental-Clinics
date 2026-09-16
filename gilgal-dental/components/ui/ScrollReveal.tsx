"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Framer Motion variants — defaults to fadeUp */
  variants?: Variants;
  /** Margin before triggering — default "-80px" */
  margin?: string;
  /** Delay in seconds */
  delay?: number;
}

/**
 * Wraps children in a scroll-triggered reveal animation.
 * Uses GPU-friendly opacity + transform only.
 * Fires once — does not re-animate on scroll up.
 */
export function ScrollReveal({
  children,
  className,
  variants = fadeUp,
  margin = "-80px",
  delay,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inView = useInView(ref, { once: true, margin: margin as any });

  const resolvedVariants: Variants = delay
    ? {
        hidden: variants.hidden,
        visible: {
          ...(typeof variants.visible === "object" && variants.visible !== null
            ? (variants.visible as object)
            : {}),
          transition: {
            ...((typeof variants.visible === "object" &&
              variants.visible !== null &&
              "transition" in variants.visible
              ? (variants.visible as { transition?: object }).transition
              : undefined) ?? {}),
            delay,
          },
        },
      }
    : variants;

  return (
    <motion.div
      ref={ref}
      variants={resolvedVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}
