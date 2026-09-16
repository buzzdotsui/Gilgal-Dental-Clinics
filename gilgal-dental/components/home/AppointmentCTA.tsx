"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function AppointmentCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section-padding bg-[#013565]"
      aria-labelledby="cta-heading"
    >
      <div className="container-site">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Label */}
          <p className="text-eyebrow text-sky-300 mb-4">Book an appointment</p>

          {/* Headline */}
          <h2
            id="cta-heading"
            className="text-h1 text-white mb-4"
          >
            Ready to take care of your smile?
          </h2>

          {/* Copy */}
          <p className="text-body-lg text-slate-300 mb-10">
            Request an appointment with Gilgal Dental Clinics in Ikoyi, Lagos.
            We&rsquo;ll get back to you to confirm your preferred date and time.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/book-an-appointment"
              variant="outline-white"
              size="lg"
              className="!border-white/30 hover:!bg-white/15 !text-white"
            >
              Book an Appointment
            </Button>
            <WhatsAppButton size="lg" />
          </div>

          {/* Contact details */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <a
              href="tel:+2348099906233"
              className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
              aria-label="Call +234 809 990 6233"
            >
              +234 809 990 6233
            </a>
            <span className="text-white/20" aria-hidden="true">|</span>
            <a
              href="mailto:gilgaldentalclinics@gmail.com"
              className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
              aria-label="Email gilgaldentalclinics@gmail.com"
            >
              gilgaldentalclinics@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
