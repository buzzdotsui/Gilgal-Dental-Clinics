"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";

const imageReveal: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0, 0, 0.2, 1] } },
};
const textReveal: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const textItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0, 0, 0.2, 1] } },
};

const credentials = [
  { label: "Eastman Dental Institute", location: "University College London, United Kingdom" },
  { label: "BICON Institute", location: "Boston, United States" },
  { label: "Affiliate Member", location: "American Dental Association" },
];

export default function DoctorPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" as never });

  return (
    <section
      className="section-padding-xl bg-[#0A2E58]"
      aria-labelledby="doctor-heading"
      style={{ backgroundColor: "#0A2E58" }}
    >
      <div className="container-site">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: portrait */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Subtle gold frame line — editorial detail */}
            <div
              className="absolute -top-3 -left-3 right-8 bottom-8 border border-[#C8A96E]/25 pointer-events-none"
              style={{ borderRadius: "4px" }}
              aria-hidden="true"
            />
            {/* Portrait */}
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: "3/4",
                maxHeight: "580px",
                borderRadius: "4px",
              }}
            >
              <Image
                src="/images/dr-ugbo.png"
                alt="Dr. Osaze Ugbo, Principal Dentist at Gilgal Dental Clinics, Ikoyi Lagos"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right: editorial trust content */}
          <motion.div
            variants={textReveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:pt-6"
          >
            <motion.p
              variants={textItem}
              className="text-overline-light mb-5"
            >
              Our Dentist
            </motion.p>

            {/* Name — large, Cormorant serif */}
            <motion.h2
              id="doctor-heading"
              variants={textItem}
              className="text-white mb-3"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
                fontWeight: 600,
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
              }}
            >
              Dr. Osaze Ugbo
            </motion.h2>

            <motion.p
              variants={textItem}
              className="text-[#C8A96E] text-sm font-medium mb-8"
              style={{ letterSpacing: "0.05em" }}
            >
              Principal Dentist&nbsp;&nbsp;·&nbsp;&nbsp;General &amp; Restorative Dentistry
            </motion.p>

            {/* Experience figures — editorial, not dashboard */}
            <motion.div
              variants={textItem}
              className="flex items-start gap-0 mb-8 pb-8 border-b border-white/10"
            >
              {[
                { value: "17+", label: "Years of\nclinical experience" },
                { value: "200+", label: "Dental implants\nsuccessfully placed" },
              ].map(({ value, label }, i) => (
                <div
                  key={value}
                  className={i > 0 ? "pl-8 ml-8 border-l border-white/12" : ""}
                >
                  <p
                    className="text-white font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "clamp(2rem, 3vw, 2.75rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-white/65"
                    style={{ fontSize: "0.75rem", lineHeight: 1.5, whiteSpace: "pre-line" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={textItem} className="space-y-4 mb-10">
              <p className="text-white/65" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Dr. Osaze Ugbo brings over 17 years of clinical experience to Gilgal
                Dental Clinics. He practises General Dentistry with a particular
                interest in Restorative Dentistry, and has successfully placed more
                than 200 dental implants.
              </p>
              <p className="text-white/65" style={{ fontSize: "1rem", lineHeight: 1.65 }}>
                He is committed to delivering the highest standard of care in a
                setting where every patient feels heard, informed, and comfortable.
              </p>
            </motion.div>

            {/* Credentials — clean editorial list */}
            <motion.div
              variants={textItem}
              className="border-t border-white/10 pt-8 mb-10"
            >
              <p
                className="text-overline-light mb-5"
              >
                Training &amp; Affiliations
              </p>
              <ul className="space-y-4" role="list">
                {credentials.map((c) => (
                  <li key={c.label} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 flex-shrink-0 block w-5"
                      aria-hidden="true"
                    >
                      <span className="block w-4 h-px bg-[#C8A96E]" />
                    </span>
                    <div>
                      <p className="text-white text-sm font-medium leading-snug">{c.label}</p>
                      <p className="text-white/65 text-xs mt-0.5">{c.location}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={textItem}>
              <Link
                href="/our-dentist"
                className="inline-flex items-center gap-2.5 text-white/80 hover:text-white text-sm font-semibold transition-all duration-200 border-b border-white/20 hover:border-white/50 pb-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-[2px]"
                aria-label="Learn more about Dr. Osaze Ugbo"
              >
                Learn more about Dr. Ugbo
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
