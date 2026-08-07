import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { TestimonialsCarousel } from "@/components/site/testimonials-carousel";
import { testimonials } from "@/lib/site-data";
import { Star } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Patient Reviews & Testimonials | Aurelia Dental Studio" },
      {
        name: "description",
        content:
          "Read verified reviews from Aurelia patients treated for implants, veneers, aligners and emergency care. Rated 4.9 from over 1,240 reviews.",
      },
      { property: "og:title", content: "Patient Testimonials | Aurelia Dental Studio" },
      { property: "og:description", content: "Verified patient reviews, rated 4.9 out of 5." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What our patients actually say"
        body="Collected through Google and our own post-treatment surveys. We publish them unedited."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Testimonials" }]}
      />

      <TestimonialsCarousel withHeading={false} />

      <section className="section-pad" aria-label="All reviews">
        <div className="container-luxe">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <RevealItem key={t.name}>
                <figure className="hover-lift h-full rounded-3xl border border-border/70 bg-card p-7 shadow-[var(--shadow-soft)]">
                  <span className="flex" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-accent text-accent" aria-hidden="true" />
                    ))}
                  </span>
                  <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <span className="block text-sm font-semibold text-navy">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.treatment}</span>
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
