import { Users } from "lucide-react";

export function SocialProofBanner() {
  return (
    <div
      role="note"
      aria-label="Dovadă socială"
      className="relative z-30 w-full border-b border-cream-50/5 bg-gradient-banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 sm:py-3">
        <span
          className="hidden size-1.5 shrink-0 rounded-full bg-gold-400 animate-pulse-soft sm:block"
          aria-hidden="true"
        />
        <Users
          className="size-3.5 shrink-0 text-gold-400 sm:hidden"
          aria-hidden="true"
        />
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.22em] text-cream-100/85 sm:text-[11px]">
          Peste{" "}
          <span className="text-gold-400 tabular">5.409</span>{" "}
          femei s-au bucurat deja de acest material gratuit
        </p>
        <span
          className="hidden size-1.5 shrink-0 rounded-full bg-gold-400 animate-pulse-soft sm:block"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
