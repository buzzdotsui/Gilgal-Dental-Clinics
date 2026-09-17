"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const WA_URL = `https://wa.me/2348099906233?text=${encodeURIComponent(
  "Hello Gilgal Dental Clinics, I would like to book a consultation. Please let me know the available dates and times."
)}`;

export default function AppointmentCTA() {
  return (
    <section
      className="section-padding bg-[#F9F8F6] border-y border-[#E2DFD9]"
      aria-labelledby="cta-heading"
    >
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="text-overline mb-5">Book an appointment</p>

          <h2
            id="cta-heading"
            className="text-slate-900 mb-5"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Your next dental visit
            <br />
            <span className="text-[#013565]">starts here.</span>
          </h2>

          <p
            className="text-slate-500 mb-10"
            style={{ fontSize: "1.0625rem", lineHeight: 1.65, maxWidth: "480px" }}
          >
            Request a consultation at Gilgal Dental Clinics in Ikoyi, Lagos.
            We&rsquo;ll confirm your preferred date and time as soon as possible.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            <Link
              href="/book-an-appointment"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#013565] text-white text-sm font-semibold rounded-[2px] border border-[#013565] hover:bg-[#0A2E58] hover:border-[#0A2E58] hover:-translate-y-px active:translate-y-0 shadow-[0_1px_3px_0_rgb(1_53_101/0.25)] hover:shadow-[0_4px_12px_0_rgb(1_53_101/0.30)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent text-slate-700 text-sm font-semibold rounded-[2px] border border-[#C8C4BC] hover:border-[#013565] hover:text-[#013565] hover:bg-[#013565]/[0.04] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2"
              aria-label="WhatsApp Gilgal Dental Clinics to book a consultation"
            >
              WhatsApp the Clinic
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400 pt-8 border-t border-[#E2DFD9]">
            <a
              href="tel:+2348099906233"
              className="hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:underline"
              aria-label="Call +234 809 990 6233"
            >
              +234 809 990 6233
            </a>
            <span className="text-[#E2DFD9]" aria-hidden="true">·</span>
            <a
              href="mailto:gilgaldentalclinics@gmail.com"
              className="hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:underline"
              aria-label="Email gilgaldentalclinics@gmail.com"
            >
              gilgaldentalclinics@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
