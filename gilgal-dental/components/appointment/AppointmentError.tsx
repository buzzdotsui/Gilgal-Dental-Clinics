"use client";

import { motion } from "framer-motion";
import { AlertCircle, MessageCircle, Phone, RefreshCw } from "lucide-react";
import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/data/clinicInfo";

interface AppointmentErrorProps {
  onRetry: () => void;
}

export default function AppointmentError({ onRetry }: AppointmentErrorProps) {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_24px_-4px_rgb(1_53_101/0.1)] p-8 sm:p-12 text-center"
      role="alert"
      aria-live="assertive"
    >
      <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
        <AlertCircle className="w-8 h-8 text-red-400" strokeWidth={1.75} />
      </div>

      <h2 className="text-h2 text-slate-900 mb-3">Something went wrong</h2>
      <p className="text-body text-slate-500 max-w-md mx-auto mb-8">
        We couldn&rsquo;t submit your appointment request right now. Please try again, or contact
        the clinic directly and we&rsquo;ll be happy to assist.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#013565] text-white text-sm font-semibold rounded-lg hover:bg-[#012550] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2"
        >
          <RefreshCw className="w-4 h-4" aria-hidden="true" />
          Try Again
        </button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-sm font-semibold rounded-lg hover:bg-[#1ebe57] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          WhatsApp Us
        </a>
        <a
          href="tel:+2348099906233"
          className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg hover:border-[#013565]/30 hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Call the Clinic
        </a>
      </div>

      <Link
        href="/contact"
        className="text-sm text-slate-400 hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:underline"
      >
        Visit our contact page
      </Link>
    </motion.div>
  );
}
