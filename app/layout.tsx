import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://blumarrakech.com"),
  title: "BLU Marrakech | Cabaret, Live Music & Shows",
  description: "Découvrez BLU Marrakech, cabaret premium avec live music, shows, soirées VIP et star guests à Marrakech.",
  keywords: ["BLU Marrakech", "cabaret Marrakech", "live music Marrakech", "show Marrakech", "nightlife Marrakech", "VIP Marrakech"],
  openGraph: {
    title: "BLU Marrakech | Cabaret, Live Music & Shows",
    description: "Une nuit unique au cœur de Marrakech. Live music, cabaret, shows & VIP experiences.",
    type: "website",
    locale: "fr_MA",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "BLU Marrakech — Live Music, Cabaret & Shows" }],
  },
  icons: { icon: "/images/blu-logo.jpg", apple: "/images/blu-logo.jpg" },
};

export const viewport: Viewport = { themeColor: "#030407", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
