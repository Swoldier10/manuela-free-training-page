import { Reveal } from "@/components/motion/Reveal";
import { Stripes } from "@/components/ui/Decor";
import { BookingCta } from "./BookingCta";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-title"
      className="relative overflow-hidden bg-olive-950 py-24 sm:py-32"
    >
      <Stripes className="pointer-events-none absolute -right-28 -top-20 w-[24rem] text-olive-800" />
      <Stripes className="pointer-events-none absolute -left-32 -bottom-16 w-[22rem] rotate-180 text-olive-800" />

      <div className="relative z-10 mx-auto max-w-2xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
            Următorul pas
          </span>
          <h2
            id="final-title"
            className="mt-4 font-display text-[34px] leading-[1.05] text-cream-50 sm:text-[50px]"
          >
            20 de minute care îți pot schimba{" "}
            <span className="font-accent text-gold-400">12 săptămâni</span>.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.6] text-cream-100/85 sm:text-[18px]">
            Dacă ai încercat destul singură, e momentul pentru un plan adaptat
            ție.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <BookingCta>Aplică pentru sesiunea gratuită</BookingCta>
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-cream-100/55 sm:text-[11px]">
              Sesiune gratuită · 1:1 cu Manuela · Răspund în 24h
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
