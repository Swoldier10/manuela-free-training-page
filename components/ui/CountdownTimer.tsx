"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "mv_timer_deadline_v2";
const DURATION_MS = 15 * 60 * 1000;

type Props = {
  className?: string;
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

export function CountdownTimer({ className }: Props) {
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

  const ready = remaining !== null;
  const { mm, ss } = format(remaining ?? 0);
  const done = ready && remaining === 0;

  return (
    <div
      className={cn("flex items-end justify-center gap-2 sm:gap-3", className)}
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
          "pb-6 font-display text-3xl leading-none text-gold-400 sm:pb-7 sm:text-4xl",
          ready && !done && "animate-pulse-soft",
        )}
      >
        :
      </span>
      <DigitBlock value={ready ? ss : "--"} label="Secunde" pulse={ready && !done} />
    </div>
  );
}

type DigitBlockProps = {
  value: string;
  label: string;
  pulse: boolean;
};

function DigitBlock({ value, label, pulse }: DigitBlockProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "relative flex min-w-[68px] items-center justify-center rounded-xl border border-gold-500/30 bg-olive-900/80 px-3 py-3 backdrop-blur",
          "shadow-[0_18px_40px_-22px_rgba(168,131,37,0.4)]",
          "sm:min-w-[88px] sm:rounded-2xl sm:px-4 sm:py-4",
        )}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-4 top-1/2 h-px bg-cream-50/5"
        />
        <span
          className={cn(
            "font-display tabular text-[36px] leading-none text-cream-50 sm:text-[52px]",
            pulse && "animate-pulse-soft",
          )}
        >
          {value}
        </span>
      </div>
      <span className="mt-2 text-[9px] font-bold uppercase tracking-[0.3em] text-gold-400 sm:text-[10px]">
        {label}
      </span>
    </div>
  );
}
