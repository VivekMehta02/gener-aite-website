import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SlideVisual } from "@/components/SlideVisual";
import { industries } from "@/lib/site-data";

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Industries We Serve"
              title="Multi-sector deployment capability"
              description="GenerAite’s platform approach spans public infrastructure, transport operations, enterprise facilities, and institutions that need secure, intelligent, always-on systems."
            />
          </Reveal>
          <Reveal delay={0.12}>
            <SlideVisual
              src="/assets/optimized/slide-17.jpg"
              alt="Industries served PPT slide"
            />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <Reveal key={industry.title} delay={index * 0.06}>
              <article className="h-full overflow-hidden rounded-lg border border-generaite-line bg-generaite-wash shadow-sm">
                <div className="bg-gradient-to-r from-generaite-teal to-generaite-cyan p-5 text-white">
                  <industry.icon className="h-8 w-8" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-black">{industry.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-cyan-50">{industry.subtitle}</p>
                </div>
                <ul className="space-y-3 p-5">
                  {industry.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3 text-sm font-semibold text-slate-700">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-generaite-teal" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
