import { Reveal } from "@/components/motion/Reveal";
import { Stripes } from "@/components/ui/Decor";
import { BookingCta } from "./BookingCta";

const COVERAGE = [
  "Unde ești acum și ce ai încercat până acum.",
  "Ce obiectiv ai pentru următoarele 12 săptămâni.",
  "Ce te blochează și ce ar trebui să schimbi la antrenament și alimentație.",
  "Dacă Fit&Feminine este potrivit pentru tine.",
];

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-title"
      className="relative overflow-hidden bg-olive-900 py-24 sm:py-32"
    >
      <Stripes className="pointer-events-none absolute -right-28 -top-20 w-[24rem] text-olive-700" />
      <Stripes className="pointer-events-none absolute -left-32 -bottom-16 w-[22rem] rotate-180 text-olive-700" />

      <div className="relative z-10 mx-auto max-w-2xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
              Următorul pas
            </span>
            <h2
              id="final-title"
              className="mt-4 font-display text-[34px] leading-[1.05] text-cream-50 sm:text-[50px]"
            >
              Primul pas nu este să cumperi{" "}
              <span className="font-accent text-gold-400">programul</span>.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.6] text-cream-100/85 sm:text-[18px]">
              Este să vedem dacă Fit&amp;Feminine este potrivit pentru tine.
              Înainte să intri în program, te invit la o sesiune de consultanță
              1:1 cu Manuela.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mx-auto mt-10 max-w-xl space-y-3.5">
            {COVERAGE.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 text-[15px] leading-[1.55] text-cream-100/90 sm:text-base"
              >
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold-500"
                />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-10 text-center text-[15px] leading-[1.65] text-cream-100/80 sm:text-[17px]">
            La final vei avea o direcție mult mai clară. Dacă programul este
            potrivit pentru tine, îți voi explica exact cum poți intra. Dacă nu
            este potrivit,{" "}
            <span className="font-accent text-gold-400">
              îți voi spune sincer asta
            </span>
            .
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <BookingCta>Aplică pentru sesiunea gratuită</BookingCta>
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-cream-100/55 sm:text-[11px]">
              Sesiune gratuită · 1:1 cu Manuela · Fără presiune de vânzare
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
