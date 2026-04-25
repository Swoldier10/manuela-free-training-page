"use client";

import { useEffect, useRef } from "react";
import { sendThankYouEmail } from "@/app/thank-you/actions";
import type { Plan } from "@/lib/plans";
import { STORAGE_KEYS, emailedKey } from "@/lib/storage";

type Props = { plan: Plan | null };

export function TriggerEmail({ plan }: Props) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    let nume: string | null = null;
    let email: string | null = null;
    let alreadySent = false;
    try {
      nume = sessionStorage.getItem(STORAGE_KEYS.nume);
      email = sessionStorage.getItem(STORAGE_KEYS.email);
      alreadySent = localStorage.getItem(emailedKey(plan)) === "1";
    } catch {
      return;
    }

    if (alreadySent) return;
    if (!nume || !email) return;

    // Mark optimistically so a fast second mount (StrictMode, refresh during
    // pending request) doesn't double-fire. We clear it on failure so the user
    // can retry by navigating back.
    try {
      localStorage.setItem(emailedKey(plan), "1");
    } catch {
      /* private mode — proceed without dedup */
    }

    sendThankYouEmail({ nume, email }).then((result) => {
      if (!result.ok) {
        try {
          localStorage.removeItem(emailedKey(plan));
        } catch {
          /* ignore */
        }
        console.warn("[TriggerEmail] send failed:", result.error);
      }
    });
  }, [plan]);

  return null;
}
