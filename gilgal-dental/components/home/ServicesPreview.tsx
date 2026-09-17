"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Services grouped into two clinical categories per design brief
const serviceGroups = [
  {
    category: "General Dentistry",
    services: [
      {
        title: "Examinations & Diagnosis",
        tagline: "Thorough assessments and honest, clear findings.",
        href: "/services/general-dentistry",
      },
      {
        title: "Cleaning & Scaling",
        tagline: "Professional hygiene care and preventive treatment.",
        href: "/services/general-dentistry",
      },
      {
        title: "Wisdom Tooth Removal",
        tagline: "Careful extractions, explained step by step.",
        href: "/services/general-dentistry",
      },
      {
        title: "Root Canal Treatment",
        tagline: "Endodontic care to save and restore affected teeth.",
        href: "/services/general-dentistry",
      },
      {
        title: "Periodontal Care",
        tagline: "Treatment and management of gum disease.",
        href: "/services/general-dentistry",
      },
    ],
  },
  {
    category: "Specialist & Elective Care",
    services: [
      {
        title: "Dental Implants",
        tagline: "Stable, permanent replacements for missing teeth.",
        href: "/services/implant-dentistry",
      },
      {
        title: "Restorative Dentistry",
        tagline: "Crowns, bridges and dentures to rebuild and repair.",
        href: "/services/restorative-dentistry",
      },
      {
        title: "Cosmetic Dentistry",
        tagline: "Veneers, bonding and smile enhancement.",
        href: "/services/cosmetic-dentistry",
      },
      {
        title: "Orthodontics",
        tagline: "Teeth straightening with braces and clear aligners.",
        href: "/services/orthodontics",
      },
      {
        title: "Children's Dentistry",
        tagline: "Gentle, reassuring care for young patients.",
        href: "/services/childrens-dentistry",
      },
      {
        title: "Laser Teeth Whitening",
        tagline: "Professional in-clinic treatment for a brighter smile.",
        href: "/services/laser-teeth-whitening",
      },
    ],
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};
const rowVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function ServiceRow({
  title,
  tagline,
  href,
}: {
  title: string;
  tagline: string;
  href: string;
}) {
  return (
    <motion.div variants={rowVariant}>
      <Link
        href={href}
        className="group flex items-center justify-between gap-6 py-4 border-b border-[#E2DFD9] hover:border-[#013565]/15 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:rounded-[2px]"
        aria-label={`${title} — ${tagline}`}
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-5 flex-1 min-w-0">
          <h3
            className="font-semibold text-slate-800 flex-shrink-0 transition-colors duration-200 group-hover:text-[#013565]"
            style={{ fontSize: "0.9375rem" }}
          >
            {title}
          </h3>
          <p className="text-slate-400 text-[0.8125rem] hidden sm:block truncate transition-colors duration-200 group-hover:text-slate-500">
            {tagline}
          </p>
        </div>
        <span className="flex-shrink-0 text-slate-300 group-hover:text-[#013565] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </span>
      </Link>
    </motion.div>
  );
}

export default function ServicesPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" as never });

  return (
    <section
      className="section-padding bg-[#F9F8F6]"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-lg">
            <p className="text-overline mb-4">Our Services</p>
            <h2
              id="services-heading"
              className="text-slate-900"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Dental care across
              <br className="hidden sm:block" />
              every stage of life.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-[0.8125rem] font-semibold text-[#013565] hover:underline underline-offset-4 flex-shrink-0 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded-[2px]"
            aria-label="View all dental services at Gilgal"
          >
            All Services →
          </Link>
        </div>

        {/* Two-column grouped service architecture */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 xl:gap-20">
          {serviceGroups.map((group, gi) => (
            <div key={group.category}>
              {/* Group label */}
              <div className="flex items-center gap-4 mb-1 pb-4 border-b-2 border-[#013565]">
                <p
                  className="text-[#013565] font-semibold"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.10em", textTransform: "uppercase" }}
                >
                  {group.category}
                </p>
              </div>

              {/* Service rows */}
              <motion.div
                variants={container}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                role="list"
                aria-label={`${group.category} services`}
                style={{ transitionDelay: gi === 1 ? "0.08s" : "0s" }}
              >
                {group.services.map((s) => (
                  <div key={s.href + s.title} role="listitem">
                    <ServiceRow {...s} />
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
