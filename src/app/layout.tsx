import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "OptiChantier - L'app iOS de pilotage de chantier",
    template: "%s | OptiChantier",
  },
  description:
    "Pilotez vos chantiers BTP avec simplicité. Notes vocales, photos annotées, comptes-rendus IA et mode hors ligne. Bientôt sur l'App Store.",
  keywords: ["chantier", "BTP", "OPC", "gestion", "construction", "réunion", "assistant IA", "hors ligne", "iOS", "iPhone"],
  authors: [{ name: "OptiChantier" }],
  creator: "OptiChantier",
  publisher: "OptiChantier",
  metadataBase: new URL("https://optichantier.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OptiChantier - L'app iOS de pilotage de chantier",
    description:
      "Pilotez vos chantiers BTP avec simplicité. Notes vocales, photos annotées, comptes-rendus IA et mode hors ligne.",
    url: "https://optichantier.fr",
    siteName: "OptiChantier",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OptiChantier - Pilotage de chantier sur iOS",
    description: "Notes vocales, photos annotées, assistant IA. Bientôt sur l'App Store.",
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
  verification: {
    // google: "your-google-verification-code",
  },
};

export const viewport = {
  themeColor: "#ea580c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
