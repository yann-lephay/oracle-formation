import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://quelle-formation.fr"),
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "QuelleFormation.fr",
    title: "QuelleFormation.fr — Comparateur de Formations Professionnelles 2026",
    description:
      "Comparez les meilleures formations professionnelles en France. Prix, avis, CPF, organismes certifiés Qualiopi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuelleFormation.fr — Comparateur de Formations Professionnelles 2026",
    description:
      "Comparez les meilleures formations professionnelles en France.",
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
    canonical: "https://quelle-formation.fr",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
