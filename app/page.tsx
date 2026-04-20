import { SocialProofBanner } from "@/components/sections/SocialProofBanner";
import { Hero } from "@/components/sections/Hero";
import { VideoSection } from "@/components/sections/VideoSection";
import { Benefits } from "@/components/sections/Benefits";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { Differentiator } from "@/components/sections/Differentiator";
import { MidCTA } from "@/components/sections/MidCTA";
import { About } from "@/components/sections/About";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <SocialProofBanner />
      <main className="flex-1">
        <Hero />
        <VideoSection />
        <Benefits />
        <WhatYouGet />
        <Differentiator />
        <MidCTA />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
