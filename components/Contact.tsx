import { ExternalLink, Instagram, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { INSTAGRAM_URL, MAPS_EMBED_URL, MAPS_URL, PHONE_PRIMARY, PHONE_SECONDARY, WHATSAPP_NUMBER } from "@/lib/constants";
import MotionReveal from "./MotionReveal";

export default function Contact() {
  const actions = [
    { icon: Phone, label: "Appeler", value: PHONE_PRIMARY, href: `tel:+212633333022` },
    { icon: MessageCircle, label: "WhatsApp", value: "Réserver une table", href: `https://wa.me/${WHATSAPP_NUMBER}` },
    { icon: Instagram, label: "Instagram", value: "@blu.marrakech_", href: INSTAGRAM_URL },
  ];
  return (
    <section id="contact" className="section-pad bg-ink">
      <div className="site-container">
        <MotionReveal className="mb-12"><p className="eyebrow">Find your way to BLU</p><h2 className="display-title">Meet us in <span className="italic text-gold">Marrakech.</span></h2></MotionReveal>
        <div className="grid border border-white/10 lg:grid-cols-[1.15fr_.85fr]">
          <MotionReveal className="group relative min-h-[460px] overflow-hidden bg-[#071126]" delay={.08}>
            <iframe
              src={MAPS_EMBED_URL}
              title="Localisation de BLU Marrakech sur Google Maps"
              className="absolute inset-0 h-full w-full border-0 grayscale-[35%] contrast-[1.08] saturate-[.8] transition duration-700 group-hover:grayscale-0 group-hover:saturate-100"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-electric/10" />
            <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-3 border border-white/10 bg-ink/85 px-4 py-3 backdrop-blur-xl sm:left-7 sm:top-7">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/50 text-gold"><MapPin size={16} /></span>
              <span><span className="block font-display text-lg text-white">BLU Marrakech</span><span className="block text-[7px] uppercase tracking-[.22em] text-white/45">Marrakech · Maroc</span></span>
            </div>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn-primary pointer-events-auto absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-auto">
              <Navigation size={15} /> Obtenir l’itinéraire <ExternalLink size={13} />
            </a>
          </MotionReveal>
          <div className="divide-y divide-white/10">
            <div className="p-8 sm:p-10"><p className="text-[9px] uppercase tracking-[.24em] text-gold">Contact & Reservations</p><p className="mt-5 font-display text-3xl">{PHONE_PRIMARY}</p><p className="mt-2 font-display text-xl text-white/45">{PHONE_SECONDARY}</p></div>
            {actions.map(({ icon: Icon, label, value, href }) => <a key={label} href={href} target={label === "Appeler" ? undefined : "_blank"} rel="noreferrer" className="group flex items-center gap-5 p-6 transition hover:bg-white/[.04] sm:px-10"><span className="grid h-11 w-11 place-items-center border border-white/10 text-gold transition group-hover:border-electric group-hover:text-white"><Icon size={18} /></span><span><span className="block text-[8px] uppercase tracking-[.22em] text-white/30">{label}</span><span className="mt-1 block text-sm text-white/75">{value}</span></span></a>)}
          </div>
        </div>
      </div>
    </section>
  );
}
