import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SlideVisual } from "@/components/ui/SlideVisual";
import { services } from "@/config/site";

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Core Services"
            title="Comprehensive technology services"
            description="From consulting and design to deployment and support, GenerAite delivers secure, reliable, and sustainable technology programs."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <SlideVisual
            src="/assets/optimized/slide-05.jpg"
            alt="Core services PPT slide"
            className="mt-10"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <article className="relative h-full overflow-hidden rounded-lg border border-generaite-line bg-generaite-wash p-6 shadow-sm">
                <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-generaite-teal to-generaite-cyan" />
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-generaite-teal shadow-sm">
                  <service.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-2xl font-black text-generaite-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm font-semibold text-slate-700">
                      <span className="mt-1 h-2 w-2 rounded-full bg-generaite-cyan" />
                      {bullet}
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
