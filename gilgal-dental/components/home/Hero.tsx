"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const slides = [
  {
    src: "/images/hero/slideshow-1.jpg",
    alt: "Gilgal Dental Clinics — welcoming dental care environment",
  },
  {
    src: "/images/hero/slideshow-2.png",
    alt: "Gilgal Dental Clinics — modern dental treatment room",
  },
  {
    src: "/images/hero/slideshow-3.png",
    alt: "Gilgal Dental Clinics — professional dental team",
  },
  {
    src: "/images/hero/group-picture.png",
    alt: "Gilgal Dental Clinics — clinical team",
  },
];

const WHATSAPP_URL = `https://wa.me/2348099906233?text=${encodeURIComponent(
  "Hello Gilgal Dental Clinics, I would like to book an appointment. Please let me know the available dates and times."
)}`;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused || prefersReduced) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next, paused, prefersReduced]);

  return (
    <section
      className="relative bg-[#FDFEFF] overflow-hidden"
      aria-label="Hero — Gilgal Dental Clinics"
    >
      <div className="container-site py-12 lg:py-0 min-h-[calc(100vh-5rem)] lg:min-h-[calc(90vh)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full items-center py-12 lg:py-16">

          {/* ── Left: Content ── */}
          <div className="order-2 lg:order-1">
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#013565]/8 border border-[#013565]/12 mb-6"
              aria-label="Location and hours"
            >
              <MapPin className="w-3.5 h-3.5 text-[#013565]" aria-hidden="true" />
              <span className="text-xs font-medium text-[#013565]">
                Ikoyi, Lagos
              </span>
              <span className="w-px h-3 bg-[#013565]/20" aria-hidden="true" />
              <Clock className="w-3.5 h-3.5 text-[#013565]" aria-hidden="true" />
              <span className="text-xs font-medium text-[#013565]">
                Mon–Fri 9AM–6PM
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-display text-slate-900 mb-5 max-w-[520px]"
            >
              Experienced dental care,{" "}
              <span className="text-[#013565]">centered around you.</span>
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-body-lg text-slate-500 mb-8 max-w-[460px]"
            >
              Comprehensive dental care in a relaxed, friendly environment in
              Ikoyi, Lagos.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button href="/book-an-appointment" variant="primary" size="lg">
                Book an Appointment
              </Button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-base font-semibold rounded-lg border border-slate-200 text-slate-700 hover:border-[#013565]/30 hover:text-[#013565] hover:bg-[#013565]/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2"
                aria-label="Book via WhatsApp — opens WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                Book via WhatsApp
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 pt-8 border-t border-slate-100 flex flex-wrap items-center gap-6"
            >
              {[
                { stat: "17+", label: "Years of experience" },
                { stat: "200+", label: "Implants completed" },
                { stat: "7", label: "Service areas" },
              ].map(({ stat, label }) => (
                <div key={stat}>
                  <p className="text-xl font-bold text-[#013565]">{stat}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Slideshow ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Image container */}
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[3/4] w-full max-h-[600px] bg-slate-100 shadow-[0_20px_60px_-15px_rgb(1_53_101/0.2)]"
              aria-label="Clinic imagery slideshow"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: prefersReduced ? 0.01 : 0.9 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[current].src}
                    alt={slides[current].alt}
                    fill
                    className="object-cover object-center"
                    priority={current === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Subtle gradient overlay for clarity */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Slide controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                {/* Dots */}
                <div
                  className="flex items-center gap-1.5"
                  role="tablist"
                  aria-label="Slideshow navigation"
                >
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      role="tab"
                      aria-selected={i === current}
                      aria-label={`Slide ${i + 1} of ${slides.length}`}
                      onClick={() => setCurrent(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 ${
                        i === current
                          ? "w-6 bg-white"
                          : "w-1.5 bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
                {/* Prev/Next */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4 text-white" aria-hidden="true" />
                  </button>
                  <button
                    onClick={next}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4 text-white" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative background element */}
            <div
              className="absolute -z-10 -bottom-6 -right-6 w-2/3 h-2/3 rounded-2xl bg-[#013565]/6"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
