import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { posts } from "@/lib/site-data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Dental Health Journal | Aurelia Dental Studio" },
      {
        name: "description",
        content:
          "Clear, clinician-written guides on smile makeovers, implants, sensitivity and children's dental care — no jargon, no scare tactics.",
      },
      { property: "og:title", content: "Dental Health Journal | Aurelia Dental Studio" },
      { property: "og:description", content: "Clinician-written guides to modern dentistry." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Dentistry, explained properly"
        body="Written by our own clinicians. If a treatment has downsides, you will read about them here first."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />

      <section className="section-pad" aria-label="Articles">
        <div className="container-luxe">
          <RevealGroup className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <RevealItem key={p.slug} className="h-full">
                <article className="group hover-lift animated-border flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[var(--shadow-soft)]">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="size-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="eyebrow text-accent">{p.category}</span>
                    <h2 className="mt-3 text-lg font-semibold leading-snug text-navy">{p.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.excerpt}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="size-3.5" aria-hidden="true" />
                        {new Date(p.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5" aria-hidden="true" />
                        {p.readTime}
                      </span>
                    </div>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                    >
                      Read article
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
