"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const stepVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
const staggerGrid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0 } },
};

const stages = [
  {
    number: "01",
    heading: "Understand",
    body: "Every appointment begins with a proper conversation. We listen carefully to your concerns, review your dental history, and carry out a thorough clinical examination before discussing what we find. Nothing is rushed.",
  },
  {
    number: "02",
    heading: "Plan",
    body: "Where treatment is needed, we walk you through the options available, including expected timelines and costs. You are fully involved in the decision before any work begins. We do not proceed without your informed consent.",
  },
  {
    number: "03",
    heading: "Care",
    body: "Treatment is carried out at a pace that suits you. We explain each step as we go, check in with you throughout, and provide clear aftercare guidance when you leave. Follow-up is arranged based on your individual needs.",
  },
];

export default function PatientExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" as never });

  return (
    <section
      className="section-padding bg-[#F4F3F1]"
      aria-labelledby="experience-heading"
    >
      <div className="container-site">
        {/* Section header */}
        <div className="max-w-xl mb-14">
          <p className="text-overline mb-4">Patient Experience</p>
          <h2
            id="experience-heading"
            className="text-slate-900"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            A dental visit should feel personal.
          </h2>
          <p
            className="text-slate-500 mt-4"
            style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
          >
            From your first visit to ongoing care, every appointment is
            structured around clarity, communication, and your individual needs.
          </p>
        </div>

        {/* Three stages */}
        <motion.div
          ref={ref}
          variants={staggerGrid}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#E2DFD9]"
        >
          {stages.map((stage, i) => (
            <motion.div
              key={stage.number}
              variants={stepVariant}
              className={[
                "py-10",
                i < stages.length - 1 ? "md:pr-10 md:border-r md:border-[#E2DFD9]" : "",
                i > 0 ? "md:pl-10" : "",
                i > 0 ? "border-t border-[#E2DFD9] md:border-t-0" : "",
              ].join(" ")}
            >
              <p
                className="text-[#013565]/20 font-bold mb-5 tabular-nums"
                style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
                aria-hidden="true"
              >
                {stage.number}
              </p>
              <h3
                className="text-slate-900 font-semibold mb-4"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                {stage.heading}
              </h3>
              <p className="text-slate-500" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                {stage.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
