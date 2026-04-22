import { Reveal } from "@/components/motion/Reveal";
import { Scribble, Stripes } from "@/components/ui/Decor";

export function Differentiator() {
  return (
    <section
      aria-labelledby="diff-title"
      className="relative overflow-hidden bg-olive-900 py-24 sm:py-32"
    >
      <Stripes className="pointer-events-none absolute -right-28 top-10 w-[22rem] text-olive-700" />
      <Stripes className="pointer-events-none absolute -left-32 -bottom-16 w-[24rem] rotate-180 text-olive-700" />

      <div className="relative z-10 mx-auto max-w-2xl px-5 text-center sm:px-8">
        <Reveal>
          <h2
            id="diff-title"
            className="font-display text-[32px] leading-[1.08] tracking-tight text-cream-50 sm:text-[46px]"
          >
            Nu sunt antrenamente{" "}
            <span className="relative inline-block whitespace-nowrap italic text-gold-400">
              „random”
              <Scribble
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-gold-500 sm:-bottom-1.5 sm:h-3"
              />
            </span>{" "}
            de pe internet.
          </h2>
          <p className="mt-6 text-[16px] leading-[1.7] text-cream-100/80 sm:text-[18px]">
            Sunt gândite astfel încât să simți diferența după primele
            antrenamente. Nu pierzi timpul cu exerciții inutile și nu ai nevoie
            de echipament sau experiență.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
