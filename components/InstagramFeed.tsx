import { Heart, Instagram, MessageCircle, MoreHorizontal, Play } from "lucide-react";
import Image from "next/image";
import { instagramImages, INSTAGRAM_URL } from "@/lib/constants";
import MotionReveal from "./MotionReveal";

export default function InstagramFeed() {
  // Replace these placeholders with Instagram Graph API data or manual media from BLU Marrakech.
  return (
    <section className="border-y border-white/5 bg-ink py-20 sm:py-24">
      <div className="site-container">
        <MotionReveal className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div><p className="eyebrow">@blu.marrakech_</p><h2 className="font-display text-4xl tracking-[-.03em] text-white sm:text-6xl">Latest from Instagram</h2></div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.2em] text-gold"><Instagram size={16} /> Follow the night</a>
        </MotionReveal>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
          {instagramImages.map((src, index) => <MotionReveal key={src} delay={index * .05}>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="group relative block aspect-square overflow-hidden border border-white/[.08] bg-white/5 transition duration-500 hover:-translate-y-1 hover:border-electric/50 hover:shadow-glow" aria-label={`Voir la publication Instagram ${index + 1}`}>
              <Image src={src} alt={`Ambiance BLU Marrakech ${index + 1}`} fill className="object-cover transition duration-700 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 16vw" />
              <span className="absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-ink/80 to-transparent p-3"><span className="flex items-center gap-2"><span className="grid h-6 w-6 place-items-center rounded-full border border-gold bg-ink font-display text-[10px] text-gold">B</span><span className="text-[7px] font-semibold tracking-wide text-white">blu.marrakech_</span></span>{index % 3 === 0 ? <Play size={13} fill="currentColor" /> : <MoreHorizontal size={14} />}</span>
              <span className="absolute inset-0 flex items-center justify-center gap-5 bg-ink/65 opacity-0 backdrop-blur-[2px] transition group-hover:opacity-100"><span className="flex items-center gap-1 text-xs"><Heart size={16} fill="currentColor" /> {124 + index * 17}</span><span className="flex items-center gap-1 text-xs"><MessageCircle size={16} /> {8 + index}</span></span>
              <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-electric via-white/40 to-gold opacity-0 transition group-hover:opacity-100" />
            </a>
          </MotionReveal>)}
        </div>
      </div>
    </section>
  );
}
