import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-cream-50/10 bg-olive-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Logo size={64} />
          <div>
            <p className="font-display text-sm text-cream-50">Manuela Vlașin</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-cream-100/55">
              Personal Trainer · Calisthenics
            </p>
          </div>
        </div>
        <p className="text-xs text-cream-100/55">
          © {new Date().getFullYear()} Manuela Vlașin. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
