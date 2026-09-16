"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
  { day: "Saturday & Public Holidays", time: "9:00 AM – 3:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section-padding bg-slate-50"
      aria-labelledby="contact-heading"
    >
      <div className="container-site">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-eyebrow mb-3">Find Us</p>
          <h2 id="contact-heading" className="text-h2 text-slate-900">
            Visit Gilgal Dental Clinics
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="card-base p-6">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#013565]/8 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <MapPin className="w-5 h-5 text-[#013565]" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">Address</p>
                  <address className="text-slate-500 text-sm not-italic leading-relaxed">
                    2 Olawale Daodu Road, off Kingsway Road<br />
                    Ikoyi, Lagos, Nigeria
                  </address>
                  <a
                    href="https://maps.google.com/?q=Gilgal+Dental+Clinics+Ikoyi+Lagos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-[#013565] text-xs font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded"
                    aria-label="Get directions to Gilgal Dental Clinics (opens Google Maps)"
                  >
                    Get directions
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card-base p-5">
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#013565]/8 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Phone className="w-4 h-4 text-[#013565]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-1">Phone</p>
                    <a
                      href="tel:+2348099906233"
                      className="text-slate-500 text-sm hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:underline"
                      aria-label="Call +234 809 990 6233"
                    >
                      +234 809 990 6233
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-base p-5">
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#013565]/8 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Mail className="w-4 h-4 text-[#013565]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-1">Email</p>
                    <a
                      href="mailto:gilgaldentalclinics@gmail.com"
                      className="text-slate-500 text-sm hover:text-[#013565] transition-colors break-all focus-visible:outline-none focus-visible:underline"
                      aria-label="Email gilgaldentalclinics@gmail.com"
                    >
                      gilgaldentalclinics@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="card-base p-6">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#013565]/8 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Clock className="w-5 h-5 text-[#013565]" strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900 text-sm mb-3">Opening Hours</p>
                  <dl className="space-y-2">
                    {hours.map(({ day, time }) => (
                      <div key={day} className="flex items-start justify-between gap-4">
                        <dt className="text-slate-500 text-sm">{day}</dt>
                        <dd
                          className={`text-sm font-medium flex-shrink-0 ${
                            time === "Closed" ? "text-slate-400" : "text-slate-800"
                          }`}
                        >
                          {time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 min-h-[360px] flex flex-col items-center justify-center gap-4 relative"
            aria-label="Map location placeholder"
          >
            {/* Map placeholder — will be replaced with Google Maps embed in Phase 3 */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200" aria-hidden="true" />
            <div className="relative z-10 text-center px-6">
              <div className="w-14 h-14 rounded-full bg-[#013565]/10 flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-7 h-7 text-[#013565]" strokeWidth={1.5} />
              </div>
              <p className="font-semibold text-slate-700 text-sm mb-1">Gilgal Dental Clinics</p>
              <p className="text-slate-500 text-xs text-center">
                2 Olawale Daodu Road, off Kingsway Road<br />
                Ikoyi, Lagos, Nigeria
              </p>
              <a
                href="https://maps.google.com/?q=Gilgal+Dental+Clinics+Ikoyi+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 px-4 py-2 rounded-lg bg-[#013565] text-white text-sm font-medium hover:bg-[#012550] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2"
                aria-label="Open Google Maps for Gilgal Dental Clinics"
              >
                Open in Maps
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
