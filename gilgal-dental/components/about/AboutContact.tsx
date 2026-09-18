import Link from "next/link";
import { clinicInfo } from "@/lib/data/clinicInfo";

export default function AboutContact() {
  return (
    <section className="section-padding bg-[#F4F3F1]" aria-labelledby="find-us-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

          {/* Left: context */}
          <div>
            <p className="text-overline mb-5">Find Us</p>
            <h2
              id="find-us-heading"
              className="text-slate-900 mb-5"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Visit us in Ikoyi, Lagos.
            </h2>
            <p className="text-slate-500 mb-10" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
              We welcome both new and returning patients. Appointments can be requested online
              or by contacting the clinic directly.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/book-an-appointment"
                className="inline-flex items-center px-6 py-3 bg-[#013565] text-white text-sm font-semibold rounded-[2px] hover:bg-[#0A2E58] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2"
              >
                Book a Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-[#C8C4BC] text-slate-700 text-sm font-semibold rounded-[2px] hover:border-[#013565] hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
              >
                Contact the Clinic
              </Link>
            </div>
          </div>

          {/* Right: details in ruled rows */}
          <div className="border-t border-[#E2DFD9]">
            {/* Address */}
            <div className="py-6 border-b border-[#E2DFD9]">
              <p className="text-overline mb-3">Address</p>
              <address className="not-italic text-slate-700 text-sm leading-relaxed">
                {clinicInfo.address.full}
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

            {/* Hours */}
            <div className="py-6 border-b border-[#E2DFD9]">
              <p className="text-overline mb-4">Opening Hours</p>
              <dl className="space-y-2">
                {clinicInfo.hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center text-sm">
                    <dt className="text-slate-600">{h.day}</dt>
                    <dd className={`font-medium ${h.closed ? "text-slate-400" : "text-slate-800"}`}>
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Contact */}
            <div className="py-6">
              <p className="text-overline mb-4">Contact</p>
              <div className="space-y-2">
                <a
                  href={clinicInfo.phones[0].href}
                  className="block text-sm text-slate-700 hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  {clinicInfo.phones[0].number}
                </a>
                <a
                  href={clinicInfo.emails[0].href}
                  className="block text-sm text-slate-700 hover:text-[#013565] transition-colors break-all focus-visible:outline-none focus-visible:underline"
                >
                  {clinicInfo.emails[0].address}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
