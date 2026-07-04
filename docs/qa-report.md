# Website QA report

Reviewed: 4 July 2026.

This report records the automated and visual checks completed against the
production build. It does not replace stakeholder content approval or testing
with people who use assistive technology.

## Build checks

- `npm run lint`
- `npm run typecheck`
- `NEXT_PUBLIC_SITE_URL=https://helping-hands-network.vercel.app npm run build`

All three checks passed.

## Responsive and structural checks

All ten public pages were rendered in Chrome at:

- Mobile: 390 × 844 CSS pixels
- Tablet: 768 × 1024 CSS pixels
- Desktop: 1440 × 1000 CSS pixels

For every route, the checks confirmed:

- No horizontal page overflow.
- One `h1`.
- No skipped heading levels.
- Named links and controls.
- An `alt` attribute on every image.
- Header, main and footer landmarks.
- A working skip-link target.

The homepage and open mobile menu were also visually inspected at a true
390-pixel viewport, and the homepage was inspected at desktop width.

## Keyboard checks

- The skip link is the first tab stop.
- The brand link, mobile-menu summary and page links receive visible focus.
- Focus indicators use a two-colour treatment that remains visible against
  light and dark backgrounds.
- The native mobile-menu summary opens with Enter.
- Menu links and the Donate action are available when the menu is open.

## Automated accessibility checks

axe-core was run on all ten pages at mobile and desktop widths. The final run
reported zero violations.

The initial run identified shared colour-contrast failures and a heading-level
jump on the Our Work page. Those findings were corrected before the final run.

## Metadata checks

The built homepage output contains:

- An absolute title without duplicated site-name text.
- A canonical URL using the Vercel site URL.
- Open Graph title, description, URL and image fields.
- Twitter card title, description and image fields.

## Changes made during QA

- Added homepage-specific canonical and social-sharing metadata.
- Added a section-level heading for the project cards on Our Work.
- Corrected muted text colours on warm, teal and sky backgrounds.
- Corrected secondary-button contrast inside dark CTA bands.
- Corrected section-introduction styling so it does not override eyebrow text.
- Strengthened visible focus indicators.

## Remaining manual checks

- Test with at least one real screen reader, such as NVDA, VoiceOver or
  TalkBack.
- Ask the charity to approve image usage, captions and alternative-text
  meaning.
- Complete stakeholder review of all copy and calls to action.
- Confirm external fundraising routes without completing a financial
  transaction.
- Repeat a short smoke test after the final domain is connected.
