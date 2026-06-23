"use client";
import { useEffect, useState } from "react";
import { CalendarDays, Star } from "lucide-react";
import ReserveButton from "./ReserveButton";

function nextFriday() {
  const now = new Date(); const result = new Date(now);
  let add = (5 - now.getDay() + 7) % 7;
  if (add === 0 && (now.getHours() > 23 || (now.getHours() === 23 && now.getMinutes() >= 0))) add = 7;
  result.setDate(now.getDate() + add); result.setHours(23, 0, 0, 0); return result;
}
export default function StarGuest() {
  const [time, setTime] = useState({ d: "00", h: "00", m: "00", s: "00" });
  useEffect(() => { const tick = () => { const distance = Math.max(0, nextFriday().getTime() - Date.now()); setTime({ d: String(Math.floor(distance / 86400000)).padStart(2, "0"), h: String(Math.floor(distance / 3600000) % 24).padStart(2, "0"), m: String(Math.floor(distance / 60000) % 60).padStart(2, "0"), s: String(Math.floor(distance / 1000) % 60).padStart(2, "0") }); }; tick(); const id = setInterval(tick, 1000); return () => clearInterval(id); }, []);
  return <section className="relative overflow-hidden border-y border-gold/20 py-24 sm:py-32">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(23,107,255,.28),transparent_40%),linear-gradient(120deg,#030407_15%,#09142c_100%)]" />
    <div className="absolute -right-16 top-1/2 font-display text-[18rem] leading-none text-white/[.025] -translate-y-1/2">★</div>
    <div className="site-container relative grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
      <div><p className="eyebrow"><Star size={13} fill="currentColor" /> BLU Signature Night</p><h2 className="font-display text-5xl leading-[.92] sm:text-7xl lg:text-8xl">Every Friday:<br/><span className="italic text-gold">Star Guest.</span></h2><p className="mt-6 max-w-lg text-sm leading-7 text-white/55">Une présence exclusive. Une scène en effervescence. Le rendez-vous incontournable du vendredi à Marrakech.</p><ReserveButton className="btn-primary mt-8"><CalendarDays size={15} /> Réserver pour vendredi</ReserveButton></div>
      <div><p className="mb-4 text-[9px] uppercase tracking-[.25em] text-white/40">Prochaine nuit signature dans</p><div className="grid grid-cols-4 border border-white/10 bg-black/25 backdrop-blur-xl">{Object.entries(time).map(([label, value]) => <div key={label} className="border-r border-white/10 p-4 text-center last:border-0 sm:p-6"><strong className="block font-display text-3xl text-white sm:text-5xl">{value}</strong><span className="mt-2 block text-[7px] uppercase tracking-[.2em] text-gold">{{d:"jours",h:"heures",m:"min",s:"sec"}[label as "d"]}</span></div>)}</div></div>
    </div>
  </section>;
}
