import Hero from "@/components/home/Hero";
import TrustStats from "@/components/home/TrustStats";
import Introduction from "@/components/home/Introduction";
import ServicesPreview from "@/components/home/ServicesPreview";
import DoctorPreview from "@/components/home/DoctorPreview";
import PatientExperience from "@/components/home/PatientExperience";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import ContactPreview from "@/components/home/ContactPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <Introduction />
      <ServicesPreview />
      <DoctorPreview />
      <PatientExperience />
      <TestimonialsPreview />
      <AppointmentCTA />
      <ContactPreview />
    </>
  );
}
