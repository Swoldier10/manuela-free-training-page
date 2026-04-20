import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function MidCTA() {
  return (
    <section className="bg-olive-950 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="font-display text-2xl leading-snug text-cream-50 sm:text-3xl">
            Gata să simți diferența încă de la primul antrenament?
          </p>
          <Link
            href="#form-final"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-gold-500 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-olive-950 transition-all hover:bg-gold-400 hover:shadow-[0_14px_36px_-8px_rgba(212,185,136,0.65)] active:scale-[0.98] sm:px-8 sm:text-sm sm:tracking-[0.16em]"
          >
            Vreau antrenamentele gratuite
            <ArrowDown className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
