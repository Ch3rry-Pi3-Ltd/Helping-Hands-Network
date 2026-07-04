# Healing Hands Network website audit

Reviewed 3 July 2026. This audit covers the public website only. No live systems were changed.

## Current structure

The live navigation contains eight items:

1. Home
2. About Us
3. Overseas Projects
4. UK Projects
5. Support Us
6. Members resources
7. Events
8. Contact Us

The strongest content is the charity's origin story, its long-running work in Sarajevo, support for UK veterans and service families, Ukraine aid, volunteer testimonials, and practical membership and donation forms.

## Identity to preserve

- A calm, personal and volunteer-led tone rather than a corporate voice.
- The established hands-and-doves logo, pale blue/teal palette, and serif-led editorial feel.
- The core mission: relieving the mental, physical and emotional after-effects of war.
- The focus on Bosnia and Herzegovina, Ukraine, and UK veterans.
- First-person accounts from clients, coordinators and volunteers.
- Charity number 1080268 and the established general contact details.

## Key findings

### Navigation and content

- Bosnia and Ukraine are combined on one long “Overseas Projects” page, making each programme harder to understand and share.
- Volunteering is buried inside “Support Us”, despite being central to how the charity works.
- “Members resources” is mostly old downloadable forms and a reading list; it is not a strong primary navigation destination.
- The Events page still advertises a 2023 AGM and a 2019 workshop.
- Several figures and operational details are dated and need confirmation before publication, including treatment totals, volunteer costs, locations, and project partners.

### Donation and support

- The home page embeds a GoFundMe campaign for Ukraine.
- Public pages include membership, standing order, Gift Aid, sponsorship, donation and collecting-tin forms.
- A legacy Virgin Money Giving link remains in the resources page even though that service has closed.
- A public JustGiving Ukraine campaign exists, but it is not clearly linked from the live navigation and should be confirmed by the charity before becoming the primary donation route.
- GivingLottery and other routes named in the project brief were not confirmed on the current public site.

### Usability and mobile

- The layout is fixed at 960px and does not provide a modern responsive navigation or content flow.
- Fixed-width videos, multi-column sections and image galleries overflow or shrink poorly on small screens.
- Important actions compete with old social widgets and embedded fundraising content.
- Page hierarchy is inconsistent, with repeated slogans and project links interrupting the reading flow.

### Accessibility

- Many content images have missing or empty alternative text.
- Text is often small and light grey, reducing readability and contrast.
- Hover-driven social panels are difficult or impossible to use by keyboard or touch.
- Custom elements, old XHTML markup and layout-oriented HTML weaken semantic structure.
- Focus states, a skip link, clear form labels and a reliable mobile menu are absent.

### SEO and technical health

- Page titles are generic and metadata is inconsistent.
- Open Graph URLs and images use insecure `http` links.
- Heading structure is inconsistent and some visible headings are not semantic headings.
- The site serves an invalid/self-signed TLS certificate at review time.
- Old jQuery, mixed-content embeds and obsolete social scripts create reliability and security issues.
- Character encoding issues produce broken punctuation on Ukraine content.
- At least one email link is malformed rather than using `mailto:`.

## Recommended structure

- Home
- About
- Our work
  - Bosnia and Herzegovina
  - Ukraine Aid
  - UK Veterans
- Volunteer
- Support Us
- Updates
- Contact

Members' documents can live within Support Us instead of the primary navigation. Events can become time-stamped Updates so old information is visibly archived rather than appearing current.

## Build recommendations

- Use reusable, semantic Next.js components with content held in local TypeScript data files.
- Keep the existing logo and a softened teal, sky, ink and warm-paper palette.
- Create one clear primary action (“Donate”) and one secondary action (“Volunteer”).
- Use responsive image treatment, readable type sizes, visible focus states, a skip link and a keyboard-accessible mobile menu.
- Give each programme a concise landing page with the original meaning preserved and any unverified facts clearly marked for confirmation.
- Link only to confirmed public third-party routes. Mark the current JustGiving, GoFundMe, standing order and Gift Aid options as requiring stakeholder confirmation.
- Add page-specific metadata, Open Graph data, robots.txt and sitemap generation.
- Remove old embeds, mixed-content scripts and unnecessary trackers.
