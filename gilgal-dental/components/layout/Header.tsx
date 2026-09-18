"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/data/servicesData";
import { buildWhatsAppUrl } from "@/lib/data/clinicInfo";

const linkCls =
  "px-3 py-2 text-[0.8125rem] font-medium text-slate-600 hover:text-[#013565] rounded-[2px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuTriggerRef = useRef<HTMLButtonElement>(null);
  const closeMenuButtonRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || (href === "/services" && pathname.startsWith("/services/"));
  const navLinkClass = (href: string) =>
    `${linkCls} ${isActive(href) ? "text-[#013565] bg-[#013565]/[0.05]" : ""}`;

  const closeMobileMenu = () => {
    setMenuOpen(false);
    window.setTimeout(() => mobileMenuTriggerRef.current?.focus(), 0);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    closeMenuButtonRef.current?.focus();
    const panel = mobileMenuRef.current;
    if (!panel) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMobileMenu();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && servicesRef.current?.contains(document.activeElement)) {
        e.preventDefault();
        setServicesOpen(false);
        servicesTriggerRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/97 backdrop-blur-md border-b border-[#E2DFD9] py-3"
            : "bg-[#FDFEFF]/92 backdrop-blur-sm border-b border-transparent py-4"
        }`}
        role="banner"
      >
        <div className="container-site flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2 rounded-[2px]"
            aria-label="Gilgal Dental Clinics — Home"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-slate-200 flex-shrink-0">
              <Image
                src="/images/phase35/logo.jpg"
                alt="Gilgal Dental Clinics logo"
                fill
                className="object-contain"
                sizes="32px"
              />
            </div>
            <span className="hidden sm:block font-semibold text-slate-900 text-sm leading-tight tracking-tight">
              Gilgal Dental Clinics
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">

            <Link href="/" className={navLinkClass("/")} aria-current={isActive("/") ? "page" : undefined}>Home</Link>
            <Link href="/about" className={navLinkClass("/about")} aria-current={isActive("/about") ? "page" : undefined}>About</Link>

            {/* Services dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                type="button"
                ref={servicesTriggerRef}
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
                aria-controls="services-dropdown"
                className={`${navLinkClass("/services")} flex items-center gap-1.5`}
              >
                Services
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    id="services-dropdown"
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: [0, 0, 0.2, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[400px] bg-white border border-[#E2DFD9] rounded-[4px] shadow-[0_8px_40px_-8px_rgb(1_53_101/0.16)] overflow-hidden"
                    role="menu"
                    aria-label="Services menu"
                  >
                    <div className="p-2">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          role="menuitem"
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-[#F4F3F1] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#013565] rounded-[2px]"
                        >
                          <span className="text-[0.8125rem] font-medium text-slate-700 group-hover:text-[#013565] transition-colors leading-snug">
                            {service.title}
                          </span>
                          <span className="text-[0.6875rem] text-slate-400 font-medium flex-shrink-0 group-hover:text-[#013565]/60 transition-colors">
                            {service.tagline}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-[#E2DFD9] px-2 py-2">
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center justify-between px-4 py-2.5 text-[#013565] text-[0.8125rem] font-semibold hover:bg-[#013565] hover:text-white rounded-[2px] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#013565]"
                      >
                        View all services
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/our-dentist" className={navLinkClass("/our-dentist")} aria-current={isActive("/our-dentist") ? "page" : undefined}>Our Dentist</Link>
            <Link href="/faqs" className={navLinkClass("/faqs")} aria-current={isActive("/faqs") ? "page" : undefined}>FAQs</Link>
            <Link href="/contact" className={navLinkClass("/contact")} aria-current={isActive("/contact") ? "page" : undefined}>Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/book-an-appointment"
              className="inline-flex items-center px-5 py-2.5 bg-[#013565] text-white text-[0.8125rem] font-semibold rounded-[2px] border border-[#013565] hover:bg-[#0A2E58] hover:border-[#0A2E58] hover:-translate-y-px active:translate-y-0 shadow-[0_1px_3px_0_rgb(1_53_101/0.22)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            ref={mobileMenuTriggerRef}
            className="lg:hidden p-2 rounded-[2px] text-slate-600 hover:text-[#013565] hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Spacer */}
      <div className={`transition-all duration-300 ${scrolled ? "h-[56px]" : "h-[64px]"}`} aria-hidden="true" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-slate-900/40"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
            <motion.div
              key="panel"
              id="mobile-menu"
              ref={mobileMenuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(88vw,380px)] bg-white flex flex-col overflow-y-auto"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#E2DFD9]">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3"
                  aria-label="Gilgal Dental Clinics — Home"
                >
                  <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-slate-200">
                    <Image src="/images/phase35/logo.jpg" alt="Gilgal Dental Clinics logo" fill className="object-contain" sizes="32px" />
                  </div>
                  <span className="font-semibold text-slate-900 text-sm">Gilgal Dental Clinics</span>
                </Link>
                <button
                  type="button"
                  ref={closeMenuButtonRef}
                  onClick={closeMobileMenu}
                  className="p-2 rounded-[2px] text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Nav */}
              <nav className="flex-1 px-4 py-6" aria-label="Mobile navigation">
                <ul className="space-y-0.5" role="list">
                  {[
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" },
                    { label: "Our Dentist", href: "/our-dentist" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center px-4 py-3 text-sm font-medium hover:text-[#013565] hover:bg-[#F4F3F1] rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] ${isActive(link.href) ? "text-[#013565] bg-[#013565]/[0.05]" : "text-slate-700"}`}
                        aria-current={isActive(link.href) ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}

                  {/* Services accordion */}
                  <li>
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      aria-controls="mobile-services-list"
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:text-[#013565] hover:bg-[#F4F3F1] rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] ${isActive("/services") ? "text-[#013565] bg-[#013565]/[0.05]" : "text-slate-700"}`}
                    >
                      Services
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.ul
                          id="mobile-services-list"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden ml-4 mt-0.5 border-l border-[#E2DFD9] pl-4 space-y-0.5"
                          role="list"
                        >
                          <li>
                            <Link href="/services" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-sm font-semibold text-[#013565] hover:bg-[#013565]/5 rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]">
                              All Services →
                            </Link>
                          </li>
                          {services.map((service) => (
                            <li key={service.slug}>
                              <Link href={`/services/${service.slug}`} onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-[#013565] hover:bg-[#F4F3F1] rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]">
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>

                  {[
                    { label: "FAQs", href: "/faqs" },
                    { label: "Contact", href: "/contact" },
                    { label: "Testimonials", href: "/testimonials" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center px-4 py-3 text-sm font-medium hover:text-[#013565] hover:bg-[#F4F3F1] rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] ${isActive(link.href) ? "text-[#013565] bg-[#013565]/[0.05]" : "text-slate-700"}`}
                        aria-current={isActive(link.href) ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile CTAs */}
              <div className="px-4 py-6 border-t border-[#E2DFD9] space-y-3">
                <Link
                  href="/book-an-appointment"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center w-full px-5 py-3 bg-[#013565] text-white text-sm font-semibold rounded-[2px] hover:bg-[#0A2E58] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2"
                >
                  Book a Consultation
                </Link>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-5 py-3 bg-[#25D366] text-white text-sm font-semibold rounded-[2px] hover:bg-[#1ebe57] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
                >
                  WhatsApp the Clinic
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
