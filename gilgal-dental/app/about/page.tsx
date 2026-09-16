import type { Metadata } from "next";
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
      <AboutPhilosophy />
      <AboutWhyChoose />
      <AboutContact />
      <InternalCTA />
    </>
  );
}
