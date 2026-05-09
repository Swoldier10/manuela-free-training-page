"use client";

import { useEffect, useRef } from "react";
import { getLeadCache, markLeadSent, wasLeadSent } from "@/lib/storage";
import { trackEvent } from "@/lib/track";

// Mounts on the FREE /thank-you path (no `?p=`). A user reaches this page
// only after submitting the hero form and declining both the upsell and
// downsell, so it's the terminal "qualified lead" moment in the funnel.
// Email-keyed localStorage dedupe prevents refires on refresh.
export function TriggerLead() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    const cached = getLeadCache();
    if (!cached) return;
    if (wasLeadSent(cached.email)) return;

    trackEvent({
      event: "Lead",
      lead: { nume: cached.nume, email: cached.email },
    });
    markLeadSent(cached.email);
  }, []);

  return null;
}
