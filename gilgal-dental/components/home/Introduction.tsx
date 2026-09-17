"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Introduction() {
  return (
    <section
      className="section-padding bg-[#F4F3F1]"
      aria-labelledby="intro-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <div>
            <p className="text-overline mb-5">
              About Gilgal Dental Clinics
            </p>

            <h2
              id="intro-heading"
              className="text-slate-900 mb-6"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
              }}
            >
              Comprehensive care.
              <br />
              Experienced hands.
            </h2>

            <p
              className="text-slate-500 mb-5"
              style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
            >
              At Gilgal Dental Clinics, we deliver high-quality dental care across
              a broad range of specialties — from routine examinations and preventive
              care to complex restorative work and dental implants.
            </p>

            <p
              className="text-slate-500 mb-10"
              style={{ fontSize: "1rem", lineHeight: 1.65 }}
            >
              Based in Ikoyi, Lagos, our practice is built around clinical excellence
              and a patient experience that is unhurried, clear, and reassuring,
              for adults and children alike.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#013565] text-sm font-semibold hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded-[2px]"
            >
              Learn about Gilgal
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Right: large photography */}
          <div className="relative hidden lg:block">
            <div
              className="relative w-full overflow-hidden bg-[#E2DFD9]"
              style={{ aspectRatio: "3/4", borderRadius: "4px" }}
            >
              <Image
                src="/images/hero/group-picture.png"
                alt="The Gilgal Dental Clinics team, Ikoyi Lagos"
                fill
                className="object-cover object-center"
                sizes="50vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
              {/* Location label */}
              <div className="absolute bottom-5 left-5">
                <p
                  className="text-white/85 font-medium tracking-widest uppercase"
                  style={{ fontSize: "0.625rem" }}
                >
                  Ikoyi · Lagos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
