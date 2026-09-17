import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { InternalCTA } from "@/components/shared/InternalCTA";
import { dentistData } from "@/lib/data/dentistData";

export const metadata: Metadata = {
  title: "Our Dentist — Dr. Osaze Ugbo | Gilgal Dental Clinics",
  description:
    "Meet Dr. Osaze Ugbo, Principal Dentist at Gilgal Dental Clinics. Over 17 years of clinical experience, trained at the Eastman Dental Institute, UK and BICON Institute, USA.",
  alternates: { canonical: "/our-dentist" },
  openGraph: {
    title: "Dr. Osaze Ugbo — Principal Dentist | Gilgal Dental Clinics",
    description:
      "More than 17 years of clinical experience. Trained at the Eastman Dental Institute, UK and BICON Institute, USA.",
    url: "https://gilgaldentalclinics.com/our-dentist",
  },
};

export default function OurDentistPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-[#FDFEFF] border-b border-slate-100" aria-label="Dr. Osaze Ugbo — hero">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[600px] bg-slate-100 shadow-[0_20px_60px_-15px_rgb(1_53_101/0.2)]">
                <Image
                  src={dentistData.image}
                  alt={dentistData.imageAlt}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Name badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-[4px] p-4 border border-slate-100 shadow-sm">
                  <p className="font-bold text-slate-900 text-base">{dentistData.name}</p>
                  <p className="text-[#013565] text-sm font-medium">{dentistData.title}</p>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -z-10 -bottom-6 -left-6 w-2/3 h-2/3 rounded-2xl bg-[#013565]/5" aria-hidden="true" />
            </div>

            {/* Right: content */}
            <div className="order-1 lg:order-2">
              <p className="text-eyebrow mb-3">Our Dentist</p>
              <h1 className="text-h1 text-slate-900 mb-2">{dentistData.name}</h1>
              <p className="text-[#013565] font-semibold text-lg mb-6">{dentistData.title}</p>

              <div className="space-y-4 mb-8">
                {dentistData.bio.map((para, i) => (
                  <p key={i} className={i === 0 ? "text-body-lg text-slate-500" : "text-body text-slate-500"}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-8 pt-6 border-t border-slate-100">
                <div>
                  <p className="text-2xl font-bold text-[#013565]">{dentistData.yearsExperience}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Years of experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#013565]">{dentistData.implantsPlaced}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Implants completed</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button href="/book-an-appointment" variant="primary" size="lg">
                  Book an Appointment
                </Button>
                <WhatsAppButton size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Practice */}
      <section className="section-padding bg-white" aria-labelledby="practice-heading">
        <div className="container-site">
          <p className="text-eyebrow mb-3">Areas of Practice</p>
          <h2 id="practice-heading" className="text-h2 text-slate-900 mb-10 max-w-xl">
            Clinical areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dentistData.areasOfPractice.map((area, i) => (
              <div key={area.title} className="card-base bg-white p-7">
                <div className="w-9 h-9 rounded-xl bg-[#013565]/8 flex items-center justify-center mb-5" aria-hidden="true">
                  <Briefcase className="w-4 h-4 text-[#013565]" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-slate-900 text-base mb-2">{area.title}</h3>
                <p className="text-body-sm text-slate-500 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="section-padding bg-[#FDFEFF]" aria-labelledby="training-heading">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="text-eyebrow mb-3">Professional Development</p>
            <h2 id="training-heading" className="text-h2 text-slate-900 mb-4">
              Training and memberships
            </h2>
            <p className="text-body text-slate-500 mb-10">
              Dr. Ugbo&rsquo;s commitment to professional development has led him to undertake
              training at internationally recognised institutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {dentistData.training.map((t) => (
                <div key={t.institution} className="bg-white border border-slate-200 rounded-2xl p-6">
                  <div className="w-9 h-9 rounded-xl bg-[#013565]/8 flex items-center justify-center mb-4" aria-hidden="true">
                    <GraduationCap className="w-4 h-4 text-[#013565]" strokeWidth={1.75} />
                  </div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">{t.institution}</p>
                  <p className="text-xs text-[#013565] font-medium mb-3">{t.location}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{t.description}</p>
                </div>
              ))}
            </div>

            {dentistData.memberships.map((m) => (
              <div key={m.organisation} className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-5">
                <div className="w-9 h-9 rounded-xl bg-[#013565]/8 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Award className="w-4 h-4 text-[#013565]" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{m.organisation}</p>
                  <p className="text-xs text-slate-500">{m.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-white" aria-labelledby="philosophy-heading">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-eyebrow mb-3">Philosophy</p>
            <h2 id="philosophy-heading" className="text-h2 text-slate-900 mb-6">
              How Dr. Ugbo approaches patient care
            </h2>
            <p className="text-body-lg text-slate-500 leading-relaxed">
              {dentistData.philosophy}
            </p>
          </div>
        </div>
      </section>

      <InternalCTA
        heading="Book a consultation with Dr. Ugbo"
        subheading="Request an appointment at Gilgal Dental Clinics. We'll be in touch to confirm your preferred date and time."
      />
    </>
  );
}
