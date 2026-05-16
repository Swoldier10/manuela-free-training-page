import { Reveal } from "@/components/motion/Reveal";
import { Stripes } from "@/components/ui/Decor";

const PILLS = ["12 săptămâni", "1:1 cu Manuela", "Acasă, fără sală"];

export function WhatIsProgram() {
  return (
    <section
      aria-labelledby="what-is-title"
      className="relative overflow-hidden bg-olive-900 py-20 sm:py-28"
    >
      <Stripes className="pointer-events-none absolute -right-28 top-10 w-[22rem] text-olive-700" />
      <Stripes className="pointer-events-none absolute -left-32 -bottom-16 w-[24rem] rotate-180 text-olive-700" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
            Ce este Fit&amp;Feminine
          </span>
          <h2
            id="what-is-title"
            className="mt-4 font-display text-[30px] leading-[1.08] tracking-tight text-cream-50 sm:text-[42px]"
          >
            Un proces ghidat de{" "}
            <span className="text-glow-gold font-accent text-gold-400">
              transformare
            </span>
            , nu un simplu PDF.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 text-[16px] leading-[1.75] text-cream-100/85 sm:text-[18px]">
            Fit&amp;Feminine este un program de transformare de 12 săptămâni
            creat pentru femeile care vor să reducă grăsimea corporală, să își
            tonifieze corpul și să capete mai multă încredere în felul în care
            arată. Nu este o listă de exerciții. Nu este o dietă restrictivă.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-4 text-[16px] leading-[1.75] text-cream-100/85 sm:text-[18px]">
            Este un proces în care lucrezi împreună cu Manuela pentru a avea
            claritate, direcție și susținere pe tot parcursul transformării.
            Scopul: să slăbești vizibil, să îți definești abdomenul, fesierii și
            picioarele și să îți construiești un corp feminin, atletic și
            puternic — prin antrenamente pe care le poți face de acasă și
            printr-o alimentație pe care o poți susține în viața reală.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-wrap gap-2.5 sm:gap-3">
            {PILLS.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-2 border border-gold-500/40 bg-olive-950/60 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-gold-400 sm:text-[11px]"
              >
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-gold-500"
                />
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
