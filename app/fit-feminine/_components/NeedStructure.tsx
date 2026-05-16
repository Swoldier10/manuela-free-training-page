import { Reveal } from "@/components/motion/Reveal";
import { Scribble, Tally } from "@/components/ui/Decor";

const PILLARS = [
  {
    number: "01",
    title: "Antrenamente",
    body: "Făcute constant și corect, gândite pentru corpul tău și pentru viața ta reală.",
  },
  {
    number: "02",
    title: "Alimentație",
    body: "Simplă, realistă și potrivită obiectivului tău — fără să te înfometezi.",
  },
  {
    number: "03",
    title: "Suport",
    body: "Ajustări și responsabilizare atunci când apare blocajul. Nu rămâi singură.",
  },
];

export function NeedStructure() {
  return (
    <section
      aria-labelledby="structure-title"
      className="relative overflow-hidden bg-olive-950 py-20 sm:py-28"
    >
      <Tally className="pointer-events-none absolute right-8 top-12 hidden w-16 text-cream-50/15 md:block" />
      <Tally className="pointer-events-none absolute bottom-16 left-8 hidden w-14 -rotate-6 text-cream-50/15 md:block" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="structure-title"
              className="font-display text-[30px] leading-[1.08] tracking-tight text-cream-50 sm:text-[44px]"
            >
              Nu ai nevoie de încă o dietă. Ai nevoie de{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="text-glow-gold font-accent text-gold-400">
                  structură
                </span>
                <Scribble
                  aria-hidden="true"
                  className="glow-gold-sm absolute -bottom-1 left-0 h-2.5 w-full text-gold-500 sm:-bottom-1.5 sm:h-3"
                />
              </span>
              .
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-cream-100/80 sm:text-[18px]">
              Majoritatea femeilor nu eșuează pentru că nu își doresc suficient.
              Eșuează pentru că încep cu metode care nu se potrivesc vieții lor
              reale: diete prea stricte, antrenamente haotice, fără feedback,
              fără ajustări și fără cineva care să le țină responsabile.
            </p>
            <p className="mt-4 text-[16px] leading-[1.7] text-cream-100/80 sm:text-[18px]">
              Ca să îți schimbi corpul, ai nevoie de trei lucruri.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3 md:gap-6">
          {PILLARS.map((p, i) => (
            <Reveal key={p.number} delay={0.05 + i * 0.07}>
              <article className="group relative flex h-full flex-col border border-cream-50/10 bg-olive-900/40 p-7 transition-colors hover:border-gold-500/50 sm:p-8">
                <span className="text-glow-gold font-display text-[40px] leading-none text-gold-400 sm:text-[56px]">
                  {p.number}
                </span>
                <h3 className="mt-6 font-display text-[22px] leading-tight text-cream-50 sm:text-[26px]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-cream-100/80 sm:text-base">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.35}>
          <p className="mt-12 text-center font-accent text-[18px] italic text-gold-400 sm:text-[20px]">
            Exact pentru asta a fost creat Fit&amp;Feminine.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
