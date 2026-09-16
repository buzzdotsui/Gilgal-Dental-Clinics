import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp" | "outline-white";
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
    "bg-[#013565] text-white hover:bg-[#012550] focus-visible:ring-[#013565] shadow-sm hover:shadow-md",
  secondary:
    "bg-white text-[#013565] border border-[#013565]/20 hover:border-[#013565]/40 hover:bg-[#013565]/5 focus-visible:ring-[#013565] shadow-sm",
  ghost:
    "text-[#013565] hover:bg-[#013565]/8 focus-visible:ring-[#013565]",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe57] focus-visible:ring-[#25D366] shadow-sm hover:shadow-md",
  "outline-white":
    "border border-white/40 text-white hover:bg-white/10 focus-visible:ring-white backdrop-blur-sm",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm font-medium rounded-md",
  md: "px-6 py-2.5 text-sm font-semibold rounded-lg",
  lg: "px-8 py-3.5 text-base font-semibold rounded-lg",
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
  const baseStyles =
    "inline-flex items-center gap-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none";

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
