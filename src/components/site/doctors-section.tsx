import { Link } from "@tanstack/react-router";
import { Award, CalendarCheck, Linkedin, Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";
import { RevealGroup, RevealItem } from "./reveal";
import { SectionHeading } from "./section-heading";
import { doctors, type Doctor } from "@/lib/site-data";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="group hover-lift relative h-full overflow-hidden rounded-4xl border border-border/70 bg-card shadow-[var(--shadow-soft)]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={doctor.image}
          alt={`Portrait of ${doctor.name}`}
          loading="lazy"
          width={1024}
          height={1024}
          className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy/20 to-transparent opacity-90"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="font-display text-xl font-bold text-white">{doctor.name}</h3>
          <p className="mt-1 text-sm text-teal-soft">{doctor.role}</p>
        </div>
        <a
          href={doctor.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${doctor.name} on LinkedIn`}
          className="absolute right-5 top-5 grid size-10 translate-y-2 place-items-center rounded-full glass-dark text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Linkedin className="size-4" aria-hidden="true" />
        </a>
      </div>

      <div className="space-y-3 p-6">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Award className="size-4 text-accent" aria-hidden="true" />
          {doctor.qualification}
        </p>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Stethoscope className="size-4 text-accent" aria-hidden="true" />
          {doctor.specialization}
        </p>
        <p className="text-sm font-semibold text-navy">{doctor.experience} in practice</p>

        <div className="flex flex-wrap gap-2 pt-2">
          <Button asChild variant="hero" size="sm">
            <Link to="/book">
              <CalendarCheck className="size-4" />
              Book
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/doctors/$slug" params={{ slug: doctor.slug }}>
              Profile
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

export function DoctorsSection() {
  return (
    <section className="section-pad surface-soft" aria-label="Our clinicians">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Meet the Doctors"
          title="Specialists who do one thing exceptionally well"
          body="You are never handed between generalists. Each phase of your plan is delivered by the clinician who specialises in it."
        />

        <RevealGroup className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d) => (
            <RevealItem key={d.slug} className="h-full">
              <DoctorCard doctor={d} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
