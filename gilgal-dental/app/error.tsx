"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to an error reporting service in production (e.g. Sentry)
    // Never expose raw error details to users.
    console.error("[Application Error]", error.digest ?? "Unknown error");
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center section-padding text-center px-6">
      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
        <AlertCircle className="w-6 h-6 text-red-500" aria-hidden="true" />
      </div>

      <h1 className="text-h2 text-slate-900 mb-3">Something went wrong</h1>
      <p className="text-body text-slate-500 mb-8 max-w-sm leading-relaxed">
        An unexpected error occurred. Please try again, or contact the clinic
        directly if the problem continues.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={reset}
          className="px-6 py-3 bg-[#013565] text-white text-sm font-semibold rounded-xl hover:bg-[#012550] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2 w-full sm:w-auto"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-3 border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:border-[#013565] hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2 bg-white w-full sm:w-auto text-center"
        >
          Return Home
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:border-[#013565] hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2 bg-white w-full sm:w-auto text-center"
        >
          Contact the Clinic
        </Link>
      </div>
    </div>
  );
}
