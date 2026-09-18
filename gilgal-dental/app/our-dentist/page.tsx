import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InternalCTA } from "@/components/shared/InternalCTA";
import { dentistData } from "@/lib/data/dentistData";

export const metadata: Metadata = {
  title: "Our Dentist — Dr. Osaze Ugbo | Gilgal Dental Clinics",
  description:
    "Meet Dr. Osaze Ugbo, Principal Dentist at Gilgal Dental Clinics. Over 17 years of clinical experience, trained at the Eastman Dental Institute, UK and BICON Institute, USA.",
  alternates: { canonical: "/our-dentist" },
  openGraph: {
    title: "Dr. Osaze Ugbo — Principal Dentist | Gilgal Dental Clinics",
    description:
      "More than 17 years of clinical experience. Trained at the Eastman Dental Institute, UK and BICON Institute, USA.",
    url: "https://gilgaldentalclinics.com/our-dentist",
  },
};

export default function OurDentistPage() {
  return (
    <>
      {/* ── Hero: full-bleed editorial profile ── */}
      <section
        className="section-padding bg-[#F4F3F1] border-b border-[#E2DFD9]"
        aria-label="Dr. Osaze Ugbo — principal dentist"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-start">

            {/* Portrait */}
            <div className="w-full lg:w-[340px] flex-shrink-0 order-2 lg:order-1">
              <div className="relative overflow-hidden aspect-[3/4] max-h-[440px] bg-slate-100 rounded-[4px]">
                <Image
                  src="/images/phase35/dr-osaze-ugbo.png"
                  alt={dentistData.imageAlt}
                  fill
                  className="object-contain object-center"
                  preload
                  sizes="(max-width: 1024px) 100vw, 340px"
                />
              </div>
              {/* Caption */}
              <div className="mt-3 flex items-baseline justify-between">
                <p className="text-[0.8125rem] font-semibold text-slate-800">{dentistData.name}</p>
                <p className="text-[0.75rem] text-slate-400">{dentistData.title}</p>
              </div>
            </div>

            {/* Profile content */}
            <div className="order-1 lg:order-2 lg:pt-2">
              <p className="text-overline mb-5">Our Dentist</p>
              <h1
                className="text-slate-900 mb-2"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  fontWeight: 600,
                  lineHeight: 1.08,
                  letterSpacing: "-0.01em",
                }}
              >
                {dentistData.name}
              </h1>
              <p className="text-[#013565] text-[0.9375rem] font-medium mb-8">
                {dentistData.title}
              </p>

              <div className="space-y-4 mb-10">
                {dentistData.bio.map((para, i) => (
                  <p
                    key={i}
                    className={i === 0 ? "text-slate-700" : "text-slate-500"}
                    style={{ fontSize: i === 0 ? "1.0625rem" : "1rem", lineHeight: 1.7 }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Credential stats */}
              <div className="flex flex-wrap gap-8 pt-7 border-t border-[#E2DFD9] mb-10">
                <div>
                  <p
                    className="text-[#013565] font-bold"
                    style={{ fontSize: "1.75rem", lineHeight: 1 }}
                  >
                    {dentistData.yearsExperience}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">Years of experience</p>
                </div>
                <div>
                  <p
                    className="text-[#013565] font-bold"
                    style={{ fontSize: "1.75rem", lineHeight: 1 }}
                  >
                    {dentistData.implantsPlaced}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">Implants completed</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/book-an-appointment"
                  className="inline-flex items-center px-6 py-3 bg-[#013565] text-white text-sm font-semibold rounded-[2px] hover:bg-[#0A2E58] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 border border-[#C8C4BC] text-slate-700 text-sm font-semibold rounded-[2px] hover:border-[#013565] hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Areas of Practice — ruled rows ── */}
      <section className="section-padding bg-white" aria-labelledby="practice-heading">
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <p className="text-overline mb-5">Areas of Practice</p>
            <h2
              id="practice-heading"
              className="text-slate-900"
              style={{ fontSize: "clamp(1.375rem, 2.5vw, 2rem)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.018em" }}
            >
              Clinical areas
            </h2>
          </div>
          <div className="border-t border-[#E2DFD9]">
            {dentistData.areasOfPractice.map((area, i) => (
              <div
                key={area.title}
                className={`grid grid-cols-1 lg:grid-cols-[14rem_1fr] gap-4 lg:gap-12 py-7 ${
                  i < dentistData.areasOfPractice.length - 1 ? "border-b border-[#E2DFD9]" : ""
                }`}
              >
                <h3 className="text-slate-900 font-semibold" style={{ fontSize: "0.9375rem" }}>
                  {area.title}
                </h3>
                <p className="text-slate-500" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Training and Memberships — ruled rows ── */}
      <section className="section-padding bg-[#F4F3F1]" aria-labelledby="training-heading">
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <p className="text-overline mb-5">Professional Development</p>
            <h2
              id="training-heading"
              className="text-slate-900"
              style={{ fontSize: "clamp(1.375rem, 2.5vw, 2rem)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.018em" }}
            >
              Training and memberships
            </h2>
          </div>

          <div className="border-t border-[#E2DFD9]">
            {dentistData.training.map((t, i) => (
              <div
                key={t.institution}
                className={`grid grid-cols-1 lg:grid-cols-[14rem_1fr] gap-4 lg:gap-12 py-7 ${
                  i < dentistData.training.length - 1 ? "border-b border-[#E2DFD9]" : ""
                }`}
              >
                <div>
                  <p className="font-semibold text-slate-900" style={{ fontSize: "0.9375rem" }}>
                    {t.institution}
                  </p>
                  <p className="text-[#013565] text-xs font-medium mt-1">{t.location}</p>
                </div>
                <p className="text-slate-500" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                  {t.description}
                </p>
              </div>
            ))}
            {dentistData.memberships.map((m) => (
              <div
                key={m.organisation}
                className="grid grid-cols-1 lg:grid-cols-[14rem_1fr] gap-4 lg:gap-12 py-7 border-t border-[#E2DFD9]"
              >
                <div>
                  <p className="font-semibold text-slate-900" style={{ fontSize: "0.9375rem" }}>
                    {m.organisation}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">{m.type}</p>
                </div>
                <p className="text-slate-500" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                  Affiliate membership affirming Dr. Ugbo&rsquo;s commitment to continuing professional development
                  and current best practice in dentistry.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy — left-aligned editorial pull quote ── */}
      <section className="section-padding bg-white" aria-labelledby="philosophy-dentist-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-overline mb-5">Philosophy</p>
              <h2
                id="philosophy-dentist-heading"
                className="text-slate-900"
                style={{ fontSize: "clamp(1.375rem, 2.5vw, 2rem)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.018em" }}
              >
                How Dr. Ugbo approaches patient care
              </h2>
            </div>
            <div className="border-l-2 border-[#013565]/15 pl-8">
              <p
                className="text-slate-600"
                style={{ fontSize: "1.125rem", lineHeight: 1.75, fontStyle: "italic" }}
              >
                &ldquo;{dentistData.philosophy}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <InternalCTA
        heading="Book a consultation with Dr. Ugbo"
        subheading="Request an appointment at Gilgal Dental Clinics. We will be in touch to confirm your preferred date and time."
      />
    </>
  );
}
