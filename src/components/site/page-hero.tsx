import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

/** Inner-page hero with breadcrumbs and animated gradient background. */
export function PageHero({
  eyebrow,
  title,
  body,
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  breadcrumbs: { label: string; to?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-navy pb-16 pt-32 lg:pb-24 lg:pt-40">
      <div
        className="pointer-events-none absolute -left-24 top-10 size-[24rem] rounded-full bg-teal/20 blur-[100px] animate-blob"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 size-[22rem] rounded-full bg-teal-deep/25 blur-[100px] animate-blob"
        aria-hidden="true"
      />

      <div className="container-luxe relative">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/55">
            {breadcrumbs.map((b, i) => (
              <li key={b.label} className="flex items-center gap-1.5">
                {b.to ? (
                  <Link to={b.to} className="transition-colors hover:text-white">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-teal-soft">{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 ? (
                  <ChevronRight className="size-3" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
        </nav>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mt-8 block text-teal-soft"
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-4xl text-[2.2rem] font-bold leading-[1.06] text-white sm:text-5xl lg:text-[3.6rem]"
        >
          {title}
        </motion.h1>

        {body ? (
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {body}
          </motion.p>
        ) : null}

        {children ? <div className="mt-9">{children}</div> : null}
      </div>
    </section>
  );
}
