import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { metrics, processSteps } from "@/config/site";

export function ProcessSection() {
  return (
    <section className="bg-generaite-navy py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-generaite-cyan">
                <span className="h-0.5 w-8 rounded-full bg-generaite-cyan" />
                End-to-End Workflow
              </div>
              <h2 className="text-3xl font-black leading-tight tracking-normal sm:text-4xl lg:text-5xl">
                Data moves from field devices to decisions to response
              </h2>
              <p className="mt-4 text-base leading-8 text-cyan-50/80 sm:text-lg">
                The PPT’s process flows become an operational story: collect, transmit, analyze,
                command, and act through a connected platform architecture.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-white/15 bg-white/8 p-5 backdrop-blur"
                >
                  <strong className="block text-3xl font-black text-generaite-cyan">
                    {metric.value}
                  </strong>
                  <span className="mt-1 block text-sm font-semibold text-cyan-50/75">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="dashboard-grid rounded-lg border border-white/15 bg-white/8 p-5 shadow-panel">
              <div className="rounded-lg border border-white/10 bg-generaite-navy/70 p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-generaite-cyan">
                  Live Operations Flow
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {processSteps.map((step, index) => (
                    <div key={step.title} className="rounded-lg border border-white/10 bg-white/8 p-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-generaite-cyan/15 text-generaite-cyan">
                          <step.icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-cyan-50/45">
                            Node {index + 1}
                          </p>
                          <h3 className="font-black text-white">{step.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <article className="relative h-full rounded-lg border border-white/15 bg-white/8 p-5">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-generaite-cyan/15 text-generaite-cyan">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-50/50">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cyan-50/70">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
