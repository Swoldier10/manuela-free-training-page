"use client";

import { useEffect, useRef } from "react";
import { sendRecipesEmail } from "@/app/actions/leads";
import { getLeadCache, markRecipesSent, wasRecipesSent } from "@/lib/storage";

export function TriggerSendRecipes() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    const cached = getLeadCache();
    if (!cached) return;
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
  }, []);

  return null;
}
