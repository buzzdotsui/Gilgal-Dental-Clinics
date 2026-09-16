import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author?: string;
  context?: string; // e.g. "Google Review"
}

export function TestimonialCard({ quote, author, context }: TestimonialCardProps) {
  return (
    <article className="card-base p-7 flex flex-col gap-5 h-full">
      {/* Quote icon */}
      <div className="w-9 h-9 rounded-lg bg-[#013565]/8 flex items-center justify-center flex-shrink-0">
        <Quote className="w-4 h-4 text-[#013565]" aria-hidden="true" strokeWidth={2} />
      </div>

      {/* Quote text */}
      <blockquote className="flex-1">
        <p className="text-slate-700 text-body-sm leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      {/* Attribution */}
      {(author || context) && (
        <footer className="border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#013565]/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <span className="text-[#013565] font-semibold text-xs">
                {author ? author[0].toUpperCase() : "P"}
              </span>
            </div>
            <div>
              {author && (
                <p className="font-semibold text-slate-800 text-sm leading-tight">{author}</p>
              )}
              {context && (
                <p className="text-slate-400 text-xs">{context}</p>
              )}
            </div>
          </div>
        </footer>
      )}
    </article>
  );
}
