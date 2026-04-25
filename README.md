# Manuela Vlașin — Landing "Antrenamente Gratuite"

Lead-capture funnel for two free 15-minute bodyweight workouts (abdomen + fesieri), with two paid upsell paths (`/offer-14-day`, `/offer-7-day`) and a three-state thank-you page. Built for a Romanian audience.

## Stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS v4** with custom olive/cream/gold brand tokens
- Outbound HTTP webhook to a downstream lead-registration service (no email sending in-app)
- **react-hook-form** + **zod** for form validation
- **framer-motion** for reveal animations
- **Lucide React** for icons
- **next/font** self-hosting **Playfair Display** + **Inter**

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in LEAD_WEBHOOK_URL and the PLAN_*_IDs
npm run dev
```

Visit <http://localhost:3000>.

## Environment variables

See `.env.example`. Validated lazily by `lib/env.ts` on first use — the first request that needs an env var throws if anything is missing or malformed.

| Key | Purpose |
| --- | --- |
| `LEAD_WEBHOOK_URL` | **Required.** HTTPS endpoint that receives `POST { name, email }` when a visitor lands on `/thank-you`. The downstream service owns lead storage and any follow-up email. |
| `PLAN_14_ID` | **Required.** Opaque 32-char hex used as the `?p=` value when redirecting to `/thank-you` after the 14-day plan checkout. Generate with `node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"`. Must match the success URL configured in the Stripe Payment Link. |
| `PLAN_7_ID` | **Required.** Same shape as `PLAN_14_ID`, used for the 7-day plan. |
| `NEXT_PUBLIC_SITE_URL` | Public origin used in metadata. Set to the real production URL on deploy. |

## Funnel

```
/                    Hero + lead form (name + email → sessionStorage; navigates)
/offer-14-day        14-day nutrition plan upsell (89 lei)
/offer-7-day         7-day nutrition plan downsell (39 lei)
/thank-you?p=…       Renders one of three completion states based on the
                     opaque plan ID; on mount, posts { name, email } to
                     LEAD_WEBHOOK_URL via the sendThankYouEmail server action.
```

The Stripe Payment Link's success URL must be `…/thank-you?p=$PLAN_*_ID` so the right thank-you copy renders.

## Demo video on the hero

The hero embeds `public/videos/intro.mp4` with `public/images/video-poster.jpg` as the poster (see `components/ui/VideoPlayer.tsx`). Swap either file in place to replace.

## Brand tokens

Defined in `app/globals.css` under `@theme`:

- `--color-olive-{950..500}` — backgrounds, surfaces
- `--color-cream-{50..300}` — typography on dark
- `--color-gold-{600..300}` — accents, CTAs, focus rings
- `--font-display` — Playfair Display (headings)
- `--font-sans` — Inter (body, UI)

## File map

```
app/
  layout.tsx                 Fonts + metadata + Romanian locale
  page.tsx                   Hero + funnel sections
  offer-14-day/page.tsx      14-day upsell
  offer-7-day/page.tsx       7-day downsell
  thank-you/page.tsx         Three-case completion page
  thank-you/actions.ts       sendThankYouEmail server action — POSTs to
                             LEAD_WEBHOOK_URL with { name, email }
  globals.css                Brand tokens + utility classes
  icon.tsx                   Dynamic favicon (VM monogram)
  opengraph-image.tsx        Dynamic OG share card
components/
  sections/                  Landing-page sections
  ui/                        LeadForm, CtaButton, CountdownTimer, Logo,
                             VideoPlayer, Greeting (sessionStorage-backed),
                             TriggerEmail (fires the action on /thank-you)
  motion/Reveal.tsx          prefers-reduced-motion-aware scroll reveal
lib/
  env.ts                     zod-validated server env (lazy at first use)
  schema.ts                  Shared zod schema (client + server)
  plans.ts                   Plan ID resolver + Stripe-success URL builders
  storage.ts                 sessionStorage / localStorage key constants
  rateLimit.ts               In-memory per-IP limiter (5 req / 10 min) —
                             swap for Upstash before scaling
  utils.ts                   cn()
public/
  images/                    logo-vm.png, video-poster.jpg, meal-plan-*.jpg
  videos/intro.mp4           Hero presentation video
  docs/                      Plan PDFs (delivered by the downstream service)
```

## Production build

```bash
npm run build
npm run start
```
