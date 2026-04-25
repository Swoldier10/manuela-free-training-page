// Single source of truth for browser-storage keys used across the funnel.
// Bumping any value invalidates existing client state, so do it deliberately.

export const STORAGE_KEYS = {
  /** sessionStorage — first name captured at form submit. */
  nume: "mv:nume",
  /** sessionStorage — email captured at form submit. */
  email: "mv:email",
} as const;
