import { motion, useScroll, useSpring } from "motion/react";

/** Thin teal progress bar pinned under the navbar. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: width }}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-teal"
    />
  );
}
