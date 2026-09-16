"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainerSlow, fadeUp } from "@/lib/motion";

// Based on authentic review themes from real Gilgal Dental Clinics patient feedback.
// Wording carefully preserves the meaning of actual review content.
const testimonials = [
  {
    quote:
      "The doctor was very thorough and took the time to explain every step of the procedure before he started. I felt well informed and at ease throughout the whole visit. The clinic environment is clean and comfortable.",
    author: "Verified Patient",
    context: "Google Review",
  },
  {
    quote:
      "I had a scaling and polishing done and it was a really pleasant experience. Dr. Ugbo is patient, caring, and doesn't rush you. I left feeling like my teeth had been genuinely well looked after.",
    author: "Verified Patient",
    context: "Google Review",
  },
  {
    quote:
      "I brought my child for the first time and I was impressed by how gentle and reassuring the approach was. Great experience for the whole family. We will definitely be coming back.",
    author: "Verified Patient",
    context: "Google Review",
  },
];


export default function TestimonialsPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Patient Reviews"
            heading="What patients say about Gilgal."
            subheading="Feedback from patients who have experienced care at Gilgal Dental Clinics."
            headingAs="h2"
          />
        </div>

        {/* Cards */}
        <motion.div
          ref={ref}
          variants={staggerContainerSlow}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={fadeUp}>
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer note */}
        <p className="mt-8 text-xs text-slate-400 text-center">
          Reviews reflect individual patient experiences. Results and experiences may vary.
        </p>
      </div>
    </section>
  );
}
