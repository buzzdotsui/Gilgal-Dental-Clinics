"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WA_URL = `https://wa.me/2348099906233?text=${encodeURIComponent(
  "Hello Gilgal Dental Clinics, I would like to book an appointment. Please let me know the available dates and times."
)}`;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function AppointmentCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" as never });

  return (
    <section
      className="section-padding bg-[#F7F8FA] border-y border-[#E8EBF0]"
      aria-labelledby="cta-heading"
    >
      <div className="container-site">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl"
        >
          <motion.p variants={item} className="text-overline mb-5">
            Get in touch
          </motion.p>

          <motion.h2
            id="cta-heading"
            variants={item}
            className="text-slate-900 mb-5"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Your next dental visit
            <br />
            <span className="text-[#013565]" style={{ fontWeight: 400, fontStyle: "italic" }}>
              starts here.
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-slate-500 mb-10"
            style={{ fontSize: "1.0625rem", lineHeight: 1.65, maxWidth: "480px" }}
          >
            Request an appointment at Gilgal Dental Clinics in Ikoyi, Lagos.
            We&rsquo;ll confirm your preferred date and time as soon as possible.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-10">
            <Link
              href="/book-an-appointment"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#013565] text-white text-sm font-semibold rounded-md hover:bg-[#012550] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2"
            >
              Book an Appointment
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-slate-200 text-slate-700 text-sm font-semibold rounded-md hover:border-[#013565]/30 hover:text-[#013565] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2"
              aria-label="WhatsApp Gilgal Dental Clinics"
            >
              WhatsApp Us
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-5 text-sm text-slate-400 pt-8 border-t border-[#E8EBF0]"
          >
            <a
              href="tel:+2348099906233"
              className="hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:underline"
              aria-label="Call +234 809 990 6233"
            >
              +234 809 990 6233
            </a>
            <span className="text-slate-200" aria-hidden="true">·</span>
            <a
              href="mailto:gilgaldentalclinics@gmail.com"
              className="hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:underline"
              aria-label="Email gilgaldentalclinics@gmail.com"
            >
              gilgaldentalclinics@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
