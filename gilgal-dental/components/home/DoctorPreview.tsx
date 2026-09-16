"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const textReveal: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const textItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const imageReveal: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const credentials = [
  "Eastman Dental Institute, United Kingdom",
  "BICON Institute, United States",
  "Affiliate Member, American Dental Association",
];

export default function DoctorPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" as never });

  return (
    <section
      className="section-padding bg-[#F7F8FA]"
      aria-labelledby="doctor-heading"
    >
      <div className="container-site">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: large portrait */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Portrait — full column, tall, minimal rounding */}
            <div
              className="relative w-full overflow-hidden bg-slate-100"
              style={{
                aspectRatio: "3/4",
                maxHeight: "600px",
                borderRadius: "4px",
              }}
            >
              <Image
                src="/images/dr-ugbo.png"
                alt="Dr. Osaze Ugbo, Principal Dentist at Gilgal Dental Clinics"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Name overlay — editorial bottom strip */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-[#011f3f]/80 via-[#011f3f]/40 to-transparent">
                <p
                  className="text-white font-semibold"
                  style={{ fontSize: "0.8125rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  Dr. Osaze Ugbo
                </p>
                <p className="text-white/60 text-xs mt-0.5 tracking-wide">
                  Principal Dentist
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: editorial text */}
          <motion.div
            variants={textReveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:pt-4"
          >
            <motion.p variants={textItem} className="text-overline mb-5">
              Our Dentist
            </motion.p>

            <motion.h2
              id="doctor-heading"
              variants={textItem}
              className="text-slate-900 mb-2"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
              }}
            >
              Dr. Osaze Ugbo
            </motion.h2>

            <motion.p
              variants={textItem}
              className="text-[#013565] text-sm font-medium mb-7"
              style={{ letterSpacing: "0.04em" }}
            >
              Principal Dentist&nbsp;&nbsp;·&nbsp;&nbsp;17+ Years Experience
            </motion.p>

            <motion.div variants={textItem} className="space-y-4 mb-8">
              <p className="text-slate-500" style={{ fontSize: "1.0rem", lineHeight: 1.7 }}>
                Dr. Osaze Ugbo brings over 17 years of clinical experience to
                Gilgal Dental Clinics. He is passionate about dentistry and
                committed to delivering high-quality care that patients trust.
              </p>
              <p className="text-slate-500" style={{ fontSize: "1rem", lineHeight: 1.65 }}>
                He practises General Dentistry with a particular interest in
                Restorative Dentistry, and has successfully completed more than
                200 dental implants.
              </p>
            </motion.div>

            {/* Credentials — clean list, no icon squares */}
            <motion.div
              variants={textItem}
              className="border-t border-[#E8EBF0] pt-7 mb-8"
            >
              <p className="text-overline mb-4">Training &amp; Affiliations</p>
              <ul className="space-y-2.5" role="list">
                {credentials.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 text-sm text-slate-500"
                  >
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full bg-[#013565] flex-shrink-0"
                      aria-hidden="true"
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={textItem}>
              <Link
                href="/our-dentist"
                className="inline-flex items-center gap-2 text-[#013565] text-sm font-semibold hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded"
                aria-label="Meet Dr. Osaze Ugbo"
              >
                Meet Dr. Ugbo
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
