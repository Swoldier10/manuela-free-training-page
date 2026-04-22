import { SocialProofBanner } from "@/components/sections/SocialProofBanner";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <SocialProofBanner />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
