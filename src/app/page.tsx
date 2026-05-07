import { AboutSection } from "@/features/landing/sections/AboutSection";
import { ContactSection } from "@/features/landing/sections/ContactSection";
import { HeroSection } from "@/features/landing/sections/HeroSection";
import { IndustriesSection } from "@/features/landing/sections/IndustriesSection";
import { ProcessSection } from "@/features/landing/sections/ProcessSection";
import { ServicesSection } from "@/features/landing/sections/ServicesSection";
import { SolutionsSection } from "@/features/landing/sections/SolutionsSection";
import { WhyGenerAiteSection } from "@/features/landing/sections/WhyGenerAiteSection";
import { WhyNowSection } from "@/features/landing/sections/WhyNowSection";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GenerAite Private Limited",
  url: "https://www.wegeneraite.com",
  email: "contact@wegeneraite.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "B-206, Okhla Industrial Area, Phase 1",
    addressLocality: "New Delhi",
    addressCountry: "IN"
  },
  description:
    "Smart digital infrastructure solutions for AI surveillance, IoT monitoring, smart utilities, IT solutions, and integrated command control centers."
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyGenerAiteSection />
        <ServicesSection />
        <SolutionsSection />
        <ProcessSection />
        <IndustriesSection />
        <WhyNowSection />
        <ContactSection />
      </main>
    </>
  );
}
