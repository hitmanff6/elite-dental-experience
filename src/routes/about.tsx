import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/cta-band";
import { JourneySection } from "@/components/site/journey-section";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { StatsBand } from "@/components/site/stats-band";
import { TechnologySection } from "@/components/site/technology-section";
import { images } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aurelia Dental Studio | Our Philosophy & Standards" },
      {
        name: "description",
        content:
          "Meet the studio behind 15,000 transformed smiles: specialist-led care, digital planning, transparent pricing and a genuinely calm patient experience.",
      },
      { property: "og:title", content: "About Aurelia Dental Studio" },
      {
        property: "og:description",
        content: "Specialist-led dentistry built on precision, comfort and transparency.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Diagnose before you treat",
    body: "No treatment is proposed until we have imaging, scans and a conversation. Guesswork is the most expensive thing in dentistry.",
  },
  {
    title: "Comfort is clinical",
    body: "A relaxed patient heals faster and returns sooner. We treat anxiety as a clinical variable, not an inconvenience.",
  },
  {
    title: "Say the honest thing",
    body: "If you do not need treatment, we will tell you. If a cheaper option is genuinely better for you, we will recommend it.",
  },
  {
    title: "Finish properly",
    body: "Margins polished, contacts checked, occlusion balanced. The last ten percent is what separates good from exceptional.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Studio"
        title="A dental studio built the way we would want to be treated"
        body="Aurelia began with a simple frustration: excellent clinical dentistry too often arrives wrapped in a rushed, impersonal experience. We rebuilt both halves."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <StatsBand />

      <section className="section-pad">
        <div className="container-luxe grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="overflow-hidden rounded-4xl shadow-[var(--shadow-luxe)]">
              <img
                src={images.clinicLounge}
                alt="The Aurelia Dental Studio reception lounge"
                loading="lazy"
                width={1024}
                height={768}
                className="size-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Twenty years of clinical practice, distilled into one studio"
              body="Our clinical director spent two decades rebuilding complex smiles across Europe and North America before opening Aurelia. Every detail here is a reaction to something that could have been done better elsewhere."
            />
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                That means longer consultations, because rushed conversations produce bad plans. It
                means in-house imaging and milling, because sending work away adds weeks and removes
                control. It means one coordinator who knows your case, so you never repeat yourself.
              </p>
              <p>
                We are deliberately small. Three specialists, eight suites and a capped number of
                complex cases per month — enough to invest properly in each one, and few enough that
                you are recognised the moment you walk in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad surface-soft">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Four principles we do not compromise on"
            body="They are unglamorous, they occasionally cost us money, and they are the reason our patients refer their families."
          />

          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <RevealItem key={v.title}>
                <article className="hover-lift h-full rounded-3xl border border-border/70 bg-card p-8 shadow-[var(--shadow-soft)]">
                  <span className="font-display text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-navy">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <TechnologySection />
      <JourneySection />
      <CtaBand />
    </>
  );
}
