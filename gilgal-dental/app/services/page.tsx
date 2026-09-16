import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
        subheading="Gilgal Dental Clinics offers a broad range of dental services — from routine care and prevention to restorative treatment, implants, orthodontics and cosmetic dentistry."
      />

      <section className="section-padding bg-[#FDFEFF]" aria-label="Service areas">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group card-base bg-white p-7 flex flex-col gap-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2 rounded-xl"
                  aria-label={`${service.title} — learn more`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#013565]/8 group-hover:bg-[#013565]/15 flex items-center justify-center flex-shrink-0 transition-colors duration-200" aria-hidden="true">
                      <Icon className="w-5 h-5 text-[#013565]" strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-semibold text-slate-300 tabular-nums pt-1">{service.number}</span>
                  </div>

                  <div className="flex-1">
                    <h2 className="font-semibold text-slate-900 text-base mb-2 group-hover:text-[#013565] transition-colors duration-200">
                      {service.title}
                    </h2>
                    <p className="text-body-sm text-slate-500 leading-relaxed">{service.shortDescription}</p>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#013565] text-sm font-semibold">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <InternalCTA />
    </>
  );
}
