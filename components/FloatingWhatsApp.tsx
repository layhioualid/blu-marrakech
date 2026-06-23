import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const text = encodeURIComponent("Bonjour BLU Marrakech, je souhaite faire une réservation.");
  return <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`} target="_blank" rel="noreferrer" aria-label="Réserver sur WhatsApp" className="whatsapp-pulse fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full border border-blue-300/50 bg-electric text-white transition hover:scale-110 sm:bottom-7 sm:right-7"><MessageCircle size={23} fill="currentColor" strokeWidth={1.3} /></a>;
}
