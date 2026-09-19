import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { InternalCTA } from "@/components/shared/InternalCTA";
import { testimonials } from "@/lib/data/testimonialsData";

export const metadata: Metadata = {
  title: { absolute: "Patient Testimonials | Gilgal Dental Clinics — Ikoyi, Lagos" },
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

      <section className="section-padding bg-white" aria-label="Patient reviews">
        <div className="container-site">

          {/* Ruled testimonial rows */}
          <div className="border-t border-[#E2DFD9]">
            {testimonials.map((t, i) => (
              <article
                key={t.id}
                className={`grid grid-cols-1 lg:grid-cols-[14rem_1fr] gap-6 lg:gap-16 py-10 ${
                  i < testimonials.length - 1 ? "border-b border-[#E2DFD9]" : ""
                }`}
                aria-label={`Review from ${t.author}`}
              >
                {/* Author meta */}
                <div>
                  <p className="font-semibold text-slate-900" style={{ fontSize: "0.9375rem" }}>
                    {t.author}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">{t.context}</p>
                </div>

                {/* Quote */}
                <blockquote>
                  <p
                    className="text-slate-600"
                    style={{ fontSize: "1.0625rem", lineHeight: 1.75, fontStyle: "italic" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
              </article>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-14 pt-10 border-t border-[#E2DFD9] max-w-xl">
            <p className="text-slate-400" style={{ fontSize: "0.875rem", lineHeight: 1.65 }}>
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
