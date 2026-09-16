"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

function FAQAccordionItem({ item, isOpen, onToggle }: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={cn("border border-slate-200 rounded-xl overflow-hidden transition-colors duration-200", isOpen && "border-[#013565]/20")}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-trigger-${item.id}`}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-inset"
      >
        <span className="font-semibold text-slate-900 text-sm md:text-base leading-snug pr-2">
          {item.question}
        </span>
        <span
          className={cn(
            "w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-colors duration-200",
            isOpen ? "bg-[#013565] text-white" : "bg-slate-100 text-slate-500"
          )}
          aria-hidden="true"
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5" />
          ) : (
            <Plus className="w-3.5 h-3.5" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            id={`faq-answer-${item.id}`}
            role="region"
            aria-labelledby={`faq-trigger-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.3, ease: [0, 0, 0.2, 1] },
              opacity: { duration: 0.22, ease: [0, 0, 0.2, 1] },
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-1 border-t border-slate-100 bg-white">
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn("space-y-3", className)} role="list">
      {items.map((item) => (
        <div key={item.id} role="listitem">
          <FAQAccordionItem
            item={item}
            isOpen={openId === item.id}
            onToggle={() => toggle(item.id)}
          />
        </div>
      ))}
    </div>
  );
}
