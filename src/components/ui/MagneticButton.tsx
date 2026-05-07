import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function MagneticButton({
  children,
  className,
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  return (
    <a
      className={cn(
        "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-generaite-cyan",
        variant === "primary" &&
          "bg-gradient-to-r from-generaite-teal to-generaite-cyan text-white shadow-teal hover:-translate-y-0.5",
        variant === "secondary" &&
          "border border-generaite-line bg-white/85 text-generaite-teal shadow-sm hover:-translate-y-0.5 hover:border-generaite-cyan",
        variant === "ghost" && "text-generaite-teal hover:bg-generaite-wash",
        className
      )}
      {...props}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
    </a>
  );
}
