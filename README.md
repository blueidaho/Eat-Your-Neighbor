# Eat Your Neighbor — Pre-Launch Landing Page

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run locally

```
npm install
npm run dev
```

## Email signups (MailerLite + Hostinger SMTP)

Copy `.env.example` to `.env.local` and fill in:

- `MAILERLITE_API_KEY` — MailerLite dashboard > account icon > Integrations > API > Generate new token
- `MAILERLITE_GROUP_ID` — optional, adds subscribers to a specific MailerLite group
- `SMTP_USER` / `SMTP_PASSWORD` — your Hostinger mailbox, for a best-effort notification email
- `SMTP_HOST` / `SMTP_PORT` — defaults already match Hostinger's standard SMTP settings
- `NOTIFY_EMAIL` — optional, where signup notifications land (defaults to `SMTP_USER`)

Every signup is added to your MailerLite list (the source of truth — export,
segment, or mass-email from there) and also sends a best-effort notification
email to `NOTIFY_EMAIL`. Without `MAILERLITE_API_KEY` set, the form returns a
friendly error instead of subscribing anyone; the SMTP notification is
optional and won't fail the request if it's missing or fails.

## Swapping art

Source art lives in `public/images/`. Replace a file in place (same filename) to
update it everywhere it's used, or update the paths in `components/Hero.tsx`,
`components/About.tsx`, and `components/CardGrid.tsx`.
