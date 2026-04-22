import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const BENEFITS = [
  "Simți abdomenul lucrând din primele minute.",
  "Exerciții simple, făcute corect — rezultate reale.",
  "15 minute. Oricând. Oriunde.",
  "Fără echipament. Fără sală. Fără complicații.",
];

export function Benefits() {
  return (
    <section
      id="beneficii"
      aria-labelledby="benefits-title"
      className="bg-olive-900 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <h2
            id="benefits-title"
            className="text-center font-display text-[30px] leading-[1.1] text-cream-50 sm:text-[40px]"
          >
            De ce merită?
          </h2>
        </Reveal>

        <ul className="mt-12 space-y-4 sm:mt-14">
          {BENEFITS.map((b, i) => (
            <Reveal key={b} delay={i * 0.05}>
              <li className="flex items-start gap-4 border-b border-cream-50/10 pb-4 text-[17px] leading-[1.5] text-cream-100/90 sm:text-[19px]">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 ring-1 ring-gold-500/40"
                >
                  <Check className="size-3 text-gold-300" strokeWidth={3} />
                </span>
                <span>{b}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
