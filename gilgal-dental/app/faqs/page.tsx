import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { InternalCTA } from "@/components/shared/InternalCTA";
import { faqCategories } from "@/lib/data/faqsData";

export const metadata: Metadata = {
  title: { absolute: "Frequently Asked Questions | Gilgal Dental Clinics" },
  description:
    "Find answers to common questions about appointments, services, location and opening hours at Gilgal Dental Clinics in Ikoyi, Lagos.",
  alternates: { canonical: "/faqs" },
  openGraph: {
    title: "FAQs | Gilgal Dental Clinics",
    description:
      "Answers to common questions about appointments, services and the clinic.",
    url: "https://gilgaldentalclinics.com/faqs",
  },
};

export default function FAQsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="Frequently Asked Questions"
        heading="Questions about visiting Gilgal?"
        subheading="Find answers to common questions below. If you don't see what you're looking for, please contact the clinic directly — we're happy to help."
      />

      <section className="section-padding bg-white" aria-label="FAQ categories">
        <div className="container-site">
          <div className="max-w-3xl mx-auto space-y-14">
            {faqCategories.map((category) => (
              <div key={category.id}>
                <h2
                  className="text-slate-900 mb-8 pb-5 border-b border-[#E2DFD9]"
                  style={{
                    fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {category.title}
                </h2>
                <FAQAccordion items={category.faqs} />
              </div>
            ))}
          </div>

          {/* Still have a question? — editorial strip, not a rounded card */}
          <div className="mt-16 pt-10 border-t border-[#E2DFD9] max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-semibold text-slate-900" style={{ fontSize: "0.9375rem" }}>
                Still have a question?
              </p>
              <p className="text-slate-500 text-sm mt-1">
                Contact the clinic directly and we will do our best to help.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a
                href="tel:+2348099906233"
                className="inline-flex items-center px-5 py-2.5 border border-[#C8C4BC] text-slate-700 text-sm font-semibold rounded-[2px] hover:border-[#013565] hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
              >
                Call the Clinic
              </a>
              <a
                href="mailto:gilgaldentalclinics@gmail.com"
                className="inline-flex items-center px-5 py-2.5 bg-[#013565] text-white text-sm font-semibold rounded-[2px] hover:bg-[#0A2E58] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <InternalCTA />
    </>
  );
}
