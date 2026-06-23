import Image from "next/image";
import { Play } from "lucide-react";
import MotionReveal from "./MotionReveal";

const films = [
  { src: "/videos/live-concert.mp4", poster: "/images/stock/concert-stage.jpg", label: "Live Performance", title: "La scène prend vie" },
  { src: "/videos/disco-lights.mp4", poster: "/images/stock/neon-stage.jpg", label: "After Midnight", title: "Feel the BLU" },
];

export default function MotionGallery() {
  return <section className="relative overflow-hidden border-y border-white/5 bg-[#02040a] py-20 sm:py-28">
    <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/10 blur-[140px]" />
    <div className="site-container relative">
      <MotionReveal className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">BLU in motion</p><h2 className="font-display text-5xl sm:text-7xl">Live the <span className="italic text-gold">moment.</span></h2></div><p className="max-w-sm text-sm leading-7 text-white/45">Un aperçu en mouvement de l'énergie qui transforme chaque nuit.</p></MotionReveal>
      <div className="grid gap-4 lg:grid-cols-2">{films.map((film, index) => <MotionReveal key={film.src} delay={index * .1}><article className="card-shine group relative aspect-video overflow-hidden border border-white/10 bg-[#071126]">
        <Image src={film.poster} alt={film.title} fill className="object-cover md:hidden" sizes="100vw" />
        <video className="hidden h-full w-full object-cover transition duration-1000 group-hover:scale-[1.03] md:block" autoPlay muted loop playsInline preload="metadata" poster={film.poster}><source src={film.src} type="video/mp4" /></video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/20" />
        <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur"><Play size={14} fill="currentColor" /></span>
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8"><p className="text-[8px] uppercase tracking-[.25em] text-gold">{film.label}</p><h3 className="mt-2 font-display text-3xl sm:text-4xl">{film.title}</h3></div>
      </article></MotionReveal>)}</div>
    </div>
  </section>;
}
