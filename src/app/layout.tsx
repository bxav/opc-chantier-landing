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
    default: "BrickNote - L'app iOS de pilotage de chantier",
    template: "%s | BrickNote",
  },
  description:
    "Pilotez vos chantiers BTP avec simplicité. Notes vocales, photos annotées, comptes-rendus IA et mode hors ligne. Bientôt sur l'App Store.",
  keywords: ["chantier", "BTP", "OPC", "gestion", "construction", "réunion", "assistant IA", "hors ligne", "iOS", "iPhone"],
  authors: [{ name: "BrickNote" }],
  creator: "BrickNote",
  publisher: "BrickNote",
  metadataBase: new URL("https://www.bricknote.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BrickNote - L'app iOS de pilotage de chantier",
    description:
      "Pilotez vos chantiers BTP avec simplicité. Notes vocales, photos annotées, comptes-rendus IA et mode hors ligne.",
    url: "https://www.bricknote.ai",
    siteName: "BrickNote",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrickNote - Pilotage de chantier sur iOS",
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
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none"
        >
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
