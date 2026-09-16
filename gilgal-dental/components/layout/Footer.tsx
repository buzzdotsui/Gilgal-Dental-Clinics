import Link from "next/link";
import Image from "next/image";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#FDFEFF] border-t border-[#E8EBF0]"
      role="contentinfo"
    >
      {/* Main content */}
      <div className="container-site py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr_1.4fr_1.4fr] gap-10 lg:gap-8">

          {/* ── Brand column ── */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2 rounded-md"
              aria-label="Gilgal Dental Clinics — Home"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-slate-200 flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Gilgal Dental Clinics logo"
                  fill
                  className="object-contain"
                  sizes="36px"
                />
              </div>
              <span className="font-semibold text-slate-900 text-sm leading-tight">
                Gilgal Dental Clinics
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-[220px]">
              Dental care, centered around&nbsp;you.
              <br />Ikoyi, Lagos.
            </p>

            {/* Social */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/gilgaldental.clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#E8EBF0] hover:border-[#013565]/30 hover:text-[#013565] flex items-center justify-center text-slate-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
                aria-label="Gilgal Dental Clinics on Instagram"
              >
                <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://web.facebook.com/gilgaldental.clinics/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#E8EBF0] hover:border-[#013565]/30 hover:text-[#013565] flex items-center justify-center text-slate-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
                aria-label="Gilgal Dental Clinics on Facebook"
              >
                <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Explore ── */}
          <div>
            <p className="text-overline mb-4">Explore</p>
            <ul className="space-y-2.5" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-500 hover:text-[#013565] text-sm transition-colors focus-visible:outline-none focus-visible:underline underline-offset-4"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <p className="text-overline mb-4">Services</p>
            <ul className="space-y-2.5" role="list">
              {serviceLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-500 hover:text-[#013565] text-sm transition-colors focus-visible:outline-none focus-visible:underline underline-offset-4"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Visit ── */}
          <div>
            <p className="text-overline mb-4">Visit</p>
            <address className="not-italic text-slate-500 text-sm leading-relaxed mb-5">
              2 Olawale Daodu Road,<br />
              off Kingsway Road,<br />
              Ikoyi, Lagos, Nigeria
            </address>
            <p className="text-overline mb-3">Contact</p>
            <div className="space-y-2">
              <a
                href="tel:+2348099906233"
                className="block text-slate-500 hover:text-[#013565] text-sm transition-colors focus-visible:outline-none focus-visible:underline underline-offset-4"
                aria-label="Call +234 809 990 6233"
              >
                +234 809 990 6233
              </a>
              <a
                href="mailto:gilgaldentalclinics@gmail.com"
                className="block text-slate-500 hover:text-[#013565] text-sm transition-colors break-all focus-visible:outline-none focus-visible:underline underline-offset-4"
                aria-label="Email gilgaldentalclinics@gmail.com"
              >
                gilgaldentalclinics@gmail.com
              </a>
            </div>
            <div className="mt-5 pt-5 border-t border-[#E8EBF0]">
              <p className="text-overline mb-2">Hours</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Mon – Fri&nbsp;&nbsp;9:00 AM – 6:00 PM<br />
                Sat&nbsp;&nbsp;9:00 AM – 3:00 PM<br />
                Sunday&nbsp;&nbsp;Closed
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E8EBF0]">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-xs">
            © {currentYear} Gilgal Dental Clinics. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-slate-400 hover:text-slate-600 text-xs transition-colors focus-visible:outline-none focus-visible:underline"
            >
              Privacy Policy
            </Link>
            <a
              href="https://www.instagram.com/gilgaldental.clinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-600 text-xs transition-colors focus-visible:outline-none focus-visible:underline"
            >
              Instagram
            </a>
            <a
              href="https://web.facebook.com/gilgaldental.clinics/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-600 text-xs transition-colors focus-visible:outline-none focus-visible:underline"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
