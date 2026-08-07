import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, PlayCircle, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { testimonials } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

/** Glassmorphism testimonial carousel powered by Embla. */
export function TestimonialsCarousel({ withHeading = true }: { withHeading?: boolean }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      className="section-pad relative overflow-hidden bg-gradient-navy"
      aria-label="Patient testimonials"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 size-[24rem] rounded-full bg-teal/20 blur-[100px] animate-blob"
        aria-hidden="true"
      />
      <div className="container-luxe relative">
        {withHeading ? (
          <SectionHeading
            tone="dark"
            eyebrow="Testimonials"
            title="15,000 patients. One consistent story."
            body="Verified reviews collected through Google and our own post-treatment surveys."
          />
        ) : null}

        <Reveal className="mt-14">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="glass-dark min-w-0 flex-[0_0_100%] rounded-4xl p-8 sm:flex-[0_0_60%] lg:flex-[0_0_40%] lg:p-10"
                >
                  <Quote className="size-8 text-teal" aria-hidden="true" />
                  <blockquote className="mt-5 text-base leading-relaxed text-white/85">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <div>
                      <p className="font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-white/55">{t.treatment}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="flex" aria-label={`${t.rating} out of 5 stars`}>
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="size-4 fill-teal text-teal" aria-hidden="true" />
                        ))}
                      </span>
                      {t.hasVideo ? (
                        <span className="flex items-center gap-1 text-[0.7rem] text-teal-soft">
                          <PlayCircle className="size-3.5" aria-hidden="true" />
                          Video review
                        </span>
                      ) : null}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 flex items-center justify-between gap-6">
          <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === selected}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === selected ? "w-8 bg-teal" : "w-3 bg-white/25 hover:bg-white/50",
                )}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              variant="outlineLight"
              size="icon"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              variant="outlineLight"
              size="icon"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>

        <Reveal className="mt-12">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer noopener"
            className="glass-dark inline-flex items-center gap-4 rounded-3xl px-6 py-4 text-sm text-white/80 transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="font-display text-2xl font-bold text-white">4.9</span>
            <span>
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-teal text-teal" />
                ))}
              </span>
              <span className="mt-1 block text-xs text-white/60">
                Based on 1,240+ Google reviews — read them all
              </span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
