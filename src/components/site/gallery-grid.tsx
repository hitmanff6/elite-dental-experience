import { AnimatePresence, motion } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { galleryFilters, galleryItems } from "@/lib/site-data";
import { RevealGroup, RevealItem } from "./reveal";

/** Filterable gallery grid with an accessible lightbox. */
export function GalleryGrid() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<number | null>(null);

  const items =
    filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);
  const current = galleryItems.find((g) => g.id === active) ?? null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {galleryFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={cn(
              "rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300",
              filter === f
                ? "border-transparent bg-gradient-teal text-accent-foreground shadow-[var(--shadow-glow)]"
                : "border-border bg-card text-muted-foreground hover:border-accent hover:text-accent",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <RevealItem key={item.id}>
              <motion.button
                layout
                type="button"
                onClick={() => setActive(item.id)}
                className="group relative block w-full overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]"
                aria-label={`View ${item.title} larger`}
              >
                <span className="block aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                </span>
                <span
                  className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95"
                  aria-hidden="true"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5 text-left">
                  <span className="text-sm font-semibold text-white">{item.title}</span>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full glass-dark text-white">
                    <ZoomIn className="size-4" aria-hidden="true" />
                  </span>
                </span>
              </motion.button>
            </RevealItem>
          ))}
        </AnimatePresence>
      </RevealGroup>

      <AnimatePresence>
        {current ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-deep/90 p-5 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close image"
              className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-white/30 text-white hover:bg-white/15"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            <motion.figure
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.image}
                alt={current.title}
                className="max-h-[75dvh] w-full rounded-3xl object-contain"
              />
              <figcaption className="mt-4 text-center text-sm text-white/75">
                {current.title}
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
