"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const textReveal: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const textItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0, 0, 0.2, 1] } },
};

// Concrete explanation of what patients can expect — no fabricated quotes
const steps = [
  {
    number: "01",
    heading: "Consultation",
    body: "Your first appointment begins with a thorough conversation. We listen to your concerns, discuss your dental history, and understand your goals before any examination begins.",
  },
  {
    number: "02",
    heading: "Examination & Diagnosis",
    body: "We carry out a comprehensive clinical examination, supported by appropriate imaging where needed. Every finding is explained clearly and honestly.",
  },
  {
    number: "03",
    heading: "Treatment Planning",
    body: "Where treatment is needed, we walk you through all available options — including timelines, costs, and what to expect at each stage. You decide the pace.",
  },
  {
    number: "04",
    heading: "Treatment",
    body: "Appointments are structured so you are never rushed. We explain each step before it happens and check in with you throughout.",
  },
  {
    number: "05",
    heading: "Ongoing Care",
    body: "After treatment, we provide clear aftercare guidance and schedule appropriate follow-up appointments to monitor your long-term dental health.",
  },
];

export default function PatientExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" as never });

  return (
    <section
      className="section-padding bg-[#F9F8F6]"
      aria-labelledby="experience-heading"
    >
      <div className="container-site">
        <div ref={ref}>
          {/* Section header */}
          <motion.div
            variants={textReveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-2xl mb-14"
          >
            <motion.p variants={textItem} className="text-overline mb-4">
              Patient Experience
            </motion.p>
            <motion.h2
              id="experience-heading"
              variants={textItem}
              className="text-slate-900"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              What to expect at Gilgal
            </motion.h2>
            <motion.p
              variants={textItem}
              className="text-slate-500 mt-4"
              style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
            >
              From your first visit to your ongoing care, every appointment is
              structured around clarity, comfort, and your individual needs.
            </motion.p>
          </motion.div>

          {/* Process steps — two-column editorial grid on desktop */}
          <motion.div
            variants={textReveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-[#E2DFD9]"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={textItem}
                className={[
                  "py-8",
                  // right padding on all but last in each row
                  i < steps.length - 1 ? "lg:pr-8" : "",
                  // left padding and left border after first in each row
                  i > 0 && i % 3 !== 0 ? "lg:pl-8 lg:border-l lg:border-[#E2DFD9]" : "",
                  i > 0 && i % 2 !== 0 ? "sm:pl-8 sm:border-l sm:border-[#E2DFD9] lg:border-none lg:pl-0" : "",
                  // top border for second row onwards
                  i >= 3 ? "lg:border-t lg:border-[#E2DFD9]" : "",
                  i >= 2 ? "sm:border-t sm:border-[#E2DFD9] lg:border-t-0" : "",
                ].join(" ")}
              >
                <p
                  className="text-[#013565]/20 font-bold mb-4 tabular-nums"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.08em" }}
                  aria-hidden="true"
                >
                  {step.number}
                </p>
                <h3
                  className="text-slate-900 font-semibold mb-3"
                  style={{ fontSize: "1rem", lineHeight: 1.3 }}
                >
                  {step.heading}
                </h3>
                <p className="text-slate-500" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  {step.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
