import { LeadForm } from "@/components/ui/LeadForm";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-title"
      className="bg-olive-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
              Începe chiar azi
            </p>
            <h2
              id="final-title"
              className="mt-3 font-display text-[32px] leading-[1.05] text-cream-50 sm:text-[48px]"
            >
              Trimite-mi antrenamentele.
            </h2>
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
