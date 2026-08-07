import { RevealGroup, RevealItem } from "./reveal";
import { SectionHeading } from "./section-heading";
import { journey } from "@/lib/site-data";

/** Horizontal patient-journey timeline (scrolls on small screens). */
export function JourneySection() {
  return (
    <section className="section-pad" aria-label="Patient journey">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Patient Journey"
          title="Six steps, no surprises"
          body="From the first conversation to your annual review, you always know exactly what happens next."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block"
            aria-hidden="true"
          />
          <RevealGroup
            stagger={0.12}
            className="no-scrollbar -mx-5 flex snap-x gap-6 overflow-x-auto px-5 pb-4 lg:mx-0 lg:grid lg:grid-cols-6 lg:overflow-visible lg:px-0"
          >
            {journey.map((j) => (
              <RevealItem key={j.step} className="min-w-[15rem] snap-start lg:min-w-0">
                <div className="group h-full">
                  <span className="relative z-10 grid size-12 place-items-center rounded-full border border-accent/30 bg-background font-display text-sm font-bold text-accent shadow-[var(--shadow-soft)] transition-all duration-500 group-hover:bg-gradient-teal group-hover:text-accent-foreground">
                    {j.step}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-navy">{j.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{j.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
