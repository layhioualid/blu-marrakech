"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Instagram, Sparkles } from "lucide-react";
import { useRef } from "react";
import { INSTAGRAM_URL } from "@/lib/constants";
import ReserveButton from "./ReserveButton";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const videoUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;
  return <section ref={ref} id="accueil" className="noise relative flex min-h-[760px] items-center overflow-hidden sm:min-h-screen">
    <motion.div style={{ y: imageY }} className="absolute -inset-10">
      <Image src="/images/blu-hero-cinematic.png" alt="Scène live premium au BLU Marrakech" fill priority sizes="100vw" className="object-cover object-[67%_center]" />
      {videoUrl && <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster="/images/blu-hero-cinematic.png"><source src={videoUrl} /></video>}
    </motion.div>
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,3,7,.98)_0%,rgba(2,3,7,.88)_34%,rgba(2,3,7,.25)_78%,rgba(2,3,7,.48)_100%)]" />
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
    <div className="hero-beam left-[62%]" /><div className="hero-beam left-[75%] [animation-delay:-3s]" />
    <div className="particles" aria-hidden="true">{Array.from({ length: 15 }).map((_, i) => <i key={i} style={{ left: `${(i * 29) % 97}%`, animationDelay: `${-(i % 7)}s`, animationDuration: `${7 + (i % 5)}s` }} />)}</div>
    <motion.div style={{ y: contentY }} className="site-container relative z-10 pt-24">
      <motion.p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[.3em] text-gold" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}><span className="h-px w-9 bg-gold" /> Live Music <i>•</i> Cabaret <i>•</i> Shows</motion.p>
      <motion.h1 className="mt-8 font-display text-[clamp(5.2rem,14vw,12rem)] leading-[.69] tracking-[-.07em] text-white" initial={{ opacity: 0, y: 55 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}><span className="neon-text">BLU</span><span className="mt-5 block text-[.3em] font-normal italic tracking-[-.03em] text-gold">Marrakech</span></motion.h1>
      <motion.div className="mt-9 max-w-xl" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }}>
        <p className="font-display text-2xl text-white sm:text-3xl">6 voix, une ambiance.</p><p className="mt-3 text-sm font-light leading-7 text-white/60 sm:text-base">Vivez une nuit unique au cœur de Marrakech — là où la musique live, le spectacle et l'élégance ne font qu'un.</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><ReserveButton>Réserver maintenant</ReserveButton><a className="btn-secondary" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={15} /> Voir Instagram</a><a className="btn-quiet" href="#experience">Découvrir l'expérience <ArrowDown size={14} /></a></div>
      </motion.div>
    </motion.div>
    <div className="absolute bottom-5 right-5 hidden items-center gap-2 text-[8px] uppercase tracking-[.26em] text-white/35 md:flex"><Sparkles size={12} className="text-gold" /> Feel the BLU</div>
  </section>;
}
