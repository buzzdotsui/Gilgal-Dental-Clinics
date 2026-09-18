// Server Component — safe to receive ServiceData (with icon functions)
// because this runs on the server and never serializes to the client.
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { InternalCTA } from "@/components/shared/InternalCTA";
import ServiceHeroClient from "./ServiceHeroClient";
import type { ServiceData } from "@/lib/data/servicesData";

interface ServicePageLayoutProps {
  service: ServiceData;
  relatedServices: ServiceData[];
}

export function ServicePageLayout({ service, relatedServices }: ServicePageLayoutProps) {
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Hero */}
      <ServiceHeroClient
        title={service.title}
        heroHeadline={service.heroHeadline}
        heroSubheading={service.heroSubheading}
        slug={service.slug}
      />
      <section className="bg-white" aria-label={`${service.title} treatment context`}>
        <div className="container-site py-8 lg:py-12">
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-[4px] bg-slate-100">
            <Image src={service.image} alt={service.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 1184px" />
          </div>
        </div>
      </section>

      {/* ── Introduction + Patient Experience ── */}
      <section className="section-padding bg-white" aria-labelledby={`${service.slug}-intro-heading`}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

            {/* Left: introduction text */}
            <div>
              <p className="text-overline mb-5">Overview</p>
              <h2
                id={`${service.slug}-intro-heading`}
                className="text-slate-900 mb-6"
                style={{ fontSize: "clamp(1.375rem, 2.5vw, 2rem)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.018em" }}
              >
                What is {service.title}?
              </h2>
              <div className="space-y-4">
                {service.introduction.map((para, i) => (
                  <p key={i} className="text-slate-500" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Right: patient experience — plain navy block, no decorative circles */}
            <div className="bg-[#013565] p-8 rounded-[4px]">
              <p className="text-overline-light mb-5">Our Approach</p>
              <h3
                className="text-white mb-4"
                style={{ fontSize: "1.0625rem", fontWeight: 600, lineHeight: 1.4 }}
              >
                What to expect at Gilgal
              </h3>
              <p className="text-white/70" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                {service.patientExperience}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Offer — ruled rows ── */}
      <section className="section-padding bg-[#F4F3F1]" aria-labelledby={`${service.slug}-offer-heading`}>
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <p className="text-overline mb-5">What We Offer</p>
            <h2
              id={`${service.slug}-offer-heading`}
              className="text-slate-900"
              style={{ fontSize: "clamp(1.375rem, 2.5vw, 2rem)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.018em" }}
            >
              Services within {service.title}.
            </h2>
          </div>

          <div className="border-t border-[#E2DFD9]">
            {service.whatWeOffer.map((item, i) => (
              <div
                key={item.title}
                className={`grid grid-cols-1 lg:grid-cols-[3rem_16rem_1fr] gap-4 lg:gap-10 py-7 ${
                  i < service.whatWeOffer.length - 1 ? "border-b border-[#E2DFD9]" : ""
                }`}
              >
                <p
                  className="text-[#013565]/25 font-bold tabular-nums"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.1em", lineHeight: 2 }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-slate-900 font-semibold" style={{ fontSize: "0.9375rem", lineHeight: 1.5 }}>
                  {item.title}
                </h3>
                <p className="text-slate-500" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-white" aria-labelledby={`${service.slug}-faq-heading`}>
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="text-overline mb-5">Common Questions</p>
            <h2
              id={`${service.slug}-faq-heading`}
              className="text-slate-900 mb-10"
              style={{ fontSize: "clamp(1.375rem, 2.5vw, 2rem)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.018em" }}
            >
              Frequently asked questions
            </h2>
            <FAQAccordion
              items={service.faqs.map((f, i) => ({
                id: `${service.slug}-faq-${i}`,
                question: f.question,
                answer: f.answer,
              }))}
            />
            <div className="mt-10 pt-8 border-t border-[#E2DFD9]">
              <Link
                href="/faqs"
                className="inline-flex items-center gap-2 text-[#013565] text-sm font-semibold hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded-[2px]"
              >
                View all FAQs
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Services — ruled rows ── */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-[#F4F3F1]" aria-labelledby={`${service.slug}-related-heading`}>
          <div className="container-site">
            <div className="max-w-2xl mb-10">
              <p className="text-overline mb-5">You Might Also Be Interested In</p>
              <h2
                id={`${service.slug}-related-heading`}
                className="text-slate-900"
                style={{ fontSize: "clamp(1.375rem, 2.5vw, 2rem)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.018em" }}
              >
                Related services
              </h2>
            </div>
            <div className="border-t border-[#E2DFD9]">
              {relatedServices.map((related, i) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className={`group flex items-center justify-between gap-8 py-6 -mx-6 px-6 hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#013565] ${
                    i < relatedServices.length - 1 ? "border-b border-[#E2DFD9]" : ""
                  }`}
                >
                  <div>
                    <p
                      className="text-slate-900 font-semibold group-hover:text-[#013565] transition-colors"
                      style={{ fontSize: "0.9375rem" }}
                    >
                      {related.title}
                    </p>
                    <p className="text-slate-400 text-xs mt-1">{related.tagline}</p>
                  </div>
                  <span
                    className="flex-shrink-0 text-slate-300 group-hover:text-[#013565] group-hover:translate-x-1 transition-all duration-200"
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
      )}

      <InternalCTA />
    </>
  );
}
