import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    number: "01",
    label: "General Dentistry",
    description:
      "Examinations, hygiene care, fillings, root canal treatment and periodontal management. The foundation of lasting oral health.",
    href: "/services/general-dentistry",
  },
  {
    number: "02",
    label: "Restorative Dentistry",
    description:
      "Crowns, bridges, dentures and composite restorations to repair damaged or missing teeth and restore full function.",
    href: "/services/restorative-dentistry",
  },
  {
    number: "03",
    label: "Dental Implants",
    description:
      "A long-term solution for missing teeth, placed by an experienced clinician with 200+ implants completed in practice.",
    href: "/services/implant-dentistry",
  },
  {
    number: "04",
    label: "Cosmetic Dentistry",
    description:
      "Veneers, composite bonding and aesthetic treatments to improve the appearance of teeth and overall smile confidence.",
    href: "/services/cosmetic-dentistry",
  },
  {
    number: "05",
    label: "Orthodontics",
    description:
      "Teeth straightening with traditional braces and clear aligner systems for adults and teenagers.",
    href: "/services/orthodontics",
  },
  {
    number: "06",
    label: "Children's Dentistry",
    description:
      "Gentle, reassuring care for children of all ages, with an approach that makes every dental visit calm and straightforward.",
    href: "/services/childrens-dentistry",
  },
  {
    number: "07",
    label: "Laser Teeth Whitening",
    description:
      "Professional in-clinic whitening treatment for patients seeking a brighter, more even smile.",
    href: "/services/laser-teeth-whitening",
  },
];

export default function ServicesPreview() {
  return (
    <section
      className="section-padding bg-[#F4F3F1]"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-overline mb-4">Our Services</p>
            <h2
              id="services-heading"
              className="text-slate-900"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Comprehensive care
              <br className="hidden sm:block" />
              across every discipline.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-[0.8125rem] font-semibold text-[#013565] hover:underline underline-offset-4 flex-shrink-0 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded-[2px]"
            aria-label="View all dental services at Gilgal Dental Clinics"
          >
            All services →
          </Link>
        </div>

        {/* Editorial category rows */}
        <div className="border-t border-[#E2DFD9]" role="list" aria-label="Services at Gilgal Dental Clinics">
          {categories.map((cat) => (
            <div key={cat.number} role="listitem">
              <Link
                href={cat.href}
                className="group grid grid-cols-[3rem_1fr_auto] lg:grid-cols-[3.5rem_1.5fr_2fr_auto] gap-4 lg:gap-8 items-center py-5 border-b border-[#E2DFD9] hover:bg-[#F4F3F1] transition-colors duration-150 -mx-4 px-4 lg:-mx-6 lg:px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded-[2px]"
                aria-label={`${cat.label}: ${cat.description}`}
              >
                {/* Number */}
                <span
                  className="text-[#013565]/20 font-bold tabular-nums self-start pt-0.5"
                  style={{ fontSize: "0.6875rem", letterSpacing: "0.1em" }}
                  aria-hidden="true"
                >
                  {cat.number}
                </span>

                {/* Title */}
                <span
                  className="font-semibold text-slate-800 group-hover:text-[#013565] transition-colors duration-150"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.4 }}
                >
                  {cat.label}
                </span>

                {/* Description — hidden on mobile */}
                <span
                  className="hidden lg:block text-slate-400 group-hover:text-slate-500 transition-colors duration-150"
                  style={{ fontSize: "0.875rem", lineHeight: 1.55 }}
                >
                  {cat.description}
                </span>

                {/* Arrow */}
                <span className="text-slate-300 group-hover:text-[#013565] transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
