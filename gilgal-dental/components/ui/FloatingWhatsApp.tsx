"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const PHONE = "2348099906233";
const MESSAGE = encodeURIComponent(
  "Hello Gilgal Dental Clinics, I would like to book an appointment. Please let me know the available dates and times."
);
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${MESSAGE}`;

// WhatsApp SVG — official brand icon, outlined style
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.856L.057 23.428a.5.5 0 0 0 .612.612l5.618-1.476A11.938 11.938 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.51-5.21-1.4l-.373-.22-3.872 1.016 1.032-3.768-.242-.385A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <div
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-7 z-40 flex flex-col items-end gap-2"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.18, ease: [0, 0, 0.2, 1] }}
            className="bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap pointer-events-none select-none"
            role="tooltip"
            id="whatsapp-tooltip"
          >
            Chat on WhatsApp
            {/* Tooltip tail */}
            <div
              className="absolute -bottom-1.5 right-4 w-3 h-3 bg-slate-900 rotate-45"
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Gilgal Dental Clinics on WhatsApp"
        aria-describedby={hovered ? "whatsapp-tooltip" : undefined}
        // Idle float — disabled for reduced motion
        animate={
          !prefersReduced && !hovered
            ? { y: [0, -5, 0] }
            : { y: 0 }
        }
        transition={
          !prefersReduced && !hovered
            ? {
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop",
              }
            : { duration: 0.2 }
        }
        whileHover={prefersReduced ? {} : { scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className={[
          // Outer shell
          "relative flex items-center justify-center",
          "w-14 h-14 sm:w-[58px] sm:h-[58px] rounded-full",
          "bg-[#25D366] text-white",
          // Shadow — layered for depth
          "shadow-[0_4px_14px_-2px_rgba(37,211,102,0.55),0_2px_6px_-1px_rgba(0,0,0,0.12)]",
          // Hover state — strengthen shadow via CSS (Framer handles scale)
          "hover:shadow-[0_6px_20px_-2px_rgba(37,211,102,0.65),0_4px_10px_-2px_rgba(0,0,0,0.14)]",
          // Focus ring
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2",
          "transition-shadow duration-200",
          // Smooth cursor
          "cursor-pointer",
        ].join(" ")}
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        {/* Subtle inner ring for depth */}
        <span
          className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20"
          aria-hidden="true"
        />
        <WhatsAppIcon className="w-7 h-7 sm:w-[28px] sm:h-[28px] relative z-10" />
      </motion.a>
    </div>
  );
}
