"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    title: "Comfortable Care",
    body: "We understand that dental visits can feel daunting. Every aspect of your visit — from the environment to the way we communicate — is shaped around your comfort.",
  },
  {
    title: "Clear Communication",
    body: "Before any treatment begins, we explain what we have found and discuss your options clearly. You will never be rushed or left without answers.",
  },
  {
    title: "Comprehensive Dentistry",
    body: "From routine check-ups to restorative work and cosmetic treatments, Gilgal offers a broad range of services so patients can receive consistent, joined-up care.",
  },
];

export default function AboutPhilosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" aria-labelledby="philosophy-heading">
      <div className="container-site">
        <div ref={ref} className="max-w-3xl mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-eyebrow mb-3"
          >
            Our Approach
          </motion.p>
          <motion.h2
            id="philosophy-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-h2 text-slate-900 mb-5"
          >
            Comfortable care. Clear communication. Comprehensive dentistry.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-body-lg text-slate-500"
          >
            At Gilgal Dental Clinics, every decision is made with the patient in mind.
            We believe that good dentistry begins with listening, continues with honest assessment,
            and is delivered with care throughout.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="bg-[#FDFEFF] border border-slate-100 rounded-2xl p-8"
            >
              <div className="w-10 h-10 rounded-xl bg-[#013565]/8 flex items-center justify-center mb-5">
                <span className="text-[#013565] font-bold text-sm tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-h3 text-slate-900 mb-3">{pillar.title}</h3>
              <p className="text-body text-slate-500 leading-relaxed">{pillar.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
