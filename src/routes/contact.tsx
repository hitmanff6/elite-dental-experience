import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { AppointmentForm } from "@/components/site/appointment-form";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { clinic } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location | Aurelia Dental Studio" },
      {
        name: "description",
        content:
          "Visit Aurelia Dental Studio in San Francisco. Call, email or message us — open Monday to Saturday with same-day emergency appointments.",
      },
      { property: "og:title", content: "Contact Aurelia Dental Studio" },
      { property: "og:description", content: "Address, opening hours and direct contact details." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    { icon: Phone, label: "Call the studio", value: clinic.phone, href: `tel:${clinic.phone.replace(/[^+\d]/g, "")}` },
    { icon: Mail, label: "Email us", value: clinic.email, href: `mailto:${clinic.email}` },
    {
      icon: MapPin,
      label: "Visit us",
      value: clinic.locations[0]!.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.locations[0]!.address)}`,
    },
    { icon: Clock, label: "Opening hours", value: clinic.hours.map((h) => `${h.day}: ${h.time}`).join(" · ") },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're easy to reach"
        body="Questions before booking? Our patient coordinators answer calls, emails and messages during opening hours."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="section-pad">
        <div className="container-luxe">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(({ icon: IconCmp, label, value, href }) => {
              const inner = (
                <>
                  <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-accent">
                    <IconCmp className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-navy">{value}</p>
                </>
              );
              return (
                <RevealItem key={label} className="h-full">
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className="hover-lift block h-full rounded-3xl border border-border/70 bg-card p-7 shadow-[var(--shadow-soft)]"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="h-full rounded-3xl border border-border/70 bg-card p-7 shadow-[var(--shadow-soft)]">
                      {inner}
                    </div>
                  )}
                </RevealItem>
              );
            })}
          </RevealGroup>

          <Reveal className="mt-14">
            <div className="overflow-hidden rounded-4xl border border-border shadow-[var(--shadow-luxe)]">
              <iframe
                title="Map showing the location of Aurelia Dental Studio"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-122.4194%2C37.7849%2C-122.3894%2C37.7999&layer=mapnik"
                loading="lazy"
                className="h-[420px] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <AppointmentForm />
    </>
  );
}
