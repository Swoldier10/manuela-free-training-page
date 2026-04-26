import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";
import { Stripes, Tally } from "@/components/ui/Decor";
import { Greeting } from "@/components/ui/Greeting";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/motion/Reveal";
import { PLAN_14_CHECKOUT_URL } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Plan nutriție 14 zile · Manuela Vlașin",
  description:
    "Adaugă un plan simplu de nutriție pe 14 zile la antrenamentele tale. Preț special: 89 lei.",
};

const BENEFITS = [
  "Plan de 14 zile, clar și ușor de urmat",
  "Idei de mese simple, fără rețete complicate",
  "Structură care te ajută să fii consecventă",
  "Fără diete extreme sau restricții inutile",
];

export default function Offer14DayPage() {
  return (
    <section
      aria-labelledby="offer-14-title"
      className="relative flex min-h-screen flex-col overflow-hidden bg-olive-950 py-6 sm:py-8 lg:py-6"
    >
      <Stripes className="pointer-events-none absolute -right-28 -top-20 w-[24rem] text-olive-800" />
      <Stripes className="pointer-events-none absolute -left-32 -bottom-16 w-[22rem] rotate-180 text-olive-800" />
      <Tally className="pointer-events-none absolute right-10 top-32 hidden w-14 text-cream-50/15 md:block" />
      <Tally className="pointer-events-none absolute bottom-32 left-10 hidden w-14 -rotate-6 text-cream-50/15 md:block" />

      <header className="relative z-10 mx-auto flex w-full max-w-5xl items-center gap-3 px-5 sm:px-8">
        <Logo size={64} priority />
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cream-100/70">
          Manuela Vlașin · Personal Trainer
        </p>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 items-center px-5 pt-6 sm:px-8 sm:pt-8 lg:pt-4">
        <div className="grid w-full gap-8 lg:grid-cols-[340px_1fr] lg:items-center lg:gap-12">
          <Reveal className="text-center lg:col-start-2 lg:row-start-1 lg:text-left">
            <Greeting />
            <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
              Ofertă specială
            </span>
            <h1
              id="offer-14-title"
              className="mt-3 font-display text-[28px] leading-[1.05] text-cream-50 sm:text-[40px] lg:text-[40px]"
            >
              Vrei rezultate <span className="font-accent text-gold-400">mai rapide</span> cu antrenamentele?
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-[14px] leading-[1.55] text-cream-100/80 sm:text-[16px] lg:mx-0">
              Adaugă un plan simplu de nutriție pe 14 zile, ușor de urmat și
              gândit să susțină abdomenul și fesierii.
            </p>
          </Reveal>

          <Reveal
            delay={0.03}
            className="lg:col-start-1 lg:row-start-1 lg:row-span-5 lg:self-stretch"
          >
            <figure className="flex h-full justify-center lg:justify-start">
              <Image
                src="/images/meal-plan-14-day.jpg"
                alt="Plan de nutriție 14 zile — previzualizare"
                width={774}
                height={1200}
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 280px, 220px"
                className="w-[55%] max-w-[260px] rounded-xl border border-cream-50/10 object-contain shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:max-w-[300px] lg:h-full lg:max-h-[560px] lg:w-auto lg:max-w-none"
              />
            </figure>
          </Reveal>

          <Reveal
            delay={0.05}
            className="lg:col-start-2 lg:row-start-2"
          >
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex items-baseline gap-4">
                <del className="font-display text-[20px] text-cream-100/55 sm:text-[24px]">
                  249 lei
                </del>
                <span className="text-glow-gold font-display text-[40px] leading-none text-gold-400 sm:text-[52px]">
                  89 lei
                </span>
              </div>
              <span className="shadow-gold-sm mt-3 inline-flex items-center gap-1.5 bg-gold-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-olive-950 sm:text-[11px]">
                Preț special disponibil acum
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-start-2 lg:row-start-3">
            <div>
              <p className="mb-3 text-center text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px] lg:text-left">
                Ce primești
              </p>
              <ul className="grid gap-2 text-[14px] leading-[1.5] text-cream-100/85 sm:text-[15px] sm:grid-cols-2 sm:gap-3">
                {BENEFITS.map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold-500"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-4">
            <article className="border border-cream-50/10 bg-olive-900/40 p-5 sm:p-6">
              <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
                De ce merită
              </p>
              <p className="text-[14px] leading-[1.55] text-cream-100/85 sm:text-[15px]">
                Antrenamentele funcționează mult mai bine când ai și un minim
                de structură în alimentație. Nu trebuie să fie perfect — doar
                organizat.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-start-2 lg:row-start-5">
            <div className="flex flex-col items-center lg:items-start">
              <a href={PLAN_14_CHECKOUT_URL} className="block w-full sm:w-auto">
                <CtaButton variant="primary" size="lg" className="w-full sm:w-auto">
                  <span className="flex items-center gap-2">
                    Da, vreau planul de 14 zile
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </CtaButton>
              </a>
              <Link
                href="/offer-7-day"
                className="mt-4 inline-block max-w-xs text-center text-[11px] font-medium uppercase tracking-[0.18em] text-cream-100/55 underline underline-offset-4 transition-colors hover:text-gold-400 sm:text-[12px] lg:max-w-none lg:text-left"
              >
                Nu, mulțumesc — vreau doar antrenamentele gratuite
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
