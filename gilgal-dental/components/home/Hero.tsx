"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Dr. Ugbo portrait leads as first slide per design brief.
// Building exterior (slideshow-1.jpg) is removed from primary position.
const slides = [
  {
    src: "/images/dr-ugbo.png",
    alt: "Dr. Osaze Ugbo, Principal Dentist at Gilgal Dental Clinics, Ikoyi Lagos",
  },
  {
    src: "/images/hero/slideshow-2.png",
    alt: "Gilgal Dental Clinics — modern dental treatment room, Ikoyi Lagos",
  },
  {
    src: "/images/hero/slideshow-3.png",
    alt: "Gilgal Dental Clinics — professional clinical environment",
  },
  {
    src: "/images/hero/group-picture.png",
    alt: "Gilgal Dental Clinics — clinical team",
  },
];

const WA_URL = `https://wa.me/2348099906233?text=${encodeURIComponent(
  "Hello Gilgal Dental Clinics, I would like to book a consultation. Please let me know the available dates and times."
)}`;

const leftContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0, 0, 0.2, 1] } },
};
const imageCol: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0, 0, 0.2, 1] } },
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReduced = useReducedMotion();

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused || prefersReduced) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, paused, prefersReduced]);

  const slideDuration = prefersReduced ? 0.01 : 0.9;

  return (
    <section
      className="relative bg-[#F9F8F6] overflow-hidden"
      aria-label="Hero — Gilgal Dental Clinics"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-0 lg:gap-14 xl:gap-20 min-h-[92vh] items-center py-16 lg:py-20">

          {/* ── Left: editorial content ── */}
          <motion.div
            className="order-2 lg:order-1 max-w-[560px]"
            variants={leftContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.p variants={item} className="text-overline mb-8 tracking-widest">
              Gilgal Dental Clinics&nbsp;&nbsp;·&nbsp;&nbsp;Ikoyi, Lagos
            </motion.p>

            {/* Headline — Cormorant Garamond display serif */}
            <motion.h1
              variants={item}
              className="text-slate-900 mb-7"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                fontWeight: 600,
                lineHeight: 1.04,
                letterSpacing: "-0.01em",
              }}
            >
              Specialist Restorative
              {" "}
              <span style={{ color: "#013565" }}>&amp;</span>
              {" "}
              Family Dental Care in&nbsp;Ikoyi
            </motion.h1>

            {/* Supporting copy — specific, clinical */}
            <motion.p
              variants={item}
              className="text-slate-500 mb-10 max-w-[430px]"
              style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
            >
              Comprehensive dental care for individuals and families in Ikoyi,
              with particular expertise in restorative dentistry and implant treatment.
            </motion.p>

            {/* CTAs — rectangular per spec */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-3 mb-14"
            >
              <Link
                href="/book-an-appointment"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#013565] text-white text-sm font-semibold rounded-[2px] border border-[#013565] hover:bg-[#0A2E58] hover:border-[#0A2E58] hover:-translate-y-px active:translate-y-0 shadow-[0_1px_3px_0_rgb(1_53_101/0.25)] hover:shadow-[0_4px_12px_0_rgb(1_53_101/0.30)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent text-slate-700 text-sm font-semibold rounded-[2px] border border-[#C8C4BC] hover:border-[#013565] hover:text-[#013565] hover:bg-[#013565]/[0.04] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2"
                aria-label="WhatsApp Gilgal Dental Clinics"
              >
                {/* WhatsApp icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-[#25D366] flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.856L.057 23.428a.5.5 0 0 0 .612.612l5.618-1.476A11.938 11.938 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.51-5.21-1.4l-.373-.22-3.872 1.016 1.032-3.768-.242-.385A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                WhatsApp the Clinic
              </a>
            </motion.div>

            {/* Trust strip — editorial credential data, not KPI counters */}
            <motion.div
              variants={item}
              className="flex items-center gap-0 pt-8 border-t border-[#E2DFD9]"
            >
              {[
                { value: "17+", label: "Years of clinical experience" },
                { value: "200+", label: "Implants placed" },
                { value: "Ikoyi", label: "Lagos, Nigeria" },
              ].map(({ value, label }, i) => (
                <div key={label} className="flex items-center">
                  <div className={i > 0 ? "pl-7 ml-7 border-l border-[#E2DFD9]" : ""}>
                    <p
                      className="text-[#013565] font-bold"
                      style={{ fontSize: "1.125rem", lineHeight: 1.2, letterSpacing: "-0.02em" }}
                    >
                      {value}
                    </p>
                    <p className="text-slate-400 mt-0.5" style={{ fontSize: "0.75rem" }}>{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: photography panel ── */}
          <motion.div
            variants={imageCol}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 relative w-full lg:w-[440px] xl:w-[500px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Image — tall, editorial, minimal rounding */}
            <div
              className="relative w-full overflow-hidden bg-[#E2DFD9]"
              style={{
                aspectRatio: "3/4",
                maxHeight: "80vh",
                borderRadius: "4px",
              }}
              aria-label="Clinic imagery slideshow"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: slideDuration, ease: [0, 0, 0.2, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[current].src}
                    alt={slides[current].alt}
                    fill
                    className="object-cover object-top"
                    priority={current === 0}
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  {/* Subtle bottom gradient only — no heavy overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Slide controls — editorial minimal */}
              <div
                className="absolute bottom-5 left-5 right-5 flex items-center justify-between"
                aria-label="Slideshow navigation"
              >
                {/* Progress counter */}
                <span
                  className="text-white/80 tabular-nums"
                  style={{ fontSize: "0.625rem", fontWeight: 500, letterSpacing: "0.10em" }}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {String(current + 1).padStart(2, "0")}&nbsp;&nbsp;/&nbsp;&nbsp;{String(slides.length).padStart(2, "0")}
                </span>

                {/* Progress dots as thin lines */}
                <div
                  className="flex items-center gap-1.5"
                  role="tablist"
                  aria-label="Select slide"
                >
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      role="tab"
                      aria-selected={i === current}
                      aria-label={`Slide ${i + 1}`}
                      onClick={() => setCurrent(i)}
                      className={`h-0.5 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                        i === current ? "w-8 bg-white" : "w-3.5 bg-white/35 hover:bg-white/55"
                      }`}
                    />
                  ))}
                </div>

                {/* Prev / next */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={prev}
                    className="w-7 h-7 bg-white/12 hover:bg-white/25 flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                    style={{ borderRadius: "2px" }}
                    aria-label="Previous image"
                  >
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-white" aria-hidden="true">
                      <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="w-7 h-7 bg-white/12 hover:bg-white/25 flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                    style={{ borderRadius: "2px" }}
                    aria-label="Next image"
                  >
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-white" aria-hidden="true">
                      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Services caption — editorial metadata beneath image */}
            <p className="text-overline mt-4 text-center tracking-widest">
              General&nbsp;&nbsp;·&nbsp;&nbsp;Restorative&nbsp;&nbsp;·&nbsp;&nbsp;Implants&nbsp;&nbsp;·&nbsp;&nbsp;Cosmetic
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
