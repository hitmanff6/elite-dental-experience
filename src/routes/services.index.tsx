import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/cta-band";
import { JourneySection } from "@/components/site/journey-section";
import { PageHero } from "@/components/site/page-hero";
import { ServicesGrid } from "@/components/site/services-grid";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Dental Services in San Francisco | Aurelia Dental Studio" },
      {
        name: "description",
        content:
          "Implants, smile makeovers, veneers, whitening, root canals, aligners, pediatric and emergency dentistry — all digitally planned with fixed written pricing.",
      },
      { property: "og:title", content: "Dental Services | Aurelia Dental Studio" },
      {
        property: "og:description",
        content: "Eight specialist treatment programmes, planned digitally and priced transparently.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title="Specialist dentistry for every stage of your smile"
        body="Whether you need a single filling or a complete reconstruction, the plan starts the same way: proper diagnostics, honest options and fixed written pricing."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />
      <ServicesGrid withHeading={false} />
      <JourneySection />
      <CtaBand />
    </>
  );
}
