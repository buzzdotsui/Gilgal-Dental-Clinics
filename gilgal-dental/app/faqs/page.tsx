import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { InternalCTA } from "@/components/shared/InternalCTA";
import { faqCategories } from "@/lib/data/faqsData";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Gilgal Dental Clinics",
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
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        heading="Questions about visiting Gilgal?"
        subheading="Find answers to common questions below. If you don't see what you're looking for, please contact the clinic directly — we're happy to help."
      />

      <section className="section-padding bg-[#FDFEFF]" aria-label="FAQ categories">
        <div className="container-site">
          <div className="max-w-3xl mx-auto space-y-14">
            {faqCategories.map((category) => (
              <div key={category.id}>
                <h2 className="text-h3 text-slate-900 mb-6 pb-4 border-b border-slate-100">
                  {category.title}
                </h2>
                <FAQAccordion items={category.faqs} />
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-xl mx-auto text-center bg-white border border-slate-200 rounded-2xl p-8">
            <h2 className="font-semibold text-slate-900 text-base mb-2">Still have a question?</h2>
            <p className="text-body-sm text-slate-500 mb-5">
              Contact the clinic directly and we will do our best to help.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:+2348099906233"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#013565] border border-[#013565]/20 rounded-lg hover:border-[#013565]/40 hover:bg-[#013565]/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
              >
                Call the Clinic
              </a>
              <a
                href="mailto:gilgaldentalclinics@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#013565] border border-[#013565]/20 rounded-lg hover:border-[#013565]/40 hover:bg-[#013565]/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
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
