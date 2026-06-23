"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
// Placeholder testimonials — replace with verified guest reviews.
const reviews=["Une ambiance exceptionnelle au cœur de Marrakech.","Live music, show et service premium.","L’adresse parfaite pour une soirée VIP."];
export default function Testimonials(){const[i,setI]=useState(0);useEffect(()=>{const id=setInterval(()=>setI(x=>(x+1)%reviews.length),5000);return()=>clearInterval(id)},[]);return <section className="border-y border-white/10 bg-[#071126] py-20"><div className="site-container text-center"><Quote className="mx-auto text-gold" size={26}/><div className="mx-auto mt-7 min-h-28 max-w-4xl"><AnimatePresence mode="wait"><motion.blockquote key={i} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-15}} className="font-display text-3xl italic text-white sm:text-5xl">“{reviews[i]}”</motion.blockquote></AnimatePresence></div><div className="mt-7 flex justify-center gap-2">{reviews.map((_,x)=><button key={x} onClick={()=>setI(x)} aria-label={`Voir le témoignage ${x+1}`} className={`h-px transition-all ${x===i?"w-10 bg-gold":"w-5 bg-white/25"}`}/>)}</div></div></section>}
