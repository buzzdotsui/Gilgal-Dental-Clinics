"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { services } from "@/lib/data/servicesData";

interface ServiceHeroClientProps {
  title: string;
  heroHeadline: string;
  heroSubheading: string;
  slug: string;
}

export default function ServiceHeroClient({
  title,
  heroHeadline,
  heroSubheading,
  slug,
}: ServiceHeroClientProps) {
  // Resolve the icon on the client side using the slug — avoids server→client function serialization
  const service = services.find((s) => s.slug === slug);
  const Icon = service?.icon;

  return (
    <section className="section-padding bg-[#FDFEFF] border-b border-slate-100" aria-label={`${title} — hero`}>
      <div className="container-site">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 mb-5"
          >
            {Icon && (
              <div className="w-8 h-8 rounded-lg bg-[#013565]/8 flex items-center justify-center" aria-hidden="true">
                <Icon className="w-4 h-4 text-[#013565]" strokeWidth={1.75} />
              </div>
            )}
            <p className="text-eyebrow">{title}</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-h1 text-slate-900 mb-4"
          >
            {heroHeadline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-body-lg text-slate-500 mb-8 max-w-2xl"
          >
            {heroSubheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button href="/book-an-appointment" variant="primary" size="lg">
              Book an Appointment
            </Button>
            <WhatsAppButton size="lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
