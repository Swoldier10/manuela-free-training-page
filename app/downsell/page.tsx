import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";
import { Stripes, Tally } from "@/components/ui/Decor";
import { Greeting } from "@/components/ui/Greeting";
import { Reveal } from "@/components/motion/Reveal";
import { DOWNSELL_CHECKOUT_URL } from "@/lib/plans";

export const metadata: Metadata = {
  title: "95 de rețete · Ultima ofertă · Manuela Vlașin",
  description:
    "Cartea completă cu 95 de rețete sănătoase, simple și nutritive. Preț special: 39 lei.",
};

const BENEFITS = [
  "95 de rețete sănătoase și ușor de făcut",
  "Idei simple pentru mic dejun, prânz, cină și gustări",
  "Rețete nutritive, cu ingrediente accesibile",
  "Variante potrivite pentru un stil de viață echilibrat",
  "Inspirație pentru zilele în care nu știi ce să gătești",
  "Mese gustoase, fără diete extreme sau restricții inutile",
];

export default function DownsellPage() {
  return (
    <section
      aria-labelledby="downsell-title"
      className="relative min-h-screen overflow-hidden bg-olive-950 py-10 sm:py-14 lg:py-12"
    >
      <Stripes className="pointer-events-none absolute -right-28 -top-20 w-[24rem] text-olive-800" />
      <Stripes className="pointer-events-none absolute -left-32 -bottom-16 w-[22rem] rotate-180 text-olive-800" />
      <Tally className="pointer-events-none absolute right-10 top-32 hidden w-14 text-cream-50/15 md:block" />
      <Tally className="pointer-events-none absolute bottom-32 left-10 hidden w-14 -rotate-6 text-cream-50/15 md:block" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="grid w-full gap-8 lg:grid-cols-[340px_1fr] lg:items-center lg:gap-12">
          <Reveal className="text-center lg:col-start-2 lg:row-start-1 lg:text-left">
            <Greeting />
            <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
              Ultima ofertă disponibilă
            </span>
            <h1
              id="downsell-title"
              className="mt-3 font-display text-[28px] leading-[1.05] text-cream-50 sm:text-[40px] lg:text-[40px]"
            >
              Nu pleca fără cele <span className="font-accent text-gold-400">95 de rețete</span>.
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-[14px] leading-[1.55] text-cream-100/80 sm:text-[16px] lg:mx-0">
              Aceasta este ultima ofertă disponibilă. Primești cartea completă cu 95 de rețete la un preț redus, ca să poți începe simplu, fără presiune și fără să complici mâncarea.
            </p>
          </Reveal>

          <Reveal
            delay={0.03}
            className="lg:col-start-1 lg:row-start-1 lg:row-span-5 lg:self-stretch"
          >
            <figure className="flex h-full justify-center lg:justify-start">
              <Image
                src="/images/recipes-cover-95.jpg"
                alt="95 de rețete — copertă"
                width={967}
                height={1500}
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 280px, 220px"
                className="w-[55%] max-w-[260px] rounded-xl border border-cream-50/10 object-contain shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:max-w-[300px] lg:h-full lg:max-h-[560px] lg:w-auto lg:max-w-none"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-start-2 lg:row-start-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex items-baseline gap-4">
                <del className="font-display text-[20px] text-cream-100/55 sm:text-[24px]">
                  149 lei
                </del>
                <span className="text-glow-gold font-display text-[40px] leading-none text-gold-400 sm:text-[52px]">
                  39 lei
                </span>
              </div>
              <span className="shadow-gold-sm mt-3 inline-flex items-center gap-1.5 bg-gold-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-olive-950 sm:text-[11px]">
                Preț special
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
              <p className="text-[14px] leading-[1.55] text-cream-100/85 sm:text-[15px]">
                Nu ai nevoie de o dietă perfectă — ai nevoie de idei clare,
                mese ușor de făcut și mai puțin stres când vine vorba de
                mâncare.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-start-2 lg:row-start-5">
            <div className="flex flex-col items-center lg:items-start">
              <a href={DOWNSELL_CHECKOUT_URL} className="block w-full sm:w-auto">
                <CtaButton variant="primary" size="lg" className="w-full sm:w-auto">
                  <span className="flex items-center gap-2">
                    Vreau rețetele acum
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </CtaButton>
              </a>
              <Link
                href="/thank-you"
                className="mt-4 inline-block max-w-xs text-center text-[11px] font-medium uppercase tracking-[0.18em] text-cream-100/55 underline underline-offset-4 transition-colors hover:text-gold-400 sm:text-[12px] lg:max-w-none lg:text-left"
              >
                Nu, mulțumesc
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
