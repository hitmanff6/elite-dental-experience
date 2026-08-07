import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/lib/site-data";

/** Persistent WhatsApp affordance. */
export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-5 z-40 flex items-center gap-3 rounded-full bg-gradient-teal px-4 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-1"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp Us</span>
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-teal/40" aria-hidden="true" />
    </a>
  );
}
