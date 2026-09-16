// Server Component — safe to receive ServiceData (with icon functions)
// because this runs on the server and never serializes to the client.
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

      {/* Hero — client for animation, but data passed as plain strings */}
      <ServiceHeroClient
        title={service.title}
        heroHeadline={service.heroHeadline}
        heroSubheading={service.heroSubheading}
        slug={service.slug}
      />

      {/* Introduction */}
      <section className="section-padding bg-white" aria-labelledby={`${service.slug}-intro-heading`}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-eyebrow mb-3">Overview</p>
              <h2 id={`${service.slug}-intro-heading`} className="text-h2 text-slate-900 mb-6">
                What is {service.title}?
              </h2>
              <div className="space-y-4">
                {service.introduction.map((para, i) => (
                  <p key={i} className="text-body text-slate-500 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>

            <div className="bg-[#013565] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-white/8" aria-hidden="true" />
              <p className="text-sky-300 text-xs font-semibold uppercase tracking-widest mb-4">Our Approach</p>
              <h3 className="text-lg font-semibold text-white mb-4 leading-snug">
                What to expect at Gilgal
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">{service.patientExperience}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-[#FDFEFF]" aria-labelledby={`${service.slug}-offer-heading`}>
        <div className="container-site">
          <p className="text-eyebrow mb-3">What We Offer</p>
          <h2 id={`${service.slug}-offer-heading`} className="text-h2 text-slate-900 mb-10 max-w-2xl">
            Services within {service.title}.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.whatWeOffer.map((item, i) => (
              <div key={item.title} className="card-base bg-white p-6">
                <div className="w-8 h-8 rounded-lg bg-[#013565]/8 flex items-center justify-center mb-4" aria-hidden="true">
                  <span className="text-[#013565] text-xs font-bold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-white" aria-labelledby={`${service.slug}-faq-heading`}>
        <div className="container-site">
          <div className="max-w-2xl mx-auto">
            <p className="text-eyebrow mb-3 text-center">Common Questions</p>
            <h2 id={`${service.slug}-faq-heading`} className="text-h2 text-slate-900 mb-8 text-center">
              Frequently asked questions
            </h2>
            <FAQAccordion
              items={service.faqs.map((f, i) => ({
                id: `${service.slug}-faq-${i}`,
                question: f.question,
                answer: f.answer,
              }))}
            />
            <div className="mt-8 text-center">
              <Link
                href="/faqs"
                className="inline-flex items-center gap-2 text-[#013565] text-sm font-semibold hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded"
              >
                View all FAQs
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-[#FDFEFF]" aria-labelledby={`${service.slug}-related-heading`}>
          <div className="container-site">
            <p className="text-eyebrow mb-3">You Might Also Be Interested In</p>
            <h2 id={`${service.slug}-related-heading`} className="text-h2 text-slate-900 mb-8 max-w-xl">
              Related services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((related) => {
                const RIcon = related.icon;
                return (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="group card-base bg-white p-6 flex flex-col gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2 rounded-xl"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#013565]/8 group-hover:bg-[#013565]/15 flex items-center justify-center transition-colors duration-200" aria-hidden="true">
                      <RIcon className="w-4 h-4 text-[#013565]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-[#013565] transition-colors">{related.title}</p>
                      <p className="text-xs text-slate-500">{related.tagline}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#013565] text-xs font-semibold mt-auto">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <InternalCTA />
    </>
  );
}
