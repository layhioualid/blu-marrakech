import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import { events } from "@/lib/constants";
import MotionReveal from "./MotionReveal";

export default function Events() {
  return (
    <section id="events" className="section-pad bg-ink">
      <div className="site-container">
        <MotionReveal className="mb-14 text-center"><p className="eyebrow justify-center before:hidden"><CalendarDays size={14} /> Upcoming Nights</p><h2 className="display-title">Own the <span className="italic text-gold">night.</span></h2><p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/45">Marrakech comes alive. Choose your night, reserve your table, and let the show begin.</p></MotionReveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {events.map((event, index) => <MotionReveal key={event.title} delay={index * .1}>
            <article className={`group relative min-h-[510px] overflow-hidden border transition-all duration-700 hover:-translate-y-2 hover:border-electric/70 hover:shadow-glow ${index === 0 ? "border-gold/50 shadow-gold" : "border-white/10"}`}>
              <Image src={event.image} alt={event.title} fill className="object-cover transition duration-1000 group-hover:scale-105" sizes="(max-width: 1024px) 90vw, 31vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(23,107,255,.24),transparent_38%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              {index === 0 && <span className="absolute right-0 top-0 bg-gold px-4 py-2 text-[8px] font-bold uppercase tracking-[.24em] text-ink">Featured</span>}
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <div className="mb-6 flex items-center gap-3"><span className="font-display text-5xl text-gold">{event.day}</span><span className="h-8 w-px bg-white/20" /><span className="text-[9px] uppercase tracking-[.22em] text-white/55">{event.label}</span></div>
                <p className="mb-3 text-[9px] uppercase tracking-[.22em] text-electric-200 text-blue-300">{event.tag}</p>
                <h3 className="font-display text-4xl text-white">{event.title}</h3>
                <a href="#reservation" className="mt-7 inline-flex items-center gap-3 border-b border-gold/60 pb-2 text-[9px] font-bold uppercase tracking-[.24em] text-white transition hover:gap-5 hover:text-gold">Réserver cette nuit <ArrowRight size={14} /></a>
              </div>
            </article>
          </MotionReveal>)}
        </div>
      </div>
    </section>
  );
}
