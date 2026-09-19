import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { InternalCTA } from "@/components/shared/InternalCTA";
import { testimonials } from "@/lib/data/testimonialsData";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { clinicInfo } from "@/lib/data/clinicInfo";
import { Star, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Patient Testimonials | Gilgal Dental Clinics — Ikoyi, Lagos" },
  description:
    "Discover what patients and families have to say about their experiences at Gilgal Dental Clinic. Genuine reviews from our patients in Ikoyi, Lagos.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Patient Testimonials | Gilgal Dental Clinics",
    description:
      "Discover what patients and families have to say about their experiences at Gilgal Dental Clinic.",
    url: "https://gilgaldentalclinics.com/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="PATIENT EXPERIENCES"
        heading="Trusted by Patients. Proven by Experience."
        subheading="Discover what patients and families have to say about their experiences at Gilgal Dental Clinic."
      />

      <section className="section-padding bg-[#F8F9FA]" aria-label="Patient reviews">
        <div className="container-site">
          
          {/* Trust Element */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-1 mb-4" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#013565] text-[#013565]" aria-hidden="true" />
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              What Our Patients Say
            </h2>
            <p className="text-slate-600 mb-8">
              Real experiences from patients of Gilgal Dental Clinic.
            </p>
            <a
              href={clinicInfo.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#013565] px-6 py-3 rounded-full font-medium hover:bg-slate-50 transition-all shadow-sm hover:shadow border border-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
            >
              View Our Google Reviews
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {testimonials.map((t) => (
              <div key={t.id} className="h-full">
                <TestimonialCard
                  quote={t.quote}
                  author={t.author}
                  context={t.context}
                  url={t.url}
                  rating={t.rating}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      <InternalCTA />
    </>
  );
}
