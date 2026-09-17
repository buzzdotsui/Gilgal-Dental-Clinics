"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const textContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const textItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] } },
};
const imageReveal: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0, 0, 0.2, 1] } },
};

export default function Introduction() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" as never });

  return (
    <section
      className="section-padding bg-[#F4F3F1]"
      aria-labelledby="intro-heading"
    >
      <div className="container-site">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p variants={textItem} className="text-overline mb-5">
              About Gilgal Dental Clinics
            </motion.p>

            <motion.h2
              id="intro-heading"
              variants={textItem}
              className="text-slate-900 mb-6"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
              }}
            >
              Comprehensive care.
              <br />
              Experienced hands.
            </motion.h2>

            <motion.p
              variants={textItem}
              className="text-slate-500 mb-5"
              style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
            >
              At Gilgal Dental Clinics, we deliver high-quality dental care across
              a broad range of specialties — from routine examinations and preventive
              care to complex restorative work and dental implants.
            </motion.p>

            <motion.p
              variants={textItem}
              className="text-slate-500 mb-10"
              style={{ fontSize: "1rem", lineHeight: 1.65 }}
            >
              Based in Ikoyi, Lagos, our practice is built around clinical excellence
              and a patient experience that is unhurried, clear, and reassuring —
              for adults and children alike.
            </motion.p>

            <motion.div variants={textItem}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#013565] text-sm font-semibold hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded-[2px]"
              >
                Learn about Gilgal
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: large photography */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative hidden lg:block"
          >
            <div
              className="relative w-full overflow-hidden bg-[#E2DFD9]"
              style={{ aspectRatio: "3/4", borderRadius: "4px" }}
            >
              <Image
                src="/images/hero/group-picture.png"
                alt="The Gilgal Dental Clinics team, Ikoyi Lagos"
                fill
                className="object-cover object-center"
                sizes="50vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
              {/* Location label */}
              <div className="absolute bottom-5 left-5">
                <p
                  className="text-white/85 font-medium tracking-widest uppercase"
                  style={{ fontSize: "0.625rem" }}
                >
                  Ikoyi · Lagos
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
