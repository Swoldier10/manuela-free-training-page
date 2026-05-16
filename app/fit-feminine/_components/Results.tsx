import { Reveal } from "@/components/motion/Reveal";
import { Tally } from "@/components/ui/Decor";

const RESULTS = [
  "Reducere a grăsimii corporale.",
  "Scăderi vizibile în măsurători — talie, abdomen, șolduri și coapse.",
  "Fesieri, picioare și abdomen mai tonifiate și mai definite.",
  "Mai multă energie pe parcursul zilei.",
  "Alimentație organizată, fără înfometare și fără rețete complicate.",
  "O rutină pe care o poți continua și după program, fără efort uriaș.",
];

export function Results() {
  return (
    <section
      aria-labelledby="results-title"
      className="relative overflow-hidden bg-olive-950 py-20 sm:py-28"
    >
      <Tally className="pointer-events-none absolute right-8 top-12 hidden w-16 text-cream-50/15 md:block" />
      <Tally className="pointer-events-none absolute bottom-16 left-8 hidden w-14 -rotate-6 text-cream-50/15 md:block" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
            Rezultate în 12 săptămâni
          </span>
          <h2
            id="results-title"
            className="mt-4 font-display text-[30px] leading-[1.08] tracking-tight text-cream-50 sm:text-[42px]"
          >
            Ce poți urmări în{" "}
            <span className="text-glow-gold font-accent text-gold-400">
              12 săptămâni
            </span>
            .
          </h2>
          <p className="mt-6 text-[15px] leading-[1.65] text-cream-100/75 sm:text-[17px]">
            Rezultatele diferă în funcție de punctul de plecare, greutate, nivel
            de activitate și consecvență. Dar obiectivul programului este clar:
          </p>
        </Reveal>

        <ul className="mt-10 space-y-4 sm:mt-12">
          {RESULTS.map((r, i) => (
            <Reveal key={r} delay={i * 0.05}>
              <li className="flex items-start gap-4 border-b border-cream-50/10 pb-4 text-[16px] leading-[1.55] text-cream-100/90 sm:text-[18px]">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold-500"
                />
                <span>{r}</span>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.35}>
          <p className="mt-10 text-center font-accent text-[17px] italic leading-[1.55] text-gold-400 sm:text-[19px]">
            Nu îți promit că vei arăta ca altcineva. Îți promit un proces clar,
            ghidat și serios — în care, dacă faci ce trebuie, corpul tău are
            șanse reale să se schimbe.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
