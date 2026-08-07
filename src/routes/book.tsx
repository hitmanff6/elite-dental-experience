import { createFileRoute } from "@tanstack/react-router";

import { AppointmentForm } from "@/components/site/appointment-form";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Dental Consultation | Aurelia Dental Studio" },
      {
        name: "description",
        content:
          "Reserve a 60-minute consultation with an Aurelia specialist. Digital scans, a written plan and fixed pricing before any treatment begins.",
      },
      { property: "og:title", content: "Book an Appointment | Aurelia Dental Studio" },
      { property: "og:description", content: "Reserve a 60-minute specialist consultation." },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title="Reserve your consultation"
        body="Tell us a little about what you'd like to change. Our coordinator confirms your slot within one working hour."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Book" }]}
      />
      <AppointmentForm />
    </>
  );
}
