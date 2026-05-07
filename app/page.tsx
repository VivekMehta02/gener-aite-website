import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { HeroSection } from "@/sections/HeroSection";
import { IndustriesSection } from "@/sections/IndustriesSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { SolutionsSection } from "@/sections/SolutionsSection";
import { WhyGenerAiteSection } from "@/sections/WhyGenerAiteSection";
import { WhyNowSection } from "@/sections/WhyNowSection";

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
