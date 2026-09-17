"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { services } from "@/lib/data/servicesData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Dentist", href: "/our-dentist" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

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
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const linkCls =
    "px-3.5 py-2 text-[0.8125rem] font-medium text-slate-500 hover:text-[#013565] rounded-[2px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/96 backdrop-blur-md border-b border-[#E8EBF0] py-3"
            : "bg-[#FDFEFF]/90 backdrop-blur-sm py-4"
        }`}
        role="banner"
      >
        <div className="container-site flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2 rounded-md"
            aria-label="Gilgal Dental Clinics — Home"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-slate-200 flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Gilgal Dental Clinics logo"
                fill
                className="object-contain"
                priority
                sizes="32px"
              />
            </div>
            <span className="hidden sm:block font-semibold text-slate-900 text-sm leading-tight tracking-tight">
              Gilgal Dental Clinics
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            <Link href="/" className={linkCls}>Home</Link>
            <Link href="/about" className={linkCls}>About</Link>

            {/* Services dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
                aria-controls="services-dropdown"
                className={`${linkCls} flex items-center gap-1`}
              >
                Services
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>

              {servicesOpen && (
                <div
                  id="services-dropdown"
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[420px] bg-white border border-[#E8EBF0] rounded-lg shadow-[0_8px_32px_-8px_rgb(0_0_0/0.14)] p-2"
                  role="menu"
                  aria-label="Services menu"
                >
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-[#F7F8FA] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
                      >
                        <div className="w-7 h-7 rounded flex items-center justify-center flex-shrink-0 bg-[#013565]/6 group-hover:bg-[#013565]/12 transition-colors">
                          <Icon className="w-3.5 h-3.5 text-[#013565]" strokeWidth={1.75} aria-hidden="true" />
                        </div>
                        <span className="font-medium text-slate-700 text-[0.8125rem] group-hover:text-[#013565] transition-colors">
                          {service.title}
                        </span>
                      </Link>
                    );
                  })}
                  <div className="border-t border-[#E8EBF0] mt-1 pt-2 px-1">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-between px-3 py-2 text-[#013565] text-xs font-semibold hover:bg-[#F7F8FA] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
                    >
                      View all services
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link key={link.href} href={link.href} className={linkCls}>
                {link.label}
              </Link>
            ))}
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
            className="lg:hidden p-2 rounded-md text-slate-500 hover:text-[#013565] hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
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

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />
    </>
  );
}
