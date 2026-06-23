import { Crown, Gem, Mic2, MoonStar, Sparkles, Star } from "lucide-react";

export const SITE_URL = "https://blu-marrakech.vercel.app";
export const INSTAGRAM_URL = "https://www.instagram.com/blu.marrakech_/";
export const PHONE_PRIMARY = "0633333022";
export const PHONE_SECONDARY = "0707074972";
export const WHATSAPP_NUMBER = "212633333022";
export const MAPS_URL = "https://www.google.com/maps?q=BLU+MARRAKECH,+Adam+park+hotel,+Marrakesh+40000&ftid=0xdafefa866d5a395:0x15b3e8e41ce7e02e&entry=gps&shh=CAE&lucs=,94297699,94284475,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI2LjA2LjIuODY0NDM1MTkzMBgAINeCAypILDk0Mjk3Njk5LDk0Mjg0NDc1LDk0MjMxMTg4LDk0MjgwNTY4LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDk0Mjg2ODY5QgJNQQ%3D%3D&skid=b48b2ee6-4ee8-497c-8002-4b8951c5d598&g_st=ic";
export const MAPS_EMBED_URL = "https://www.google.com/maps?q=BLU%20MARRAKECH%2C%20Adam%20Park%20Hotel%2C%20Marrakesh%2040000&z=17&output=embed";

export const navLinks = [
  { label: "Expérience", href: "#experience" },
  { label: "Programme", href: "#programme" },
  { label: "Galerie", href: "#galerie" },
  { label: "Artistes", href: "#artistes" },
  { label: "Contact", href: "#contact" },
];

export const experiences = [
  { icon: Mic2, number: "01", title: "Live Music", image: "/images/stock/live-vocal.jpg", description: "Six voix live et une énergie qui habite chaque instant." },
  { icon: Sparkles, number: "02", title: "Cabaret Show", image: "/images/stock/cabaret-stage.jpg", description: "Une mise en scène élégante, magnétique et contemporaine." },
  { icon: Crown, number: "03", title: "VIP Experience", image: "/images/stock/luxury-lounge.jpg", description: "Tables privilégiées et service orchestré dans les moindres détails." },
  { icon: Star, number: "04", title: "Star Guest", image: "/images/stock/singer-portrait.jpg", description: "Chaque vendredi, une personnalité invitée signe la nuit." },
  { icon: Gem, number: "05", title: "Premium Nightlife", image: "/images/stock/night-crowd.jpg", description: "Une adresse confidentielle pensée pour les nuits d'exception." },
  { icon: MoonStar, number: "06", title: "Marrakech Vibes", image: "/images/stock/neon-stage.jpg", description: "L'âme de la ville ocre réinterprétée en bleu et or." },
];

export const weeklyProgram = [
  { day: "Lundi", short: "LU", title: "Late Night BLU", time: "23:30–05:00", image: "/images/stock/stage-performance.jpg" },
  { day: "Mardi", short: "MA", title: "Live Music Night", time: "23:00–05:00", image: "/images/stock/concert-stage.jpg" },
  { day: "Mercredi", short: "ME", title: "Cabaret Mood", time: "23:00–05:00", image: "/images/stock/festival-lights.jpg" },
  { day: "Jeudi", short: "JE", title: "VIP Night", time: "23:00–05:00", image: "/images/stock/live-show.jpg" },
  { day: "Vendredi", short: "VE", title: "Star Guest", time: "23:00–05:00", image: "/images/stock/artist-stage.jpg", featured: true },
  { day: "Samedi", short: "SA", title: "Signature Show", time: "23:00–05:00", image: "/images/stock/festival-stage.jpg" },
  { day: "Dimanche", short: "DI", title: "Marrakech Night", time: "23:00–05:00", image: "/images/stock/concert-crowd.jpg" },
];

export const gallery = [
  { category: "Shows", image: "/images/card-cabaret.png", position: "center 34%", size: "lg:col-span-2 lg:row-span-2" },
  { category: "Live Music", image: "/images/card-live-singer.png", position: "center 25%", size: "" },
  { category: "VIP", image: "/images/card-vip.png", position: "center 60%", size: "" },
  { category: "Star Guests", image: "/images/card-dj.png", position: "center 38%", size: "lg:col-span-2" },
  { category: "Ambiance", image: "/images/blu-hero-cinematic.png", position: "72% center", size: "" },
];
