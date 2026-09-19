import { Quote, Star, ExternalLink } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author?: string;
  context?: string; // e.g. "Google Review"
  url?: string;
  rating?: number;
  className?: string; // allow custom classes for text clamping on homepage
}

export function TestimonialCard({ quote, author, context, url, rating = 5, className }: TestimonialCardProps) {
  return (
    <article className="group bg-white rounded-2xl p-6 sm:p-8 flex flex-col h-full border border-slate-100 shadow-sm transition-all duration-400 hover:shadow-lg hover:border-[#013565]/20 hover:-translate-y-1.5">
      {/* Header: Stars & Quote Icon */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#013565] text-[#013565]" aria-hidden="true" />
          ))}
        </div>
        <div className="w-8 h-8 rounded-full bg-[#013565]/5 flex items-center justify-center flex-shrink-0 transition-colors duration-400 group-hover:bg-[#013565]/10">
          <Quote className="w-3.5 h-3.5 text-[#013565]" aria-hidden="true" strokeWidth={2.5} />
        </div>
      </div>

      {/* Quote text */}
      {quote ? (
        <blockquote className="flex-1 mb-6">
          <p className={`text-slate-700 leading-relaxed ${className || ''}`} style={{ fontSize: "1.0625rem" }}>
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>
      ) : (
        <div className="flex-1 mb-6 flex items-center">
          <p className="text-slate-400 italic" style={{ fontSize: "0.9375rem" }}>
            (No written review provided)
          </p>
        </div>
      )}

      {/* Footer: Attribution & Google Link */}
      <footer className="border-t border-slate-100 pt-5 mt-auto flex flex-wrap items-center justify-between gap-4 transition-colors duration-400 group-hover:border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100" aria-hidden="true">
            <span className="text-[#013565] font-semibold text-sm">
              {author ? author[0].toUpperCase() : "P"}
            </span>
          </div>
          <div>
            {author && (
              <p className="font-semibold text-[#013565] text-sm leading-tight">{author}</p>
            )}
            {context && (
              <p className="text-slate-400 text-xs mt-0.5 font-medium">{context}</p>
            )}
          </div>
        </div>
        
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-[#013565] transition-colors duration-300 group/link p-1.5 -mr-1.5 rounded-md hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565]"
            aria-label={`View ${author}'s review on Google (opens in new tab)`}
          >
            <span className="group-hover:text-[#013565] transition-colors">Google</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" aria-hidden="true" />
          </a>
        )}
      </footer>
    </article>
  );
}
