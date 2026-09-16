"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface InternalCTAProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export function InternalCTA({
  heading = "Ready to speak with the team?",
  subheading = "Request an appointment with Gilgal Dental Clinics in Ikoyi, Lagos. We'll be in touch to confirm your preferred date and time.",
  primaryLabel = "Book an Appointment",
  primaryHref = "/book-an-appointment",
}: InternalCTAProps) {
  return (
    <section className="section-padding bg-[#013565]" aria-label="Book an appointment">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-h2 text-white mb-4">{heading}</h2>
          <p className="text-body-lg text-slate-300 mb-8">{subheading}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href={primaryHref}
              variant="outline-white"
              size="lg"
              className="!border-white/30 !text-white hover:!bg-white/15"
            >
              {primaryLabel}
            </Button>
            <WhatsAppButton size="lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
