import { Clock3, ExternalLink, Instagram, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { INSTAGRAM_URL, MAPS_EMBED_URL, MAPS_URL, PHONE_PRIMARY, PHONE_SECONDARY, WHATSAPP_NUMBER } from "@/lib/constants";
import MotionReveal from "./MotionReveal";

const cards = [
  { icon: Phone, label: "Téléphone", value: `${PHONE_PRIMARY} · ${PHONE_SECONDARY}`, href: "tel:+212633333022" },
  { icon: MessageCircle, label: "WhatsApp", value: "Réserver une table", href: `https://wa.me/${WHATSAPP_NUMBER}` },
  { icon: Instagram, label: "Instagram", value: "@blu.marrakech_", href: INSTAGRAM_URL },
  { icon: MapPin, label: "Localisation", value: "Marrakech, Morocco", href: MAPS_URL },
  { icon: Clock3, label: "Horaires", value: "Tous les soirs · 23:00–05:00", href: "#programme" },
];

export default function Contact() {
  return <section id="contact" className="section-pad bg-ink">
    <div className="site-container">
      <MotionReveal><p className="eyebrow">Find your way to BLU</p><h2 className="display-title">Meet us in<br/><span className="italic text-gold">Marrakech.</span></h2></MotionReveal>
      <div className="mt-12 grid border border-white/10 lg:grid-cols-[1.1fr_.9fr]">
        <MotionReveal className="group relative min-h-[430px] overflow-hidden bg-[#071126]">
          <iframe src={MAPS_EMBED_URL} title="Carte de BLU Marrakech" className="absolute inset-0 h-full w-full border-0 grayscale-[45%] contrast-[1.08] saturate-[.7] transition duration-700 group-hover:grayscale-0 group-hover:saturate-100" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-electric/10" />
          <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-3 border border-white/10 bg-ink/85 px-4 py-3 backdrop-blur-xl sm:left-7 sm:top-7">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/50 text-gold"><MapPin size={16}/></span>
            <span><span className="block font-display text-lg">BLU Marrakech</span><span className="block text-[7px] uppercase tracking-[.22em] text-white/45">Marrakech · Morocco</span></span>
          </div>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn-primary absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-auto"><Navigation size={15}/> Obtenir l’itinéraire <ExternalLink size={13}/></a>
        </MotionReveal>
        <div className="divide-y divide-white/10">{cards.map(({icon:Icon,label,value,href}) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-center gap-5 p-6 transition hover:bg-white/[.04] sm:px-9"><span className="grid h-11 w-11 place-items-center border border-white/10 text-gold transition group-hover:border-electric"><Icon size={18}/></span><span><span className="block text-[8px] uppercase tracking-[.22em] text-white/30">{label}</span><span className="mt-1 block text-sm text-white/70">{value}</span></span></a>)}</div>
      </div>
    </div>
  </section>;
}
