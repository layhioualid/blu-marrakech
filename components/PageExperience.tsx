"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import type { ReactNode } from "react";

export default function PageExperience({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: .001 });
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .9, delay: .2 }}>
      <motion.div className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-electric via-blue-200 to-gold" style={{ scaleX }} />
      {children}
    </motion.main>
  );
}
