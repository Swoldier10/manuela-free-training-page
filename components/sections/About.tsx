import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Tally } from "@/components/ui/Decor";

export function About() {
  return (
    <section
      id="despre"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-olive-900 py-20 sm:py-28"
    >
      <Tally className="pointer-events-none absolute right-10 top-12 hidden w-14 rotate-6 text-cream-50/15 md:block" />
      <Tally className="pointer-events-none absolute bottom-14 left-10 hidden w-16 -rotate-12 text-cream-50/15 md:block" />

      <div className="relative z-10 mx-auto grid max-w-5xl items-center gap-10 px-5 sm:px-8 md:grid-cols-[220px_1fr] md:gap-14 lg:grid-cols-[280px_1fr]">
        <Reveal>
          <div className="mx-auto aspect-square w-44 overflow-hidden rounded-full border border-cream-50/15 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:w-52 md:mx-0 md:w-full md:max-w-[280px]">
            <Image
              src="/images/manuela-portrait.jpg"
              alt="Manuela Vlașin"
              width={560}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="text-center md:text-left">
            <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
              Despre mine
            </span>
            <h2
              id="about-title"
              className="mt-4 font-display text-[28px] leading-[1.1] text-cream-50 sm:text-[40px]"
            >
              Sunt <span className="text-glow-gold font-accent text-gold-400">Manuela</span>.
            </h2>
            <div className="mx-auto mt-5 max-w-xl space-y-4 text-[16px] leading-[1.65] text-cream-100/85 sm:text-[17px] md:mx-0">
              <p>
                Ajut femeile să își construiască un corp{" "}
                <span className="font-semibold text-cream-50">
                  definit, feminin și puternic
                </span>
                .
              </p>
              <p>
                Am o bază solidă în{" "}
                <em className="not-italic text-gold-300">calisthenics</em>, unde
                controlul corpului este esențial. Acest lucru se reflectă în
                modul în care sunt construite antrenamentele mele: simple, dar
                extrem de eficiente.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
