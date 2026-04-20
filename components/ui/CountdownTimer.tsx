"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "mv_timer_deadline";
const DURATION_MS = 30 * 60 * 1000;

type Props = {
  className?: string;
  label?: string;
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
        className={cn(
          "size-4 text-gold-400",
          !done && "animate-pulse-soft",
        )}
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
