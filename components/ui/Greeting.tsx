"use client";

import { useSyncExternalStore } from "react";
import { getLeadCache } from "@/lib/storage";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): string | null {
  const cached = getLeadCache();
  if (!cached) return null;
  const trimmed = cached.nume.trim().slice(0, 60);
  return trimmed.length > 0 ? trimmed : null;
}

function getServerSnapshot(): string | null {
  return null;
}

export function Greeting() {
  const nume = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!nume) return null;

  return (
    <p className="animate-fade-up mb-3 font-script text-[28px] leading-none text-cream-50 sm:text-[34px]">
      Felicitări, {nume}!
    </p>
  );
}
