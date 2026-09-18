"use client";

import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import type { AppointmentFormData } from "@/lib/appointment/submitAppointment";
import { buildAppointmentWhatsAppUrl } from "@/lib/data/clinicInfo";
import {
  successContainer,
  successIcon,
  successText,
} from "@/lib/motion";

interface AppointmentSuccessProps {
  data: AppointmentFormData;
}

export default function AppointmentSuccess({ data }: AppointmentSuccessProps) {
  const whatsappUrl = buildAppointmentWhatsAppUrl({
    name: data.fullName,
    service: data.service,
    date: data.preferredDate,
    time: data.preferredTime,
  });

  return (
    <motion.div
      variants={successContainer}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-[4px] border border-[#E2DFD9] shadow-[0_1px_3px_0_rgb(0_0_0/0.06),0_4px_16px_0_rgb(0_0_0/0.05)] p-8 sm:p-12 text-center"
      role="status"
      aria-live="polite"
    >
      {/* Icon — spring scale entrance */}
      <motion.div
        variants={successIcon}
        className="w-14 h-14 rounded-[4px] bg-emerald-50 flex items-center justify-center mx-auto mb-6"
        aria-hidden="true"
      >
        <CheckCircle className="w-8 h-8 text-emerald-500" strokeWidth={1.75} />
      </motion.div>

      {/* Heading */}
      <motion.h2 variants={successText} className="text-h2 text-slate-900 mb-3">
        Request received
      </motion.h2>

      {/* Body copy */}
      <motion.p variants={successText} className="text-body text-slate-500 max-w-md mx-auto mb-2">
        Thank you, <strong className="text-slate-700">{data.fullName}</strong>. Your appointment
        request has been received.
      </motion.p>
      <motion.p variants={successText} className="text-body text-slate-500 max-w-md mx-auto mb-8">
        <strong className="text-slate-700">We&rsquo;ll contact you to confirm your appointment.</strong>
      </motion.p>

      {/* Summary */}
      <motion.div
        variants={successText}
        className="border-t border-[#E2DFD9] pt-5 mb-8 text-left max-w-sm mx-auto"
      >
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Your request summary</p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500">Service</span>
            <span className="font-medium text-slate-800">{data.service}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Date preference</span>
            <span className="font-medium text-slate-800">{data.preferredDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Time preference</span>
            <span className="font-medium text-slate-800">{data.preferredTime}</span>
          </div>
        </div>
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        variants={successText}
        className="flex flex-wrap justify-center gap-3 mb-6"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-sm font-semibold rounded-[2px] hover:bg-[#1ebe57] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          aria-label="Follow up via WhatsApp"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          Follow up on WhatsApp
        </a>
        <a
          href="tel:+2348099906233"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[#C8C4BC] text-slate-700 text-sm font-semibold rounded-[2px] hover:border-[#013565] hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Call the Clinic
        </a>
      </motion.div>

      <motion.div variants={successText}>
        <Link
          href="/"
          className="text-sm text-slate-400 hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:underline"
        >
          Return to homepage
        </Link>
      </motion.div>
    </motion.div>
  );
}
