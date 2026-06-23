import { Disc3, Mic2, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import MotionReveal from "./MotionReveal";

const artists = [
  { icon: Mic2, title: "Live Singers", image: "/images/card-live-singer.png", text: "Six voix qui traversent les genres et font vibrer la scène." },
  { icon: Disc3, title: "DJs", image: "/images/card-dj.png", text: "Des sets précis pour prolonger l'énergie jusqu'au petit matin." },
  { icon: Sparkles, title: "Cabaret Performers", image: "/images/card-cabaret.png", text: "Des performances élégantes façonnées comme des tableaux vivants." },
  { icon: Star, title: "Guest Stars", image: "/images/card-vip.png", text: "Des invités exclusifs pour des vendredis qui ne ressemblent à aucun autre." },
];

export default function Artists() {
  return <section id="artistes" className="section-pad relative overflow-hidden bg-ink">
    <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-electric/10 blur-[120px]"/>
    <div className="site-container relative">
      <MotionReveal className="text-center"><p className="eyebrow justify-center before:hidden">On Stage</p><h2 className="display-title">Artists & Live<br/><span className="italic text-gold">Performances.</span></h2></MotionReveal>
      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{artists.map(({icon:Icon,title,image,text},i) => <MotionReveal key={title} delay={i*.07}><article className="group relative min-h-[460px] overflow-hidden border border-white/10 p-7 transition hover:-translate-y-1 hover:border-electric/60 hover:shadow-glow"><Image src={image} alt={`${title} au BLU Marrakech`} fill className="object-cover opacity-65 transition duration-1000 group-hover:scale-105 group-hover:opacity-80" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"/><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent"/><span className="absolute left-6 top-6 grid h-12 w-12 place-items-center border border-gold/40 bg-ink/40 text-gold backdrop-blur-xl transition group-hover:bg-gold group-hover:text-ink"><Icon size={19}/></span><div className="absolute inset-x-0 bottom-0 p-7"><h3 className="font-display text-3xl">{title}</h3><div className="my-4 h-px w-10 bg-gold transition-all group-hover:w-20"/><p className="text-xs leading-6 text-white/60">{text}</p></div></article></MotionReveal>)}</div>
    </div>
  </section>;
}
