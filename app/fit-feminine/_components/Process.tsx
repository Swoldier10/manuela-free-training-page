import { Reveal } from "@/components/motion/Reveal";
import { Stripes } from "@/components/ui/Decor";
import { MediaSlot } from "./MediaSlot";

const STEPS = [
  {
    number: "01",
    title: "Îmi spui unde ești",
    body: "Punctul tău de plecare, ce ai încercat și ce nu a funcționat.",
  },
  {
    number: "02",
    title: "Îți spun concret ce trebuie să schimbi",
    body: "Direcție clară pentru tine, indiferent dacă lucrăm împreună sau nu.",
  },
  {
    number: "03",
    title: "Decidem împreună",
    body: "Dacă programul e potrivit, îți explic cum intri. Dacă nu, îți spun sincer.",
  },
];

export function Process() {
  return (
    <section
      aria-labelledby="process-title"
      className="relative overflow-hidden bg-olive-900 py-20 sm:py-28"
    >
      <Stripes className="pointer-events-none absolute -right-24 -top-16 w-[22rem] text-olive-700" />
      <Stripes className="pointer-events-none absolute -left-28 -bottom-20 w-[20rem] rotate-180 text-olive-700" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
              Cum funcționează apelul
            </span>
            <h2
              id="process-title"
              className="mt-4 font-display text-[30px] leading-[1.08] tracking-tight text-cream-50 sm:text-[42px]"
            >
              20 de minute.{" "}
              <span className="text-glow-gold font-accent text-gold-400">
                Zero presiune.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 sm:mt-14 md:grid-cols-[1fr_280px] md:gap-12 lg:gap-16">
          <div className="flex flex-col gap-5 sm:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.number} delay={0.05 + i * 0.07}>
                <article className="grid gap-4 border border-cream-50/10 bg-olive-950/40 p-6 transition-colors hover:border-gold-500/50 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6 sm:p-7">
                  <span className="text-glow-gold font-display text-[44px] leading-none text-gold-400 sm:text-[56px]">
                    {s.number}
                  </span>
                  <div>
                    <h3 className="font-display text-[20px] leading-tight text-cream-50 sm:text-[24px]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.6] text-cream-100/80 sm:text-base">
                      {s.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.18}>
            <MediaSlot
              aspect="1 / 1"
              label="Manuela coaching"
              hint="public/images/fit-feminine/coaching.jpg"
              sizes="(min-width: 768px) 280px, 90vw"
              className="mx-auto w-full max-w-[280px] md:sticky md:top-24"
            />
          </Reveal>
        </div>

        <Reveal delay={0.32}>
          <p className="mt-12 text-center text-[16px] leading-[1.6] text-cream-100/85 sm:text-[18px]">
            Nu pleci cu nimic vândut. Pleci cu o{" "}
            <span className="font-accent text-gold-400">direcție clară</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
