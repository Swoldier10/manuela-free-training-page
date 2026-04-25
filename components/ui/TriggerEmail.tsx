"use client";

import { useEffect, useRef } from "react";
import { sendThankYouEmail } from "@/app/thank-you/actions";
import type { Plan } from "@/lib/plans";
import { STORAGE_KEYS } from "@/lib/storage";

type Props = { plan: Plan | null };

export function TriggerEmail({ plan }: Props) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    let nume: string | null = null;
    let email: string | null = null;
    try {
      nume = sessionStorage.getItem(STORAGE_KEYS.nume);
      email = sessionStorage.getItem(STORAGE_KEYS.email);
    } catch {
      return;
    }

    if (!nume || !email) return;

    sendThankYouEmail({ nume, email, plan }).then((result) => {
      if (!result.ok) {
        console.warn("[TriggerEmail] send failed:", result.error);
      }
    });
  }, [plan]);

  return null;
}
