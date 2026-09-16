"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const textContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const textItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const imageReveal: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Introduction() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" as never });

  return (
    <section
      className="section-padding bg-white"
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
              A calmer approach
              <br />
              to dental care.
            </motion.h2>

            <motion.p
              variants={textItem}
              className="text-slate-500 mb-6"
              style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
            >
              At Gilgal Dental Clinics, we believe good dental care goes beyond
              procedures — it&rsquo;s about how patients feel throughout the entire
              experience. From your first visit to your final appointment, our goal
              is to provide comprehensive, high-quality dental care in a setting
              that feels calm and reassuring.
            </motion.p>

            <motion.p
              variants={textItem}
              className="text-slate-500 mb-10"
              style={{ fontSize: "1rem", lineHeight: 1.65 }}
            >
              Based in Ikoyi, Lagos, we offer a broad range of dental services for
              the whole family, delivered by an experienced team that takes the
              time to understand each patient&rsquo;s needs.
            </motion.p>

            {/* Editorial inline stats */}
            <motion.div
              variants={textItem}
              className="flex items-center gap-0 pb-10 mb-10 border-b border-[#E8EBF0]"
            >
              {[
                { value: "17+", label: "Years" },
                { value: "200+", label: "Implants" },
                { value: "Ikoyi", label: "Lagos" },
              ].map(({ value, label }, i) => (
                <div
                  key={label}
                  className={[
                    "pr-8",
                    i > 0 ? "pl-8 border-l border-[#E8EBF0]" : "",
                  ].join(" ")}
                >
                  <p
                    className="text-[#013565] font-bold"
                    style={{ fontSize: "1.375rem", lineHeight: 1.1, letterSpacing: "-0.02em" }}
                  >
                    {value}
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={textItem}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#013565] text-sm font-semibold hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded"
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
              className="relative w-full overflow-hidden bg-slate-100"
              style={{ aspectRatio: "3/4", borderRadius: "4px" }}
            >
              <Image
                src="/images/hero/group-picture.png"
                alt="The Gilgal Dental Clinics team"
                fill
                className="object-cover object-center"
                sizes="50vw"
              />
              {/* Subtle bottom fade */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
              {/* Location badge — editorial */}
              <div className="absolute bottom-5 left-5">
                <p className="text-white/90 text-xs font-medium tracking-widest uppercase">
                  Ikoyi · Lagos
                </p>
              </div>
            </div>
            {/* Decorative vertical rule */}
            <div
              className="absolute -right-8 top-1/4 bottom-1/4 w-px bg-[#E8EBF0]"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
