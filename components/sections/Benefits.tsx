import { Reveal } from "@/components/motion/Reveal";
import { Bolt, Stripes } from "@/components/ui/Decor";

const BENEFITS = [
  "Vei simți abdomenul lucrând din primele minute.",
  "Exerciții simple, dar făcute corect → rezultate reale.",
  "Durează doar 15 minute. Le poți face oricând.",
  "Fără echipament. Acasă, în vacanță sau oriunde.",
  "Structurate astfel încât să le termini, nu să renunți la jumătate.",
];

export function Benefits() {
  return (
    <section
      id="beneficii"
      aria-labelledby="benefits-title"
      className="relative overflow-hidden bg-olive-900 py-20 sm:py-28"
    >
      <Stripes className="pointer-events-none absolute -right-24 -top-16 w-[22rem] text-olive-700" />
      <Stripes className="pointer-events-none absolute -left-28 -bottom-20 w-[20rem] rotate-180 text-olive-700" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <Bolt className="glow-gold-sm w-4 text-gold-500" />
            <span className="text-glow-gold-sm text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
              Beneficii
            </span>
          </div>
          <h2
            id="benefits-title"
            className="mt-4 font-display text-[30px] leading-[1.08] tracking-tight text-cream-50 sm:text-[42px]"
          >
            De ce merită să încerci{" "}
            <span className="text-glow-gold font-accent text-gold-400">aceste antrenamente</span>?
          </h2>
        </Reveal>

        <ul className="mt-12 space-y-4 sm:mt-14">
          {BENEFITS.map((b, i) => (
            <Reveal key={b} delay={i * 0.05}>
              <li className="flex items-start gap-4 border-b border-cream-50/10 pb-4 text-[17px] leading-[1.5] text-cream-100/90 sm:text-[19px]">
                <Bolt className="glow-gold-sm mt-1 w-4 shrink-0 text-gold-500" />
                <span>{b}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
