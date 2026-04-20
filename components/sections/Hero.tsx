import Link from "next/link";
import { ArrowDown, Home, Sparkles, Zap } from "lucide-react";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { LeadForm } from "@/components/ui/LeadForm";
import { Logo } from "@/components/ui/Logo";

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-olive texture-grain">
      {/* glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 h-[360px] w-[360px] rounded-full bg-olive-700/40 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size={44} priority className="ring-1 ring-cream-50/10" />
            <div className="leading-tight">
              <p className="font-display text-[15px] text-cream-50">
                Manuela Vlașin
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-cream-100/60">
                Antrenor · Calisthenics
              </p>
            </div>
          </div>
          <nav aria-label="Scurtătură" className="hidden sm:block">
            <a
              href="#form-final"
              className="rounded-full border border-cream-50/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cream-50 transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              Vreau antrenamentele
            </a>
          </nav>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:items-center">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-olive-900/60 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-gold-400 sm:text-[11px]">
              <Sparkles className="size-3.5" aria-hidden="true" />
              2 Antrenamente gratuite
            </span>

            <h1 className="mt-5 font-display text-[34px] leading-[1.08] tracking-tight text-balance text-cream-50 sm:text-[52px] sm:leading-[1.04] lg:text-[68px] lg:leading-[1.02]">
              Abdomen mai plat și{" "}
              <span className="italic text-gold-400">fesieri mai tonifiați</span>{" "}
              în doar{" "}
              <span className="relative inline-block whitespace-nowrap">
                15 minute
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-1 h-[5px] rounded-full bg-gold-500/60 sm:h-[6px]"
                />
              </span>
              , de acasă.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-[1.65] text-cream-100/80 sm:text-lg lg:mx-0">
              2 antrenamente gratuite, fără echipament — simple, eficiente și
              ușor de urmat, chiar dacă nu ai mai făcut sport până acum.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-5 lg:justify-start">
              <CountdownTimer />
              <div className="flex items-center gap-4 text-xs text-cream-100/60">
                <span className="inline-flex items-center gap-1.5">
                  <Zap className="size-3.5 text-gold-400" aria-hidden="true" />
                  15 min
                </span>
                <span className="h-3 w-px bg-cream-100/20" aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5">
                  <Home className="size-3.5 text-gold-400" aria-hidden="true" />
                  Fără echipament
                </span>
              </div>
            </div>

            {/* Mobile-only CTA — the form is shown later in the flow on small screens */}
            <div className="mt-8 lg:hidden">
              <Link
                href="#form-final"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-olive-950 shadow-[0_14px_36px_-12px_rgba(212,185,136,0.65)] transition-all hover:bg-gold-400 active:scale-[0.98]"
              >
                Vreau antrenamentele gratuite
                <ArrowDown className="size-4" aria-hidden="true" />
              </Link>
              <p className="mt-3 text-[11px] leading-relaxed text-cream-100/55">
                🔒 Nu trimit spam. Doar antrenamente și informații utile.
              </p>
            </div>
          </div>

          <div className="hidden w-full lg:block lg:max-w-md lg:justify-self-end">
            <LeadForm id="form" />
          </div>
        </div>
      </div>
    </header>
  );
}
