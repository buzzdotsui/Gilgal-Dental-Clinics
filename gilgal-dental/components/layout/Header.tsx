"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { Button } from "@/components/ui/Button";
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

  // Close services dropdown on outside click or Escape key
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgb(0_0_0/0.08)] py-3"
            : "bg-white/90 backdrop-blur-sm py-5"
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
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-slate-200">
              <Image src="/images/logo.jpg" alt="Gilgal Dental Clinics logo" fill className="object-contain" priority sizes="40px" />
            </div>
            <span className="hidden sm:block font-semibold text-[#013565] text-[0.9375rem] leading-tight tracking-tight">
              Gilgal Dental<br />
              <span className="font-normal text-slate-500 text-xs tracking-wide">Clinics</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#013565] rounded-md transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]">
              Home
            </Link>
            <Link href="/about" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#013565] rounded-md transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]">
              About
            </Link>

            {/* Services dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
                aria-controls="services-dropdown"
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#013565] rounded-md transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {servicesOpen && (
                <div
                  id="services-dropdown"
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-2xl shadow-[0_8px_40px_-8px_rgb(0_0_0/0.18)] border border-slate-100 p-4 grid grid-cols-2 gap-1"
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
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#013565]/8 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#013565]/15 transition-colors">
                          <Icon className="w-4 h-4 text-[#013565]" strokeWidth={1.75} aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 text-xs group-hover:text-[#013565] transition-colors">{service.title}</p>
                          <p className="text-slate-400 text-xs leading-relaxed mt-0.5 line-clamp-2">{service.tagline}</p>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="col-span-2 border-t border-slate-100 mt-1 pt-3 px-1">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="text-[#013565] text-xs font-semibold hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded"
                    >
                      View all services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#013565] rounded-md transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="/book-an-appointment" variant="primary" size="sm">
              Book an Appointment
            </Button>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-[#013565] hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className={`transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`} aria-hidden="true" />

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />
    </>
  );
}
