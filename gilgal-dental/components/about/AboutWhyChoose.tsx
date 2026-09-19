import type { FC } from "react";

const reasons = [
  {
    number: "01",
    title: "26+ years of clinical experience",
    body: "Dr. Osaze Ugbo has practised general and restorative dentistry since 1998, with advanced training at the Eastman Dental Institute, University College London, and the BICON Institute in Boston.",
  },
  {
    number: "02",
    title: "Unhurried, patient-centred consultations",
    body: "Appointments are structured so that patients have time to ask questions, understand their diagnosis, and consider options before any treatment begins.",
  },
  {
    number: "03",
    title: "Comprehensive range of services",
    body: "Most patients can access the full range of treatment they need in one practice — from routine examinations and hygiene care to dental implants, orthodontics and cosmetic work.",
  },
  {
    number: "04",
    title: "Welcoming environment for all ages",
    body: "Children are seen with patience and reassurance. Adults appreciate the calm, well-organised clinical environment. The practice serves individuals and families across Ikoyi and Lagos.",
  },
  {
    number: "05",
    title: "Clear communication at every stage",
    body: "Findings are explained in plain language. Treatment plans are discussed before any work begins. Patients leave each appointment informed and confident in their care.",
  },
  {
    number: "06",
    title: "Up-to-date techniques and continuing development",
    body: "Dr. Ugbo maintains active professional development and affiliate membership with the American Dental Association, bringing current clinical practice to every patient.",
  },
];

const AboutWhyChoose: FC = () => {
  return (
    <section className="section-padding bg-[#FDFEFF]" aria-labelledby="why-heading">
      <div className="container-site">
        <div className="max-w-2xl mb-14">
          <p className="text-eyebrow mb-4">Why Patients Choose Gilgal</p>
          <h2 id="why-heading" className="text-h2 text-slate-900">
            A practice built around clinical experience and patient trust.
          </h2>
        </div>

        <div className="border-t border-[#E2DFD9]">
          {reasons.map((reason, i) => (
            <div
              key={reason.number}
              className={`grid grid-cols-1 lg:grid-cols-[4rem_1fr_2fr] gap-4 lg:gap-10 py-7 ${
                i < reasons.length - 1 ? "border-b border-[#E2DFD9]" : ""
              }`}
            >
              <p
                className="text-[#013565]/25 font-bold tabular-nums"
                style={{ fontSize: "0.75rem", letterSpacing: "0.08em", lineHeight: 2 }}
                aria-hidden="true"
              >
                {reason.number}
              </p>
              <h3
                className="font-semibold text-slate-900"
                style={{ fontSize: "0.9375rem", lineHeight: 1.4 }}
              >
                {reason.title}
              </h3>
              <p className="text-slate-500" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChoose;
