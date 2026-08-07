import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { posts, type Post } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): { post: Post } => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const title = loaderData?.post.title ?? "Article";
    const description = loaderData?.post.excerpt ?? "An article from the Aurelia journal.";
    return {
      meta: [
        { title: `${title} | Aurelia Dental Studio` },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            datePublished: loaderData?.post.date,
            author: { "@type": "Person", name: loaderData?.post.author },
            publisher: { "@type": "Organization", name: "Aurelia Dental Studio" },
          }),
        },
      ],
    };
  },
  component: BlogDetailPage,
});

function BlogDetailPage() {
  const { post } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        body={post.excerpt}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Blog", to: "/blog" },
          { label: post.category },
        ]}
      >
        <div className="flex flex-wrap gap-5 text-sm text-white/70">
          <span className="flex items-center gap-2">
            <User className="size-4 text-teal" aria-hidden="true" />
            {post.author}
          </span>
          <span className="flex items-center gap-2">
            <CalendarDays className="size-4 text-teal" aria-hidden="true" />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="size-4 text-teal" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>
      </PageHero>

      <article className="section-pad">
        <div className="container-luxe max-w-3xl">
          <Reveal>
            <div className="overflow-hidden rounded-4xl shadow-[var(--shadow-luxe)]">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                width={1024}
                height={640}
                className="size-full object-cover"
              />
            </div>
          </Reveal>

          {post.content.map((section) => (
            <Reveal key={section.heading} className="mt-12">
              <h2 className="text-2xl font-bold text-navy">{section.heading}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{section.body}</p>
            </Reveal>
          ))}

          <div className="mt-14">
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">
                <ArrowLeft className="size-4" />
                Back to the journal
              </Link>
            </Button>
          </div>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
