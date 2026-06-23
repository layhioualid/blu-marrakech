import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import MotionReveal from "./MotionReveal";

const stats = [
  ["Live", "Shows"], ["VIP", "Nights"], ["Star", "Guests"], ["Marrakech", "Vibes"],
];

export default function About() {
  return (
    <section id="apropos" className="section-pad relative overflow-hidden bg-ink">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-electric/10 blur-[140px]" />
      <div className="site-container relative grid items-center gap-16 lg:grid-cols-[.92fr_1.08fr] lg:gap-24">
        <MotionReveal className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
            <Image src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=90" alt="Chanteuse live sur la scène de BLU Marrakech" fill className="object-cover grayscale-[15%]" sizes="(max-width: 1024px) 90vw, 42vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-electric/10" />
          </div>
          <div className="glass absolute -bottom-8 -right-2 w-44 p-5 shadow-glow sm:-right-8 sm:w-56 sm:p-7">
            <p className="font-display text-4xl text-gold">6 voix</p>
            <p className="mt-2 text-[9px] uppercase tracking-[.24em] text-white/55">One unforgettable stage</p>
          </div>
          <div className="absolute -left-5 top-12 h-28 w-px bg-gradient-to-b from-gold to-transparent" />
        </MotionReveal>
        <div>
          <MotionReveal>
            <p className="eyebrow">The BLU Experience</p>
            <h2 className="display-title">La nuit,<br /><span className="italic text-gold">autrement.</span></h2>
            <p className="mt-8 max-w-2xl text-base font-light leading-8 text-white/60 sm:text-lg">BLU Marrakech vous invite à vivre une expérience nocturne unique mêlant live music, cabaret, shows et ambiance premium au cœur de Marrakech.</p>
            <a href="#experience" className="mt-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.22em] text-gold transition hover:gap-5">Explore the night <ArrowUpRight size={15} /></a>
          </MotionReveal>
          <MotionReveal className="mt-12 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4" delay={.12}>
            {stats.map(([top, bottom]) => <div key={bottom} className="border-b border-r border-white/10 px-4 py-6"><p className="font-display text-2xl text-white sm:text-3xl">{top}</p><p className="mt-1 text-[8px] uppercase tracking-[.24em] text-white/35">{bottom}</p></div>)}
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
