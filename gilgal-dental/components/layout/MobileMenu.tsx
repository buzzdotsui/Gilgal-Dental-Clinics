"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data/servicesData";
import { buildWhatsAppUrl } from "@/lib/data/clinicInfo";

interface NavLink { label: string; href: string; }
interface MobileMenuProps { isOpen: boolean; onClose: () => void; links: NavLink[]; }

const panelVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

const navContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  useEffect(() => {
    if (isOpen) setTimeout(() => closeButtonRef.current?.focus(), 100);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const panel = panelRef.current;
    if (!panel) return;
    const focusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableEls = Array.from(panel.querySelectorAll<HTMLElement>(focusableSelectors));
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key !== "Tab" || focusableEls.length === 0) return;
      const first = focusableEls[0];
      const last = focusableEls[focusableEls.length - 1];
      if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
      else { if (document.activeElement === last) { e.preventDefault(); first.focus(); } }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Our Dentist", href: "/our-dentist" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            key="panel"
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.32, ease: [0, 0, 0.2, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[min(85vw,360px)] bg-white flex flex-col overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <Link href="/" onClick={onClose} className="flex items-center gap-2.5" aria-label="Gilgal Dental Clinics — Home">
                <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-slate-200">
                  <Image src="/images/logo.jpg" alt="Gilgal Dental Clinics logo" fill className="object-contain" sizes="36px" />
                </div>
                <span className="font-semibold text-[#013565] text-sm leading-tight">
                  Gilgal Dental<br /><span className="font-normal text-slate-500 text-xs">Clinics</span>
                </span>
              </Link>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="p-2 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-4 py-6" aria-label="Mobile navigation">
              <motion.ul
                className="space-y-1"
                role="list"
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {mainLinks.slice(0, 2).map((link) => (
                  <motion.li key={link.href} variants={navItemVariants}>
                    <Link href={link.href} onClick={onClose} className="flex items-center px-4 py-3 text-base font-medium text-slate-700 hover:text-[#013565] hover:bg-slate-50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}

                {/* Services expandable */}
                <motion.li variants={navItemVariants}>
                  <button
                    type="button"
                    onClick={() => setServicesExpanded((v) => !v)}
                    aria-expanded={servicesExpanded}
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-slate-700 hover:text-[#013565] hover:bg-slate-50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesExpanded ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  <AnimatePresence>
                    {servicesExpanded && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden ml-4 mt-1 space-y-1"
                        role="list"
                      >
                        <li>
                          <Link href="/services" onClick={onClose} className="flex items-center px-4 py-2 text-sm font-semibold text-[#013565] hover:bg-[#013565]/5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]">
                            All Services →
                          </Link>
                        </li>
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link href={`/services/${service.slug}`} onClick={onClose} className="flex items-center px-4 py-2 text-sm text-slate-600 hover:text-[#013565] hover:bg-slate-50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]">
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>

                {mainLinks.slice(2).map((link) => (
                  <motion.li key={link.href} variants={navItemVariants}>
                    <Link href={link.href} onClick={onClose} className="flex items-center px-4 py-3 text-base font-medium text-slate-700 hover:text-[#013565] hover:bg-slate-50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            {/* CTAs */}
            <div className="px-4 py-6 border-t border-slate-100 space-y-3">
              <Button href="/book-an-appointment" variant="primary" size="md" className="w-full justify-center rounded-[2px]" onClick={onClose}>
                Book a Consultation
              </Button>
              <Button href={buildWhatsAppUrl()} variant="whatsapp" size="md" className="w-full justify-center rounded-[2px]" external>
                WhatsApp the Clinic
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
