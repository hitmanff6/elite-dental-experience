import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { faqCategories, faqs } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

/** Searchable, filterable animated FAQ accordion. */
export function FaqSection({ withHeading = true }: { withHeading?: boolean }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      const matchesCategory = category === "All" || f.category === category;
      const matchesQuery =
        !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section className="section-pad surface-soft" aria-label="Frequently asked questions">
      <div className="container-luxe">
        {withHeading ? (
          <SectionHeading
            eyebrow="FAQ"
            title="Answers before you have to ask"
            body="Still unsure about something? Our treatment coordinators reply to every message within one working hour."
          />
        ) : null}

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions — implants, sedation, pricing…"
              aria-label="Search frequently asked questions"
              className="h-13 rounded-full border-border bg-card pl-11 shadow-[var(--shadow-soft)]"
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {["All", ...faqCategories].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300",
                  category === c
                    ? "border-transparent bg-gradient-teal text-accent-foreground shadow-[var(--shadow-glow)]"
                    : "border-border bg-card text-muted-foreground hover:border-accent hover:text-accent",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-10 rounded-3xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
              No questions match “{query}”. Try a different term, or contact us directly.
            </p>
          ) : (
            <Accordion type="single" collapsible className="mt-8 space-y-3">
              {filtered.map((f, i) => (
                <AccordionItem
                  key={f.question}
                  value={`item-${i}`}
                  className="overflow-hidden rounded-3xl border border-border bg-card px-6 shadow-[var(--shadow-soft)] data-[state=open]:border-accent/40"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-semibold text-navy hover:no-underline">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </Reveal>
      </div>
    </section>
  );
}
