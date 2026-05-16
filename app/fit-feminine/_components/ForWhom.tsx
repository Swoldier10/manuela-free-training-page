import { Check, X } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Tally } from "@/components/ui/Decor";

const FOR = [
  "Vrei rezultate reale, nu doar să slăbești pe cântar.",
  "Lucrezi de acasă, fără sală.",
  "Ești dispusă să muncești constant 12 săptămâni.",
  "Accepți feedback și ajustări.",
];

const NOT_FOR = [
  "Cauți o soluție rapidă fără disciplină.",
  "Nu vrei să faci antrenamentele.",
  "Vrei doar să „vezi cum e”.",
  "Refuzi feedback.",
];

export function ForWhom() {
  return (
    <section
      aria-labelledby="forwhom-title"
      className="relative overflow-hidden bg-olive-950 py-20 sm:py-28"
    >
      <Tally className="pointer-events-none absolute right-8 top-12 hidden w-14 text-cream-50/15 md:block" />
      <Tally className="pointer-events-none absolute bottom-16 left-8 hidden w-12 -rotate-6 text-cream-50/15 md:block" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
              Pentru cine e
            </span>
            <h2
              id="forwhom-title"
              className="mt-4 font-display text-[30px] leading-[1.08] text-cream-50 sm:text-[42px]"
            >
              Pentru femei serioase,{" "}
              <span className="text-glow-gold font-accent text-gold-400">
                nu pentru curioase
              </span>
              .
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 md:gap-6">
          <Reveal delay={0.05}>
            <article className="flex h-full flex-col border border-gold-500/40 bg-olive-900/50 p-7 sm:p-8">
              <span className="inline-flex w-fit items-center gap-2 bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-olive-950 sm:text-[11px]">
                Pentru tine dacă
              </span>
              <ul className="mt-6 space-y-3.5">
                {FOR.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-[15px] leading-[1.55] text-cream-100/90 sm:text-base"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-gold-400"
                      aria-hidden="true"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="flex h-full flex-col border border-cream-50/15 bg-olive-900/30 p-7 sm:p-8">
              <span className="inline-flex w-fit items-center gap-2 border border-cream-50/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cream-100/80 sm:text-[11px]">
                NU este pentru tine dacă
              </span>
              <ul className="mt-6 space-y-3.5">
                {NOT_FOR.map((n) => (
                  <li
                    key={n}
                    className="flex items-start gap-3 text-[15px] leading-[1.55] text-cream-100/70 sm:text-base"
                  >
                    <X
                      className="mt-0.5 size-4 shrink-0 text-cream-200"
                      aria-hidden="true"
                    />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.22}>
          <p className="mt-10 text-center text-[15px] leading-[1.6] text-cream-100/80 sm:text-[17px]">
            Dacă te regăsești în stânga,{" "}
            <span className="font-accent text-gold-400">
              programează un apel
            </span>{" "}
            — vorbim 20 de minute și vedem împreună.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
