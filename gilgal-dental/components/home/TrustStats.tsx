"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: "17+",
    label: "Years of experience",
    detail: "Serving patients since 2007",
  },
  {
    value: "200+",
    label: "Implants completed",
    detail: "Successfully placed dental implants",
  },
  {
    value: "7",
    label: "Core service areas",
    detail: "Comprehensive dental care",
  },
  {
    value: "Ikoyi",
    label: "Lagos location",
    detail: "2 Olawale Daodu Road",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function TrustStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="bg-[#013565] text-white py-14 lg:py-16"
      aria-label="About Gilgal Dental Clinics — key statistics"
    >
      <div className="container-site">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
        >
          {stats.map(({ value, label, detail }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="text-center lg:text-left lg:pl-8 lg:first:pl-0 lg:border-l lg:first:border-0 border-white/15"
            >
              <p
                className="text-3xl md:text-4xl font-bold text-white mb-1"
                aria-label={`${value} — ${label}`}
              >
                {value}
              </p>
              <p className="font-semibold text-sky-200 text-sm mb-1">{label}</p>
              <p className="text-slate-300 text-xs hidden lg:block">{detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
