import { Play, Zap } from "lucide-react";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { LeadForm } from "@/components/ui/LeadForm";
import { Logo } from "@/components/ui/Logo";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-olive-950">
      {/* Decorative scenery — athletic stripes + rep tallies + lightning bolts */}
      <Stripes className="pointer-events-none absolute -right-28 -top-28 w-[26rem] text-olive-800" />
      <Stripes className="pointer-events-none absolute -left-32 bottom-28 w-[22rem] rotate-180 text-olive-800" />
      <Tally className="pointer-events-none absolute right-10 top-24 hidden w-16 text-cream-50/25 sm:block" />
      <Tally className="pointer-events-none absolute left-6 top-[48%] hidden w-14 -rotate-12 text-cream-50/20 md:block" />
      <Tally className="pointer-events-none absolute bottom-24 right-8 hidden w-16 rotate-6 text-cream-50/20 md:block" />
      <Bolt className="pointer-events-none absolute left-8 top-20 w-6 text-gold-500" />
      <Bolt className="pointer-events-none absolute right-20 top-[40%] w-8 text-gold-500" />
      <Bolt className="pointer-events-none absolute bottom-16 left-20 w-5 text-gold-500" />

      {/* Header */}
      <header className="relative z-10 mx-auto flex w-full max-w-2xl items-center gap-3 px-5 pt-6 sm:px-8">
        <Logo size={36} priority className="ring-1 ring-cream-50/10" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cream-100/70">
          Manuela Vlașin · Calisthenics
        </p>
      </header>

      {/* Poster composition */}
      <div className="relative z-10 mx-auto w-full max-w-2xl px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
        <span className="inline-flex items-center gap-2 bg-gold-500 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-olive-950 sm:text-[11px]">
          <Zap className="size-3.5 fill-current" aria-hidden="true" />
          Gratuit · 2 antrenamente
        </span>

        <h1 className="mt-8 font-display text-[44px] leading-[0.98] tracking-tight text-cream-50 sm:text-[64px] lg:text-[76px]">
          Abdomen plat.
          <br />
          <span className="italic text-gold-400">Fesieri tonifiați.</span>
          <br />
          În doar{" "}
          <span className="relative inline-block whitespace-nowrap">
            15 minute
            <Scribble
              aria-hidden="true"
              className="absolute -bottom-2 left-0 h-3 w-full text-gold-500 sm:-bottom-3 sm:h-4"
            />
          </span>
          .
        </h1>

        <p className="mt-6 text-[16px] leading-[1.55] text-cream-100/90 sm:text-[18px]">
          Fără echipament. Fără sală. Simți diferența din primul minut.
        </p>

        {/* Video placeholder */}
        <figure className="mt-10 sm:mt-12">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-cream-50/15 bg-olive-900">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
              <span className="grid size-14 place-items-center rounded-full bg-gold-500 text-olive-950 shadow-[0_10px_30px_-10px_rgba(255,77,46,0.55)] sm:size-16">
                <Play className="size-5 fill-current sm:size-6" aria-hidden="true" />
              </span>
              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-cream-100/55 sm:text-[11px]">
                Video în curând
              </p>
            </div>
          </div>
        </figure>

        {/* Timer block */}
        <div className="mt-14 flex flex-col items-center sm:mt-20">
          <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400 sm:text-[11px]">
            <Zap className="size-3 fill-current text-gold-500" aria-hidden="true" />
            Se închide în
            <Zap className="size-3 fill-current text-gold-500" aria-hidden="true" />
          </p>
          <CountdownTimer variant="hero" className="mt-5" />
        </div>

        {/* Divider + form */}
        <div className="mt-20 flex items-center gap-4 sm:mt-24">
          <Dash aria-hidden="true" className="h-[2px] flex-1 text-cream-50/15" />
          <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400">
            Primește acum
          </span>
          <Dash aria-hidden="true" className="h-[2px] flex-1 text-cream-50/15" />
        </div>

        <div className="mt-8">
          <LeadForm id="form" surface="plain" compact />
        </div>

        <div className="mt-10 text-center">
          <p className="font-script text-[52px] leading-none text-cream-50 sm:text-[64px]">
            Manuela
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-cream-100/60">
            Personal Trainer · Calisthenics
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Decorative SVGs (gym flavored) ---------- */

function Stripes({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
    >
      <rect x="-20" y="10" width="140" height="8" transform="rotate(-22 50 50)" opacity="0.55" />
      <rect x="-20" y="30" width="140" height="6" transform="rotate(-22 50 50)" opacity="0.4" />
      <rect x="-20" y="46" width="140" height="4" transform="rotate(-22 50 50)" opacity="0.25" />
    </svg>
  );
}

function Tally({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 60 46"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <line x1="6" y1="6" x2="6" y2="40" />
      <line x1="18" y1="6" x2="18" y2="40" />
      <line x1="30" y1="6" x2="30" y2="40" />
      <line x1="42" y1="6" x2="42" y2="40" />
      <line x1="2" y1="30" x2="48" y2="14" />
    </svg>
  );
}

function Bolt({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 32"
      fill="currentColor"
    >
      <path d="M14 1 L2 17 L10 17 L8 31 L22 13 L14 13 Z" />
    </svg>
  );
}

function Scribble({ className, ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 14"
      preserveAspectRatio="none"
      fill="none"
      {...rest}
    >
      <path
        d="M3,11 C 40,2 80,13 120,6 C 160,2 200,13 240,6 C 270,3 290,11 297,8"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Dash({ className, ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 2"
      preserveAspectRatio="none"
      fill="currentColor"
      {...rest}
    >
      <rect x="0" y="0" width="120" height="2" />
    </svg>
  );
}
