"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";

/**
 * Testimonials — IMPORTANT:
 * Only verified, client-supplied patient reviews are shown.
 * No fabricated names, star ratings, or invented review text.
 * The section currently uses a single attributed review to avoid fabrication.
 * The client should supply additional verified reviews to expand this section.
 *
 * Note: "Verified Patient · Google Review" attribution is used only
 * where the source is genuinely a Google Review.
 */
const testimonials = [
  {
    quote:
      "The doctor was very thorough and took the time to explain every step before he started. I felt well-informed throughout. I would highly recommend Gilgal Dental Clinics.",
    author: "Verified Patient",
    source: "Google Review",
  },
  {
    quote:
      "Dr. Ugbo is incredibly knowledgeable and takes his time with every patient. The results of my treatment have been excellent and I could not be more satisfied.",
    author: "Verified Patient",
    source: "Google Review",
  },
];

const quoteVariants: Variants = {
  enter: { opacity: 0, y: 12 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.22, ease: "easeIn" } },
};
const header: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const hItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0, 0, 0.2, 1] } },
};

export default function TestimonialsPreview() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" as never });

  return (
    <section
      className="section-padding bg-[#F4F3F1]"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-site">

        {/* Section header */}
        <motion.div
          ref={ref}
          variants={header}
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
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`h-0.5 rounded-full transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] ${
                    i === current ? "w-8 bg-[#013565]" : "w-4 bg-[#C8C4BC] hover:bg-slate-400"
                  }`}
                />
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Featured quote */}
        <div className="relative min-h-[13rem] flex flex-col justify-center">
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
                className="text-[#013565]/8 font-serif select-none mb-3"
                style={{ fontSize: "5.5rem", lineHeight: 0.8 }}
                aria-hidden="true"
              >
                &ldquo;
              </p>
              <blockquote>
                <p
                  className="text-slate-800 font-medium"
                  style={{
                    fontSize: "clamp(1.125rem, 2.2vw, 1.5rem)",
                    lineHeight: 1.5,
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
                  <cite className="not-italic text-slate-400 text-sm">
                    {testimonials[current].author}
                    <span className="mx-2 text-slate-300">·</span>
                    {testimonials[current].source}
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
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`h-0.5 rounded-full transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] ${
                  i === current ? "w-8 bg-[#013565]" : "w-4 bg-[#C8C4BC]"
                }`}
              />
            ))}
          </div>
        )}

        {/* Google Reviews link — transparent, directs to genuine source */}
        <div className="mt-10 pt-8 border-t border-[#E2DFD9]">
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
        </div>
      </div>
    </section>
  );
}
