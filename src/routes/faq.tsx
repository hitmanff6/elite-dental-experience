import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/cta-band";
import { FaqSection } from "@/components/site/faq-section";
import { PageHero } from "@/components/site/page-hero";
import { faqs } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Dental FAQs | Aurelia Dental Studio" },
      {
        name: "description",
        content:
          "Answers on implant longevity, veneer preparation, sedation for anxious patients, fixed pricing, payment plans and same-day emergency appointments.",
      },
      { property: "og:title", content: "Frequently Asked Questions | Aurelia Dental Studio" },
      { property: "og:description", content: "Clear answers on treatments, comfort, pricing and appointments." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Everything patients ask us, answered"
        body="Search by keyword or filter by category. If your question isn't here, message us — we reply within one working hour."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
      />
      <FaqSection withHeading={false} />
      <CtaBand />
    </>
  );
}
