"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Instagram, Sparkles, Volume2 } from "lucide-react";
import Image from "next/image";
import { type MouseEvent, useRef } from "react";
import { INSTAGRAM_URL, WHATSAPP_NUMBER } from "@/lib/constants";
import LogoMark from "./LogoMark";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const depthX = useSpring(rawX, { stiffness: 45, damping: 24 });
  const depthY = useSpring(rawY, { stiffness: 45, damping: 24 });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    rawX.set(((event.clientX - bounds.left) / bounds.width - .5) * 24);
    rawY.set(((event.clientY - bounds.top) / bounds.height - .5) * 16);
  };

  return (
    <section ref={ref} id="accueil" onMouseMove={handleMouseMove} onMouseLeave={() => { rawX.set(0); rawY.set(0); }} className="noise relative flex min-h-[780px] items-end overflow-hidden sm:min-h-screen">
      <motion.div style={{ y }} className="absolute -inset-12">
        <Image src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=2200&q=90" alt="Scène live et public dans une ambiance premium" fill priority className="object-cover object-center" sizes="100vw" />
        {videoUrl && <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=2200&q=90" aria-label="Ambiance live de BLU Marrakech"><source src={videoUrl} /></video>}
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,4,7,.94)_0%,rgba(3,4,7,.62)_48%,rgba(3,4,7,.2)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,#030407_0%,transparent_48%,rgba(3,4,7,.38)_100%)]" />
      <div className="gradient-orb absolute left-[55%] top-[8%] h-[36rem] w-[36rem] rounded-full bg-[conic-gradient(from_120deg,rgba(23,107,255,.35),rgba(79,70,229,.08),rgba(214,179,106,.14),rgba(23,107,255,.35))] blur-[120px]" />
      <motion.div style={{ x: depthX, y: depthY }} className="pointer-events-none absolute right-[8%] top-[18%] hidden h-[430px] w-[430px] rounded-full border border-blue-300/15 lg:block">
        <div className="absolute inset-10 rounded-full border border-gold/10" /><div className="absolute inset-24 rounded-full border border-white/10" />
      </motion.div>
      <motion.div style={{ opacity, y: contentY }} className="site-container relative z-10 pb-20 pt-40 sm:pb-24 lg:pb-20">
        <div className="max-w-5xl">
          <motion.p className="mb-7 flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.42em] text-gold" initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .3, duration: .8 }}><span className="h-px w-10 bg-gold" /> Live Music <i className="h-1 w-1 rounded-full bg-gold shadow-[0_0_12px_#D6B36A]" /> Cabaret <i className="h-1 w-1 rounded-full bg-gold shadow-[0_0_12px_#D6B36A]" /> Shows</motion.p>
          <div className="relative">
            <motion.span aria-hidden="true" className="absolute -left-1 -top-10 font-display text-[clamp(6rem,17vw,14rem)] leading-none tracking-[-.065em] text-transparent opacity-10 [-webkit-text-stroke:1px_#6ea8ff]" style={{ x: depthX }}>BLU</motion.span>
            <motion.h1 className="neon-text relative font-display text-[clamp(5.4rem,14vw,12rem)] leading-[.73] tracking-[-.065em] text-white" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>BLU</motion.h1>
          </div>
          <motion.div className="mt-2 flex flex-col gap-6 md:flex-row md:items-end md:justify-between" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55, duration: .9 }}>
            <div>
              <p className="font-display text-3xl italic text-gold sm:text-5xl">Marrakech</p>
              <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/72 sm:text-lg">6 voix, une ambiance. Vivez une nuit unique au cœur de Marrakech.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary" target="_blank" rel="noreferrer" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour BLU Marrakech, je souhaite faire une réservation.")}`}>Réserver sur WhatsApp <ArrowUpRight size={15} /></a>
              <a className="btn-secondary" target="_blank" rel="noreferrer" href={INSTAGRAM_URL}><Instagram size={15} /> Voir Instagram</a>
            </div>
          </motion.div>
        </div>
        <div className="absolute -left-16 bottom-36 hidden -rotate-90 items-center gap-3 text-[8px] uppercase tracking-[.38em] text-white/35 xl:flex"><Sparkles size={12} className="text-electric" /> The art of nightlife</div>
        <a href="#apropos" aria-label="Découvrir BLU Marrakech" className="absolute bottom-5 right-6 hidden items-center gap-3 text-[9px] uppercase tracking-[.25em] text-white/50 sm:flex lg:right-12"><span>Discover</span><span className="grid h-10 w-10 place-items-center rounded-full border border-white/15"><ArrowDown size={14} /></span></a>
      </motion.div>
      <div className="absolute right-7 top-28 z-10 hidden items-center gap-3 border border-white/10 bg-ink/35 p-2 pr-4 text-[8px] uppercase tracking-[.22em] text-white/45 backdrop-blur-xl lg:flex"><LogoMark size={42} /><span><span className="mb-1 flex items-center gap-2 text-gold"><Volume2 size={12} /> BLU K E C H</span>Immersive experience</span></div>
      <div className="animated-border absolute bottom-0 left-0 h-px w-full" />
    </section>
  );
}
