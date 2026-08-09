# Technical SEO Audit — eatyourneighbor.com

All findings below were verified directly against the live site (curl/HTTP
headers, rendered HTML, and browser DOM inspection), not guessed.

## 🔴 Critical

### 1. No `robots.txt` (404)
`https://eatyourneighbor.com/robots.txt` returns a 404. Crawlers have no
explicit sitemap pointer and no explicit crawl guidance — not fatal (Google
will crawl anyway), but it's a missed, free opportunity to point crawlers at
the sitemap and deliberately allow AI crawlers, which matters for a site
whose SEO strategy explicitly targets AI-answer citation.
**Status: Fixed** — added `app/robots.ts`.

### 2. No `sitemap.xml` (404)
Same — 404. With only 4 real pages right now this isn't costing much yet,
but it should exist before the blog grows, and it costs nothing to add now.
**Status: Fixed** — added `app/sitemap.ts`, auto-generated from `lib/posts.ts`
so every new post is included automatically.

### 3. Homepage has zero structured data
`curl https://eatyourneighbor.com/` contains no `application/ld+json` at
all. The blog posts have Article/FAQPage/Product schema, but the homepage —
the page most likely to get linked to and cited — has none.
**Status: Fixed** — added Organization + WebSite JSON-LD to the root layout.

## 🟠 High priority

### 4. Meta titles over 60 characters (all 4 real pages affected)
| Page | Length | Title |
|---|---|---|
| Homepage | 68 | "Eat Your Neighbor — Your neighbors are terrible. Time to eat them." |
| `/blog/games-like-exploding-kittens` | 85 | "9 Games Like Exploding Kittens (Ranked by How Chaotic They Get) — Eat Your Neighbor" |
| `/blog/dark-humor-card-games-for-adults` | 102 | "7 Dark Humor Card Games for Adults Who Are Done With "Family-Friendly" — Eat Your Neighbor" |
| `/blog/eat-your-neighbor-kickstarter-faq` | 93 | "Eat Your Neighbor on Kickstarter: Everything to Know Before You Back It — Eat Your Neighbor" |

Titles over ~60 characters get truncated with "..." in Google search
results, which cuts off the actual hook/keyword on all three blog posts.
**Status: Fixed** — all four rewritten under 60 characters (see tech-fixes
section below for exact new titles).

### 5. Missing security headers
`curl -I` on the homepage shows only a minimal `Content-Security-Policy:
upgrade-insecure-requests` (from Hostinger's proxy layer, not a real CSP) and
no `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`,
`Referrer-Policy`, or `Permissions-Policy`. Also leaking `X-Powered-By:
Next.js`, a minor info-disclosure signal.

Security headers aren't a direct Google ranking factor, but Chrome's
Lighthouse "Best Practices" score (which feeds indirectly into how Google
and third-party audits assess site trust/quality) checks for several of
these, and it's a one-line fix.
**Status: Fixed** — added via `next.config.mjs` `headers()` and disabled
`X-Powered-By`.

## 🟡 Medium priority

### 6. Core Web Vitals — data unavailable this session
PageSpeed Insights' public API returned `429 RESOURCE_EXHAUSTED` (shared
daily quota exceeded, no API key configured), and the pagespeed.web.dev web
UI hung on "Running analysis" for the same underlying reason. **I'm not
reporting LCP/INP/CLS numbers because I don't have real data** — running
this again with a Google API key, or manually via
[PageSpeed Insights](https://pagespeed.web.dev/analysis?url=https://eatyourneighbor.com)
once quota resets, is the next step. Directionally: the homepage ships
~142 kB of First Load JS (confirmed via local production build), which is
reasonable for a Next.js site with Framer Motion, and images are already
served through `next/image` with AVIF/WebP — so there's no obvious red flag,
but this should be confirmed with real numbers before treating it as settled.

### 7. AI-crawler access wasn't previously deliberate (no robots.txt existed)
Since there was no robots.txt at all, there was no explicit policy either
way for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, or CCBot — they
were implicitly allowed by default (no robots.txt = no restrictions), which
happens to align with the site's own SEO content strategy (explicitly
targeting AI-answer citation per `seo/serp-analysis.md`).
**Status: Fixed** — made this explicit and deliberate in the new
`app/robots.ts` rather than leaving it to default/implicit behavior.

## 🟢 Low priority / not fixed (needs your input or isn't safely automatable)

### 8. Blog index (`/blog`) has no structured data
Low priority — a `CollectionPage`/`Blog` schema here is optional and lower
value than what's already fixed. Flagging for later, not fixing now to
avoid scope creep.

### 9. No canonical URLs set — caused a live duplicate-content issue
Previously assessed as no risk, but that was wrong: `eatyourneighbor.com`
and `www.eatyourneighbor.com` both resolve with `200 OK` and byte-identical
HTML (no host-level redirect existed between them), and no page emitted a
`<link rel="canonical">`. Google Search Console flagged this as "Duplicate
without user-selected canonical" across indexed pages.
**Status: Fixed** — added a permanent `www` → apex redirect in
`next.config.mjs` `redirects()`, and set explicit `alternates.canonical` on
the homepage, `/blog`, and every `/blog/[slug]` page (resolved against
`metadataBase` in the root layout). Re-verify in Search Console after the
next crawl that affected URLs move to "Indexed."

### 10. `og:image`/`twitter:image` point at a JPG, not an OG-optimized 1200x630 image
`game-board.jpg` is used for social previews site-wide, including on blog
posts (all 3 posts inherit the root layout's OG image rather than having
their own). Not broken, but every shared link currently looks identical on
social media regardless of which page is shared. **Left unfixed** — this
needs actual per-post artwork/design decisions I can't make for you; happy
to wire in per-post OG images once you have (or want me to generate) art
for each.

### 11. Redirects / broken links / orphan pages
Checked all internal links referenced across the homepage and blog posts
(`/`, `/blog`, `/blog/[slug]`, `/#rules`, `/#cards`) — all resolve correctly,
no redirect chains, no 404s, no orphan pages (every blog post is linked from
`/blog`, and `/blog` is linked from the footer on every page).
**No action needed.**

## Security header config applied (for reference)

Set via `next.config.mjs` `headers()`, applied to all routes:

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Note: Hostinger's proxy (`hcdn`) sits in front of the app and could
theoretically strip or override headers our app sets — this needs to be
re-verified against the live site after deploy (same as we had to do with
the earlier Cache-Control fix).
