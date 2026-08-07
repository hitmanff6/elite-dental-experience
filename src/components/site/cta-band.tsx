import { Link } from "@tanstack/react-router";
import { CalendarCheck, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site-data";
import { Reveal } from "./reveal";

/** Closing conversion band used at the bottom of most pages. */
export function CtaBand() {
  return (
    <section className="section-pad" aria-label="Book an appointment">
      <div className="container-luxe">
        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-4xl bg-gradient-navy px-7 py-14 text-center sm:px-14 lg:py-20">
            <div
              className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-teal/25 blur-[90px] animate-blob"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 right-0 size-80 rounded-full bg-teal-deep/25 blur-[100px] animate-blob"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-2xl">
              <span className="eyebrow text-teal-soft">Your smile, on your terms</span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.8rem]">
                Book a consultation and see your new smile before you commit
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70">
                Forty-five unhurried minutes, a full digital assessment and a written plan with fixed
                pricing. No pressure, no obligation.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Button asChild variant="hero" size="xl" className="shine">
                  <Link to="/book">
                    <CalendarCheck className="size-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button asChild variant="outlineLight" size="xl">
                  <a href={whatsappLink} target="_blank" rel="noreferrer noopener">
                    <MessageCircle className="size-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
