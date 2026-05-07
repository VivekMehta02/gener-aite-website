import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type SolutionCardProps = {
  title: string;
  eyebrow: string;
  description: string;
  icon: LucideIcon;
  slide: string;
  className?: string;
};

export function SolutionCard({
  title,
  eyebrow,
  description,
  icon: Icon,
  slide,
  className
}: SolutionCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg border border-generaite-line bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-panel",
        className
      )}
    >
      <div className="relative aspect-video shrink-0 overflow-hidden bg-generaite-wash">
        <Image
          src={slide}
          alt={`${title} PPT visual`}
          fill
          loading="eager"
          unoptimized
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-generaite-navy/70 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex min-h-[68px] items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-generaite-line bg-generaite-wash text-generaite-teal">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-generaite-cyan">
              {eyebrow}
            </p>
            <h3 className="text-lg font-black text-generaite-navy">{title}</h3>
          </div>
        </div>
        <p className="solution-description text-sm leading-6 text-slate-600">{description}</p>
      </div>
      <div className="h-2 bg-gradient-to-r from-generaite-teal to-generaite-cyan" />
    </article>
  );
}
