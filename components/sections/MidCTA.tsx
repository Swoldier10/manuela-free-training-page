import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function MidCTA() {
  return (
    <section className="bg-olive-950 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
            Treci la treabă
          </span>
          <p className="mt-5 font-display text-[26px] leading-snug text-cream-50 sm:text-[32px]">
            Gata să simți diferența încă de la primul antrenament?
          </p>
          <Link
            href="#form-final"
            className="mt-8 inline-flex items-center gap-3 bg-gold-500 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-olive-950 transition-all hover:bg-gold-400 hover:shadow-[0_14px_36px_-8px_rgba(168,131,37,0.55)] active:scale-[0.98] sm:text-[13px]"
          >
            Vreau antrenamentele gratuite
            <ArrowDown className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
