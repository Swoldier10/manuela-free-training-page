import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Tally } from "@/components/ui/Decor";

export function Guarantee() {
  return (
    <section
      aria-labelledby="guarantee-title"
      className="relative overflow-hidden bg-olive-950 py-20 sm:py-28"
    >
      <Tally className="pointer-events-none absolute right-8 top-12 hidden w-16 text-cream-50/15 md:block" />
      <Tally className="pointer-events-none absolute bottom-16 left-8 hidden w-14 -rotate-6 text-cream-50/15 md:block" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <article className="texture-grain relative overflow-hidden border border-gold-500/40 bg-olive-900/60 p-7 sm:p-12">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
              <span className="shadow-gold-sm inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-gold-500 text-olive-950 sm:size-14">
                <ShieldCheck className="size-6 sm:size-7" aria-hidden="true" />
              </span>
              <div>
                <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
                  Garanție
                </span>
                <h2
                  id="guarantee-title"
                  className="mt-2 font-display text-[28px] leading-tight text-cream-50 sm:text-[38px]"
                >
                  Garanția{" "}
                  <span className="font-accent text-gold-400">
                    Fit&amp;Feminine
                  </span>
                </h2>
              </div>
            </div>

            <p className="mt-8 text-[16px] leading-[1.75] text-cream-100/90 sm:text-[18px]">
              Dacă intri în program, urmezi procesul, faci minimum{" "}
              <span className="font-accent text-gold-400">80% din antrenamente</span>
              , aplici recomandările alimentare și trimiți check-in-urile — dar
              la final nu vezi nicio îmbunătățire reală în corpul tău, energie,
              forță, măsurători sau felul în care te simți —{" "}
              <span className="text-cream-50">
                continui să lucrezi cu Manuela până obții rezultatul agreat
              </span>
              .
            </p>

            <p className="mt-5 text-[13px] leading-[1.6] text-cream-200 sm:text-[14px]">
              Această garanție nu este pentru cine intră și nu aplică. Este
              pentru femeile serioase, care chiar își fac partea lor.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
