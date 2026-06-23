"use client";
import { Clock3 } from "lucide-react";
import { useEffect, useState } from "react";
import { weeklyProgram } from "@/lib/constants";
import MotionReveal from "./MotionReveal";
import ReserveButton from "./ReserveButton";

export default function ProgramHours() {
  const [today, setToday] = useState(-1);
  const [status, setStatus] = useState("Ouvert ce soir");
  useEffect(() => {
    const parts = new Intl.DateTimeFormat("en-US", { timeZone: "Africa/Casablanca", weekday: "short", hour: "2-digit", hour12: false, minute: "2-digit" }).formatToParts(new Date());
    const dayName = parts.find((p) => p.type === "weekday")?.value;
    const hour = Number(parts.find((p) => p.type === "hour")?.value || 0);
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(dayName || "");
    const index = day === 0 ? 6 : day - 1; setToday(index);
    const opening = index === 0 ? "23:30" : "23:00";
    setStatus(hour < 5 ? "Ouvert maintenant · jusqu'à 05:00" : `Ouverture ce soir à ${opening}`);
  }, []);
  return <section id="programme" className="section-pad bg-[#05070c]">
    <div className="site-container">
      <MotionReveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="eyebrow">7 nuits · 7 atmosphères</p><h2 className="display-title">Votre semaine<br/><span className="italic text-gold">en BLU.</span></h2></div><div className="glass flex items-center gap-4 px-5 py-4"><span className="relative flex h-3 w-3"><i className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50"/><i className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400"/></span><div><p className="text-[8px] uppercase tracking-[.2em] text-white/35">Statut ce soir</p><p className="mt-1 text-sm text-white">{status}</p></div></div></MotionReveal>
      <div className="mt-12 grid gap-2 md:grid-cols-2 lg:grid-cols-7">{weeklyProgram.map((event, i) => <MotionReveal key={event.day} delay={i * .04}><article className={`group flex min-h-52 flex-col border p-5 transition duration-500 hover:-translate-y-1 ${event.featured ? "border-gold/60 bg-gold/[.07] shadow-gold" : i === today ? "border-electric bg-electric/10 shadow-glow" : "border-white/10 bg-white/[.025] hover:border-electric/50"}`}><div className="flex items-start justify-between"><span className="font-display text-3xl text-white/25">{event.short}</span>{event.featured && <span className="text-gold">★</span>}</div><div className="mt-auto"><p className="text-[8px] uppercase tracking-[.2em] text-gold">{event.day}</p><h3 className="mt-2 font-display text-xl leading-tight">{event.title}</h3><p className="mt-3 flex items-center gap-2 text-[9px] text-white/40"><Clock3 size={11}/>{event.time}</p></div></article></MotionReveal>)}</div>
      <div className="mt-8 flex justify-center"><ReserveButton>Choisir ma nuit</ReserveButton></div>
    </div>
  </section>;
}
