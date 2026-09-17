"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0, 0, 0.2, 1] } },
};

const disciplines = [
  {
    title: "Restorative Dentistry",
    body: "Dr. Ugbo has a particular clinical interest in restorative dentistry — repairing and rebuilding damaged, decayed, or missing teeth using crowns, bridges, dentures, and composite restorations. The aim is always to restore full function and preserve as much natural tooth structure as possible.",
    href: "/services/restorative-dentistry",
    label: "Restorative services →",
  },
  {
    title: "Dental Implants",
    body: "With over 200 implants placed in practice, Dr. Ugbo brings a considered, experienced approach to implant treatment — from initial assessment and treatment planning through to placement and long-term review. Every case is planned around function, comfort, and lasting oral health.",
    href: "/services/implant-dentistry",
    label: "Implant dentistry →",
  },
];

export default function RestorativeSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" as never });

  return (
    <section
      className="section-padding-xl bg-[#0A2E58]"
      aria-labelledby="restorative-heading"
      style={{ backgroundColor: "#0A2E58" }}
    >
      <div className="container-site">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section label */}
          <motion.p variants={item} className="text-overline-light mb-6">
            Areas of Clinical Focus
          </motion.p>

          {/* Heading */}
          <motion.h2
            id="restorative-heading"
            variants={item}
            className="text-white mb-4 max-w-2xl"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            Experienced hands. Considered care.
          </motion.h2>

          <motion.p
            variants={item}
            className="text-white/55 mb-16 max-w-xl"
            style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
          >
            Dr. Osaze Ugbo brings over 17 years of clinical experience, with a special
            interest in restorative dentistry and a proven track record in dental implant treatment.
          </motion.p>

          {/* Two disciplines — horizontal rule separated */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-white/10"
          >
            {disciplines.map((d, i) => (
              <div
                key={d.title}
                className={`py-10 ${i === 0 ? "lg:pr-14 lg:border-r lg:border-white/10" : "lg:pl-14"}`}
              >
                {/* Thin gold rule */}
                <span className="gold-rule mb-6 block" aria-hidden="true" />

                <h3
                  className="text-white mb-5"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                >
                  {d.title}
                </h3>
                <p
                  className="text-white/55 mb-8"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}
                >
                  {d.body}
                </p>
                <Link
                  href={d.href}
                  className="inline-flex items-center gap-2 text-[#C8A96E] text-sm font-semibold hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-[2px]"
                >
                  {d.label}
                </Link>
              </div>
            ))}
          </motion.div>

          {/* Bottom credential strip */}
          <motion.div
            variants={item}
            className="border-t border-white/10 pt-10 mt-4 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0"
          >
            {[
              { value: "17+", label: "Years of experience" },
              { value: "200+", label: "Implants placed" },
              { value: "Eastman", label: "Dental Institute, UK" },
              { value: "BICON", label: "Institute, USA" },
            ].map(({ value, label }, i) => (
              <div
                key={label}
                className={i > 0 ? "sm:pl-8 sm:border-l sm:border-white/10" : ""}
              >
                <p
                  className="text-white font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {value}
                </p>
                <p
                  className="text-white/40"
                  style={{ fontSize: "0.75rem", lineHeight: 1.4 }}
                >
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
