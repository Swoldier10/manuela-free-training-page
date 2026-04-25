"use client";

import { useSyncExternalStore } from "react";
import { STORAGE_KEYS } from "@/lib/storage";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): string | null {
  try {
    const value = sessionStorage.getItem(STORAGE_KEYS.nume);
    if (!value) return null;
    const trimmed = value.trim().slice(0, 60);
    return trimmed.length > 0 ? trimmed : null;
  } catch {
    return null;
  }
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
