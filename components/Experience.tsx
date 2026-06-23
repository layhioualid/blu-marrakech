"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { experiences } from "@/lib/constants";
import MotionReveal from "./MotionReveal";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative overflow-hidden border-y border-white/5 bg-[#05070c]">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_100%_40%,rgba(23,107,255,.13),transparent_55%)]" />
      <div className="site-container relative">
        <MotionReveal className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div><p className="eyebrow">Beyond Dinner</p><h2 className="display-title">Une scène.<br />Mille <span className="italic text-gold">émotions.</span></h2></div>
          <p className="max-w-sm text-sm leading-7 text-white/45">A curated nightlife experience where every detail has its rhythm — from the first note to the last toast.</p>
        </MotionReveal>
        <div className="grid gap-px bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {experiences.map((item, index) => {
            const Icon = item.icon;
            return <motion.article key={item.title} className="luxury-card group relative min-h-[430px] overflow-hidden bg-[#06080d]/90 p-7 backdrop-blur-xl sm:p-9" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: index * .09, duration: .65 }} whileHover={{ y: -8 }}>
              <Image src={item.image} alt={`${item.title} au BLU Marrakech`} fill className="object-cover opacity-55 transition duration-1000 group-hover:scale-105 group-hover:opacity-75" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030407] via-[#030407]/65 to-[#030407]/10" />
              <div className="absolute inset-0 translate-y-full bg-gradient-to-t from-electric/25 to-transparent transition-transform duration-700 group-hover:translate-y-0" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center border border-gold/30 text-gold transition duration-500 group-hover:border-electric group-hover:bg-electric group-hover:text-white group-hover:shadow-glow"><Icon size={20} strokeWidth={1.4} /></span><span className="font-display text-3xl text-white/10">{item.number}</span></div>
                <div className="mt-auto"><h3 className="font-display text-3xl text-white">{item.title}</h3><div className="my-5 h-px w-10 bg-gold transition-all duration-500 group-hover:w-20 group-hover:bg-electric" /><p className="text-sm font-light leading-7 text-white/50">{item.description}</p><ArrowUpRight className="mt-6 text-white/25 transition group-hover:text-gold" size={18} /></div>
              </div>
            </motion.article>;
          })}
        </div>
      </div>
    </section>
  );
}
