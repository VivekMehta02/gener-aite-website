import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { contact, navigationItems, services, solutions, values } from "@/config/site";

describe("site data", () => {
  it("covers the major PPT solution categories", () => {
    const labels = solutions.map((solution) => solution.title);

    expect(labels).toEqual(
      expect.arrayContaining([
        "IT Solutions",
        "IoT Monitoring",
        "Smart Parking",
        "Disaster Management",
        "Smart Mobility",
        "AI Surveillance",
        "Smart Waste Management",
        "Smart Water Management",
        "Integrated Command & Control Center"
      ])
    );
  });

  it("keeps navigation and CTA targets clickable", () => {
    expect(navigationItems.every((item) => item.href.startsWith("#"))).toBe(true);
    expect(contact.emailHref).toBe("mailto:contact@wegeneraite.com");
    expect(contact.websiteHref).toBe("https://www.wegeneraite.com");
  });

  it("contains enough structured content for SEO sections", () => {
    expect(services).toHaveLength(3);
    expect(values.length).toBeGreaterThanOrEqual(5);
    expect(solutions.length).toBeGreaterThanOrEqual(9);
  });

  it("keeps every solution card connected to an exported PPT visual", () => {
    for (const solution of solutions) {
      const assetPath = join(process.cwd(), "public", solution.slide.replace(/^\//, ""));
      expect(existsSync(assetPath), `${solution.title} is missing ${solution.slide}`).toBe(true);
    }

    expect(solutions.find((solution) => solution.title === "Disaster Management")?.slide).toContain(
      "slide-10"
    );
    expect(solutions.find((solution) => solution.title === "Smart Mobility")?.slide).toContain(
      "slide-11"
    );
  });

  it("keeps the important PPT narrative slides represented once in sections", () => {
    const aboutSection = readFileSync(
      join(process.cwd(), "src", "features", "landing", "sections", "AboutSection.tsx"),
      "utf8"
    );
    const whySection = readFileSync(
      join(process.cwd(), "src", "features", "landing", "sections", "WhyGenerAiteSection.tsx"),
      "utf8"
    );
    const servicesSection = readFileSync(
      join(process.cwd(), "src", "features", "landing", "sections", "ServicesSection.tsx"),
      "utf8"
    );
    const processSection = readFileSync(
      join(process.cwd(), "src", "features", "landing", "sections", "ProcessSection.tsx"),
      "utf8"
    );

    expect(aboutSection).toContain("slide-03.jpg");
    expect(whySection).toContain("slide-04.jpg");
    expect(servicesSection).toContain("slide-05.jpg");
    expect(processSection).not.toContain("slide-16.jpg");
  });
});
