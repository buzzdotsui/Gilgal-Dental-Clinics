import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Dentist", href: "/our-dentist" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "General Dentistry", href: "/services/general-dentistry" },
  { label: "Implant Dentistry", href: "/services/implant-dentistry" },
  { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
  { label: "Orthodontics", href: "/services/orthodontics" },
  { label: "Restorative Dentistry", href: "/services/restorative-dentistry" },
  { label: "Children's Dentistry", href: "/services/childrens-dentistry" },
  { label: "Laser Teeth Whitening", href: "/services/laser-teeth-whitening" },
];

const WHATSAPP_URL = `https://wa.me/2348099906233?text=${encodeURIComponent("Hello Gilgal Dental Clinics, I would like to book an appointment. Please let me know the available dates and times.")}`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#013565] text-white" role="contentinfo">
      {/* Main footer content */}
      <div className="container-site pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#013565] rounded-md"
              aria-label="Gilgal Dental Clinics — Home"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white/20 flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Gilgal Dental Clinics logo"
                  fill
                  className="object-contain"
                  sizes="44px"
                />
              </div>
              <div>
                <p className="font-semibold text-white text-sm leading-tight">Gilgal Dental Clinics</p>
                <p className="text-sky-300 text-xs mt-0.5">Ikoyi, Lagos</p>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-[240px]">
              Comprehensive dental care in a relaxed, friendly environment. Serving patients in Ikoyi, Lagos for over 17 years.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/gilgaldental.clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Gilgal Dental Clinics on Instagram"
              >
                <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://web.facebook.com/gilgaldental.clinics/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Gilgal Dental Clinics on Facebook"
              >
                <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-4" role="list">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-sky-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <address className="text-slate-300 text-sm not-italic leading-relaxed">
                  2 Olawale Daodu Road, off Kingsway Road,<br />
                  Ikoyi, Lagos, Nigeria
                </address>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-sky-300 flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+2348099906233"
                  className="text-slate-300 hover:text-white text-sm transition-colors"
                >
                  +234 809 990 6233
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-sky-300 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:gilgaldentalclinics@gmail.com"
                  className="text-slate-300 hover:text-white text-sm transition-colors break-all"
                >
                  gilgaldentalclinics@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-sky-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-slate-300 text-sm leading-relaxed space-y-1">
                  <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
                  <p>Sat & Public Holidays: 9:00 AM – 3:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-300 text-sm text-center sm:text-left">
            Ready to take care of your smile?{" "}
            <Link
              href="/book-an-appointment"
              className="text-white underline underline-offset-2 hover:no-underline transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            >
              Book an appointment
            </Link>{" "}
            or{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-2 hover:no-underline transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            >
              message us on WhatsApp
            </a>.
          </p>
        </div>

        {/* Legal bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {currentYear} Gilgal Dental Clinics. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
