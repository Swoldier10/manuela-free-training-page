"use client";

import { useEffect, useRef } from "react";
import { updateLeadPlan } from "@/app/actions/leads";
import type { Plan } from "@/lib/plans";
import { getLeadCache } from "@/lib/storage";

type Props = { plan: Plan | null };

export function TriggerPlanUpdate({ plan }: Props) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    const cached = getLeadCache();
    if (!cached) return;

    updateLeadPlan({ nume: cached.nume, email: cached.email, plan }).then(
      (result) => {
        if (!result.ok) {
          console.warn("[TriggerPlanUpdate] update failed:", result.error);
        }
      },
    );
  }, [plan]);

  return null;
}
