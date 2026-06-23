import { Crown, Gem, Mic2, MoonStar, Sparkles, Star } from "lucide-react";

export const SITE_URL = "https://blu-marrakech.vercel.app";
export const INSTAGRAM_URL = "https://www.instagram.com/blu.marrakech_/";
export const PHONE_PRIMARY = "0633333022";
export const PHONE_SECONDARY = "0707074972";
export const WHATSAPP_NUMBER = "212633333022";
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=BLU+Marrakech";
export const MAPS_EMBED_URL = "https://www.google.com/maps?q=BLU%20Marrakech%2C%20Marrakech%2C%20Morocco&z=16&output=embed";

export const navLinks = [
  { label: "Expérience", href: "#experience" },
  { label: "Programme", href: "#programme" },
  { label: "Galerie", href: "#galerie" },
  { label: "Artistes", href: "#artistes" },
  { label: "Contact", href: "#contact" },
];

export const experiences = [
  { icon: Mic2, number: "01", title: "Live Music", description: "Six voix live et une énergie qui habite chaque instant." },
  { icon: Sparkles, number: "02", title: "Cabaret Show", description: "Une mise en scène élégante, magnétique et contemporaine." },
  { icon: Crown, number: "03", title: "VIP Experience", description: "Tables privilégiées et service orchestré dans les moindres détails." },
  { icon: Star, number: "04", title: "Star Guest", description: "Chaque vendredi, une personnalité invitée signe la nuit." },
  { icon: Gem, number: "05", title: "Premium Nightlife", description: "Une adresse confidentielle pensée pour les nuits d'exception." },
  { icon: MoonStar, number: "06", title: "Marrakech Vibes", description: "L'âme de la ville ocre réinterprétée en bleu et or." },
];

export const weeklyProgram = [
  { day: "Lundi", short: "LU", title: "Late Night BLU", time: "23:30–05:00" },
  { day: "Mardi", short: "MA", title: "Live Music Night", time: "23:00–05:00" },
  { day: "Mercredi", short: "ME", title: "Cabaret Mood", time: "23:00–05:00" },
  { day: "Jeudi", short: "JE", title: "VIP Night", time: "23:00–05:00" },
  { day: "Vendredi", short: "VE", title: "Star Guest", time: "23:00–05:00", featured: true },
  { day: "Samedi", short: "SA", title: "Signature Show", time: "23:00–05:00" },
  { day: "Dimanche", short: "DI", title: "Marrakech Night", time: "23:00–05:00" },
];

export const gallery = [
  { category: "Shows", position: "70% center", size: "lg:col-span-2 lg:row-span-2" },
  { category: "Live Music", position: "82% 42%", size: "" },
  { category: "VIP", position: "30% 75%", size: "" },
  { category: "Star Guests", position: "62% 46%", size: "lg:col-span-2" },
  { category: "Ambiance", position: "42% 80%", size: "" },
];
