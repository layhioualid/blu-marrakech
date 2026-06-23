"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseGlow() {
  const x = useSpring(-300, { stiffness: 90, damping: 22, mass: .5 });
  const y = useSpring(-300, { stiffness: 90, damping: 22, mass: .5 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (event: MouseEvent) => { x.set(event.clientX); y.set(event.clientY); setActive(true); };
    const leave = () => setActive(false);
    window.addEventListener("mousemove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => { window.removeEventListener("mousemove", move); document.documentElement.removeEventListener("mouseleave", leave); };
  }, [x, y]);

  return <motion.div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 mix-blend-screen blur-2xl lg:block" style={{ x, y, opacity: active ? .16 : 0, background: "radial-gradient(circle, #176BFF 0%, rgba(23,107,255,.28) 28%, transparent 70%)" }} />;
}
