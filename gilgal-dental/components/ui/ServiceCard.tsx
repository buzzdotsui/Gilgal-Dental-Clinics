"use client";

import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ icon: Icon, number, title, description, href }: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.22, ease: [0, 0, 0.2, 1] }}
    >
      <Link
        href={href}
        className="group block h-full card-base p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2 rounded-[var(--radius-card)] transition-shadow duration-300 hover:shadow-[0_8px_32px_-8px_rgb(1_53_101/0.18)]"
        aria-label={`Learn more about ${title}`}
      >
        {/* Top row: number + arrow */}
        <div className="flex items-start justify-between mb-5">
          <span className="text-xs font-semibold text-slate-400 tracking-widest">
            {number}
          </span>
          <motion.span
            className="text-slate-300 group-hover:text-[#013565] transition-colors duration-200"
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
            transition={{ duration: 0.18 }}
          >
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </motion.span>
        </div>

        {/* Icon */}
        <motion.div
          className="mb-4 w-11 h-11 rounded-lg bg-[#013565]/8 flex items-center justify-center transition-colors duration-250"
          whileHover={{ backgroundColor: "rgba(1,53,101,0.14)" }}
          transition={{ duration: 0.2 }}
        >
          <Icon
            className="w-5 h-5 text-[#013565]"
            aria-hidden="true"
            strokeWidth={1.75}
          />
        </motion.div>

        {/* Title */}
        <h3 className="font-semibold text-slate-900 text-base mb-2 group-hover:text-[#013565] transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-body-sm text-slate-500 leading-relaxed">
          {description}
        </p>
      </Link>
    </motion.article>
  );
}
