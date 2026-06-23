"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import MotionReveal from "./MotionReveal";

type FormData = { name: string; phone: string; date: string; guests: string; type: string; message: string };
const initialForm: FormData = { name: "", phone: "", date: "", guests: "2", type: "Standard", message: "" };

export default function Reservation() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [error, setError] = useState("");

  const update = (field: keyof FormData, value: string) => setForm((prev) => ({ ...prev, [field]: value }));
  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.date || !form.guests) { setError("Veuillez renseigner les champs obligatoires."); return; }
    if (!/^[+\d\s()-]{8,}$/.test(form.phone)) { setError("Veuillez saisir un numéro de téléphone valide."); return; }
    setError("");
    const text = `Bonjour BLU Marrakech, je souhaite réserver une table.\nNom : ${form.name}\nTéléphone : ${form.phone}\nDate : ${form.date}\nNombre de personnes : ${form.guests}\nType : ${form.type}\nMessage : ${form.message || "—"}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  const fieldClass = "mt-2 h-12 w-full border-b border-white/15 bg-transparent px-0 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-gold";
  return (
    <section id="reservation" className="section-pad relative overflow-hidden bg-[#05070b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(23,107,255,.16),transparent_35%)]" />
      <div className="site-container relative grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
        <MotionReveal>
          <p className="eyebrow">Your table awaits</p><h2 className="display-title">Réservez<br /><span className="italic text-gold">l’inoubliable.</span></h2>
          <p className="mt-7 max-w-md text-sm font-light leading-7 text-white/50">Tell us how you imagine your night. Notre équipe vous répond directement sur WhatsApp pour confirmer chaque détail.</p>
          <div className="mt-10 space-y-4">
            {["Réponse rapide sur WhatsApp", "Tables Standard & VIP", "Confirmation personnalisée"].map((text) => <p key={text} className="flex items-center gap-3 text-xs text-white/60"><span className="grid h-6 w-6 place-items-center rounded-full border border-gold/30 text-gold"><Check size={12} /></span>{text}</p>)}
          </div>
        </MotionReveal>
        <MotionReveal delay={.1} className="glass p-6 shadow-glow sm:p-10 lg:p-12">
          <form onSubmit={submit} noValidate>
            <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
              <label className="text-[9px] font-semibold uppercase tracking-[.2em] text-white/45">Nom complet *<input className={fieldClass} value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Votre nom" autoComplete="name" /></label>
              <label className="text-[9px] font-semibold uppercase tracking-[.2em] text-white/45">Téléphone *<input className={fieldClass} value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="06 00 00 00 00" inputMode="tel" autoComplete="tel" /></label>
              <label className="text-[9px] font-semibold uppercase tracking-[.2em] text-white/45">Date *<input className={fieldClass} type="date" min={new Date().toISOString().split("T")[0]} value={form.date} onChange={(e) => update("date", e.target.value)} /></label>
              <label className="text-[9px] font-semibold uppercase tracking-[.2em] text-white/45">Nombre de personnes *<input className={fieldClass} type="number" min="1" max="30" value={form.guests} onChange={(e) => update("guests", e.target.value)} /></label>
              <label className="text-[9px] font-semibold uppercase tracking-[.2em] text-white/45">Type de table<select className={fieldClass} value={form.type} onChange={(e) => update("type", e.target.value)}><option className="bg-ink">Standard</option><option className="bg-ink">VIP</option></select></label>
              <label className="text-[9px] font-semibold uppercase tracking-[.2em] text-white/45">Message<input className={fieldClass} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Anniversaire, occasion..." /></label>
            </div>
            {error && <p role="alert" className="mt-6 border-l-2 border-red-400 pl-3 text-xs text-red-300">{error}</p>}
            <button className="btn-primary mt-9 w-full sm:w-auto" type="submit"><MessageCircle size={15} /> Envoyer sur WhatsApp <ArrowUpRight size={15} /></button>
            <p className="mt-4 text-[9px] leading-5 text-white/30">En envoyant ce formulaire, vous serez redirigé vers WhatsApp. Aucune donnée n’est stockée sur ce site.</p>
          </form>
        </MotionReveal>
      </div>
    </section>
  );
}
