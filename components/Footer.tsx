import { Instagram } from "lucide-react";
import { INSTAGRAM_URL, navLinks, PHONE_PRIMARY } from "@/lib/constants";
import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020305] pt-20">
      <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 bg-electric/10 blur-[100px]" />
      <div className="site-container relative grid gap-12 pb-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div><div className="flex items-center gap-5"><LogoMark size={92} /><div><p className="font-display text-5xl tracking-[-.05em] text-white">BLU</p><p className="mt-1 text-[9px] uppercase tracking-[.34em] text-gold">Marrakech</p></div></div><p className="mt-6 max-w-sm text-sm font-light leading-7 text-white/40">Live Music <span className="text-gold">•</span> Cabaret <span className="text-gold">•</span> Shows<br />Une nuit signature au cœur de Marrakech.</p></div>
        <div><p className="mb-5 text-[9px] font-semibold uppercase tracking-[.24em] text-gold">Quick links</p><div className="grid gap-3">{navLinks.slice(1).map((link) => <a key={link.href} href={link.href} className="text-xs text-white/45 transition hover:text-white">{link.label}</a>)}</div></div>
        <div><p className="mb-5 text-[9px] font-semibold uppercase tracking-[.24em] text-gold">Stay connected</p><p className="text-xs text-white/45">Marrakech, Maroc</p><a href={`tel:+212633333022`} className="mt-3 block text-xs text-white/45 hover:text-white">{PHONE_PRIMARY}</a><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs text-white/60 hover:text-gold"><Instagram size={15} /> @blu.marrakech_</a></div>
      </div>
      <div className="border-t border-white/10"><div className="site-container flex flex-col gap-2 py-5 text-[8px] uppercase tracking-[.2em] text-white/25 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} BLU Marrakech. Tous droits réservés.</p><p>Live the night. Feel the BLU.</p></div></div>
    </footer>
  );
}
