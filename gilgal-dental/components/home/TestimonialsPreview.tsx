"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { testimonials } from "@/lib/data/testimonialsData";

/**
 * Testimonials — uses verified, client-supplied patient reviews from testimonialsData.ts.
 * No fabricated names, star ratings, or invented review text.
 * All reviews attributed to genuine Google Reviews with the reviewer's real name.
 */

const quoteVariants: Variants = {
  enter: { opacity: 0, y: 10 },
  center: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0, 0, 0.2, 1] } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.2, ease: "easeIn" } },
};
const headerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const hItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] } },
};

export default function TestimonialsPreview() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" as never });

  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-site">

        {/* Section header */}
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <motion.p variants={hItem} className="text-overline mb-4">
              Patient Reviews
            </motion.p>
            <motion.h2
              id="testimonials-heading"
              variants={hItem}
              className="text-slate-900"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              What patients say.
            </motion.h2>
          </div>

          {/* Navigation dots — desktop */}
          {testimonials.length > 1 && (
            <motion.div
              variants={hItem}
              className="hidden lg:flex items-center gap-2"
              role="tablist"
              aria-label="Testimonial navigation"
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Review ${i + 1} of ${testimonials.length}`}
                  onClick={() => setCurrent(i)}
                  className={`h-0.5 transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] ${
                    i === current ? "w-8 bg-[#013565]" : "w-4 bg-[#C8C4BC] hover:bg-slate-400"
                  }`}
                  style={{ borderRadius: "1px" }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Featured quote */}
        <div className="relative min-h-[16rem] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={quoteVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="max-w-3xl"
            >
              {/* Opening mark */}
              <p
                className="text-[#013565]/8 select-none mb-2"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "6rem",
                  lineHeight: 0.8,
                }}
                aria-hidden="true"
              >
                &ldquo;
              </p>
              <blockquote>
                <p
                  className="text-slate-800 font-medium"
                  style={{
                    fontSize: "clamp(1.0625rem, 2vw, 1.375rem)",
                    lineHeight: 1.55,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {testimonials[current].quote}
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div
                    className="w-8 h-px bg-[#013565]"
                    aria-hidden="true"
                  />
                  <cite className="not-italic text-slate-500 text-sm font-medium">
                    {testimonials[current].author}
                    <span className="mx-2 text-slate-300" aria-hidden="true">·</span>
                    <span className="text-slate-400 font-normal">{testimonials[current].context}</span>
                  </cite>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile dots */}
        {testimonials.length > 1 && (
          <div
            className="flex lg:hidden items-center gap-3 mt-10"
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Review ${i + 1} of ${testimonials.length}`}
                onClick={() => setCurrent(i)}
                className={`h-0.5 transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] ${
                  i === current ? "w-8 bg-[#013565]" : "w-4 bg-[#C8C4BC]"
                }`}
                style={{ borderRadius: "1px" }}
              />
            ))}
          </div>
        )}

        {/* Google Reviews link */}
        <div className="mt-10 pt-8 border-t border-[#E2DFD9] flex items-center justify-between gap-4 flex-wrap">
          <a
            href="https://maps.google.com/?q=Gilgal+Dental+Clinics+Ikoyi+Lagos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#013565] text-sm font-medium hover:underline underline-offset-4 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded-[2px]"
            aria-label="Read Gilgal Dental Clinics reviews on Google (opens in new tab)"
          >
            Read our reviews on Google
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
          <p className="text-slate-400 text-xs">
            All reviews above are from verified Google Reviews.
          </p>
        </div>
      </div>
    </section>
  );
}
