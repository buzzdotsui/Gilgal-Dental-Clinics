"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const stats = [
  { value: "17+", label: "Years of experience", detail: "Clinical practice since 2007" },
  { value: "200+", label: "Implants placed", detail: "Successfully completed" },
  { value: "Ikoyi", label: "Lagos, Nigeria", detail: "2 Olawale Daodu Road" },
  { value: "7", label: "Service areas", detail: "Comprehensive dental care" },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TrustStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" as never });

  return (
    <section
      className="border-y border-[#E8EBF0] bg-white py-10 lg:py-12"
      aria-label="Gilgal Dental Clinics — key facts"
    >
      <div className="container-site">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap items-center justify-between gap-y-8"
        >
          {stats.map(({ value, label, detail }, i) => (
            <motion.div
              key={label}
              variants={item}
              className={[
                "flex-1 min-w-[140px] text-center lg:text-left",
                i > 0 ? "lg:pl-10 lg:border-l lg:border-[#E8EBF0]" : "",
              ].join(" ")}
            >
              <p
                className="text-[#013565] font-bold mb-1"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
                aria-label={`${value} — ${label}`}
              >
                {value}
              </p>
              <p className="text-slate-700 text-sm font-medium">{label}</p>
              <p className="text-slate-400 text-xs mt-0.5 hidden lg:block">{detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
