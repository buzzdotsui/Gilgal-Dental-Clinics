import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-[#F4F3F1] border-b border-[#E2DFD9]">
      <div className="container-site py-3">
        <ol className="flex items-center flex-wrap gap-1 text-xs text-slate-400" role="list">
          <li>
            <Link
              href="/"
              className="hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:underline"
            >
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <ChevronRight className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
              {item.href && i < items.length - 1 ? (
                <Link
                  href={item.href}
                  className="hover:text-[#013565] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-600 font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
