import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { InternalCTA } from "@/components/shared/InternalCTA";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutWhyChoose from "@/components/about/AboutWhyChoose";
import AboutContact from "@/components/about/AboutContact";

export const metadata: Metadata = {
  title: "About | Gilgal Dental Clinics — Ikoyi, Lagos",
  description:
    "Learn about Gilgal Dental Clinics — a family-friendly dental practice in Ikoyi, Lagos, delivering comprehensive dental care in a relaxed, comfortable environment.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Gilgal Dental Clinics",
    description:
      "Experienced dental professionals delivering comprehensive care in a relaxed, friendly environment in Ikoyi, Lagos.",
    url: "https://gilgaldentalclinics.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Gilgal Dental Clinics"
        heading="Dental care built around experience, comfort and trust."
        subheading="Gilgal Dental Clinics is a family-friendly practice in Ikoyi, Lagos, where experienced dental professionals deliver comprehensive care in a relaxed, welcoming environment."
        showCTAs
        primaryCTALabel="Book an Appointment"
        primaryCTAHref="/book-an-appointment"
      />
      <section className="bg-white" aria-label="Gilgal clinical environment">
        <div className="container-site py-8 lg:py-12">
          <div className="relative aspect-[16/7] overflow-hidden rounded-[4px] bg-slate-100">
            <Image src="/images/phase35/equipment.jpeg" alt="Dental equipment prepared for clinical care at Gilgal Dental Clinics" fill className="object-cover" sizes="(max-width: 768px) 100vw, 1184px" />
          </div>
        </div>
      </section>
      <AboutPhilosophy />
      <AboutWhyChoose />
      <AboutContact />
      <InternalCTA />
    </>
  );
}
