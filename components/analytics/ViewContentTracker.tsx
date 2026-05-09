"use client";

import { useEffect, useRef } from "react";
import { PLAN_VALUE } from "@/lib/meta";
import { trackEvent } from "@/lib/track";

type Props = {
  plan: "upsell" | "downsell";
  contentName?: string;
};

export function ViewContentTracker({ plan, contentName }: Props) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    trackEvent({
      event: "ViewContent",
      value: PLAN_VALUE[plan],
      contentName: contentName ?? (plan === "upsell" ? "Upsell 49" : "Downsell 39"),
    });
  }, [plan, contentName]);

  return null;
}
