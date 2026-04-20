import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const BENEFITS: Array<{ bold: string; rest: string }> = [
  {
    bold: "Simți abdomenul lucrând",
    rest: "încă din primele minute — niciun efort irosit.",
  },
  {
    bold: "Exerciții simple, făcute corect",
    rest: "→ rezultate reale, fără trucuri.",
  },
  {
    bold: "Durează doar 15 minute",
    rest: "— le poți face oricând, oriunde.",
  },
  {
    bold: "Fără echipament",
    rest: "— acasă, în vacanță sau în pauza de la birou.",
  },
  {
    bold: "Structurate să le termini",
    rest: "— nu să renunți la jumătate.",
  },
];

export function Benefits() {
  return (
    <section
      id="beneficii"
      aria-labelledby="benefits-title"
      className="relative bg-olive-900 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400">
              De ce contează
            </p>
            <h2
              id="benefits-title"
              className="mt-3 font-display text-[32px] leading-[1.1] text-cream-50 sm:text-[44px]"
            >
              De ce merită să încerci{" "}
              <span className="italic text-gold-400">aceste antrenamente</span>?
            </h2>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5">
          {BENEFITS.map((b, i) => (
            <Reveal
              key={b.bold}
              delay={i * 0.06}
              className={
                i === 4
                  ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[560px]"
                  : undefined
              }
            >
              <li className="group flex h-full items-start gap-4 rounded-2xl border border-cream-50/8 bg-olive-800/60 p-5 transition-colors hover:border-gold-400/40 sm:p-6">
                <span
                  className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-gold-500/15 ring-1 ring-gold-500/40 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <Check className="size-4 text-gold-400" strokeWidth={3} />
                </span>
                <p className="text-[15px] leading-[1.55] text-cream-100/85 sm:text-base">
                  <span className="font-semibold text-cream-50">{b.bold}</span>{" "}
                  <span className="text-cream-100/70">{b.rest}</span>
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
