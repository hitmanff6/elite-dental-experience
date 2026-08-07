import { Icon } from "./icon";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import { SectionHeading } from "./section-heading";
import { images, technologies } from "@/lib/site-data";

/** Technology showcase with an image panel and equipment cards. */
export function TechnologySection() {
  return (
    <section className="section-pad relative overflow-hidden bg-gradient-navy" aria-label="Clinic technology">
      <div
        className="pointer-events-none absolute -left-32 top-1/4 size-[26rem] rounded-full bg-teal/20 blur-[110px] animate-blob"
        aria-hidden="true"
      />
      <div className="container-luxe relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              tone="dark"
              eyebrow="Technology"
              title="Equipment that removes the guesswork"
              body="We invest in diagnostics first. When the data is precise, treatment becomes shorter, gentler and far more predictable."
            />

            <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2">
              {technologies.map((t) => (
                <RevealItem key={t.title}>
                  <div className="group glass-dark h-full rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-1.5">
                    <span className="grid size-11 place-items-center rounded-2xl bg-teal/20 text-teal-soft transition-transform duration-500 group-hover:rotate-12">
                      <Icon name={t.icon} className="size-5" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-white">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{t.body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal direction="right" className="relative">
            <div className="overflow-hidden rounded-4xl shadow-[var(--shadow-lift)]">
              <img
                src={images.technologyImg}
                alt="Digital scanning and imaging suite at Aurelia Dental Studio"
                loading="lazy"
                width={1024}
                height={768}
                className="size-full object-cover"
              />
            </div>
            <div className="glass absolute -bottom-6 -left-4 max-w-[15rem] rounded-3xl p-5 sm:-left-8">
              <p className="font-display text-3xl font-bold text-gradient-navy">80%</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                less radiation than conventional dental CT imaging
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
