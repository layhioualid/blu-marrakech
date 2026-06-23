"use client";
import type { ReactNode } from "react";

export default function ReserveButton({ children, className = "btn-primary" }: { children: ReactNode; className?: string }) {
  return <button type="button" className={className} onClick={() => window.dispatchEvent(new Event("open-blu-reservation"))}>{children}</button>;
}
