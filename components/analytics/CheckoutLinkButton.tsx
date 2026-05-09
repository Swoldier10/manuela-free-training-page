"use client";

import { ReactNode } from "react";
import { PLAN_VALUE } from "@/lib/meta";
import { trackEvent } from "@/lib/track";
import { getLeadCache } from "@/lib/storage";

type Props = {
  url: string;
  plan: "upsell" | "downsell";
  className?: string;
  children: ReactNode;
};

export function CheckoutLinkButton({ url, plan, className, children }: Props) {
  function handleClick() {
    const lead = getLeadCache();
    trackEvent({
      event: "InitiateCheckout",
      value: PLAN_VALUE[plan],
      contentName: plan === "upsell" ? "Upsell 49" : "Downsell 39",
      ...(lead ? { lead: { nume: lead.nume, email: lead.email } } : {}),
    });
    // No preventDefault — the anchor's own navigation continues. The
    // /api/meta-capi POST uses keepalive: true so it survives the
    // navigation away to Stripe.
  }

  return (
    <a href={url} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
