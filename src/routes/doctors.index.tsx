import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/cta-band";
import { DoctorsSection } from "@/components/site/doctors-section";
import { PageHero } from "@/components/site/page-hero";
import { TestimonialsCarousel } from "@/components/site/testimonials-carousel";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Dentists & Specialists | Aurelia Dental Studio" },
      {
        name: "description",
        content:
          "Meet the specialists behind Aurelia: a prosthodontist, an implant surgeon and an orthodontist with over 50 years of combined clinical experience.",
      },
      { property: "og:title", content: "Meet Our Dentists | Aurelia Dental Studio" },
      {
        property: "og:description",
        content: "Board-certified specialists in prosthodontics, implantology and orthodontics.",
      },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Three specialists. One shared standard."
        body="Complex dentistry needs more than one skill set. Your plan is delivered by the clinician who has spent their career on exactly that discipline."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Doctors" }]}
      />
      <DoctorsSection />
      <TestimonialsCarousel />
      <CtaBand />
    </>
  );
}
