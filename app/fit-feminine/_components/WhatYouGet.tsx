import { Reveal } from "@/components/motion/Reveal";
import { Tally } from "@/components/ui/Decor";

const ITEMS = [
  {
    number: "01",
    title: "Plan de antrenament pentru 12 săptămâni",
    body: "Antrenamente structurate pentru acasă, gândite să îți lucreze corpul complet, cu accent pe abdomen, fesieri, picioare și postură. Clare, eficiente, ușor de integrat în programul tău.",
  },
  {
    number: "02",
    title: "Ghidare pentru alimentație simplă",
    body: "Fără mâncare scumpă, rețete complicate sau reguli absurde. Vei învăța cum să îți organizezi mesele ca să susții slăbirea și tonifierea — fără să simți că viața ta se învârte în jurul dietei.",
  },
  {
    number: "03",
    title: "Suport și ajustări pe parcurs",
    body: "Un plan bun nu înseamnă nimic dacă nu este ajustat atunci când apar probleme. Dacă stagnezi, nu știi ce să mănânci sau pierzi ritmul, primești direcție și corecții ca să revii pe traseu.",
  },
  {
    number: "04",
    title: "Check-in-uri și responsabilizare",
    body: "Una dintre cele mai mari diferențe dintre „încerc să slăbesc” și „chiar slăbesc” este responsabilizarea. Vei avea puncte clare de verificare, ca să vezi ce funcționează și ce trebuie schimbat.",
  },
  {
    number: "05",
    title: "Educație ca să nu depinzi mereu de altcineva",
    body: "Scopul nu este doar să urmezi un plan 12 săptămâni. Este să înțelegi ce faci, de ce faci și cum poți continua după program, fără să revii la vechile obiceiuri.",
  },
];

export function WhatYouGet() {
  return (
    <section
      aria-labelledby="get-title"
      className="relative overflow-hidden bg-olive-950 py-20 sm:py-28"
    >
      <Tally className="pointer-events-none absolute right-8 top-12 hidden w-16 text-cream-50/15 md:block" />
      <Tally className="pointer-events-none absolute bottom-16 left-8 hidden w-14 -rotate-6 text-cream-50/15 md:block" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
              Ce primești
            </span>
            <h2
              id="get-title"
              className="mt-4 font-display text-[30px] leading-[1.08] text-cream-50 sm:text-[42px]"
            >
              Ce primești în{" "}
              <span className="text-glow-gold font-accent text-gold-400">
                Fit&amp;Feminine
              </span>
              .
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 md:gap-6">
          {ITEMS.map((item, i) => (
            <Reveal
              key={item.number}
              delay={0.05 + i * 0.06}
              className={i === ITEMS.length - 1 ? "md:col-span-2" : undefined}
            >
              <article className="group relative flex h-full flex-col border border-cream-50/10 bg-olive-900/40 p-7 transition-colors hover:border-gold-500/50 sm:p-8">
                <div className="flex items-baseline justify-between">
                  <span className="text-glow-gold font-display text-[40px] leading-none text-gold-400 sm:text-[56px]">
                    {item.number}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[22px] leading-tight text-cream-50 sm:text-[26px]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-cream-100/80 sm:text-base">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
