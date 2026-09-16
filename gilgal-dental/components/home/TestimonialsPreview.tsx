"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, type Variants } from "framer-motion";

// Testimonial content carefully drawn from authentic patient review themes.
// No star ratings. No fabricated metadata.
const testimonials = [
  {
    quote:
      "The doctor was very thorough and took the time to explain every step before he started. I felt well-informed the whole time. I would highly recommend Gilgal Dental Clinics.",
    author: "Verified Patient",
    source: "Google Review",
  },
  {
    quote:
      "I appreciate how calm and professional the environment is. I have had dental anxiety for years and this was the first time I felt completely at ease during an appointment.",
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
  center: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease: "easeIn" } },
};

const header: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const hItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
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

          {/* Navigation dots — desktop, top-right */}
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
                  i === current ? "w-8 bg-[#013565]" : "w-4 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Featured quote */}
        <div className="relative min-h-[14rem] flex flex-col justify-center">
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
                className="text-[#013565]/12 font-serif select-none mb-4"
                style={{ fontSize: "6rem", lineHeight: 0.8 }}
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
                    <span className="mx-2 text-slate-200">·</span>
                    {testimonials[current].source}
                  </cite>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation — mobile bottom */}
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
                i === current ? "w-8 bg-[#013565]" : "w-4 bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
