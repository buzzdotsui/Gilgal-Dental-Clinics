import type { Metadata } from "next";
import AppointmentForm from "@/components/appointment/AppointmentForm";

export const metadata: Metadata = {
  title: "Book an Appointment | Gilgal Dental Clinics — Ikoyi, Lagos",
  description:
    "Request a dental appointment at Gilgal Dental Clinics in Ikoyi, Lagos. Fill in your details and preferred date — we will confirm with you directly.",
  alternates: { canonical: "/book-an-appointment" },
  openGraph: {
    title: "Book an Appointment | Gilgal Dental Clinics",
    description:
      "Request an appointment with Gilgal Dental Clinics. We will contact you to confirm your preferred date and time.",
    url: "https://gilgaldentalclinics.com/book-an-appointment",
  },
};

export default function BookAnAppointmentPage() {
  return (
    <section
      className="section-padding bg-[#F4F3F1] border-b border-[#E2DFD9]"
      aria-label="Book an appointment"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* Left: intro */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <p className="text-overline mb-5">Request an Appointment</p>
            <h1
              className="text-slate-900 mb-4"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Book an Appointment
            </h1>
            <p className="text-slate-500 mb-7 leading-relaxed" style={{ fontSize: "1rem" }}>
              Complete the form to request an appointment at Gilgal Dental Clinics. We will
              contact you to confirm your preferred date and time.
            </p>

            {/* Note */}
            <div className="border-l-2 border-[#013565]/20 pl-5 mb-7">
              <p className="text-[0.8125rem] font-semibold text-[#013565] mb-1">Please note</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Appointment requests are subject to confirmation by the clinic. Submitting this
                form does not automatically book a specific slot.
              </p>
            </div>

            {/* Contact details */}
            <div className="border-t border-[#E2DFD9] pt-6 space-y-2 text-sm text-slate-500">
              <p>
                <span className="font-medium text-slate-700">Phone: </span>
                <a href="tel:+2348099906233" className="hover:text-[#013565] transition-colors">
                  +234 809 990 6233
                </a>
              </p>
              <p>
                <span className="font-medium text-slate-700">Email: </span>
                <a
                  href="mailto:gilgaldentalclinics@gmail.com"
                  className="hover:text-[#013565] transition-colors break-all"
                >
                  gilgaldentalclinics@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium text-slate-700">Hours: </span>
                Mon&ndash;Fri 9AM&ndash;6PM, Sat 9AM&ndash;3PM
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
