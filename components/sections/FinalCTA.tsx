import { ArrowDown } from "lucide-react";
import { LeadForm } from "@/components/ui/LeadForm";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-title"
      className="relative overflow-hidden bg-gradient-olive texture-grain py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold-500/8 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400">
              Fără tergiversări
            </p>
            <h2
              id="final-title"
              className="mx-auto mt-3 max-w-3xl font-display text-[38px] leading-[1.05] tracking-tight text-cream-50 sm:text-[56px]"
            >
              Începe chiar <span className="italic">de azi</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-cream-100/75 sm:text-base">
              Completează formularul și primești imediat cele 2 antrenamente pe email.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
              <ArrowDown className="size-4 animate-pulse-soft" aria-hidden="true" />
              Vreau antrenamentele gratuite
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-12 max-w-md">
            <LeadForm id="form-final" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
