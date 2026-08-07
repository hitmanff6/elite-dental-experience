import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/** Consistent section intro: eyebrow, headline, supporting line. */
export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  tone = "light",
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto max-w-3xl" : "items-start max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal direction="fade">
          <span
            className={cn(
              "eyebrow",
              tone === "dark" ? "text-teal-soft" : "text-accent",
            )}
          >
            <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}

      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.9rem]",
            tone === "dark" ? "text-white" : "text-navy",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {body ? (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "text-base leading-relaxed sm:text-lg",
              tone === "dark" ? "text-white/70" : "text-muted-foreground",
            )}
          >
            {body}
          </p>
        </Reveal>
      ) : null}

      {children}
    </div>
  );
}
