import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "./_components/Hero";
import { PainPoints } from "./_components/PainPoints";
import { NeedStructure } from "./_components/NeedStructure";
import { WhatIsProgram } from "./_components/WhatIsProgram";
import { Results } from "./_components/Results";
import { CommonMistakes } from "./_components/CommonMistakes";
import { WhatYouGet } from "./_components/WhatYouGet";
import { ForWhom } from "./_components/ForWhom";
import { Differentiators } from "./_components/Differentiators";
import { LifeAfter } from "./_components/LifeAfter";
import { Guarantee } from "./_components/Guarantee";
import { FinalCTA } from "./_components/FinalCTA";

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
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <NeedStructure />
        <WhatIsProgram />
        <Results />
        <CommonMistakes />
        <WhatYouGet />
        <ForWhom />
        <Differentiators />
        <LifeAfter />
        <Guarantee />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
