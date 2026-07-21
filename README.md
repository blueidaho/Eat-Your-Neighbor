# Eat Your Neighbor — Pre-Launch Landing Page

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run locally

```
npm install
npm run dev
```

## Email signups (Hostinger SMTP)

Copy `.env.example` to `.env.local` and fill in:

- `SMTP_USER` — your Hostinger mailbox, e.g. `admin@eatyourneighbor.com`
- `SMTP_PASSWORD` — that mailbox's password (Hostinger > Emails > Manage)
- `SMTP_HOST` / `SMTP_PORT` — defaults already match Hostinger's standard SMTP settings
- `NOTIFY_EMAIL` — optional, where signup notifications land (defaults to `SMTP_USER`)

Every signup sends a notification email to `NOTIFY_EMAIL` with the visitor's
address as the reply-to. Without these vars set, the form still works
end-to-end but returns a friendly error instead of sending the email.

## Swapping art

Source art lives in `public/images/`. Replace a file in place (same filename) to
update it everywhere it's used, or update the paths in `components/Hero.tsx`,
`components/About.tsx`, and `components/CardGrid.tsx`.
