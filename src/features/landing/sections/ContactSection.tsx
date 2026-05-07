import { Mail, MapPin, MousePointerClick, PhoneCall } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { SlideVisual } from "@/components/ui/SlideVisual";
import { contact, finalCta, navigationItems } from "@/config/site";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white pt-20">
      <Container>
        <Reveal>
          <div className="grid gap-8 overflow-hidden rounded-lg border border-generaite-line bg-generaite-wash shadow-panel lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-generaite-teal">
                Stronger Together
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-normal text-generaite-navy sm:text-5xl">
                {finalCta.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">{finalCta.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton href={contact.emailHref}>Email GenerAite</MagneticButton>
                <MagneticButton
                  href={contact.websiteHref}
                  variant="secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website
                </MagneticButton>
              </div>

              <div className="mt-9 grid gap-4">
                <a
                  href={contact.emailHref}
                  className="flex gap-3 rounded-lg border border-generaite-line bg-white p-4 text-sm font-bold text-generaite-navy transition hover:border-generaite-cyan"
                >
                  <Mail className="h-5 w-5 text-generaite-teal" aria-hidden="true" />
                  {contact.email}
                </a>
                <a
                  href={contact.websiteHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-3 rounded-lg border border-generaite-line bg-white p-4 text-sm font-bold text-generaite-navy transition hover:border-generaite-cyan"
                >
                  <MousePointerClick className="h-5 w-5 text-generaite-teal" aria-hidden="true" />
                  {contact.website}
                </a>
                <div className="flex gap-3 rounded-lg border border-generaite-line bg-white p-4 text-sm font-bold text-generaite-navy">
                  <MapPin className="h-5 w-5 shrink-0 text-generaite-teal" aria-hidden="true" />
                  {contact.address}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-5 lg:p-8">
              <SlideVisual
                src="/assets/optimized/slide-20.jpg"
                alt="GenerAite future together contact PPT slide"
                className="w-full"
              />
            </div>
          </div>
        </Reveal>
      </Container>

      <footer className="mt-16 bg-generaite-teal text-white">
        <Container className="py-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div>
              <p className="text-xl font-black">
                Gener<span className="text-generaite-rose">A</span>ite
              </p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.24em] text-cyan-50/70">
                Intelligence Within
              </p>
            </div>
            <nav className="flex flex-wrap gap-5 text-sm font-bold text-cyan-50" aria-label="Footer navigation">
              {navigationItems.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3 text-sm font-bold lg:justify-end">
              <PhoneCall className="h-4 w-4 text-generaite-cyan" aria-hidden="true" />
              <span>{contact.email}</span>
            </div>
          </div>
        </Container>
      </footer>
    </section>
  );
}
