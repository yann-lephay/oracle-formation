import type { Metadata } from "next";
import { Urbanist, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-urbanist",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deplacement-pro.fr"),
  title: {
    template: "%s | DeplacementPro.fr",
    default: "DeplacementPro.fr — Comparateur de Solutions de Déplacement Professionnel 2026",
  },
  description:
    "Comparez les meilleures solutions de déplacement professionnel : TMC, cartes corporate, notes de frais. Prix, avis, fonctionnalités. Indépendant et gratuit.",
  keywords: [
    "déplacement professionnel",
    "TMC",
    "travel management",
    "carte corporate",
    "notes de frais",
    "voyage d'affaires",
    "gestion des dépenses",
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "DeplacementPro.fr",
    title: "DeplacementPro.fr — Comparateur de Solutions de Déplacement Professionnel 2026",
    description:
      "Comparez les meilleures solutions de déplacement professionnel : TMC, cartes corporate, notes de frais.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DeplacementPro.fr — Comparateur de Solutions de Déplacement Professionnel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeplacementPro.fr — Comparateur de Solutions de Déplacement Professionnel 2026",
    description:
      "Comparez les meilleures solutions de déplacement professionnel en France.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://deplacement-pro.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${urbanist.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
