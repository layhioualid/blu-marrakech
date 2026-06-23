"use client";

import { motion } from "framer-motion";
import { Instagram, Play } from "lucide-react";
import Image from "next/image";
import { galleryImages, INSTAGRAM_URL } from "@/lib/constants";
import MotionReveal from "./MotionReveal";

export default function Gallery() {
  return (
    <section id="galerie" className="section-pad relative overflow-hidden bg-[#05070b]">
      <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-electric/10 blur-[120px]" />
      <div className="site-container relative">
        <MotionReveal className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div><p className="eyebrow">Inside BLU</p><h2 className="display-title">Caught in the <span className="italic text-gold">moment.</span></h2></div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn-secondary self-start md:self-auto"><Instagram size={15} /> Voir plus sur Instagram</a>
        </MotionReveal>
        <div className="grid auto-rows-[260px] grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-[230px] md:grid-cols-4">
          {galleryImages.map((image, index) => <motion.figure key={image.src} className={`group relative overflow-hidden border border-white/[.08] bg-white/[.03] ${image.className}`} initial={{ opacity: 0, scale: .97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .12 }} transition={{ delay: index * .06, duration: .7 }} whileHover={{ scale: .99 }}>
            <Image src={image.src} alt={image.alt} fill className="object-cover transition duration-1000 group-hover:scale-110" sizes="(max-width: 640px) 92vw, (max-width: 768px) 46vw, 25vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-70 transition group-hover:opacity-100" />
            <div className="absolute inset-0 border border-transparent transition duration-500 group-hover:border-electric/50 group-hover:shadow-[inset_0_0_55px_rgba(23,107,255,.14)]" />
            {index === 2 && <span className="absolute inset-0 grid place-items-center"><span className="grid h-14 w-14 place-items-center rounded-full border border-white/40 bg-ink/30 backdrop-blur transition group-hover:scale-110 group-hover:border-gold"><Play size={17} fill="currentColor" /></span></span>}
            <figcaption className="absolute bottom-5 left-5 translate-y-3 text-[9px] uppercase tracking-[.24em] text-white/70 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">BLU Moments · 0{index + 1}</figcaption>
          </motion.figure>)}
        </div>
      </div>
    </section>
  );
}
