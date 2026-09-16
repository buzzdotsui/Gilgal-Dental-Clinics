"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Stethoscope,
  Bone,
  Sparkles,
  AlignCenter,
  RefreshCw,
  Baby,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";

interface Service {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    icon: Stethoscope,
    number: "01",
    title: "General Dentistry",
    description:
      "Routine examinations, cleanings, fillings, and preventive care to maintain your oral health.",
    href: "/services/general-dentistry",
  },
  {
    icon: Bone,
    number: "02",
    title: "Implant Dentistry",
    description:
      "Natural-looking dental implants to replace missing teeth with lasting, stable results.",
    href: "/services/implant-dentistry",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Cosmetic Dentistry",
    description:
      "Smile-enhancing treatments including veneers, bonding, and aesthetic improvements.",
    href: "/services/cosmetic-dentistry",
  },
  {
    icon: AlignCenter,
    number: "04",
    title: "Orthodontics",
    description:
      "Teeth straightening solutions — including braces and clear aligner options.",
    href: "/services/orthodontics",
  },
  {
    icon: RefreshCw,
    number: "05",
    title: "Restorative Dentistry",
    description:
      "Crowns, bridges, dentures, and restorations to rebuild and strengthen damaged teeth.",
    href: "/services/restorative-dentistry",
  },
  {
    icon: Baby,
    number: "06",
    title: "Children's Dentistry",
    description:
      "Gentle, patient-centered dental care designed to build confidence in young patients.",
    href: "/services/childrens-dentistry",
  },
  {
    icon: Zap,
    number: "07",
    title: "Laser Teeth Whitening",
    description:
      "Professional in-clinic whitening treatment for a noticeably brighter smile.",
    href: "/services/teeth-whitening",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="section-padding bg-slate-50"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Our Services"
            heading="Dental care for every stage of your smile."
            subheading="We offer a comprehensive range of dental treatments for children, adults, and the whole family."
            headingAs="h2"
          />
          <a
            href="/services"
            className="text-sm font-semibold text-[#013565] hover:underline underline-offset-2 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded"
            aria-label="View all dental services"
          >
            View all services →
          </a>
        </div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          role="list"
          aria-label="Dental services offered"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants} role="listitem">
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
