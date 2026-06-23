"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import BookingForm from "./BookingForm";

export default function ReservationModal() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener("open-blu-reservation", show);
    return () => window.removeEventListener("open-blu-reservation", show);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  useEffect(() => { const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false); window.addEventListener("keydown", esc); return () => window.removeEventListener("keydown", esc); }, []);
  return <AnimatePresence>{open && <motion.div className="fixed inset-0 z-[90] grid place-items-center overflow-y-auto bg-black/80 p-3 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => e.currentTarget === e.target && setOpen(false)}>
    <motion.div role="dialog" aria-modal="true" aria-labelledby="reserve-title" className="glass relative my-auto w-full max-w-2xl overflow-hidden p-5 sm:p-8" initial={{ y: 40, scale: .97 }} animate={{ y: 0, scale: 1 }} exit={{ y: 30, opacity: 0 }}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-electric via-white to-gold" />
      <button onClick={() => setOpen(false)} aria-label="Fermer" className="absolute right-4 top-4 grid h-10 w-10 place-items-center border border-white/10 text-white/60 hover:text-white"><X size={18} /></button>
      <p className="eyebrow">Votre nuit commence ici</p><h2 id="reserve-title" className="font-display text-4xl sm:text-5xl">Réserver chez <span className="italic text-gold">BLU.</span></h2>
      <div className="mt-7"><BookingForm compact onSuccess={() => setOpen(false)} /></div>
    </motion.div>
  </motion.div>}</AnimatePresence>;
}
