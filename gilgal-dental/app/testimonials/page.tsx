import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { InternalCTA } from "@/components/shared/InternalCTA";
import { testimonials } from "@/lib/data/testimonialsData";

export const metadata: Metadata = {
  title: "Patient Testimonials | Gilgal Dental Clinics — Ikoyi, Lagos",
  description:
    "Read what patients say about Gilgal Dental Clinics — genuine reviews from patients treated by Dr. Osaze Ugbo in Ikoyi, Lagos.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Patient Testimonials | Gilgal Dental Clinics",
    description:
      "Genuine patient reviews for Gilgal Dental Clinics, Ikoyi, Lagos.",
    url: "https://gilgaldentalclinics.com/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Testimonials"
        heading="What our patients say."
        subheading="The following reviews have been shared by patients of Gilgal Dental Clinics. We are grateful to everyone who takes the time to share their experience."
      />

      <section className="section-padding bg-[#FDFEFF]" aria-label="Patient reviews">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="card-base bg-white p-7 flex flex-col gap-5"
                aria-label={`Review from ${t.author}`}
              >
                <Quote className="w-7 h-7 text-[#013565]/20 flex-shrink-0" aria-hidden="true" />
                <blockquote className="flex-1">
                  <p className="text-body text-slate-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <footer className="border-t border-slate-100 pt-4">
                  <p className="font-semibold text-slate-900 text-sm">{t.author}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{t.context}</p>
                </footer>
              </article>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-slate-200 max-w-xl mx-auto text-center">
            <p className="text-body-sm text-slate-500 leading-relaxed">
              These reviews are shared as received. If you have visited Gilgal Dental Clinics and
              would like to share your experience, you are welcome to leave a review on Google.
            </p>
          </div>
        </div>
      </section>

      <InternalCTA />
    </>
  );
}
