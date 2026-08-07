import { createFileRoute } from "@tanstack/react-router";

import { BeforeAfter } from "@/components/site/before-after";
import { CtaBand } from "@/components/site/cta-band";
import { GalleryGrid } from "@/components/site/gallery-grid";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Smile Gallery & Before / After Results | Aurelia Dental Studio" },
      {
        name: "description",
        content:
          "Browse real, unretouched before and after results from veneer, implant and aligner cases, plus a look inside our San Francisco dental studio.",
      },
      { property: "og:title", content: "Smile Gallery | Aurelia Dental Studio" },
      {
        property: "og:description",
        content: "Unretouched before and after dental results, photographed under identical lighting.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Results you can examine closely"
        body="Every image here is a real Aurelia patient, shot in our own studio under consistent lighting and shared with written consent."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />

      <BeforeAfter />

      <section className="section-pad surface-soft" aria-label="Case gallery">
        <div className="container-luxe">
          <GalleryGrid />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
