import Image from "next/image";

export default function LogoMark({ size = 52, priority = false, className = "" }: { size?: number; priority?: boolean; className?: string }) {
  return (
    <span className={`relative block shrink-0 overflow-hidden rounded-full border border-gold/40 bg-[#001f22] shadow-[0_0_26px_rgba(214,179,106,.18)] ${className}`} style={{ width: size, height: size }}>
      <Image src="/images/blu-logo.jpg" alt="Logo officiel BLU Marrakech" fill priority={priority} className="scale-[1.03] object-cover" sizes={`${size}px`} />
      <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
    </span>
  );
}
