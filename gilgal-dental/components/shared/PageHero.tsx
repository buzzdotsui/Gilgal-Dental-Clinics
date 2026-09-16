"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
  showCTAs?: boolean;
  primaryCTALabel?: string;
  primaryCTAHref?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean; // navy background variant
}

export function PageHero({
  eyebrow,
  heading,
  subheading,
  showCTAs = false,
  primaryCTALabel = "Book an Appointment",
  primaryCTAHref = "/book-an-appointment",
  align = "left",
  className,
  dark = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "section-padding",
        dark ? "bg-[#013565]" : "bg-[#FDFEFF] border-b border-slate-100",
        className
      )}
    >
      <div className="container-site">
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={cn("text-eyebrow mb-3", dark ? "text-sky-300" : "text-[#013565]")}
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className={cn("text-h1 mb-4", dark ? "text-white" : "text-slate-900")}
          >
            {heading}
          </motion.h1>
          {subheading && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={cn("text-body-lg max-w-2xl", dark ? "text-slate-300" : "text-slate-500", align === "center" && "mx-auto")}
            >
              {subheading}
            </motion.p>
          )}
          {showCTAs && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex flex-wrap items-center gap-3 mt-8"
            >
              <Button
                href={primaryCTAHref}
                variant={dark ? "outline-white" : "primary"}
                size="lg"
                className={dark ? "!border-white/30 !text-white hover:!bg-white/15" : ""}
              >
                {primaryCTALabel}
              </Button>
              <WhatsAppButton size="lg" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
