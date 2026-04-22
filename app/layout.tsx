import type { Metadata, Viewport } from "next";
import { Caveat, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://manuelavlasin.ro";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Manuela Vlașin — 2 Antrenamente Gratuite pentru Abdomen și Fesieri",
    template: "%s · Manuela Vlașin",
  },
  description:
    "Abdomen mai plat și fesieri mai tonifiați în doar 15 minute, de acasă. 2 antrenamente gratuite, fără echipament, simple și eficiente.",
  keywords: [
    "antrenamente gratuite",
    "abdomen plat",
    "fesieri tonifiați",
    "fitness acasă",
    "antrenament fără echipament",
    "Manuela Vlașin",
    "calisthenics femei",
  ],
  authors: [{ name: "Manuela Vlașin" }],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: SITE_URL,
    siteName: "Manuela Vlașin",
    title:
      "Abdomen mai plat și fesieri mai tonifiați în 15 minute — gratuit",
    description:
      "2 antrenamente gratuite, fără echipament. Simple, eficiente, făcute pentru femei care vor rezultate reale.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Abdomen mai plat și fesieri mai tonifiați în 15 minute — gratuit",
    description:
      "2 antrenamente gratuite, fără echipament. Simple, eficiente, făcute pentru femei care vor rezultate reale.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ro"
      className={`${inter.variable} ${playfair.variable} ${caveat.variable} antialiased`}
    >
      <body className="min-h-screen bg-olive-950 text-cream-50 flex flex-col">
        {children}
      </body>
    </html>
  );
}
