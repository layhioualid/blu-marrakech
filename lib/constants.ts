import { Crown, Mic2, Sparkles, Star } from "lucide-react";

export const INSTAGRAM_URL = "https://www.instagram.com/blu.marrakech_/";
export const PHONE_PRIMARY = "0633333022";
export const PHONE_SECONDARY = "0707074972";
export const WHATSAPP_NUMBER = "212633333022";
export const MAPS_URL = "https://maps.app.goo.gl/WDt7h3vKzw35JHjU7";
export const MAPS_EMBED_URL = "https://www.google.com/maps?q=BLU%20MARRAKECH%2C%2031.5967414%2C-7.9884732&z=17&output=embed";

export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Expérience", href: "#experience" },
  { label: "Events", href: "#events" },
  { label: "Galerie", href: "#galerie" },
  { label: "Réservation", href: "#reservation" },
  { label: "Contact", href: "#contact" },
];

export const experiences = [
  { icon: Mic2, number: "01", title: "Live Music", description: "Six voix, une énergie live et des performances qui transforment chaque dîner en souvenir." },
  { icon: Sparkles, number: "02", title: "Cabaret Show", description: "Une mise en scène magnétique, entre élégance contemporaine et frisson du cabaret." },
  { icon: Crown, number: "03", title: "VIP Experience", description: "Tables privilégiées, service attentionné et une nuit orchestrée jusque dans les détails." },
  { icon: Star, number: "04", title: "Star Guest", description: "Every Friday, une personnalité invitée donne à Marrakech un nouveau rendez-vous signature." },
];

export const events = [
  { day: "FRI", label: "Every Friday", title: "Friday Star Guest", tag: "Signature Night", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=85" },
  { day: "SAT", label: "Saturday", title: "Live Music Night", tag: "Six Voices Live", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85" },
  { day: "SUN", label: "Sunday", title: "Cabaret Show", tag: "Dinner & Show", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1600&q=85" },
];

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?auto=format&fit=crop&w=1400&q=85", alt: "Ambiance nocturne bleue en club", className: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=1000&q=85", alt: "Artiste sur scène sous les projecteurs", className: "" },
  { src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1000&q=85", alt: "Bar lounge premium", className: "" },
  { src: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=1000&q=85", alt: "Concert live et public", className: "" },
  { src: "https://images.unsplash.com/photo-1570872626485-d8ffea69f463?auto=format&fit=crop&w=1000&q=85", alt: "Lumières de scène cabaret", className: "" },
];

export const instagramImages = [
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1571266028243-d220c9c3b2d2?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
];
