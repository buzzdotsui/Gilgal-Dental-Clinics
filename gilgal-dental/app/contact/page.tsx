import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { InternalCTA } from "@/components/shared/InternalCTA";
import { clinicInfo, buildWhatsAppUrl } from "@/lib/data/clinicInfo";

export const metadata: Metadata = {
  title: "Contact | Gilgal Dental Clinics — Ikoyi, Lagos",
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
        subheading="We're here to help. Reach us by phone, email or WhatsApp — or visit us in Ikoyi, Lagos."
      />

      <section className="section-padding bg-[#FDFEFF]" aria-label="Contact information">
        <div className="container-site">

          {/* Top: contact cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-16">

            {/* Address */}
            <div className="card-base bg-white p-7">
              <div className="w-10 h-10 rounded-xl bg-[#013565]/8 flex items-center justify-center mb-5" aria-hidden="true">
                <MapPin className="w-5 h-5 text-[#013565]" strokeWidth={1.75} />
              </div>
              <h2 className="font-semibold text-slate-900 text-sm mb-2">Address</h2>
              <address className="not-italic text-body-sm text-slate-500 leading-relaxed">
                2 Olawale Daodu Road,<br />
                off Kingsway Road,<br />
                Ikoyi, Lagos, Nigeria
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=2+Olawale+Daodu+Road+off+Kingsway+Road+Ikoyi+Lagos+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-xs font-semibold text-[#013565] hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded"
                aria-label="View on Google Maps — opens in new tab"
              >
                View on Google Maps →
              </a>
            </div>

            {/* Phone */}
            <div className="card-base bg-white p-7">
              <div className="w-10 h-10 rounded-xl bg-[#013565]/8 flex items-center justify-center mb-5" aria-hidden="true">
                <Phone className="w-5 h-5 text-[#013565]" strokeWidth={1.75} />
              </div>
              <h2 className="font-semibold text-slate-900 text-sm mb-3">Phone</h2>
              <ul className="space-y-2" role="list">
                {clinicInfo.phones.map((p) => (
                  <li key={p.number}>
                    <a
                      href={p.href}
                      className={`text-body-sm transition-colors focus-visible:outline-none focus-visible:underline ${
                        p.primary ? "text-[#013565] font-semibold" : "text-slate-500 hover:text-[#013565]"
                      }`}
                    >
                      {p.number}
                      {p.primary && <span className="ml-2 text-xs font-normal text-slate-400">(Primary)</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email */}
            <div className="card-base bg-white p-7">
              <div className="w-10 h-10 rounded-xl bg-[#013565]/8 flex items-center justify-center mb-5" aria-hidden="true">
                <Mail className="w-5 h-5 text-[#013565]" strokeWidth={1.75} />
              </div>
              <h2 className="font-semibold text-slate-900 text-sm mb-3">Email</h2>
              <ul className="space-y-2" role="list">
                {clinicInfo.emails.map((e) => (
                  <li key={e.address}>
                    <a
                      href={e.href}
                      className={`text-body-sm break-all transition-colors focus-visible:outline-none focus-visible:underline ${
                        e.primary ? "text-[#013565] font-semibold" : "text-slate-500 hover:text-[#013565]"
                      }`}
                    >
                      {e.address}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp */}
            <div className="card-base bg-white p-7">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center mb-5" aria-hidden="true">
                <MessageCircle className="w-5 h-5 text-[#25D366]" strokeWidth={1.75} />
              </div>
              <h2 className="font-semibold text-slate-900 text-sm mb-2">WhatsApp</h2>
              <p className="text-body-sm text-slate-500 mb-4 leading-relaxed">
                Message us directly to request an appointment or ask a question.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-xs font-semibold rounded-lg hover:bg-[#1ebe57] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
                aria-label="Message us on WhatsApp — opens WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Bottom: Hours + Appointment strip */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Opening Hours */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-[#013565]/8 flex items-center justify-center" aria-hidden="true">
                  <Clock className="w-4 h-4 text-[#013565]" strokeWidth={1.75} />
                </div>
                <h2 className="font-semibold text-slate-900 text-base">Opening Hours</h2>
              </div>
              <ul className="space-y-3" role="list">
                {clinicInfo.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between items-center text-sm border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-slate-700">{h.day}</span>
                    <span className={h.closed ? "text-slate-400" : "text-slate-700 font-semibold"}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 mt-5 leading-relaxed">
                Hours may vary on public holidays. Please confirm availability by calling or
                messaging the clinic.
              </p>
            </div>

            {/* Book appointment panel */}
            <div className="bg-[#013565] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-white/8" aria-hidden="true" />
              <div className="absolute -bottom-16 -left-8 w-64 h-64 rounded-full border border-white/5" aria-hidden="true" />

              <div className="relative">
                <p className="text-sky-300 text-xs font-semibold uppercase tracking-widest mb-4">
                  Ready to visit?
                </p>
                <h2 className="text-h2 text-white mb-4">
                  Request an appointment
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  Submit an appointment request and we will contact you to confirm your preferred
                  date and time.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/book-an-appointment"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Book an Appointment
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-sm font-semibold rounded-lg hover:bg-[#1ebe57] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                    aria-label="Book via WhatsApp — opens WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
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
        subheading="We welcome new patients. Request an appointment and we'll be in touch to arrange your first visit."
      />
    </>
  );
}
