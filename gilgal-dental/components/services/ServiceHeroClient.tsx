"use client";

import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/data/clinicInfo";

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
}: ServiceHeroClientProps) {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <section
      className="section-padding bg-[#F4F3F1] border-b border-[#E2DFD9]"
      aria-label={`${title} — overview`}
    >
      <div className="container-site">
        <div className="max-w-3xl">
          <p className="text-overline mb-5">{title}</p>

          <h1
            className="text-slate-900 mb-5"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
            }}
          >
            {heroHeadline}
          </h1>

          <p
            className="text-slate-500 mb-9 max-w-2xl"
            style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
          >
            {heroSubheading}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/book-an-appointment"
              className="inline-flex items-center px-6 py-3 bg-[#013565] text-white text-sm font-semibold rounded-[2px] hover:bg-[#0A2E58] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2"
            >
              Book a Consultation
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-[#C8C4BC] text-slate-700 text-sm font-semibold rounded-[2px] hover:border-[#013565] hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
              aria-label="Message us on WhatsApp"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
