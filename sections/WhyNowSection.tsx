import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SlideVisual } from "@/components/SlideVisual";
import { whyNowItems } from "@/lib/site-data";

export function WhyNowSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <SlideVisual
              src="/assets/optimized/slide-18.jpg"
              alt="Why now infrastructure modernization PPT slide"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <SectionHeading
              eyebrow="Why Now"
              title="Infrastructure is getting smarter. Fast."
              description="Modern organizations are under pressure to improve efficiency, reduce cost, enhance safety, and deliver better citizen or customer experiences."
            />
            <div className="mt-8 space-y-4">
              {whyNowItems.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-lg border border-generaite-line bg-white p-4 shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-generaite-wash text-generaite-teal">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-black text-generaite-navy">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
