import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { InternalCTA } from "@/components/shared/InternalCTA";
import { services } from "@/lib/data/servicesData";

export const metadata: Metadata = {
  title: "Dental Services | Gilgal Dental Clinics — Ikoyi, Lagos",
  description:
    "Comprehensive dental services in Ikoyi, Lagos — General Dentistry, Implant Dentistry, Cosmetic Dentistry, Orthodontics, Restorative Dentistry, Children's Dentistry and Laser Teeth Whitening.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Dental Services | Gilgal Dental Clinics",
    description:
      "Comprehensive dental care across 7 specialist areas at Gilgal Dental Clinics, Ikoyi, Lagos.",
    url: "https://gilgaldentalclinics.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        heading="Comprehensive dental care for every stage of your smile."
        subheading="Gilgal Dental Clinics offers a broad range of services — from routine care and prevention to restorative treatment, implants, orthodontics and cosmetic dentistry."
      />
      <section className="bg-white" aria-label="Restorative treatment at Gilgal">
        <div className="container-site pt-8 lg:pt-12">
          <div className="relative aspect-[16/6] overflow-hidden rounded-[4px] bg-slate-100">
            <Image src="/images/phase35/smile-treatment.jpg" alt="Dentist discussing restorative treatment with a patient" fill className="object-contain" sizes="(max-width: 768px) 100vw, 1184px" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-label="Service areas">
        <div className="container-site">
          <div className="border-t border-[#E2DFD9]">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group flex items-start justify-between gap-8 py-7 transition-colors duration-150 hover:bg-[#F4F3F1] -mx-6 px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#013565] ${
                  i < services.length - 1 ? "border-b border-[#E2DFD9]" : ""
                }`}
                aria-label={`${service.title} — learn more`}
              >
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-[3rem_16rem_1fr] gap-3 lg:gap-10 items-baseline">
                  <p
                    className="text-[#013565]/25 font-bold tabular-nums flex-shrink-0"
                    style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
                    aria-hidden="true"
                  >
                    {service.number}
                  </p>
                  <h2
                    className="text-slate-900 font-semibold group-hover:text-[#013565] transition-colors duration-150"
                    style={{ fontSize: "0.9375rem", lineHeight: 1.4 }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-slate-500" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    {service.shortDescription}
                  </p>
                </div>

                {/* Arrow */}
                <span
                  className="flex-shrink-0 mt-0.5 text-slate-300 group-hover:text-[#013565] group-hover:translate-x-1 transition-all duration-200"
                  aria-hidden="true"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InternalCTA />
    </>
  );
}
