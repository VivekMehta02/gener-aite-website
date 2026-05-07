import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/Container";
import { MagneticButton } from "@/components/MagneticButton";
import { contact, navigationItems } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-12" id="top">
      <Container className="relative z-10 pt-5">
        <header className="mb-5 flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center" aria-label="GenerAite home">
            <span>
              <span className="block text-2xl font-black leading-none text-generaite-navy">
                Gener<span className="text-generaite-rose">A</span>ite
              </span>
              <span className="block text-[10px] font-black uppercase tracking-[0.24em] text-slate-500">
                Intelligence Within
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-extrabold text-generaite-teal transition hover:text-generaite-navy"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <MagneticButton href={contact.emailHref} className="hidden sm:inline-flex">
            Start a Project
          </MagneticButton>
        </header>

        <div className="relative overflow-hidden rounded-lg border border-generaite-line bg-white shadow-panel">
          <h1 className="sr-only">
            GenerAite Private Limited - Inspire. Ideate. GenerAite.
          </h1>
          <Image
            src="/assets/optimized/slide-01.jpg"
            alt="GenerAite first presentation slide with smart city, surveillance, mobility, and command center imagery"
            width={1600}
            height={900}
            priority
            sizes="(min-width: 1280px) 1180px, 100vw"
            className="block h-auto w-full"
          />
          <div className="absolute left-[7%] top-[67%] flex max-w-[44%] flex-wrap gap-2 sm:gap-3 md:top-[66%] lg:left-[7.5%]">
            <MagneticButton href="#solutions" className="min-h-9 px-3 py-2 text-[10px] shadow-md sm:min-h-10 sm:px-4 sm:text-xs md:min-h-11 md:px-5 md:text-sm">
              Explore Solutions
            </MagneticButton>
            <MagneticButton
              href={contact.emailHref}
              variant="secondary"
              className="min-h-9 border-white/80 bg-white/90 px-3 py-2 text-[10px] shadow-md sm:min-h-10 sm:px-4 sm:text-xs md:min-h-11 md:px-5 md:text-sm"
            >
              Contact GenerAite
            </MagneticButton>
          </div>
        </div>

        <a
          href="#about"
          className="mx-auto mt-6 flex h-11 w-11 items-center justify-center rounded-full border border-generaite-line bg-white text-generaite-teal shadow-sm transition hover:-translate-y-0.5"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </a>
      </Container>
    </section>
  );
}
