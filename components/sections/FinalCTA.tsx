import { ArrowDown } from "lucide-react";
import { LeadForm } from "@/components/ui/LeadForm";
import { Reveal } from "@/components/motion/Reveal";
import { Bolt, Stripes } from "@/components/ui/Decor";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-title"
      className="relative overflow-hidden bg-olive-950 py-24 sm:py-32"
    >
      <Stripes className="pointer-events-none absolute -right-28 -top-20 w-[24rem] text-olive-800" />
      <Stripes className="pointer-events-none absolute -left-32 -bottom-16 w-[22rem] rotate-180 text-olive-800" />

      <div className="relative z-10 mx-auto max-w-xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2">
              <Bolt className="w-4 text-gold-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
                Final call
              </span>
              <Bolt className="w-4 text-gold-500" />
            </div>
            <h2
              id="final-title"
              className="mt-4 font-display text-[34px] leading-[1.05] text-cream-50 sm:text-[50px]"
            >
              Începe chiar <span className="italic text-gold-400">de azi</span>.
            </h2>
            <p className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-cream-100/70 sm:text-[13px]">
              Vreau antrenamentele gratuite
              <ArrowDown className="size-4 animate-pulse-soft text-gold-500" aria-hidden="true" />
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10">
            <LeadForm id="form-final" surface="plain" compact />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
