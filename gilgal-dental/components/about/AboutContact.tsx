"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { clinicInfo } from "@/lib/data/clinicInfo";

export default function AboutContact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" aria-labelledby="find-us-heading">
      <div className="container-site">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-eyebrow mb-3">Find Us</p>
            <h2 id="find-us-heading" className="text-h2 text-slate-900 mb-6">
              Visit us in Ikoyi, Lagos.
            </h2>
            <p className="text-body text-slate-500 mb-8 leading-relaxed">
              Gilgal Dental Clinics is conveniently located off Kingsway Road in Ikoyi. We
              welcome both new and returning patients. Contact us to arrange your visit.
            </p>

            <ul className="space-y-5 mb-10" role="list">
              <li className="flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-[#013565]/8 flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                  <MapPin className="w-4 h-4 text-[#013565]" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Address</p>
                  <address className="not-italic text-slate-700 text-sm leading-relaxed">
                    {clinicInfo.address.full}
                  </address>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-[#013565]/8 flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                  <Phone className="w-4 h-4 text-[#013565]" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                  <a
                    href={clinicInfo.phones[0].href}
                    className="text-slate-700 text-sm hover:text-[#013565] transition-colors"
                  >
                    {clinicInfo.phones[0].number}
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-[#013565]/8 flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                  <Mail className="w-4 h-4 text-[#013565]" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                  <a
                    href={clinicInfo.emails[0].href}
                    className="text-slate-700 text-sm hover:text-[#013565] transition-colors break-all"
                  >
                    {clinicInfo.emails[0].address}
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-[#013565]/8 flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                  <Clock className="w-4 h-4 text-[#013565]" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Opening Hours</p>
                  <ul className="space-y-1">
                    {clinicInfo.hours.map((h) => (
                      <li key={h.day} className="text-sm text-slate-700">
                        <span className="font-medium">{h.day}:</span>{" "}
                        <span className={h.closed ? "text-slate-400" : ""}>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-3">
              <Button href="/book-an-appointment" variant="primary" size="md">
                Book an Appointment
              </Button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#013565] font-semibold text-sm hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded"
              >
                Contact the Clinic
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          {/* Right: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#013565] p-8 md:p-10 text-white shadow-[0_20px_60px_-15px_rgb(1_53_101/0.3)]">
              {/* Decorative ring */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-white/10" aria-hidden="true" />
              <div className="absolute -bottom-16 -left-8 w-64 h-64 rounded-full border border-white/5" aria-hidden="true" />

              <p className="text-sky-300 text-xs font-semibold uppercase tracking-widest mb-6">Quick Reference</p>

              <div className="space-y-6 relative">
                <div className="pb-6 border-b border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Address</p>
                  <p className="text-white text-sm leading-relaxed">
                    2 Olawale Daodu Road,<br />
                    off Kingsway Road,<br />
                    Ikoyi, Lagos, Nigeria
                  </p>
                </div>
                <div className="pb-6 border-b border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Hours</p>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Monday – Friday</span>
                      <span className="text-white font-medium">9AM – 6PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Sat & Public Hols</span>
                      <span className="text-white font-medium">9AM – 3PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Sunday</span>
                      <span className="text-slate-400 font-medium">Closed</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Contact</p>
                  <a
                    href="tel:+2348099906233"
                    className="text-white text-sm font-medium hover:text-sky-300 transition-colors"
                  >
                    +234 809 990 6233
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
