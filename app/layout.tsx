import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://blu-marrakech.vercel.app"),
  title: "BLU Marrakech | Cabaret, Live Music, Shows & VIP Nights",
  description: "Découvrez BLU Marrakech, cabaret premium à Marrakech avec live music, shows, soirées VIP, star guests et expérience nightlife haut de gamme.",
  keywords: ["BLU Marrakech", "cabaret Marrakech", "live music Marrakech", "show Marrakech", "VIP Marrakech", "nightlife Marrakech", "club Marrakech", "soirée Marrakech"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "BLU Marrakech | Cabaret, Live Music, Shows & VIP Nights",
    description: "6 voix, une ambiance. Vivez une nuit unique au cœur de Marrakech.",
    url: "/",
    siteName: "BLU Marrakech",
    type: "website",
    locale: "fr_MA",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "BLU Marrakech — Live Music, Cabaret & Shows" }],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/blu-logo.jpg", apple: "/images/blu-logo.jpg" },
};

export const viewport: Viewport = { themeColor: "#030407", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
