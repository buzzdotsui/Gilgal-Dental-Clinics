import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp" | "outline-white" | "ghost-light";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  "aria-label"?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#013565] text-white border border-[#013565] hover:bg-[#0A2E58] hover:border-[#0A2E58] hover:-translate-y-px active:translate-y-0 shadow-[0_1px_3px_0_rgb(1_53_101/0.25)] hover:shadow-[0_4px_12px_0_rgb(1_53_101/0.30)] focus-visible:ring-[#013565]",
  secondary:
    "bg-transparent text-slate-700 border border-[#C8C4BC] hover:border-[#013565] hover:text-[#013565] hover:bg-[#013565]/[0.04] active:bg-[#013565]/[0.07] focus-visible:ring-[#013565]",
  ghost:
    "text-[#013565] border border-transparent hover:bg-[#013565]/[0.06] focus-visible:ring-[#013565]",
  whatsapp:
    "bg-[#25D366] text-white border border-[#25D366] hover:bg-[#1ebe57] hover:border-[#1ebe57] hover:-translate-y-px active:translate-y-0 shadow-sm focus-visible:ring-[#25D366]",
  "outline-white":
    "border border-white/30 text-white/85 hover:bg-white/10 hover:text-white hover:border-white/50 focus-visible:ring-white",
  "ghost-light":
    "bg-transparent text-white/85 border border-white/25 hover:bg-white/10 hover:text-white hover:border-white/40 focus-visible:ring-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[0.8125rem] font-semibold",
  md: "px-6 py-2.5 text-sm font-semibold",
  lg: "px-7 py-3.5 text-sm font-semibold",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  onClick,
  disabled = false,
  type = "button",
  className,
  "aria-label": ariaLabel,
}: ButtonProps) {
  // Strictly rectangular — no pill buttons per design spec
  const baseStyles =
    "inline-flex items-center gap-2.5 rounded-[2px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none tracking-[0.01em]";

  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
