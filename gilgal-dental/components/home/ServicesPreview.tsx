"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "General Dentistry",
    tagline: "Examinations, cleanings, fillings and preventive care.",
    href: "/services/general-dentistry",
  },
  {
    number: "02",
    title: "Implant Dentistry",
    tagline: "Stable, natural-looking replacements for missing teeth.",
    href: "/services/implant-dentistry",
  },
  {
    number: "03",
    title: "Cosmetic Dentistry",
    tagline: "Veneers, bonding and smile-enhancing treatments.",
    href: "/services/cosmetic-dentistry",
  },
  {
    number: "04",
    title: "Orthodontics",
    tagline: "Teeth straightening with braces and clear aligners.",
    href: "/services/orthodontics",
  },
  {
    number: "05",
    title: "Restorative Dentistry",
    tagline: "Crowns, bridges and dentures to rebuild damaged teeth.",
    href: "/services/restorative-dentistry",
  },
  {
    number: "06",
    title: "Children's Dentistry",
    tagline: "Gentle, patient-centred care for young patients.",
    href: "/services/childrens-dentistry",
  },
  {
    number: "07",
    title: "Laser Teeth Whitening",
    tagline: "Professional in-clinic treatment for a brighter smile.",
    href: "/services/laser-teeth-whitening",
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};
const rowVariant: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ServiceRow({ number, title, tagline, href }: typeof services[0]) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={rowVariant}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Link
        href={href}
        className="group flex items-center justify-between gap-6 py-5 border-b border-[#E8EBF0] hover:border-[#013565]/20 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:rounded"
        aria-label={`${title} — ${tagline}`}
      >
        {/* Number */}
        <span
          className="text-xs font-semibold tabular-nums flex-shrink-0 transition-colors duration-200"
          style={{
            letterSpacing: "0.06em",
            color: hovered ? "#013565" : "#CBD5E1",
            minWidth: "2rem",
          }}
          aria-hidden="true"
        >
          {number}
        </span>

        {/* Title + tagline */}
        <div className="flex-1 flex items-baseline gap-4 lg:gap-8 min-w-0">
          <h3
            className="font-semibold text-slate-900 flex-shrink-0 transition-colors duration-200 group-hover:text-[#013565]"
            style={{ fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)" }}
          >
            {title}
          </h3>
          <p
            className="text-slate-400 text-sm hidden sm:block truncate transition-colors duration-200 group-hover:text-slate-500"
          >
            {tagline}
          </p>
        </div>

        {/* Arrow */}
        <motion.span
          className="flex-shrink-0 text-slate-300 group-hover:text-[#013565] transition-colors duration-200"
          animate={{ x: hovered ? 4 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </motion.span>
      </Link>
    </motion.div>
  );
}

export default function ServicesPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" as never });

  return (
    <section
      className="section-padding bg-[#F7F8FA]"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
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
              Comprehensive care,
              <br className="hidden sm:block" />
              thoughtfully delivered.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-[#013565] hover:underline underline-offset-4 flex-shrink-0 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded"
            aria-label="View all dental services at Gilgal"
          >
            All Services →
          </Link>
        </div>

        {/* Service rows */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          role="list"
          aria-label="Dental services"
        >
          {/* Top border */}
          <div className="border-t border-[#E8EBF0]" />
          {services.map((s) => (
            <div key={s.href} role="listitem">
              <ServiceRow {...s} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
