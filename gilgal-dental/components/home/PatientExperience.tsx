"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, MessageSquare, Users, Microscope } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Genuine care",
    description:
      "We take the time to understand how patients feel — not just what they need clinically.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    description:
      "Every step of your treatment is explained clearly, so you always know what to expect.",
  },
  {
    icon: Users,
    title: "A welcoming environment",
    description:
      "From the reception to the chair, the clinic is designed to feel comfortable and unhurried.",
  },
  {
    icon: Microscope,
    title: "Modern equipment",
    description:
      "We use up-to-date dental equipment to deliver accurate, effective treatment.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PatientExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section-padding bg-slate-50"
      aria-labelledby="experience-heading"
    >
      <div className="container-site">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-eyebrow mb-3">Patient Experience</p>
          <h2
            id="experience-heading"
            className="text-h2 text-slate-900 mb-4"
          >
            People who genuinely care about your experience.
          </h2>
          <p className="text-body-lg text-slate-500">
            At Gilgal, every decision is made with the patient in mind — from
            the way we schedule appointments to how we explain treatment
            options. You should leave every visit feeling informed, respected,
            and well cared for.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="card-base p-6"
            >
              <div
                className="w-11 h-11 rounded-xl bg-[#013565]/8 flex items-center justify-center mb-4"
                aria-hidden="true"
              >
                <Icon className="w-5 h-5 text-[#013565]" strokeWidth={1.75} />
              </div>
              <h3 className="font-semibold text-slate-900 text-base mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 rounded-2xl bg-[#013565] text-white px-8 py-8 lg:px-12 lg:py-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl lg:text-2xl font-medium text-sky-100 leading-relaxed">
              &ldquo;You are not just a patient here — you are a person, and we
              treat you accordingly.&rdquo;
            </p>
            <p className="mt-4 text-slate-300 text-sm">Gilgal Dental Clinics — Ikoyi, Lagos</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
