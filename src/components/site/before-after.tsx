import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

import { images } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

/** Draggable before/after comparison slider (mouse, touch and keyboard). */
export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  };

  return (
    <section className="section-pad" aria-label="Before and after results">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Before & After"
          title="Real transformations, unretouched"
          body="Drag the handle to compare. Every case shown was photographed under identical lighting with the patient's written consent."
        />

        <Reveal direction="scale" className="mt-14">
          <div
            ref={trackRef}
            className="relative aspect-[16/9] w-full cursor-ew-resize select-none overflow-hidden rounded-4xl shadow-[var(--shadow-luxe)]"
            onMouseDown={(e) => {
              dragging.current = true;
              move(e.clientX);
            }}
            onMouseMove={(e) => dragging.current && move(e.clientX)}
            onMouseUp={() => (dragging.current = false)}
            onMouseLeave={() => (dragging.current = false)}
            onTouchStart={(e) => e.touches[0] && move(e.touches[0].clientX)}
            onTouchMove={(e) => e.touches[0] && move(e.touches[0].clientX)}
          >
            <img
              src={images.smileMakeover}
              alt="Patient smile after ceramic veneer treatment"
              loading="lazy"
              width={1024}
              height={576}
              className="absolute inset-0 size-full object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src={images.whitening}
                alt="Patient smile before treatment"
                loading="lazy"
                width={1024}
                height={576}
                className="size-full object-cover grayscale-[35%] brightness-95"
              />
            </div>

            <span className="absolute left-5 top-5 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Before
            </span>
            <span className="absolute right-5 top-5 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              After
            </span>

            <div
              className="absolute inset-y-0 w-px bg-white/90"
              style={{ left: `${pos}%` }}
              aria-hidden="true"
            />
            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Compare before and after"
              className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
            />
            <span
              className="pointer-events-none absolute top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-teal text-accent-foreground shadow-[var(--shadow-glow)]"
              style={{ left: `${pos}%` }}
              aria-hidden="true"
            >
              <MoveHorizontal className="size-5" />
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
