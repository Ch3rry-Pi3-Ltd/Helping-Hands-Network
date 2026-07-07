# Healing Hands Network website prototype

A separate, modern website prototype for Healing Hands Network. It is built with Next.js, TypeScript and Tailwind CSS and is ready to deploy to Vercel.

This project does not connect to or modify the current WordPress website, hosting, DNS, email or payment systems.

## Local development

Requirements:

- Node.js 20.9 or newer
- npm

Install and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful checks:

```bash
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

The browser suite expects a completed production build. It starts that build
locally and checks every public page for internal-link failures, detectable
accessibility violations, the custom 404 page and required security headers.
GitHub Actions runs the complete sequence automatically for pull requests and
pushes to `main`.

## Project structure

```text
src/
  app/                 Pages, metadata, sitemap and global styles
  components/          Reusable interface components
  content/site.ts      Shared navigation, contact, project and support content
  lib/metadata.ts      Page metadata helper
public/images/         Images reused from the current public website
AUDIT.md               Review of the existing public website
```

The main content to update is in `src/content/site.ts`. Longer page copy lives beside its page in `src/app`. This keeps routine edits possible without a database or WordPress connection.

## Documentation

- [`docs/project-brief.md`](docs/project-brief.md) — the agreed project scope
  and requirements.
- [`docs/HHN - Digital, Data, and AI Opportunity Review.pdf`](<docs/HHN - Digital, Data, and AI Opportunity Review.pdf>) —
  the proposal shared with the charity and an approximate guide for priorities
  beyond the website launch.
- [`AUDIT.md`](AUDIT.md) — findings from the review of the existing public
  website.
- [`docs/launch-checklist.md`](docs/launch-checklist.md) — the authoritative
  status and remaining-work checklist.
- [`docs/stakeholder-confirmations.md`](docs/stakeholder-confirmations.md) —
  the decision and content questions for Susan and the trustees.
- [`docs/qa-report.md`](docs/qa-report.md) — responsive, keyboard, metadata and
  automated accessibility test results.
- [`docs/performance-seo-audit.md`](docs/performance-seo-audit.md) —
  Lighthouse performance, accessibility, best-practices and SEO baseline.
- [`docs/proposal-roadmap.md`](docs/proposal-roadmap.md) — the proposal ideas
  turned into staged, approval-aware next steps.
- [`docs/susan-review-pack.md`](docs/susan-review-pack.md) — a plain-English
  prototype review pack for Susan and the trustees.
- [`docs/impact-reporting-template.md`](docs/impact-reporting-template.md) —
  a safe structure for collecting future impact updates.
- [`docs/donation-route-map.md`](docs/donation-route-map.md) — current giving
  routes and the confirmations needed before promotion.
- [`docs/content-maintenance-guide.md`](docs/content-maintenance-guide.md) —
  the reviewed workflow for future website updates.
- [`docs/external-link-audit.md`](docs/external-link-audit.md) — the latest
  reachability and destination review for public links.
- [`docs/launch-and-rollback-plan.md`](docs/launch-and-rollback-plan.md) — the
  proposed custom-domain cutover and recovery procedure.
- [`docs/handover-checklist.md`](docs/handover-checklist.md) — account,
  ownership, approval and operational readiness checks.

## Pages

- `/` — Home
- `/about` — About the charity
- `/our-work` — Project overview
- `/our-work/bosnia-and-herzegovina`
- `/our-work/ukraine`
- `/our-work/uk-veterans`
- `/volunteer`
- `/support-us`
- `/updates`
- `/contact`
- `/privacy`

## Content status

The prototype preserves the meaning and tone of the existing site while removing visibly stale figures and events. Yellow notes identify details that need stakeholder confirmation. All remaining confirmations, implementation work, quality checks and deployment steps are tracked in the [launch checklist](docs/launch-checklist.md).

No unverified statistics, testimonials or payment details have been invented.

## Images

The logo and photographs were downloaded from the charity's current public website for this parallel prototype. Ownership, consent, preferred captions and alt text should be confirmed before public launch.

## Environment

Copy the example environment file if a production URL needs to be tested locally:

```bash
cp .env.example .env.local
```

Set:

```text
NEXT_PUBLIC_SITE_URL=https://your-approved-domain.example
```

This value is used for canonical URLs, Open Graph metadata, `robots.txt` and `sitemap.xml`.

## Deploying to Vercel

1. Push this project to an approved Git repository.
2. Import the repository into Vercel.
3. Keep the detected framework preset as **Next.js**.
4. Add `NEXT_PUBLIC_SITE_URL` with the approved preview or production URL.
5. Deploy and review the generated Vercel preview.
6. Do not connect the charity's live domain until the site, content and support routes have been approved.

Vercel will use:

- Build command: `npm run build`
- Output: Next.js default
- Install command: `npm install`

## Safety

This remains a parallel prototype. Domain, DNS, Easyspace hosting, WordPress, email and live fundraising services are intentionally outside the project.
