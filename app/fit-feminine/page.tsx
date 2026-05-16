import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "./_components/Hero";
import { WhyItWorks } from "./_components/WhyItWorks";
import { ForWhom } from "./_components/ForWhom";
import { Process } from "./_components/Process";
import { FinalCTA } from "./_components/FinalCTA";
import { MobileCtaBar } from "./_components/MobileCtaBar";

export const metadata: Metadata = {
  title: "Fit&Feminine — Programul 1:1 de 12 săptămâni",
  description:
    "Sesiune gratuită 1:1 cu Manuela. Programul Fit&Feminine te ajută să slăbești, să îți tonifiezi corpul și să capeți încredere — fără sală, fără diete extreme.",
  alternates: { canonical: "/fit-feminine" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    title: "Fit&Feminine — Programul 1:1 de 12 săptămâni",
    description:
      "Programează o sesiune gratuită 1:1 cu Manuela și află ce trebuie să schimbi concret ca să începi să vezi rezultate reale.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fit&Feminine — Programul 1:1 de 12 săptămâni",
    description:
      "Programează o sesiune gratuită 1:1 cu Manuela și află ce trebuie să schimbi concret ca să începi să vezi rezultate reale.",
  },
};

export default function FitFemininePage() {
  return (
    <>
      <main className="flex-1 pb-24 md:pb-0">
        <Hero />
        <WhyItWorks />
        <ForWhom />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
