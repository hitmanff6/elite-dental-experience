import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, CalendarCheck, MessageCircle, ShieldCheck, Star } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { images, whatsappLink } from "@/lib/site-data";

/** Cinematic hero: parallax image, mouse-tracked shapes, animated gradient. */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPointer({
      x: (e.clientX - rect.width / 2) / rect.width,
      y: (e.clientY - rect.height / 2) / rect.height,
    });
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouse}
      className="relative flex min-h-dvh items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background image with scroll parallax */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 -z-20 scale-110">
        <img
          src={images.heroClinic}
          alt="Interior of the Aurelia Dental Studio treatment suite"
          width={1920}
          height={1200}
          className="size-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden="true" />

      {/* Floating shapes with mouse parallax */}
      <motion.div
        aria-hidden="true"
        animate={{ x: pointer.x * -60, y: pointer.y * -40 }}
        transition={{ type: "spring", stiffness: 40, damping: 18 }}
        className="pointer-events-none absolute -left-24 top-24 -z-10 size-[26rem] rounded-full bg-teal/25 blur-[90px] animate-blob"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: pointer.x * 80, y: pointer.y * 60 }}
        transition={{ type: "spring", stiffness: 35, damping: 20 }}
        className="pointer-events-none absolute -bottom-32 right-0 -z-10 size-[30rem] rounded-full bg-teal-deep/25 blur-[110px] animate-blob"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: pointer.x * 30, y: pointer.y * 30 }}
        className="pointer-events-none absolute right-[18%] top-[22%] -z-10 hidden size-24 rounded-3xl border border-white/20 backdrop-blur-md animate-float lg:block"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: pointer.x * -45, y: pointer.y * -25 }}
        className="pointer-events-none absolute bottom-[24%] right-[8%] -z-10 hidden size-16 rounded-full border border-white/25 backdrop-blur-md animate-float-slow lg:block"
      />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-luxe pt-28 pb-24">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow glass-dark inline-flex rounded-full px-4 py-2 text-white/85"
          >
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            Specialist-led · San Francisco
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[2.6rem] font-bold leading-[1.03] text-white sm:text-6xl lg:text-[4.4rem]"
          >
            Transform Your Smile With{" "}
            <span className="text-gradient-teal">World-Class Dental Care</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Modern, comfortable, pain-free dentistry using the latest technology — planned digitally,
            delivered by specialists, and designed entirely around your face.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/70"
          >
            <span className="flex items-center gap-2">
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-teal text-teal" />
                ))}
              </span>
              4.9 from 1,240+ reviews
            </span>
            <span>15,000+ smiles transformed</span>
            <span>0% interest payment plans</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#trust"
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 hover:text-white sm:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.28em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="grid size-9 place-items-center rounded-full border border-white/25"
        >
          <ArrowDown className="size-4" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}
