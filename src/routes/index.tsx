import { createFileRoute } from "@tanstack/react-router";

import { BeforeAfter } from "@/components/site/before-after";
import { CtaBand } from "@/components/site/cta-band";
import { DoctorsSection } from "@/components/site/doctors-section";
import { FaqSection } from "@/components/site/faq-section";
import { Hero } from "@/components/site/hero";
import { JourneySection } from "@/components/site/journey-section";
import { ServicesGrid } from "@/components/site/services-grid";
import { StatsBand } from "@/components/site/stats-band";
import { TechnologySection } from "@/components/site/technology-section";
import { TestimonialsCarousel } from "@/components/site/testimonials-carousel";
import { WhyChooseUs } from "@/components/site/why-choose-us";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurelia Dental Studio | World-Class Dental Care in San Francisco" },
      {
        name: "description",
        content:
          "Transform your smile with specialist-led implants, veneers and clear aligners. Digitally planned, comfort-first dentistry with fixed written pricing.",
      },
      { property: "og:title", content: "Aurelia Dental Studio | World-Class Dental Care" },
      {
        property: "og:description",
        content:
          "Specialist-led dentistry in San Francisco: implants, veneers, aligners and same-day emergency care.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <WhyChooseUs />
      <ServicesGrid limit={4} />
      <BeforeAfter />
      <DoctorsSection />
      <TechnologySection />
      <JourneySection />
      <TestimonialsCarousel />
      <FaqSection />
      <CtaBand />
    </>
  );
}
