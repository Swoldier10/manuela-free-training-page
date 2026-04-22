"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "mv_timer_deadline";
const DURATION_MS = 30 * 60 * 1000;

type Variant = "pill" | "hero";

type Props = {
  className?: string;
  label?: string;
  variant?: Variant;
};

function format(ms: number): { mm: string; ss: string } {
  const total = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return {
    mm: String(minutes).padStart(2, "0"),
    ss: String(seconds).padStart(2, "0"),
  };
}

export function CountdownTimer({
  className,
  label = "Oferta specială expiră în",
  variant = "pill",
}: Props) {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    let deadline: number;
    const stored = localStorage.getItem(STORAGE_KEY);
    const parsed = stored ? Number(stored) : NaN;
    if (Number.isFinite(parsed) && parsed > Date.now()) {
      deadline = parsed;
    } else {
      deadline = Date.now() + DURATION_MS;
      localStorage.setItem(STORAGE_KEY, String(deadline));
    }
    const tick = () => setRemaining(Math.max(0, deadline - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (variant === "hero") {
    return <HeroTimer remaining={remaining} className={className} />;
  }

  return <PillTimer remaining={remaining} label={label} className={className} />;
}

function PillTimer({
  remaining,
  label,
  className,
}: {
  remaining: number | null;
  label: string;
  className?: string;
}) {
  if (remaining === null) {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-3 rounded-full border border-gold-500/30 bg-olive-900/70 px-5 py-2.5",
          className,
        )}
        aria-hidden="true"
      >
        <Clock className="size-4 text-gold-400" />
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-cream-100/70">
          {label}
        </span>
        <span className="tabular text-base font-semibold text-gold-400">
          --:--
        </span>
      </div>
    );
  }

  const { mm, ss } = format(remaining);
  const done = remaining === 0;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-full border border-gold-500/30 bg-olive-900/70 px-5 py-2.5 backdrop-blur",
        className,
      )}
      aria-live="off"
    >
      <Clock
        className={cn("size-4 text-gold-400", !done && "animate-pulse-soft")}
        aria-hidden="true"
      />
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-cream-100/70">
        {done ? "Se închide curând" : label}
      </span>
      <span
        className="tabular text-base font-semibold text-gold-400"
        aria-label={done ? "Oferta se închide" : `${mm} minute și ${ss} secunde rămase`}
      >
        {mm}:{ss}
      </span>
    </div>
  );
}

function HeroTimer({
  remaining,
  className,
}: {
  remaining: number | null;
  className?: string;
}) {
  const ready = remaining !== null;
  const { mm, ss } = format(remaining ?? 0);
  const done = ready && remaining === 0;

  return (
    <div
      className={cn(
        "flex items-end justify-center gap-3 sm:gap-5",
        className,
      )}
      aria-live="off"
      aria-label={
        ready
          ? done
            ? "Oferta se închide"
            : `${mm} minute și ${ss} secunde rămase`
          : "Se încarcă cronometrul"
      }
    >
      <DigitBlock value={ready ? mm : "--"} label="Minute" pulse={ready && !done} />
      <span
        aria-hidden="true"
        className={cn(
          "pb-8 font-display text-5xl leading-none text-gold-400 sm:pb-10 sm:text-7xl",
          ready && !done && "animate-pulse-soft",
        )}
      >
        :
      </span>
      <DigitBlock value={ready ? ss : "--"} label="Secunde" pulse={ready && !done} />
    </div>
  );
}

function DigitBlock({
  value,
  label,
  pulse,
}: {
  value: string;
  label: string;
  pulse: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "relative flex min-w-[104px] items-center justify-center rounded-2xl border border-gold-500/30 bg-olive-900/80 px-4 py-5 backdrop-blur",
          "shadow-[0_30px_70px_-30px_rgba(255,77,46,0.35)]",
          "sm:min-w-[148px] sm:rounded-3xl sm:px-6 sm:py-7",
        )}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 top-1/2 h-px bg-cream-50/5"
        />
        <span
          className={cn(
            "font-display tabular text-[64px] leading-none text-cream-50 sm:text-[96px]",
            pulse && "animate-pulse-soft",
          )}
        >
          {value}
        </span>
      </div>
      <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.3em] text-gold-400 sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}
