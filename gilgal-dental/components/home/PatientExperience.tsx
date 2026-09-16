"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";

const imageReveal: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const textReveal: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const textItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function PatientExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" as never });

  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="experience-heading"
    >
      <div className="container-site">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: full-column photography */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div
              className="relative w-full overflow-hidden bg-slate-100"
              style={{ aspectRatio: "4/5", borderRadius: "4px" }}
            >
              <Image
                src="/images/hero/slideshow-1.jpg"
                alt="Gilgal Dental Clinics — clinical environment"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* Right: editorial quote + text */}
          <motion.div
            variants={textReveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p variants={textItem} className="text-overline mb-6">
              Patient Experience
            </motion.p>

            {/* Large pull quote */}
            <motion.blockquote
              variants={textItem}
              className="mb-8"
              cite="https://gilgaldentalclinics.com"
            >
              <p
                className="text-slate-900 font-medium"
                style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                  lineHeight: 1.4,
                  letterSpacing: "-0.015em",
                }}
              >
                &ldquo;You are not just a patient
                here&nbsp;&mdash; you are a person,
                and we treat you accordingly.&rdquo;
              </p>
              <footer className="mt-4">
                <cite
                  className="not-italic text-slate-400 text-sm"
                  style={{ letterSpacing: "0.04em" }}
                >
                  Gilgal Dental Clinics&nbsp;&nbsp;·&nbsp;&nbsp;Ikoyi, Lagos
                </cite>
              </footer>
            </motion.blockquote>

            <motion.div
              variants={textItem}
              className="pt-8 border-t border-[#E8EBF0] space-y-4"
            >
              <div className="flex gap-3">
                <div className="w-1 flex-shrink-0 bg-[#013565] rounded-full" aria-hidden="true" />
                <p className="text-slate-500 text-sm leading-relaxed">
                  Thorough examination and honest diagnosis — we explain every step
                  clearly before treatment begins.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-1 flex-shrink-0 bg-[#013565] rounded-full" aria-hidden="true" />
                <p className="text-slate-500 text-sm leading-relaxed">
                  Comfortable pacing with no rush — appointments scheduled so you
                  are never made to feel hurried.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-1 flex-shrink-0 bg-[#013565] rounded-full" aria-hidden="true" />
                <p className="text-slate-500 text-sm leading-relaxed">
                  Family-friendly care for patients of all ages, from children
                  to adults, in one welcoming environment.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
