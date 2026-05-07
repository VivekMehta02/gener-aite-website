import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SlideVisual } from "@/components/SlideVisual";
import { values } from "@/lib/site-data";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="About GenerAite"
              title="Building intelligent systems for a smarter tomorrow"
              description="GenerAite is a forward-thinking technology company specializing in the design, deployment, and integration of smart digital infrastructure for governments, enterprises, utilities, transport systems, and campuses."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-generaite-line bg-white p-5 shadow-sm">
                <h3 className="text-lg font-black text-generaite-navy">Mission</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Inspire innovation through integrated technology solutions that make businesses
                  smarter, cities safer, and operations more efficient.
                </p>
              </div>
              <div className="rounded-lg border border-generaite-line bg-white p-5 shadow-sm">
                <h3 className="text-lg font-black text-generaite-navy">Vision</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Become a trusted leader in intelligent infrastructure and digital transformation
                  across India and beyond.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <SlideVisual
              src="/assets/optimized/slide-02.jpg"
              alt="PPT slide showing GenerAite about us and core pillars"
            />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.04}>
              <article className="h-full rounded-lg border border-generaite-line bg-white p-5 shadow-sm">
                <value.icon className="h-7 w-7 text-generaite-teal" aria-hidden="true" />
                <h3 className="mt-4 text-base font-black text-generaite-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{value.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Vision & Mission"
              title="Guided by purpose. Driven by innovation."
              description="The original Vision & Mission slide is preserved as a dedicated section so the company purpose and core values stay prominent in the web experience."
            />
            <SlideVisual
              src="/assets/optimized/slide-03.jpg"
              alt="Vision and mission PPT slide"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
