import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Icon } from "./icon";
import { RevealGroup, RevealItem } from "./reveal";
import { SectionHeading } from "./section-heading";
import { services, type Service } from "@/lib/site-data";

/** Single service card — image zoom, gradient overlay, animated border. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group hover-lift animated-border relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[var(--shadow-soft)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          width={1024}
          height={640}
          className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy/25 to-transparent"
          aria-hidden="true"
        />
        <span className="absolute left-4 top-4 grid size-11 place-items-center rounded-2xl glass-dark text-white">
          <Icon name={service.icon} className="size-5" />
        </span>
        <span className="absolute bottom-4 left-5 flex items-center gap-2 text-xs font-medium text-white/85">
          <Clock className="size-3.5" aria-hidden="true" />
          {service.duration}
        </span>
        <span className="absolute bottom-4 right-5 text-xs font-semibold text-teal-soft">
          from {service.from}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-semibold text-navy">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
        <Button asChild variant="ghost" size="sm" className="mt-6 w-fit px-0 text-accent hover:bg-transparent">
          <Link to="/services/$slug" params={{ slug: service.slug }}>
            Explore treatment
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </article>
  );
}

/** Services grid section, reusable on home (limited) and services page (all). */
export function ServicesGrid({
  limit,
  withHeading = true,
}: {
  limit?: number;
  withHeading?: boolean;
}) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="section-pad" aria-label="Treatments">
      <div className="container-luxe">
        {withHeading ? (
          <SectionHeading
            eyebrow="Treatments"
            title="Comprehensive care, delivered with obsessive detail"
            body="Every treatment is planned digitally, quoted in writing and delivered by the specialist best suited to it."
          />
        ) : null}

        <RevealGroup className="mt-14 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {list.map((s) => (
            <RevealItem key={s.slug} className="h-full">
              <ServiceCard service={s} />
            </RevealItem>
          ))}
        </RevealGroup>

        {limit ? (
          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View all treatments
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
