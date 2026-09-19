import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { InternalCTA } from "@/components/shared/InternalCTA";
import { clinicInfo, buildWhatsAppUrl } from "@/lib/data/clinicInfo";

export const metadata: Metadata = {
  title: { absolute: "Contact | Gilgal Dental Clinics — Ikoyi, Lagos" },
  description:
    "Contact Gilgal Dental Clinics in Ikoyi, Lagos. Phone, email, WhatsApp, address and opening hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Gilgal Dental Clinics",
    description:
      "Find our address, phone numbers, email and opening hours. Located in Ikoyi, Lagos, Nigeria.",
    url: "https://gilgaldentalclinics.com/contact",
  },
};

const whatsappUrl = buildWhatsAppUrl();

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        heading="Get in touch with Gilgal Dental Clinics."
        subheading="We are here to help. Reach us by phone, email or WhatsApp — or visit us in Ikoyi, Lagos."
      />

      <section className="section-padding bg-white" aria-label="Contact information">
        <div className="container-site">

          {/* ── Primary contact details — ruled rows ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-14 lg:gap-24 items-start">

            {/* Left: contact rows */}
            <div>
              <div className="border-t border-[#E2DFD9]">

                {/* Address */}
                <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-3 sm:gap-8 py-7 border-b border-[#E2DFD9]">
                  <p className="text-overline">Address</p>
                  <div>
                    <address className="not-italic text-slate-700 text-sm leading-relaxed">
                      2 Olawale Daodu Road,<br />
                      off Kingsway Road,<br />
                      Ikoyi, Lagos, Nigeria
                    </address>
                    <a
                      href={clinicInfo.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-xs font-semibold text-[#013565] hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded-[2px]"
                      aria-label="View on Google Maps — opens in new tab"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-3 sm:gap-8 py-7 border-b border-[#E2DFD9]">
                  <p className="text-overline">Phone</p>
                  <ul className="space-y-2" role="list">
                    {clinicInfo.phones.map((p) => (
                      <li key={p.number}>
                        <a
                          href={p.href}
                          className={`text-sm transition-colors focus-visible:outline-none focus-visible:underline ${
                            p.primary
                              ? "text-[#013565] font-semibold"
                              : "text-slate-500 hover:text-[#013565]"
                          }`}
                        >
                          {p.number}
                          {p.primary && (
                            <span className="ml-2 text-xs font-normal text-slate-400">(Primary)</span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Email */}
                <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-3 sm:gap-8 py-7 border-b border-[#E2DFD9]">
                  <p className="text-overline">Email</p>
                  <ul className="space-y-2" role="list">
                    {clinicInfo.emails.map((e) => (
                      <li key={e.address}>
                        <a
                          href={e.href}
                          className={`text-sm break-all transition-colors focus-visible:outline-none focus-visible:underline ${
                            e.primary
                              ? "text-[#013565] font-semibold"
                              : "text-slate-500 hover:text-[#013565]"
                          }`}
                        >
                          {e.address}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-3 sm:gap-8 py-7">
                  <p className="text-overline">WhatsApp</p>
                  <div>
                    <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                      Message us directly to request an appointment or ask a question.
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-[2px] hover:bg-[#1ebe57] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
                      aria-label="Message us on WhatsApp — opens WhatsApp"
                    >
                      Message on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Opening hours + appointment prompt */}
            <div className="space-y-6">

              {/* Hours */}
              <div className="bg-[#F4F3F1] p-7 rounded-[4px]">
                <p className="text-overline mb-5">Opening Hours</p>
                <dl className="space-y-3">
                  {clinicInfo.hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between items-center text-sm border-b border-[#E2DFD9] pb-3 last:border-0 last:pb-0"
                    >
                      <dt className="text-slate-600">{h.day}</dt>
                      <dd className={`font-medium ${h.closed ? "text-slate-400" : "text-slate-800"}`}>
                        {h.time}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="text-xs text-slate-400 mt-5 leading-relaxed">
                  Hours may vary on public holidays. Please confirm by calling or messaging the clinic.
                </p>
              </div>

              {/* Appointment prompt */}
              <div className="bg-[#013565] p-7 rounded-[4px]">
                <p className="text-overline-light mb-4">Ready to visit?</p>
                <p
                  className="text-white mb-2"
                  style={{ fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.3 }}
                >
                  Request an appointment
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-7">
                  Submit a request and we will contact you to confirm your preferred date and time.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/book-an-appointment"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#013565] text-sm font-semibold rounded-[2px] hover:bg-[#F4F3F1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Book an Appointment
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white/25 text-white/85 text-sm font-semibold rounded-[2px] hover:bg-white/10 hover:border-white/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label="Book via WhatsApp — opens WhatsApp"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InternalCTA
        heading="New to Gilgal Dental Clinics?"
        subheading="We welcome new patients. Request an appointment and we will be in touch to arrange your first visit."
      />
    </>
  );
}
