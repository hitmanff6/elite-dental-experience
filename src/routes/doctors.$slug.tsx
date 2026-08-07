import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Award, Check, Linkedin, Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { DoctorCard } from "@/components/site/doctors-section";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { doctors, type Doctor } from "@/lib/site-data";

export const Route = createFileRoute("/doctors/$slug")({
  loader: ({ params }): { doctor: Doctor } => {
    const doctor = doctors.find((d) => d.slug === params.slug);
    if (!doctor) throw notFound();
    return { doctor };
  },
  head: ({ loaderData, params }) => {
    const name = loaderData?.doctor.name ?? "Our clinician";
    const description = loaderData
      ? `${loaderData.doctor.name}, ${loaderData.doctor.role} at Aurelia Dental Studio — ${loaderData.doctor.specialization}.`
      : "Clinician profile at Aurelia Dental Studio.";
    return {
      meta: [
        { title: `${name} | Aurelia Dental Studio` },
        { name: "description", content: description },
        { property: "og:title", content: `${name} | Aurelia Dental Studio` },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: `/doctors/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/doctors/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            name,
            medicalSpecialty: "Dentistry",
            worksFor: { "@type": "Dentist", name: "Aurelia Dental Studio" },
          }),
        },
      ],
    };
  },
  component: DoctorDetailPage,
});

function DoctorDetailPage() {
  const { doctor } = Route.useLoaderData() as { doctor: Doctor };
  const others = doctors.filter((d) => d.slug !== doctor.slug);

  return (
    <>
      <PageHero
        eyebrow={doctor.role}
        title={doctor.name}
        body={doctor.specialization}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Doctors", to: "/doctors" },
          { label: doctor.name },
        ]}
      />

      <section className="section-pad">
        <div className="container-luxe grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal direction="left">
            <div className="overflow-hidden rounded-4xl shadow-[var(--shadow-luxe)]">
              <img
                src={doctor.image}
                alt={`Portrait of ${doctor.name}`}
                loading="lazy"
                width={1024}
                height={1024}
                className="size-full object-cover"
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-border bg-card p-5 text-center shadow-[var(--shadow-soft)]">
                <p className="font-display text-2xl font-bold text-gradient-navy">
                  {doctor.experience.split(" ")[0]}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">Years in practice</p>
              </div>
              <a
                href={doctor.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hover-lift flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-5 text-center shadow-[var(--shadow-soft)]"
              >
                <Linkedin className="size-5 text-accent" aria-hidden="true" />
                <span className="mt-2 text-xs text-muted-foreground">LinkedIn profile</span>
              </a>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="size-4 text-accent" aria-hidden="true" />
                {doctor.qualification}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <Stethoscope className="size-4 text-accent" aria-hidden="true" />
                {doctor.specialization}
              </p>
              <h2 className="mt-7 text-3xl font-bold text-navy">Clinical background</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{doctor.bio}</p>
            </Reveal>

            <Reveal className="mt-10">
              <h3 className="text-xl font-semibold text-navy">Areas of focus</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {doctor.focus.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground shadow-[var(--shadow-soft)]"
                  >
                    <Check className="size-4 shrink-0 text-accent" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-10">
              <Button asChild variant="hero" size="xl" className="shine">
                <Link to="/book">Book with {doctor.name.split(" ")[1]}</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad surface-soft">
        <div className="container-luxe">
          <SectionHeading eyebrow="The Team" title="Other specialists at Aurelia" />
          <RevealGroup className="mt-14 grid gap-7 sm:grid-cols-2">
            {others.map((d) => (
              <RevealItem key={d.slug} className="h-full">
                <DoctorCard doctor={d} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
