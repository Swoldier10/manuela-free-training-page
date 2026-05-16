import { Check, X } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stripes } from "@/components/ui/Decor";

const FOR = [
  "Vrei să slăbești și să îți tonifiezi corpul, dar nu știi de unde să începi.",
  "Vrei să lucrezi de acasă, fără să depinzi de sală.",
  "Ai mai încercat diete sau antrenamente, dar nu ai fost mulțumită de rezultat.",
  "Vrei abdomen mai plat, fesieri mai fermi și picioare mai definite.",
  "Vrei un corp feminin, dar puternic.",
  "Ai nevoie de cineva care să îți spună clar ce să faci, nu doar să te motiveze frumos.",
  "Ești dispusă să lucrezi constant timp de 12 săptămâni.",
  "Vrei rezultate reale și înțelegi că acestea vin prin execuție, nu prin promisiuni magice.",
];

const NOT_FOR = [
  "Cauți o soluție rapidă, fără disciplină.",
  "Vrei rezultate fără să îți schimbi obiceiurile.",
  "Nu ești dispusă să faci antrenamentele.",
  "Nu vrei să trimiți check-in-uri sau să aplici recomandările.",
  "Cauți o dietă extremă cu rezultate peste noapte.",
  "Vrei doar să „vezi cum e”, dar nu ești pregătită să te implici.",
  "Nu accepți feedback și corecții.",
];

export function ForWhom() {
  return (
    <section
      aria-labelledby="forwhom-title"
      className="relative overflow-hidden bg-olive-900 py-20 sm:py-28"
    >
      <Stripes className="pointer-events-none absolute -right-24 -top-16 w-[22rem] text-olive-700" />
      <Stripes className="pointer-events-none absolute -left-28 -bottom-20 w-[20rem] rotate-180 text-olive-700" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
              Pentru cine
            </span>
            <h2
              id="forwhom-title"
              className="mt-4 font-display text-[30px] leading-[1.08] text-cream-50 sm:text-[42px]"
            >
              Pentru cine este{" "}
              <span className="text-glow-gold font-accent text-gold-400">
                (și pentru cine nu)
              </span>
              .
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 md:gap-6">
          <Reveal delay={0.05}>
            <article className="flex h-full flex-col border border-gold-500/40 bg-olive-950/50 p-7 sm:p-8">
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
            <article className="flex h-full flex-col border border-cream-50/15 bg-olive-950/30 p-7 sm:p-8">
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

        <Reveal delay={0.25}>
          <p className="mt-10 text-center text-[15px] leading-[1.6] text-cream-100/80 sm:text-[17px]">
            Programul este pentru femei care vor să fie ghidate, dar care sunt{" "}
            <span className="font-accent text-gold-400">
              dispuse să facă partea lor
            </span>{" "}
            de muncă.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
