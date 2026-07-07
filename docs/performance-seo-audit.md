# Performance and SEO audit

Reviewed: 7 July 2026.

Target:
[https://helping-hands-network.vercel.app/](https://helping-hands-network.vercel.app/)

Commit audited: `e0cf2e6` — `Improve homepage audit findings`.

This audit records technical performance, accessibility, best-practice and SEO
checks against the deployed Vercel prototype. It does not confirm the factual
accuracy of charity content, donation routes, contact details or image
permissions.

## Lighthouse production result

Run against the live Vercel URL after deployment:

| Category | Score |
| --- | ---: |
| Performance | 99 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Key metrics:

| Metric | Result |
| --- | ---: |
| First Contentful Paint | 1.2 s |
| Largest Contentful Paint | 2.0 s |
| Total Blocking Time | 60 ms |
| Cumulative Layout Shift | 0 |
| Speed Index | 2.3 s |

## Fixes completed

The first production Lighthouse pass scored 98 / 100 / 100 / 92 and identified
three repeated `Learn more` links on the homepage project cards. Those links
now include the programme name, improving SEO and screen-reader context.

The header brand link and mobile-menu summary also had redundant `aria-label`
values that did not match the visible text closely enough for Lighthouse's
label-name check. Those labels were removed so the accessible name comes from
the visible text.

The header logo image dimensions were aligned with the rendered size, reducing
the image-delivery warning from approximately 19 KiB to approximately 6 KiB.

## Remaining technical notes

The remaining Lighthouse performance suggestions are minor and are not launch
blockers:

- approximately 6 KiB of possible logo-image saving;
- small framework and analytics JavaScript suggestions reported by Lighthouse;
- a short render-blocking request estimate of approximately 30 ms.

These are acceptable for the prototype and should be reconsidered only if the
site grows substantially or if future real-user analytics show performance
problems.

## Commands used

- `npm run lint`
- `npm run typecheck`
- `NEXT_PUBLIC_SITE_URL=https://helping-hands-network.vercel.app npm run build`
- `npm run test:e2e`
- `lighthouse https://helping-hands-network.vercel.app/ --only-categories=performance,accessibility,best-practices,seo`

