# Eat Your Neighbor — Pre-Launch Landing Page

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run locally

```
npm install
npm run dev
```

## Email signups (Mailchimp)

Copy `.env.example` to `.env.local` and fill in:

- `MAILCHIMP_API_KEY` — Account > Extras > API keys
- `MAILCHIMP_SERVER_PREFIX` — the suffix after the dash in your API key (e.g. `us21`)
- `MAILCHIMP_AUDIENCE_ID` — Audience > Settings > Audience name and defaults

Without these set, the signup form still works end-to-end but returns a friendly
error instead of saving the email.

## Swapping art

Source art lives in `public/images/`. Replace a file in place (same filename) to
update it everywhere it's used, or update the paths in `components/Hero.tsx`,
`components/About.tsx`, and `components/CardGrid.tsx`.
