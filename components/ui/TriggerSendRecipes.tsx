"use client";

import { useEffect, useRef } from "react";
import { sendRecipesEmail } from "@/app/actions/leads";
import { PLAN_VALUE } from "@/lib/meta";
import type { Plan } from "@/lib/plans";
import {
  getLeadCache,
  markPurchaseSent,
  markRecipesSent,
  wasPurchaseSent,
  wasRecipesSent,
} from "@/lib/storage";
import { trackEvent } from "@/lib/track";

type Props = {
  plan: Plan;
};

export function TriggerSendRecipes({ plan }: Props) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    const cached = getLeadCache();
    if (!cached) return;

    if (!wasPurchaseSent(cached.email)) {
      trackEvent({
        event: "Purchase",
        value: PLAN_VALUE[plan],
        contentName: plan === "upsell" ? "Upsell 49" : "Downsell 39",
        lead: { nume: cached.nume, email: cached.email },
      });
      markPurchaseSent(cached.email);
    }

    if (wasRecipesSent(cached.email)) return;

    sendRecipesEmail({ nume: cached.nume, email: cached.email }).then(
      (result) => {
        if (result.ok) {
          markRecipesSent(cached.email);
        } else {
          console.warn("[TriggerSendRecipes] failed:", result.error);
        }
      },
    );
  }, [plan]);

  return null;
}
