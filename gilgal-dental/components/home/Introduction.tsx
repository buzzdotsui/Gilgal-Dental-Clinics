"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  {
    title: "Experienced professionals",
    description:
      "Led by Dr. Osaze Ugbo, with over 17 years of clinical experience and international training.",
  },
  {
    title: "Family-friendly care",
    description:
      "We treat patients of all ages, from children to adults, with patience and understanding.",
  },
  {
    title: "Modern dental techniques",
    description:
      "Up-to-date equipment and contemporary approaches to dental treatment.",
  },
  {
    title: "Relaxed environment",
    description:
      "A comfortable, welcoming clinic environment designed to put patients at ease.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Introduction() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="intro-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p variants={itemVariants} className="text-eyebrow mb-3">
              About Gilgal Dental Clinics
            </motion.p>
            <motion.h2
              id="intro-heading"
              variants={itemVariants}
              className="text-h2 text-slate-900 mb-5"
            >
              A dental practice built around better patient experiences.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-body-lg text-slate-500 mb-8"
            >
              At Gilgal Dental Clinics, we believe good dental care goes beyond
              procedures — it&rsquo;s about how patients feel throughout the
              entire experience. From your first visit to your final appointment,
              our goal is to provide comprehensive, high-quality dental care in
              a setting that feels calm and reassuring.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-body text-slate-500 mb-8"
            >
              Based in Ikoyi, Lagos, we offer a broad range of dental services
              for the whole family, delivered by an experienced team that takes
              the time to understand each patient&rsquo;s needs.
            </motion.p>

            <motion.ul variants={containerVariants} className="space-y-4" role="list">
              {features.map(({ title, description }) => (
                <motion.li
                  key={title}
                  variants={itemVariants}
                  className="flex gap-3"
                >
                  <div
                    className="w-5 h-5 rounded-full bg-[#013565]/10 flex items-center justify-center flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <Check className="w-3 h-3 text-[#013565]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm mb-0.5">{title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: decorative info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
            aria-hidden="true"
          >
            <div className="relative">
              {/* Main card */}
              <div className="rounded-2xl bg-[#013565]/5 border border-[#013565]/10 p-8 space-y-6">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-[#013565] uppercase tracking-wider">Our approach</p>
                  <p className="text-slate-800 font-semibold text-lg leading-snug">
                    Dental care that puts patients first — always.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    "Thorough examination and honest diagnosis",
                    "Clear explanations before any treatment",
                    "Comfortable pacing — no rush",
                    "Consistent follow-up care",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#013565] mt-2 flex-shrink-0" />
                      <p className="text-slate-600 text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-2xl bg-slate-100" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
