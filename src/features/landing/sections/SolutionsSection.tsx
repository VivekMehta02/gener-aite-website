import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SolutionCard } from "@/features/landing/components/SolutionCard";
import { solutions } from "@/config/site";

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Solutions Portfolio"
            title="PPT-native solution sections rebuilt as interactive web modules"
            description="Each major deck section becomes a searchable, responsive solution block with its original visual language retained through slide-derived imagery."
          />
        </Reveal>
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution, index) => (
            <Reveal key={solution.title} delay={(index % 3) * 0.06} className="h-full">
              <SolutionCard {...solution} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
