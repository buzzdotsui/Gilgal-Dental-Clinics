"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ContactPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" as never });

  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="container-site">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={item} className="mb-12">
            <p className="text-overline mb-4">Visit Us</p>
            <h2
              id="contact-heading"
              className="text-slate-900"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
              }}
            >
              Visit Gilgal Dental Clinics
              <br />
              <span className="text-slate-400 font-normal" style={{ fontSize: "0.65em" }}>
                Ikoyi, Lagos
              </span>
            </h2>
          </motion.div>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-[#E2DFD9]">

            {/* Address */}
            <motion.div
              variants={item}
              className="py-8 lg:pr-10 border-b lg:border-b-0 lg:border-r border-[#E2DFD9]"
            >
              <p className="text-overline mb-4">Address</p>
              <address className="not-italic text-slate-600 leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
                2 Olawale Daodu Road,<br />
                off Kingsway Road,<br />
                Ikoyi, Lagos, Nigeria
              </address>
              <a
                href="https://maps.google.com/?q=Gilgal+Dental+Clinics+Ikoyi+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#013565] text-sm font-medium hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded"
                aria-label="Get directions to Gilgal Dental Clinics (opens Google Maps)"
              >
                Get directions
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </motion.div>

            {/* Hours */}
            <motion.div
              variants={item}
              className="py-8 lg:px-10 border-b lg:border-b-0 lg:border-r border-[#E2DFD9]"
            >
              <p className="text-overline mb-4">Opening Hours</p>
              <dl className="space-y-3">
                {[
                  { day: "Mon – Fri", time: "9:00 AM – 6:00 PM" },
                  { day: "Sat & Public Holidays", time: "9:00 AM – 3:00 PM" },
                  { day: "Sunday", time: "Closed" },
                ].map(({ day, time }) => (
                  <div key={day} className="flex items-start justify-between gap-4">
                    <dt className="text-slate-500 text-sm">{day}</dt>
                    <dd
                      className={`text-sm font-medium flex-shrink-0 ${
                        time === "Closed" ? "text-slate-300" : "text-slate-800"
                      }`}
                    >
                      {time}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            {/* Contact + CTA */}
            <motion.div variants={item} className="py-8 lg:pl-10">
              <p className="text-overline mb-4">Contact</p>
              <div className="space-y-2.5 mb-8">
                <a
                  href="tel:+2348099906233"
                  className="block text-slate-600 text-sm hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:underline"
                  aria-label="Call +234 809 990 6233"
                >
                  +234 809 990 6233
                </a>
                <a
                  href="mailto:gilgaldentalclinics@gmail.com"
                  className="block text-slate-600 text-sm hover:text-[#013565] transition-colors break-all focus-visible:outline-none focus-visible:underline"
                  aria-label="Email gilgaldentalclinics@gmail.com"
                >
                  gilgaldentalclinics@gmail.com
                </a>
              </div>
              <Link
                href="/book-an-appointment"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#013565] text-white text-sm font-semibold rounded-[2px] border border-[#013565] hover:bg-[#0A2E58] hover:border-[#0A2E58] hover:-translate-y-px active:translate-y-0 shadow-[0_1px_3px_0_rgb(1_53_101/0.22)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2"
              >
                Book a Consultation
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
