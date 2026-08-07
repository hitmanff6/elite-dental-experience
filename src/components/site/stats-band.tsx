import { Counter } from "./counter";
import { RevealGroup, RevealItem } from "./reveal";
import { stats } from "@/lib/site-data";

/** Animated trust counters. */
export function StatsBand() {
  return (
    <section id="trust" className="relative -mt-16 z-10" aria-label="Clinic results">
      <div className="container-luxe">
        <RevealGroup className="glass grid grid-cols-2 gap-y-10 rounded-4xl px-6 py-10 sm:px-12 lg:grid-cols-4 lg:py-14">
          {stats.map((s) => (
            <RevealItem key={s.label} className="text-center">
              <p className="font-display text-4xl font-bold text-gradient-navy sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-sm sm:tracking-[0.12em]">
                {s.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
