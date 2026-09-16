"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, GraduationCap, Award } from "lucide-react";
import { fadeLeft, fadeRight, staggerContainer, fadeUp } from "@/lib/motion";

const credentials = [
  { icon: GraduationCap, label: "Eastman Dental Institute, UK" },
  { icon: GraduationCap, label: "BICON Institute, USA" },
  { icon: Award, label: "Affiliate Member, American Dental Association" },
];

export default function DoctorPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" aria-labelledby="doctor-heading">
      <div className="container-site">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[560px] bg-slate-100 shadow-[0_20px_60px_-15px_rgb(1_53_101/0.15)] group">
              <Image
                src="/images/dr-ugbo.png"
                alt="Dr. Osaze Ugbo, Principal Dentist at Gilgal Dental Clinics"
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Name badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-lg">
                <p className="font-bold text-slate-900 text-base">Dr. Osaze Ugbo</p>
                <p className="text-[#013565] text-sm font-medium">Principal Dentist</p>
              </div>
            </div>
            {/* Decorative element */}
            <div
              className="absolute -z-10 -top-4 -left-4 w-2/3 h-2/3 rounded-2xl bg-slate-100"
              aria-hidden="true"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p className="text-eyebrow mb-3">Our Dentist</p>
            <h2 id="doctor-heading" className="text-h2 text-slate-900 mb-5">
              Dr. Osaze Ugbo
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-body-lg text-slate-500">
                Dr. Osaze Ugbo brings over 17 years of clinical experience to
                Gilgal Dental Clinics. He is passionate about dentistry and
                committed to delivering high-quality care that patients trust.
              </p>
              <p className="text-body text-slate-500">
                He practises General Dentistry with a particular interest in
                Restorative Dentistry, and has successfully completed more than
                200 dental implants. His training includes courses at the{" "}
                <strong className="text-slate-700 font-medium">Eastman Dental Institute</strong>{" "}
                in the United Kingdom and the{" "}
                <strong className="text-slate-700 font-medium">BICON Institute</strong>{" "}
                in the USA.
              </p>
              <p className="text-body text-slate-500">
                Dr. Ugbo is an affiliate member of the{" "}
                <strong className="text-slate-700 font-medium">American Dental Association</strong>.
              </p>
            </div>

            {/* Credentials — staggered */}
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-3 mb-8"
              role="list"
              aria-label="Dr. Ugbo's credentials"
            >
              {credentials.map(({ icon: Icon, label }) => (
                <motion.li key={label} variants={fadeUp} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg bg-[#013565]/8 flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <Icon className="w-4 h-4 text-[#013565]" strokeWidth={1.75} />
                  </div>
                  <span className="text-slate-600 text-sm">{label}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <Link
              href="/our-dentist"
              className="inline-flex items-center gap-2 text-[#013565] font-semibold text-sm hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded"
              aria-label="Meet Dr. Osaze Ugbo — learn more"
            >
              Meet Dr. Ugbo
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
