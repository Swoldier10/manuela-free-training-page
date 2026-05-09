// Shared Meta-tracking constants. Imported by both client (Pixel) and
// server (Conversions API) code paths so they always reference the same
// pixel ID, currency, and per-plan price.

export const META_PIXEL_ID = "1465057615300722";
export const META_CURRENCY = "RON";

export const PLAN_VALUE = {
  upsell: 49,
  downsell: 39,
} as const;

export type MetaEventName =
  | "Lead"
  | "ViewContent"
  | "InitiateCheckout"
  | "Purchase";
