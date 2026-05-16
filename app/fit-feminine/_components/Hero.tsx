import { Scribble, Stripes, Tally } from "@/components/ui/Decor";
import { BookingCta } from "./BookingCta";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-olive-950">
      <Stripes className="pointer-events-none absolute -right-28 -top-28 w-[26rem] text-olive-800" />
      <Stripes className="pointer-events-none absolute -left-32 bottom-32 w-[22rem] rotate-180 text-olive-800" />
      <Tally className="pointer-events-none absolute right-10 top-24 hidden w-16 text-cream-50/25 sm:block" />
      <Tally className="pointer-events-none absolute left-6 top-[52%] hidden w-14 -rotate-12 text-cream-50/20 md:block" />
      <Tally className="pointer-events-none absolute bottom-24 right-8 hidden w-16 rotate-6 text-cream-50/20 md:block" />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20">
        <span className="shadow-gold-sm inline-flex items-center gap-2 bg-gold-500 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-olive-950 sm:text-[11px]">
          Program 1:1 · 12 săptămâni
        </span>

        <h1 className="mt-8 font-display text-[48px] leading-[0.98] tracking-tight text-cream-50 sm:text-[68px] lg:text-[80px]">
          Fit
          <span className="text-glow-gold font-accent text-gold-400">&amp;</span>
          Feminine
        </h1>

        <p className="mt-7 max-w-2xl text-[18px] leading-[1.45] text-cream-50 sm:text-[22px]">
          Programul de 12 săptămâni pentru femeile care vor să slăbească, să își
          tonifieze abdomenul, fesierii și picioarele și să își construiască un
          corp{" "}
          <span className="relative inline-block whitespace-nowrap">
            <span className="text-glow-gold font-accent text-gold-400">
              feminin, definit și puternic
            </span>
            <Scribble
              aria-hidden="true"
              className="glow-gold-sm absolute -bottom-2 left-0 h-3 w-full text-gold-500 sm:-bottom-3 sm:h-4"
            />
          </span>
          .
        </p>

        <p className="mt-6 max-w-2xl text-[15px] leading-[1.65] text-cream-100/80 sm:text-[17px]">
          Fără sală. Fără diete extreme. Fără să te simți pierdută în proces.
          Programează o sesiune gratuită 1:1 cu Manuela și află ce trebuie să
          schimbi concret ca să începi să vezi rezultate reale.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center">
          <BookingCta>Programează sesiunea 1:1 gratuită</BookingCta>
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-cream-100/55 sm:text-[11px]">
            Gratuit · Fără presiune de vânzare
          </span>
        </div>
      </div>
    </section>
  );
}
