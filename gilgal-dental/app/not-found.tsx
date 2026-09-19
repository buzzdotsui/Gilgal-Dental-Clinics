import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";

export const metadata = {
  title: { absolute: "Page Not Found | Gilgal Dental Clinics" },
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center section-padding text-center px-6">
      {/* 404 number */}
      <p
        className="text-[7rem] sm:text-[10rem] font-800 leading-none text-[#013565]/8 select-none tabular-nums"
        aria-hidden="true"
      >
        404
      </p>

      {/* Heading */}
      <div className="-mt-4 sm:-mt-8 max-w-md">
        <h1 className="text-h2 text-slate-900 mb-4">Page not found</h1>
        <p className="text-body text-slate-500 mb-8 leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t appear to exist. It may
          have been moved, or the link may be incorrect.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#013565] text-white text-sm font-semibold rounded-[2px] hover:bg-[#012550] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2 w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Return Home
          </Link>
          <Link
            href="/book-an-appointment"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 text-sm font-semibold rounded-[2px] hover:border-[#013565] hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2 bg-white w-full sm:w-auto justify-center"
          >
            <CalendarDays className="w-4 h-4" aria-hidden="true" />
            Book an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
