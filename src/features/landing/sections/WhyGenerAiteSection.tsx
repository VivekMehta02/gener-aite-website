import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SlideVisual } from "@/components/ui/SlideVisual";
import { whyGenerAiteReasons } from "@/config/site";

export function WhyGenerAiteSection() {
  return (
    <section id="why-generaite" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Why GenerAite"
              title="Deep expertise, advanced technology, real-world impact"
              description="This section brings the original Why GenerAite slide into the website and supports it with responsive web cards for the same five differentiators."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyGenerAiteReasons.map((reason, index) => (
                <article
                  key={reason.title}
                  className="rounded-lg border border-generaite-line bg-generaite-wash p-5 shadow-sm"
                >
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-generaite-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-black text-generaite-navy">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{reason.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <SlideVisual src="/assets/optimized/slide-04.jpg" alt="Why GenerAite PPT slide" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
