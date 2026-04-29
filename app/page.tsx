import { SocialProofBanner } from "@/components/sections/SocialProofBanner";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { Differentiator } from "@/components/sections/Differentiator";
import { MidCTA } from "@/components/sections/MidCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <SocialProofBanner />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <WhatYouGet />
        <Differentiator />
        <MidCTA />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
