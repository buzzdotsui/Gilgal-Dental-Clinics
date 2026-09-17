import Hero from "@/components/home/Hero";
import TrustStats from "@/components/home/TrustStats";
import Introduction from "@/components/home/Introduction";
import ServicesPreview from "@/components/home/ServicesPreview";
import RestorativeSpotlight from "@/components/home/RestorativeSpotlight";
import DoctorPreview from "@/components/home/DoctorPreview";
import PatientExperience from "@/components/home/PatientExperience";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import ContactPreview from "@/components/home/ContactPreview";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — main visual anchor, full editorial headline */}
      <Hero />

      {/* 2. Trust strip — immediate clinical credibility after the hero */}
      <TrustStats />

      {/* 3. Introduction — who Gilgal is */}
      <Introduction />

      {/* 4. Services — editorial numbered category rows */}
      <ServicesPreview />

      {/* 5. Restorative + Implants spotlight — dark navy, Dr. Ugbo's specialty */}
      <RestorativeSpotlight />

      {/* 6. Meet Dr. Ugbo — portrait, credentials, training */}
      <DoctorPreview />

      {/* 7. Patient experience — Understand, Plan, Care */}
      <PatientExperience />

      {/* 8. Testimonials — verified Google reviews */}
      <TestimonialsPreview />

      {/* 9. Final CTA */}
      <AppointmentCTA />

      {/* 10. Contact / location */}
      <ContactPreview />
    </>
  );
}
