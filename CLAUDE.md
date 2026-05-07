# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start dev server (Next 16, Turbopack) on http://localhost:3000
- `npm run build` / `npm run start` — production build and serve
- `npm run lint` — ESLint (flat config, `eslint-config-next`)

There is no test runner configured in this repo. Don't fabricate one.

`.env.local` must define `LEAD_API_BASE_URL` (downstream lead API host, e.g. `https://api.example.com` — code appends `/api/register-lead` and `/api/update-lead`), `LEAD_API_KEY` (server-only secret sent as `X-API-Key`; must never reach the client bundle), and `PLAN_UPSELL_ID` + `PLAN_DOWNSELL_ID` (opaque IDs that identify the funnel branch the buyer came from when Stripe redirects to `/thank-you?p=…`); without them `env()` throws on first use. `NEXT_PUBLIC_SITE_URL` is optional with a sensible default.

## Versions worth knowing

`package.json` is the source of truth, not `README.md`:

- Next.js **16.2.4** (App Router). README says "Next.js 15" — it's stale. AGENTS.md applies: read `node_modules/next/dist/docs/` before assuming an API exists.
- React **19.2.4**, TypeScript 5, Tailwind CSS **v4** (PostCSS plugin).
- Path alias: `@/*` → repo root (see `tsconfig.json`).

## Architecture

Single-page Romanian-language lead-capture funnel. The app captures `{ nume, email }` on the hero, registers the lead with a downstream service on submit, and updates that lead's `dietary_plan` tag once Stripe redirects them to `/thank-you`. Both `/upsell` (49 lei) and `/downsell` (39 lei) sell the same 95-recipes book; only the price and funnel position differ. Any follow-up email is the receiving service's job.

**Page composition** — `app/page.tsx` stitches together fixed-order sections from `components/sections/`. The page is server-rendered; only pieces that need state (`LeadForm`, `Reveal`, `CountdownTimer`) are `"use client"`. Reordering the funnel = editing `page.tsx`.

**Submission flow** — `LeadForm` (RHF + zod, client) collects `{ nume, email }`, calls the `registerLead` server action (`app/actions/leads.ts`), and on success stashes both fields in `sessionStorage` and routes to `/upsell`. On failure it surfaces a Romanian error inline and stays put. Validation lives in `subscribeSchema` / `registerLeadSchema` (`lib/schema.ts`); the form is the only consumer.

**Lead-registration call (`POST /api/register-lead`)** — Fired from `LeadForm.onSubmit` via the `registerLead` server action (`app/actions/leads.ts`) — the only outbound call this app makes. Per-IP rate limit (5 req / 10 min via `lib/rateLimit.ts`) → `registerLeadSchema` parse → `fetch(${LEAD_API_BASE_URL}/api/register-lead, { POST, headers: X-API-Key, body: { name, email } })`. The upstream owns the welcome email + follow-up sequences. Status mapping: `201` and `422` ("already registered") both → `{ ok: true }` so refreshes/double-submits proceed to the offer page; `429` → "prea multe încercări"; everything else → generic error. All user-facing error strings are Romanian — keep them that way.

**Thank-you copy** — `/thank-you` reads `?p=` and passes it to `resolvePlan()` (`lib/plans.ts`). When it matches `PLAN_UPSELL_ID` or `PLAN_DOWNSELL_ID` the page renders the paid-completion body (workouts + recipes); otherwise it renders the free-workouts body.

**Recipes-email dispatch (`POST /api/send-recipes`)** — On the paid branch only (`plan != null`), `/thank-you` mounts `components/ui/TriggerSendRecipes.tsx`. The trigger reads `nume`/`email` from the lead cache (`getLeadCache()` in `lib/storage.ts`), checks `wasRecipesSent(email)` against the `mv:recipes-sent` localStorage map, and calls the `sendRecipesEmail` server action (`app/actions/leads.ts`) only if not already sent. Per-IP rate limit (5 req / 10 min on its own `send-recipes:` bucket) → `sendRecipesSchema` parse → `fetch(${LEAD_API_BASE_URL}/api/send-recipes, { POST, headers: X-API-Key, body: { name, email } })`. Status mapping: `202` → `{ ok: true }`; `422` → `{ ok: true }` (terminal — upstream-invalid email, mark sent so we stop retrying); `429` → rate-limit error (transient — client doesn't mark, retries next visit); `401`/`403`/other → generic error (transient). The client only marks the email sent when `result.ok === true`. The dedupe is best-effort: cleared localStorage / new browsers will re-fire, but the upstream's 5/min/IP cap (shared with `/api/register-lead`) is the hard backstop.

**Rate limiter caveat** — `lib/rateLimit.ts` is an in-memory `Map`. It resets on every cold start and does not span instances. Fine for a single long-lived Node server; a serverless deployment that scales horizontally needs a shared store (Redis/Upstash) before this is meaningful protection.

**Styling** — Tailwind v4 with **no `tailwind.config.*` file**. Design tokens (olive/cream/gold scales, font families) live in `app/globals.css` under `@theme { ... }`; that's where new color/font tokens go. Token names retain `olive`/`cream` for compatibility but the actual palette is dark-gym (near-black surfaces, off-white text, gold accent). Custom utilities (`.shadow-gold`, `.glow-gold`, `.texture-grain`, `.shimmer`, etc.) are also defined there.

**Fonts** — self-hosted via `next/font/google` in `app/layout.tsx` (Inter, Playfair Display, Caveat, Fraunces-italic). They expose CSS vars (`--font-inter`, `--font-playfair`, …) consumed by the `--font-*` tokens in `globals.css`. Add a font in both places or it won't resolve.

**Motion** — `components/motion/Reveal.tsx` wraps content in a framer-motion fade/translate that honors `prefers-reduced-motion` (skips the animation entirely when set). Prefer `Reveal` over hand-rolling scroll animations so reduced-motion stays consistent.

**Locale** — `<html lang="ro">` and all copy/error messages are Romanian. New strings should be Romanian unless explicitly told otherwise.
