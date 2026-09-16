"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  UserCheck, Heart, Layers, Smile, Sparkles, Baby,
} from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Experienced Care",
    body: "Dr. Osaze Ugbo brings more than 17 years of clinical experience to every consultation, with advanced training from internationally recognised institutions.",
  },
  {
    icon: Heart,
    title: "Patient Comfort",
    body: "A relaxed, friendly environment where patients are treated with patience and respect. We take the time to make sure every visit feels manageable.",
  },
  {
    icon: Layers,
    title: "Comprehensive Services",
    body: "From general dentistry to implants, orthodontics, and cosmetic care — most patients can access the full range of treatment they need in one practice.",
  },
  {
    icon: Smile,
    title: "Friendly Environment",
    body: "The clinic is designed to feel welcoming rather than clinical. Patients consistently note the friendly atmosphere and the quality of the team.",
  },
  {
    icon: Sparkles,
    title: "Modern Techniques",
    body: "We use up-to-date dental techniques and approaches, supported by Dr. Ugbo's ongoing professional development.",
  },
  {
    icon: Baby,
    title: "Family-Friendly Practice",
    body: "Gilgal welcomes patients of all ages. Children are seen with patience and understanding, and parents are kept informed throughout.",
  },
];

export default function AboutWhyChoose() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-[#FDFEFF]" aria-labelledby="why-heading">
      <div className="container-site">
        <div ref={ref} className="max-w-2xl mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-eyebrow mb-3"
          >
            Why Patients Choose Gilgal
          </motion.p>
          <motion.h2
            id="why-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-h2 text-slate-900"
          >
            A practice built on trust.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                className="card-base bg-white p-7"
              >
                <div
                  className="w-10 h-10 rounded-xl bg-[#013565]/8 flex items-center justify-center mb-5"
                  aria-hidden="true"
                >
                  <Icon className="w-5 h-5 text-[#013565]" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-slate-900 text-base mb-2">{reason.title}</h3>
                <p className="text-body-sm text-slate-500 leading-relaxed">{reason.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
