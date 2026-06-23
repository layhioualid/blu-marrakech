"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";

export default function LuxuryLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("blu-intro-seen");
    if (seen) { setVisible(false); return; }
    const timer = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("blu-intro-seen", "true");
    }, 1850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-6%" }}
          transition={{ duration: .8, ease: [0.76, 0, 0.24, 1] }}
          aria-label="Chargement de BLU Marrakech"
          role="status"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(23,107,255,.18),transparent_38%)]" />
          <motion.div className="relative text-center" initial={{ scale: .88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .8 }}>
            <div className="relative mx-auto grid h-32 w-32 place-items-center">
              <motion.span className="absolute inset-0 rounded-full border border-electric/40" animate={{ rotate: 180 }} transition={{ duration: 9, ease: "linear", repeat: Infinity }} />
              <motion.span className="absolute -inset-3 rounded-full border border-gold/20" animate={{ rotate: -180 }} transition={{ duration: 13, ease: "linear", repeat: Infinity }} />
              <LogoMark size={108} priority className="shadow-[0_0_55px_rgba(23,107,255,.25)]" />
            </div>
            <p className="mt-7 text-[9px] font-semibold uppercase tracking-[.55em] text-white/70">BLU Marrakech</p>
            <div className="mx-auto mt-6 h-px w-40 overflow-hidden bg-white/10">
              <motion.div className="h-full bg-gradient-to-r from-electric via-white to-gold" initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ duration: 1.25, ease: "easeInOut" }} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
