"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Link from "next/link";
import { testimonials } from "@/lib/data/testimonialsData";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { ArrowRight } from "lucide-react";

const headerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const hItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] } },
};

export default function TestimonialsPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" as never });

  // Feature specific reviews as requested
  const featuredIds = ["ife-dixon", "ephraim-bright", "agatha-obi"];
  const featuredReviews = testimonials.filter((t) => featuredIds.includes(t.id));

  return (
    <section
      className="section-padding bg-[#F8F9FA] overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-site">
        {/* Section header */}
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <motion.p variants={hItem} className="text-overline mb-4 text-[#013565]">
              PATIENT REVIEWS
            </motion.p>
            <motion.h2
              id="testimonials-heading"
              variants={hItem}
              className="text-slate-900 mb-4"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Trusted by Our Patients
            </motion.h2>
            <motion.p
              variants={hItem}
              className="text-slate-600 text-lg leading-relaxed"
            >
              Real experiences from patients who have trusted Gilgal Dental Clinic with their smiles and dental care.
            </motion.p>
          </div>

          <motion.div variants={hItem} className="hidden lg:block">
            <Link
              href="/testimonials"
              className="group inline-flex items-center gap-2 text-[#013565] font-medium hover:text-[#013565]/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded-sm"
            >
              Read All Patient Testimonials
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Review Cards Grid / Scroll */}
        <motion.div
          className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <style dangerouslySetInnerHTML={{ __html: `
            .snap-mandatory::-webkit-scrollbar {
              display: none;
            }
          `}} />
          {featuredReviews.map((t) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              className="w-[85vw] sm:w-[60vw] lg:w-auto flex-shrink-0 snap-center h-auto"
            >
              <TestimonialCard
                quote={t.quote}
                author={t.author}
                context={t.context}
                url={t.url}
                rating={t.rating}
                className="line-clamp-5 lg:line-clamp-4"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Link */}
        <div className="mt-8 lg:hidden flex justify-center">
          <Link
            href="/testimonials"
            className="group inline-flex items-center gap-2 text-[#013565] font-medium hover:text-[#013565]/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded-sm"
          >
            Read All Patient Testimonials
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
