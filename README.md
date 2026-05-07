# Manuela Vlașin — Landing "Antrenamente Gratuite"

Lead-capture funnel for two free 15-minute bodyweight workouts (abdomen + fesieri), with an upsell (`/upsell`, 49 lei) and a downsell (`/downsell`, 39 lei) — both selling the same 95-recipes book — and a unified thank-you page. Built for a Romanian audience.

## Stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS v4** with custom olive/cream/gold brand tokens
- Two outbound calls to a downstream HTTP API (lead registration on form submit; recipes-email dispatch on paid /thank-you)
- **react-hook-form** + **zod** for form validation
- **framer-motion** for reveal animations
- **Lucide React** for icons
- **next/font** self-hosting **Playfair Display** + **Inter** + **Caveat** + **Fraunces**

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in LEAD_API_BASE_URL, LEAD_API_KEY, PLAN_UPSELL_ID, PLAN_DOWNSELL_ID
npm run dev
```

Visit <http://localhost:3000>.

## Environment variables

See `.env.example`. Validated lazily by `lib/env.ts` on first use — the first request that needs an env var throws if anything is missing or malformed.

| Key | Purpose |
| --- | --- |
| `LEAD_API_BASE_URL` | **Required.** Downstream lead API host (e.g. `https://api.example.com`). The code appends `/api/register-lead` on form submit and `/api/send-recipes` on paid `/thank-you`. |
| `LEAD_API_KEY` | **Required.** Server-only secret sent as `X-API-Key`. Min 16 chars. Never prefix with `NEXT_PUBLIC_`. |
| `PLAN_UPSELL_ID` | **Required.** Opaque 32-char hex used as the `?p=` value when Stripe redirects to `/thank-you` after the upsell purchase. Generate with `node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"`. Must match the success URL configured in the upsell Stripe Payment Link. |
| `PLAN_DOWNSELL_ID` | **Required.** Same shape as `PLAN_UPSELL_ID`, used for the downsell purchase. |
| `NEXT_PUBLIC_SITE_URL` | Public origin used in metadata. Set to the real production URL on deploy. |

## Funnel

```
/                    Hero + lead form (name + email → registerLead action,
                     stashes both fields in localStorage, navigates)
/upsell              95 recipes upsell (49 lei) — Stripe Payment Link
/downsell            95 recipes downsell (39 lei) — Stripe Payment Link
/thank-you?p=…       Renders the paid-completion body when ?p= matches
                     PLAN_UPSELL_ID or PLAN_DOWNSELL_ID; without ?p= (or
                     with an unknown value) renders the free-workouts body.
                     On the paid branch, fires sendRecipesEmail once per
                     email (deduped via the mv:recipes-sent localStorage
                     map).
```

Each Stripe Payment Link's success URL must be `…/thank-you?p=$PLAN_UPSELL_ID` or `…/thank-you?p=$PLAN_DOWNSELL_ID` so the right thank-you copy renders.

## Demo video on the hero

The hero embeds `public/videos/intro.mp4` with `public/images/video-poster.png` as the poster (see `components/ui/VideoPlayer.tsx`). Swap either file in place to replace.

## Brand tokens

Defined in `app/globals.css` under `@theme`:

- `--color-olive-{950..500}` — backgrounds, surfaces (dark-gym palette)
- `--color-cream-{50..300}` — typography on dark
- `--color-gold-{600..300}` — accents, CTAs, focus rings
- `--font-display` — Playfair Display (headings)
- `--font-sans` — Inter (body, UI)
- `--font-accent` — Fraunces italic (highlight words)
- `--font-script` — Caveat (greeting line)

## File map

```
app/
  layout.tsx                 Fonts + metadata + Romanian locale
  page.tsx                   Hero + funnel sections
  upsell/page.tsx            95 recipes upsell (49 lei)
  downsell/page.tsx          95 recipes downsell (39 lei)
  thank-you/page.tsx         Unified completion page (paid / free branches)
  actions/leads.ts           registerLead + sendRecipesEmail server actions
  globals.css                Brand tokens + utility classes
  icon.tsx                   Dynamic favicon (VM monogram, edge ImageResponse)
  opengraph-image.jpg        Static OG share card (1200×630)
  opengraph-image.alt.txt    OG image alt text
  twitter-image.jpg          Static Twitter share card (1200×630)
  twitter-image.alt.txt      Twitter image alt text
components/
  sections/                  Landing-page sections (Hero, Footer, etc.)
  ui/                        LeadForm, CtaButton, CountdownTimer, VideoPlayer,
                             Greeting (sessionStorage-backed),
                             TriggerSendRecipes (paid /thank-you only)
  motion/Reveal.tsx          prefers-reduced-motion-aware scroll reveal
lib/
  env.ts                     zod-validated server env (lazy at first use)
  schema.ts                  Shared zod schemas (client + server)
  plans.ts                   Plan resolver + Stripe-success URL builders +
                             checkout URL constants
  storage.ts                 localStorage key constants + lead cache helpers
                             + recipes-sent dedupe helpers
  rateLimit.ts               In-memory per-IP limiter (5 req / 10 min) —
                             swap for Upstash before scaling
  utils.ts                   cn()
public/
  images/                    manuela-portrait.jpg, recipes-cover.jpg,
                             recipes-cover-95.jpg, video-poster.png
  videos/intro.mp4           Hero presentation video
  docs/                      Plan PDFs (delivered by the downstream service)
```

## Production build

```bash
npm run build
npm run start
```
