import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <div
        className={cn(
          "mb-3 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-generaite-teal",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-0.5 w-8 rounded-full bg-generaite-cyan" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-black leading-tight tracking-normal text-generaite-navy sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
