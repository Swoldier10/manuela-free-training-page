import { Reveal } from "@/components/motion/Reveal";
import { Stripes } from "@/components/ui/Decor";

const MISTAKES = [
  {
    number: "01",
    title: "Crezi că trebuie să mănânci foarte puțin ca să slăbești",
    body: "Restricția extremă funcționează câteva zile. Apoi apare foamea, oboseala, pofta de dulce și senzația că „nu mai poți”. În Fit&Feminine nu te învăț să te înfometezi — te învăț să mănânci simplu, echilibrat și suficient de bine încât să poți susține procesul.",
  },
  {
    number: "02",
    title: "Alegi exerciții random pentru abdomen, fesieri sau picioare",
    body: "Trei exerciții salvate de pe Instagram nu sunt un program. Ca să vezi rezultate, ai nevoie de progres, structură și execuție corectă. Corpul tău trebuie stimulat inteligent, nu obosit haotic.",
  },
  {
    number: "03",
    title: "Încerci să faci totul singură",
    body: "Când nu ai feedback, nu știi dacă faci bine. Când nu ai direcție, schimbi metoda prea repede. Când nu ai susținere, renunți exact când ar trebui să continui. De aceea, în Fit&Feminine nu primești doar antrenamente — primești ghidare.",
  },
];

export function CommonMistakes() {
  return (
    <section
      aria-labelledby="mistakes-title"
      className="relative overflow-hidden bg-olive-900 py-20 sm:py-28"
    >
      <Stripes className="pointer-events-none absolute -right-24 -top-16 w-[22rem] text-olive-700" />
      <Stripes className="pointer-events-none absolute -left-28 -bottom-20 w-[20rem] rotate-180 text-olive-700" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
            Greșeli frecvente
          </span>
          <h2
            id="mistakes-title"
            className="mt-4 font-display text-[30px] leading-[1.08] tracking-tight text-cream-50 sm:text-[42px]"
          >
            Cele 3 lucruri care te țin{" "}
            <span className="text-glow-gold font-accent text-gold-400">
              blocată
            </span>
            .
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-5 sm:mt-14 sm:gap-6">
          {MISTAKES.map((m, i) => (
            <Reveal key={m.number} delay={0.05 + i * 0.07}>
              <article className="group relative grid gap-4 border border-cream-50/10 bg-olive-950/40 p-6 transition-colors hover:border-gold-500/50 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6 sm:p-8">
                <span className="text-glow-gold font-display text-[48px] leading-none text-gold-400 sm:text-[64px]">
                  {m.number}
                </span>
                <div>
                  <h3 className="font-display text-[22px] leading-tight text-cream-50 sm:text-[26px]">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-cream-100/80 sm:text-base">
                    {m.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
