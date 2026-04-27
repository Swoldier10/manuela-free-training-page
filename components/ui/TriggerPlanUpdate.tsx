"use client";

import { useEffect, useRef } from "react";
import { updateLeadPlan } from "@/app/actions/leads";
import type { Plan } from "@/lib/plans";
import { STORAGE_KEYS } from "@/lib/storage";

type Props = { plan: Plan | null };

export function TriggerPlanUpdate({ plan }: Props) {
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

    updateLeadPlan({ nume, email, plan }).then((result) => {
      if (!result.ok) {
        console.warn("[TriggerPlanUpdate] update failed:", result.error);
      }
    });
  }, [plan]);

  return null;
}
