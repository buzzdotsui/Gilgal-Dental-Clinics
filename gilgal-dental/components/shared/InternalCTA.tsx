import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/data/clinicInfo";

interface InternalCTAProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export function InternalCTA({
  heading = "Ready to speak with the team?",
  subheading = "Request an appointment at Gilgal Dental Clinics in Ikoyi, Lagos. We'll be in touch to confirm your preferred date and time.",
  primaryLabel = "Book a Consultation",
  primaryHref = "/book-an-appointment",
}: InternalCTAProps) {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <section className="section-padding bg-[#013565]" aria-label="Book an appointment">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-end">
          {/* Text */}
          <div>
            <p className="text-overline-light mb-5">Next Steps</p>
            <h2
              className="text-white mb-4"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                lineHeight: 1.12,
                letterSpacing: "-0.01em",
              }}
            >
              {heading}
            </h2>
            <p className="text-white/70 max-w-xl" style={{ fontSize: "1rem", lineHeight: 1.65 }}>
              {subheading}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[#013565] text-sm font-semibold rounded-[2px] hover:bg-[#F4F3F1] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#013565] whitespace-nowrap"
            >
              {primaryLabel}
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/25 text-white/85 text-sm font-semibold rounded-[2px] hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
              aria-label="Message us on WhatsApp"
            >
              WhatsApp the Clinic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
