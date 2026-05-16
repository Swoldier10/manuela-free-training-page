import { Check } from "lucide-react";
import { Scribble, Stripes, Tally } from "@/components/ui/Decor";
import { BookingCta } from "./BookingCta";
import { MediaSlot } from "./MediaSlot";

const TRUST = ["Acasă, fără sală", "1:1 cu Manuela", "Fără diete extreme"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-olive-950">
      <Stripes className="pointer-events-none absolute -right-28 -top-28 w-[26rem] text-olive-800" />
      <Stripes className="pointer-events-none absolute -left-32 bottom-20 w-[22rem] rotate-180 text-olive-800" />
      <Tally className="pointer-events-none absolute right-10 top-24 hidden w-14 text-cream-50/20 sm:block" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div>
            <span className="shadow-gold-sm inline-flex items-center gap-2 bg-gold-500 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-olive-950 sm:text-[11px]">
              Coaching 1:1 · 12 săptămâni
            </span>

            <h1 className="mt-7 font-display text-[44px] leading-[1.0] tracking-tight text-cream-50 sm:text-[60px] lg:text-[72px]">
              Slăbește. Tonifiază.
              <br />
              Capătă încredere — în{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="text-glow-gold font-accent text-gold-400">
                  12 săptămâni
                </span>
                <Scribble
                  aria-hidden="true"
                  className="glow-gold-sm absolute -bottom-2 left-0 h-3 w-full text-gold-500 sm:-bottom-3 sm:h-4"
                />
              </span>
              .
            </h1>

            <p className="mt-6 max-w-xl text-[16px] leading-[1.55] text-cream-100/85 sm:text-[18px]">
              Programul Fit&amp;Feminine te ghidează 1:1 spre un corp mai
              feminin, definit și puternic — fără sală, fără diete extreme.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {TRUST.map((t) => (
                <li
                  key={t}
                  className="inline-flex items-center gap-2 border border-cream-50/15 bg-olive-900/50 px-3 py-1.5 text-[12px] text-cream-100/85 sm:text-[13px]"
                >
                  <Check
                    className="size-3.5 text-gold-400"
                    aria-hidden="true"
                  />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-start gap-3 sm:mt-10">
              <BookingCta>Programează sesiunea gratuită</BookingCta>
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-cream-100/55 sm:text-[11px]">
                20 min · Gratuit · Fără presiune de vânzare
              </span>
            </div>
          </div>

          <div className="order-first md:order-last">
            <MediaSlot
              aspect="4 / 5"
              label="Portret Manuela"
              hint="public/images/fit-feminine/hero-portrait.jpg"
              priority
              sizes="(min-width: 768px) 42vw, 92vw"
              className="mx-auto w-full max-w-[420px] md:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
