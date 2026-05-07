import Image from "next/image";
import { cn } from "@/lib/utils";

type SlideVisualProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function SlideVisual({ src, alt, className, priority = false }: SlideVisualProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-generaite-line bg-white shadow-panel",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        priority={priority}
        className="h-auto w-full"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  );
}
