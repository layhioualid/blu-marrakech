"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/constants";
import LogoMark from "./LogoMark";
import ReserveButton from "./ReserveButton";

function Brand() {
  return (
    <a href="#accueil" className="relative z-50 flex items-center gap-3" aria-label="BLU Marrakech — Accueil">
      <LogoMark size={44} priority />
      <span className="leading-none">
        <span className="block font-display text-[22px] tracking-[0.18em] text-white">BLU</span>
        <span className="mt-1 block text-[7px] uppercase tracking-[0.42em] text-gold">Marrakech</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-white/10 bg-ink/80 py-3 shadow-2xl backdrop-blur-2xl" : "bg-transparent py-5"}`}>
      <nav className="site-container flex items-center justify-between" aria-label="Navigation principale">
        <Brand />
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => <a key={link.href} href={link.href} className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/65 transition hover:text-white">{link.label}</a>)}
        </div>
        <ReserveButton className="btn-primary hidden !min-h-10 !px-5 lg:inline-flex">Réserver</ReserveButton>
        <button className="relative z-50 grid h-11 w-11 place-items-center border border-white/15 text-white lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-40 flex min-h-screen flex-col justify-center bg-ink px-8 lg:hidden" initial={{ opacity: 0, clipPath: "circle(0% at 90% 5%)" }} animate={{ opacity: 1, clipPath: "circle(150% at 90% 5%)" }} exit={{ opacity: 0, clipPath: "circle(0% at 90% 5%)" }} transition={{ duration: .6, ease: [0.77, 0, 0.18, 1] }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(23,107,255,.22),transparent_40%)]" />
            <div className="relative space-y-5">
              {navLinks.map((link, index) => <motion.a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-b border-white/10 pb-4 font-display text-4xl text-white" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: .12 + index * .06 }}>{link.label}</motion.a>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={`animated-border absolute bottom-0 left-0 h-px transition-opacity duration-500 ${scrolled ? "w-full opacity-40" : "w-0 opacity-0"}`} />
    </header>
  );
}
