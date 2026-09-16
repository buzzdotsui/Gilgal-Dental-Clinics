import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  headingAs?: "h1" | "h2" | "h3";
  className?: string;
  light?: boolean; // for dark backgrounds
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  headingAs: Tag = "h2",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-eyebrow mb-3",
            light ? "text-sky-200" : "text-[#013565]"
          )}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "text-h2 font-bold tracking-tight",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {heading}
      </Tag>
      {subheading && (
        <p
          className={cn(
            "mt-4 text-body-lg",
            light ? "text-slate-300" : "text-slate-500",
            align === "center" ? "mx-auto" : ""
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
