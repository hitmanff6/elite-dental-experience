import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { clinic, navLinks, services } from "@/lib/site-data";

export function Footer() {
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    if (!valid) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("You're on the list — welcome to Aurelia.");
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-navy text-white">
      <div
        className="pointer-events-none absolute -right-40 -top-40 size-[28rem] rounded-full bg-teal/20 blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div className="container-luxe relative py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand + newsletter */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-gradient-teal font-display text-lg font-bold text-accent-foreground">
                A
              </span>
              <span className="font-display text-xl font-bold">Aurelia Dental Studio</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              A specialist-led dental studio built around precision, comfort and results that look
              like they were always yours.
            </p>

            <form onSubmit={subscribe} className="mt-7 max-w-sm">
              <label htmlFor="newsletter-email" className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-soft">
                Smile notes newsletter
              </label>
              <div className="mt-3 flex gap-2">
                <Input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="h-11 rounded-full border-white/20 bg-white/10 text-white placeholder:text-white/45 focus-visible:ring-teal"
                />
                <Button type="submit" variant="hero" size="icon" aria-label="Subscribe to newsletter">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </form>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-soft">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="link-underline transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-soft">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="link-underline transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-soft">Visit Us</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                <span>{clinic.locations[0]?.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                <a href={`tel:${clinic.phone.replace(/[^\d+]/g, "")}`} className="hover:text-white">
                  {clinic.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                <a href={`mailto:${clinic.email}`} className="hover:text-white">
                  {clinic.email}
                </a>
              </li>
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2">
              {clinic.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex rounded-full border border-white/20 px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-teal hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aurelia Dental Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
