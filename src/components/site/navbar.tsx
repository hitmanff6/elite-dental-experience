import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { CalendarCheck, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { clinic, navLinks } from "@/lib/site-data";

/** Sticky navbar: transparent over the hero, solid + condensed on scroll. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onDarkHero = pathname === "/";
  const solid = scrolled || !onDarkHero;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "border-b border-border/70 bg-background/85 backdrop-blur-xl shadow-[var(--shadow-soft)]"
            : "bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "container-luxe flex items-center justify-between transition-all duration-500",
            solid ? "h-16 lg:h-[68px]" : "h-20 lg:h-24",
          )}
        >
          <Link to="/" className="group flex items-center gap-3" aria-label={`${clinic.name} home`}>
            <span
              className={cn(
                "grid size-10 place-items-center rounded-2xl bg-gradient-teal text-accent-foreground font-display text-lg font-bold transition-transform duration-500 group-hover:rotate-6",
              )}
            >
              A
            </span>
            <span className="leading-none">
              <span
                className={cn(
                  "block font-display text-[1.05rem] font-bold tracking-tight",
                  solid ? "text-navy" : "text-white",
                )}
              >
                Aurelia
              </span>
              <span
                className={cn(
                  "block text-[0.62rem] font-medium uppercase tracking-[0.24em]",
                  solid ? "text-muted-foreground" : "text-white/65",
                )}
              >
                Dental Studio
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-7 xl:flex">
            {navLinks.map((link) => {
              const active = pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-active={active}
                    className={cn(
                      "link-underline text-sm font-medium transition-colors",
                      solid
                        ? active
                          ? "text-accent"
                          : "text-navy/80 hover:text-accent"
                        : active
                          ? "text-teal-soft"
                          : "text-white/85 hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${clinic.phone.replace(/[^\d+]/g, "")}`}
              className={cn(
                "hidden items-center gap-2 text-sm font-medium lg:flex",
                solid ? "text-navy/80 hover:text-accent" : "text-white/85 hover:text-white",
              )}
            >
              <Phone className="size-4" aria-hidden="true" />
              {clinic.phone}
            </a>

            <Button asChild variant={solid ? "hero" : "outlineLight"} size="default" className="hidden sm:inline-flex">
              <Link to="/book">
                <CalendarCheck className="size-4" />
                Book Appointment
              </Link>
            </Button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className={cn(
                "grid size-11 place-items-center rounded-full border transition-colors xl:hidden",
                solid
                  ? "border-border text-navy hover:border-accent hover:text-accent"
                  : "border-white/35 text-white hover:bg-white/15",
              )}
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen animated mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-gradient-navy"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div
              className="pointer-events-none absolute -left-24 top-10 size-80 rounded-full bg-teal/25 blur-3xl animate-blob"
              aria-hidden="true"
            />
            <div className="container-luxe flex h-20 items-center justify-between">
              <span className="font-display text-lg font-bold text-white">Aurelia</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid size-11 place-items-center rounded-full border border-white/30 text-white hover:bg-white/15"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="container-luxe mt-6">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.to}
                      className="block border-b border-white/10 py-4 font-display text-2xl font-semibold text-white/90 transition-colors hover:text-teal-soft"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-8 flex flex-col gap-3"
              >
                <Button asChild variant="hero" size="xl">
                  <Link to="/book">Book Appointment</Link>
                </Button>
                <a
                  href={`tel:${clinic.phone.replace(/[^\d+]/g, "")}`}
                  className="text-center text-sm text-white/70"
                >
                  or call {clinic.phone}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
