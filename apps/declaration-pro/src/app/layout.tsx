import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://declaration-pro.fr"),
  title: {
    template: "%s | DeclarationPro.fr",
    default: "DeclarationPro.fr — Comparateur de Logiciels de Déclaration Professionnelle 2026",
  },
  description:
    "Comparez les meilleurs logiciels de déclaration professionnelle : DSN, TVA, liasse fiscale, URSSAF, bilan comptable. Prix, avis, fonctionnalités. Indépendant et gratuit.",
  keywords: [
    "déclaration professionnelle",
    "logiciel comptabilité",
    "DSN",
    "déclaration TVA",
    "liasse fiscale",
    "URSSAF",
    "bilan comptable",
    "logiciel déclaration",
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
    siteName: "DeclarationPro.fr",
    title: "DeclarationPro.fr — Comparateur de Logiciels de Déclaration Professionnelle 2026",
    description:
      "Comparez les meilleurs logiciels de déclaration professionnelle : DSN, TVA, liasse fiscale, URSSAF.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DeclarationPro.fr — Comparateur de Logiciels de Déclaration Professionnelle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeclarationPro.fr — Comparateur de Logiciels de Déclaration Professionnelle 2026",
    description:
      "Comparez les meilleurs logiciels de déclaration professionnelle en France.",
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
    canonical: "https://declaration-pro.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@600;700;800&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
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
