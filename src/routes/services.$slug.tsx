import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Clock, Tag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { Icon } from "@/components/site/icon";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/services-grid";
import { TestimonialsCarousel } from "@/components/site/testimonials-carousel";
import { services, type Service } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): { service: Service } => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    const title = loaderData?.service.title ?? "Treatment";
    const description = loaderData?.service.short ?? "Specialist dental treatment at Aurelia.";
    return {
      meta: [
        { title: `${title} | Aurelia Dental Studio` },
        { name: "description", content: description },
        { property: "og:title", content: `${title} | Aurelia Dental Studio` },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: title,
            description,
            provider: { "@type": "Dentist", name: "Aurelia Dental Studio" },
          }),
        },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Treatment"
        title={service.title}
        body={service.short}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.title },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/85">
            <Clock className="size-4 text-teal" aria-hidden="true" />
            {service.duration}
          </span>
          <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/85">
            <Tag className="size-4 text-teal" aria-hidden="true" />
            From {service.from}
          </span>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-luxe grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal>
              <div className="overflow-hidden rounded-4xl shadow-[var(--shadow-luxe)]">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="size-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal className="mt-10">
              <span className="grid size-14 place-items-center rounded-2xl bg-secondary text-accent">
                <Icon name={service.icon} className="size-6" />
              </span>
              <h2 className="mt-6 text-3xl font-bold text-navy">The Aurelia approach</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2">
              {service.steps.map((step, i) => (
                <RevealItem key={step.title}>
                  <article className="hover-lift h-full rounded-3xl border border-border/70 bg-card p-7 shadow-[var(--shadow-soft)]">
                    <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-navy">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Sticky benefits / booking panel */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal direction="right">
              <div className="rounded-4xl border border-border bg-card p-8 shadow-[var(--shadow-luxe)]">
                <h2 className="text-xl font-semibold text-navy">What's included</h2>
                <ul className="mt-6 space-y-4">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-3xl bg-secondary p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Typical investment
                  </p>
                  <p className="mt-1 font-display text-3xl font-bold text-gradient-navy">
                    {service.from}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    0% interest plans available over 6, 12 and 24 months.
                  </p>
                </div>

                <Button asChild variant="hero" size="xl" className="mt-6 w-full shine">
                  <Link to="/book">Book a consultation</Link>
                </Button>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <TestimonialsCarousel />

      <section className="section-pad surface-soft">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Related"
            title="Treatments patients often combine with this"
          />
          <RevealGroup className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <RevealItem key={s.slug} className="h-full">
                <ServiceCard service={s} />
              </RevealItem>
            ))}
          </RevealGroup>
          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                All treatments
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
