import { cn } from "@/lib/utils";
import Link from "next/link";

interface PageHeroProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
  showCTAs?: boolean;
  primaryCTALabel?: string;
  primaryCTAHref?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

/**
 * Interior page hero — server component (no animation).
 * Typography-led, left-aligned by default.
 * Responsive: full width on mobile, max-w-3xl on desktop.
 */
export function PageHero({
  eyebrow,
  heading,
  subheading,
  showCTAs = false,
  primaryCTALabel = "Book a Consultation",
  primaryCTAHref = "/book-an-appointment",
  align = "left",
  className,
  dark = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "section-padding border-b",
        dark
          ? "bg-[#013565] border-white/10"
          : "bg-[#F4F3F1] border-[#E2DFD9]",
        className
      )}
      aria-label={`${eyebrow} — page introduction`}
    >
      <div className="container-site">
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center"
          )}
        >
          <p className={cn("mb-5", dark ? "text-overline-light" : "text-overline")}>
            {eyebrow}
          </p>

          <h1
            className={cn(dark ? "text-white" : "text-slate-900")}
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
            }}
          >
            {heading}
          </h1>

          {subheading && (
            <p
              className={cn(
                "mt-5 max-w-2xl",
                dark ? "text-white/70" : "text-slate-500",
                align === "center" && "mx-auto"
              )}
              style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
            >
              {subheading}
            </p>
          )}

          {showCTAs && (
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Link
                href={primaryCTAHref}
                className={cn(
                  "inline-flex items-center px-6 py-3 text-sm font-semibold rounded-[2px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                  dark
                    ? "bg-white text-[#013565] hover:bg-[#F4F3F1] focus-visible:ring-white focus-visible:ring-offset-[#013565]"
                    : "bg-[#013565] text-white hover:bg-[#0A2E58] focus-visible:ring-[#013565]"
                )}
              >
                {primaryCTALabel}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
