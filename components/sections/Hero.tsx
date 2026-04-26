import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { Dash, Scribble, Stripes, Tally } from "@/components/ui/Decor";
import { LeadForm } from "@/components/ui/LeadForm";
import { Logo } from "@/components/ui/Logo";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-olive-950">
      {/* Decorative scenery — athletic stripes + rep tallies */}
      <Stripes className="pointer-events-none absolute -right-28 -top-28 w-[26rem] text-olive-800" />
      <Stripes className="pointer-events-none absolute -left-32 bottom-28 w-[22rem] rotate-180 text-olive-800" />
      <Tally className="pointer-events-none absolute right-10 top-24 hidden w-16 text-cream-50/25 sm:block" />
      <Tally className="pointer-events-none absolute left-6 top-[48%] hidden w-14 -rotate-12 text-cream-50/20 md:block" />
      <Tally className="pointer-events-none absolute bottom-24 right-8 hidden w-16 rotate-6 text-cream-50/20 md:block" />

      {/* Header */}
      <header className="relative z-10 mx-auto flex w-full max-w-2xl items-center gap-3 px-5 pt-6 sm:px-8">
        <Logo size={64} priority />
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cream-100/70">
          Manuela Vlașin · Personal Trainer
        </p>
      </header>

      {/* Poster composition */}
      <div className="relative z-10 mx-auto w-full max-w-2xl px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
        <span className="shadow-gold-sm inline-flex items-center gap-2 bg-gold-500 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-olive-950 sm:text-[11px]">
          Gratuit · 2 antrenamente
        </span>

        <h1 className="mt-8 font-display text-[44px] leading-[0.98] tracking-tight text-cream-50 sm:text-[64px] lg:text-[76px]">
          Abdomen plat.
          <br />
          <span className="text-glow-gold font-accent text-gold-400">Fesieri tonifiați.</span>
          <br />
          În doar{" "}
          <span className="relative inline-block whitespace-nowrap">
            20 minute
            <Scribble
              aria-hidden="true"
              className="glow-gold-sm absolute -bottom-2 left-0 h-3 w-full text-gold-500 sm:-bottom-3 sm:h-4"
            />
          </span>
          .
        </h1>

        <p className="mt-6 text-[16px] leading-[1.55] text-cream-100/90 sm:text-[18px]">
          Fără echipament. Fără sală. Simți diferența din primul minut.
        </p>

        <figure className="mt-10 sm:mt-12">
          <VideoPlayer
            src="/videos/intro.mp4"
            poster="/images/video-poster.png"
          />
        </figure>

        {/* Timer block */}
        <div className="mt-14 flex flex-col items-center sm:mt-20">
          <p className="text-glow-gold-sm text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400 sm:text-[11px]">
            Se închide în
          </p>
          <CountdownTimer className="mt-5" />
        </div>

        {/* Divider + form */}
        <div className="mt-20 flex items-center gap-4 sm:mt-24">
          <Dash aria-hidden="true" className="h-[2px] flex-1 text-cream-50/15" />
          <span className="text-glow-gold-sm text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400">
            Primește acum
          </span>
          <Dash aria-hidden="true" className="h-[2px] flex-1 text-cream-50/15" />
        </div>

        <div className="mt-8">
          <LeadForm id="form" surface="plain" compact />
        </div>

        <div className="mt-10 text-center">
          <p className="font-script text-[64px] leading-none text-cream-50 sm:text-[80px]">
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

