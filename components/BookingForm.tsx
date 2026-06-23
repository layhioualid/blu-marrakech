"use client";
import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

type Fields = { name: string; phone: string; date: string; time: string; guests: string; type: string; message: string };
const initial: Fields = { name: "", phone: "", date: "", time: "23:00", guests: "2", type: "Standard", message: "" };

export default function BookingForm({ compact = false, onSuccess }: { compact?: boolean; onSuccess?: () => void }) {
  const [form, setForm] = useState(initial);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const update = (key: keyof Fields, value: string) => setForm((old) => ({ ...old, [key]: value }));
  const minDate = new Date().toLocaleDateString("en-CA", { timeZone: "Africa/Casablanca" });

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!form.name.trim() || !/^[+\d\s()-]{8,}$/.test(form.phone) || !form.date || !form.time || Number(form.guests) < 1) {
      setError("Merci de compléter les champs obligatoires avec des informations valides.");
      return;
    }
    setError(""); setSent(true);
    const text = `Bonjour BLU Marrakech, je souhaite réserver une table.\n\nNom : ${form.name}\nTéléphone : ${form.phone}\nDate : ${form.date}\nHeure : ${form.time}\nPersonnes : ${form.guests}\nExpérience : ${form.type}\nMessage : ${form.message || "—"}`;
    window.setTimeout(() => {
      onSuccess?.();
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
      setSent(false);
    }, 650);
  };
  const field = "field";
  return <form onSubmit={submit} noValidate className={`min-w-0 max-w-full ${compact ? "" : "glass overflow-hidden p-5 sm:p-10"}`}>
    <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-5 sm:grid-cols-2">
      <label className="form-label">Nom complet *<input className={field} value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" placeholder="Votre nom" /></label>
      <label className="form-label">Téléphone *<input className={field} value={form.phone} onChange={(e) => update("phone", e.target.value)} inputMode="tel" autoComplete="tel" placeholder="06 00 00 00 00" /></label>
      <label className="form-label">Date *<input className={field} type="date" min={minDate} value={form.date} onChange={(e) => update("date", e.target.value)} /></label>
      <label className="form-label">Heure *<input className={field} type="time" value={form.time} onChange={(e) => update("time", e.target.value)} /></label>
      <label className="form-label">Nombre de personnes *<input className={field} type="number" min="1" max="30" value={form.guests} onChange={(e) => update("guests", e.target.value)} /></label>
      <label className="form-label">Type<select className={field} value={form.type} onChange={(e) => update("type", e.target.value)}>{["Standard", "VIP", "Birthday", "Private Table"].map((x) => <option className="bg-ink" key={x}>{x}</option>)}</select></label>
      <label className="form-label sm:col-span-2">Message<textarea className="field min-h-20 resize-none py-3" value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Anniversaire, occasion, demande particulière…" /></label>
    </div>
    {error && <p role="alert" className="mt-5 border-l-2 border-red-400 pl-3 text-xs text-red-300">{error}</p>}
    <button className="btn-primary mt-6 w-full" type="submit" disabled={sent}>{sent ? <><Check size={16} /> Préparation de WhatsApp…</> : <><MessageCircle size={16} /> Envoyer sur WhatsApp <ArrowUpRight size={14} /></>}</button>
    <p className="mt-3 text-[9px] leading-5 text-white/30">Aucune donnée n'est stockée. La demande est envoyée directement via WhatsApp.</p>
  </form>;
}
