import { Icon } from "./icon";
import { RevealGroup, RevealItem } from "./reveal";
import { SectionHeading } from "./section-heading";
import { advantages } from "@/lib/site-data";

/** Why choose us — premium icon cards with hover lift and animated border. */
export function WhyChooseUs() {
  return (
    <section className="section-pad surface-soft" aria-label="Why choose Aurelia">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Why Aurelia"
          title="Dentistry that respects your time, comfort and intelligence"
          body="Six commitments we hold on every single case — from a routine hygiene visit to a full-mouth reconstruction."
        />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <RevealItem key={item.title}>
              <article className="group hover-lift animated-border relative h-full overflow-hidden rounded-3xl border border-border/70 bg-card p-8 shadow-[var(--shadow-soft)]">
                <span
                  className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-teal/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0"
                  aria-hidden="true"
                />
                <span className="grid size-14 place-items-center rounded-2xl bg-secondary text-accent transition-all duration-500 group-hover:bg-gradient-teal group-hover:text-accent-foreground group-hover:rotate-6">
                  <Icon name={item.icon} className="size-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
