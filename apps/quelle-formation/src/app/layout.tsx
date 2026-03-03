import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quelleformationpro.fr"),
  title: {
    template: "%s | QuelleFormation.fr",
    default: "QuelleFormation.fr — Comparateur de Formations Professionnelles 2026",
  },
  description:
    "Comparez les meilleures formations professionnelles en France. Prix, avis, CPF, organismes certifiés Qualiopi. Trouvez la formation qui vous correspond.",
  keywords: [
    "formation professionnelle",
    "comparateur formation",
    "formation CPF",
    "reconversion professionnelle",
    "bootcamp",
    "formation en ligne",
    "formation certifiante",
    "Qualiopi",
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
    siteName: "QuelleFormation.fr",
    title: "QuelleFormation.fr — Comparateur de Formations Professionnelles 2026",
    description:
      "Comparez les meilleures formations professionnelles en France. Prix, avis, CPF, organismes certifiés Qualiopi.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuelleFormation.fr — Comparateur de Formations Professionnelles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuelleFormation.fr — Comparateur de Formations Professionnelles 2026",
    description:
      "Comparez les meilleures formations professionnelles en France.",
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
    canonical: "https://quelleformationpro.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
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
