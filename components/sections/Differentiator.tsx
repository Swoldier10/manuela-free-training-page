import { Reveal } from "@/components/motion/Reveal";

export function Differentiator() {
  return (
    <section
      aria-labelledby="diff-title"
      className="bg-olive-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <Reveal>
          <h2
            id="diff-title"
            className="font-display text-[32px] leading-[1.1] text-cream-50 sm:text-[44px]"
          >
            Nu sunt antrenamente{" "}
            <span className="italic text-gold-400">„random”</span> de pe
            internet.
          </h2>
          <p className="mt-6 text-[16px] leading-[1.7] text-cream-100/75 sm:text-[18px]">
            Gândite astfel încât să simți diferența după primele antrenamente.
            Fără exerciții inutile, fără echipament, fără experiență.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
