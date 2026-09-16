import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
}

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Gilgal Dental Clinics, I would like to book an appointment. Please let me know the available dates and times."
);

const WHATSAPP_URL = `https://wa.me/2348099906233?text=${WHATSAPP_MESSAGE}`;

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export function WhatsAppButton({
  className,
  size = "md",
  label = "Book via WhatsApp",
}: WhatsAppButtonProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2.5 font-semibold rounded-lg bg-[#25D366] text-white",
        "hover:bg-[#1ebe57] transition-all duration-200 shadow-sm hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2",
        sizeStyles[size],
        className
      )}
      aria-label={`${label} — opens WhatsApp`}
    >
      <MessageCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
