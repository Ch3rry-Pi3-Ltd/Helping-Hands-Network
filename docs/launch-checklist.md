# Launch checklist

This is the authoritative list of completed and outstanding work for the
Healing Hands Network website prototype.

Last reviewed: 5 July 2026.

## Status key

- `[x]` Completed in the prototype.
- `[ ]` Outstanding or awaiting confirmation.

## Prototype implementation

- [x] Audit the existing public website without changing it.
- [x] Record the audit findings and recommended structure.
- [x] Build a separate Next.js App Router application using TypeScript and
      Tailwind CSS.
- [x] Create the main pages: Home, About, Our Work, Bosnia and Herzegovina,
      Ukraine, UK Veterans, Volunteer, Support Us, Updates and Contact.
- [x] Create shared navigation, footer, headings, cards, calls to action,
      buttons, icons and status-note components.
- [x] Keep shared navigation, contact, project and support content in a local
      structured content file.
- [x] Add page metadata, canonical URLs, Open Graph metadata, `robots.txt` and
      `sitemap.xml`.
- [x] Add a branded not-found page and standard browser security headers.
- [x] Add local development, safety and Vercel deployment instructions.
- [x] Keep WordPress, hosting, DNS, email and payment systems disconnected.

## Stakeholder confirmations

These items block publication of the affected content.

The questions and response fields are collected in the
[stakeholder confirmation pack](stakeholder-confirmations.md).

- [ ] Select the primary donation campaign and confirm whether the existing
      JustGiving and GoFundMe campaigns remain active.
- [ ] Confirm whether GivingLottery is an approved current fundraising route.
- [ ] Supply current standing-order, Gift Aid, membership and sponsorship
      forms, including approved handling instructions.
- [ ] Confirm the public email address, telephone number and postal address.
- [ ] Confirm Bosnia clinic dates, outreach venues, partner groups and
      volunteer costs.
- [ ] Confirm Ukraine partner names, current delivery activity and campaign
      priorities.
- [ ] Confirm UK veterans partner organisations, locations and therapist
      requirements.
- [ ] Confirm volunteer membership fees, application forms, current
      opportunities and eligibility criteria.
- [ ] Supply approved news, delivery updates, volunteer stories and event
      dates, with a publication date and relevant project for each item.
- [ ] Approve any impact figures or statistics before they are added.
- [ ] Confirm ownership, consent, captions and alternative text for the logo
      and photographs currently used by the prototype.
- [ ] Approve the final public website URL.

## Release-candidate preparation

These items turn the approved prototype into the version proposed for launch.

- [ ] Record stakeholder approval of the visual design, tone and overall
      structure.
- [ ] Confirm the factual accuracy of the contact details, donation routes,
      programme information and image permissions listed above.
- [ ] Update `src/content/site.ts` with confirmed contact details and support
      routes.
- [ ] Replace affected yellow status notes with approved programme and
      volunteer details.
- [ ] Add approved updates to the Updates page.
- [ ] Add approved forms or links using an agreed maintainable publishing
      approach.
- [ ] Perform a final stakeholder copy review for the mission, programme
      descriptions, testimonials and calls to action.
- [ ] Remove all public-facing confirmation notes once their underlying items
      are resolved.
- [ ] Remove the prototype wording from the footer when the content is approved
      for launch.
- [ ] Produce a release candidate and repeat the complete accessibility, link,
      mobile and production-build checks against it.

## Quality assurance

- [ ] Run `npm install` from a clean checkout.
- [x] Run `npm run lint`.
- [x] Run `npm run typecheck`.
- [x] Run `npm run build` using the intended production environment value.
- [x] Test all pages at mobile, tablet and desktop widths.
- [x] Test navigation, links and controls using only a keyboard.
- [x] Check visible focus states, heading order, landmarks, colour contrast and
      screen-reader names.
- [x] Add automated Chromium checks for every public page, internal links,
      WCAG-focused axe rules, the not-found page and security headers.
- [x] Run lint, type checking, the production build and browser suite
      automatically in GitHub Actions.
- [ ] Verify every image has approved, useful alternative text.
- [x] Check every internal link automatically.
- [x] Audit the technical reachability and visible identity of current social
      and fundraising destinations on 5 July 2026.
- [ ] Manually confirm every email, telephone, social and fundraising link.
- [x] Verify deployed canonical and Open Graph URLs, `robots.txt` and
      `sitemap.xml` use the approved Vercel URL wherever currently generated.
- [x] Add homepage-specific canonical and Open Graph metadata, then validate
      its social preview.
- [x] Confirm that no secrets, private records or live-system credentials are
      present in the repository or deployment configuration.

## Git and Vercel preview

Current Vercel URL:
[helping-hands-network.vercel.app](https://helping-hands-network.vercel.app/).

- [x] Put the project in an approved Git repository.
- [x] Import that repository into Vercel using the Next.js framework preset.
- [x] Add `NEXT_PUBLIC_SITE_URL` to the Production, Preview and Development
      Vercel environments.
- [x] Deploy and review a Vercel preview.
- [ ] Complete stakeholder review on the preview and record approval.
- [ ] Resolve all review findings and repeat the quality checks.

## Production launch

- [x] Draft a launch and rollback runbook without changing live systems.
- [x] Record a dated public-DNS baseline and identify the legacy domain's
      current certificate fault.
- [x] Create a pre-launch handover checklist covering people, accounts,
      approval, backups and operational readiness.
- [ ] Agree a launch and rollback plan covering the existing WordPress site.
- [ ] Confirm responsibility for the domain, DNS, hosting and email changes.
- [ ] Set the final production environment URL and deploy the approved build.
- [ ] Connect the live domain only after explicit stakeholder approval.
- [ ] Verify HTTPS, redirects, metadata, sitemap, forms and external support
      routes on the live domain.
- [ ] Monitor the live site after launch and retain a tested rollback route.

## Proposal-led roadmap

These ideas come from the Digital, Data and AI Opportunity Review. They are
not blockers for the website preview or initial launch and require separate
stakeholder agreement.

- [ ] Agree a simple impact-data template, update process and responsible data
      owner before publishing statistics or impact summaries.
- [ ] Map each approved donation route to its intended purpose and decide
      whether privacy-respecting referral or conversion measurement is needed.
- [ ] Set up or review Google Search Console after the production domain is
      approved.
- [x] Add privacy-respecting, cookie-free Vercel Web Analytics for aggregate
      usage information and publish a plain-English privacy notice.
- [ ] Consider organisation structured data and an impact page once the
      underlying facts and reporting process are approved.
- [ ] Assess Google for Nonprofits, Google Ad Grants, Canva for Nonprofits and
      Charity Digital against current eligibility and administrative capacity.
- [x] Document a sustainable, reviewed website-content update workflow.
- [ ] Nominate the people responsible for content, fundraising links,
      safeguarding/privacy approval and technical maintenance.
- [ ] Complete an AI and data-protection policy before using AI-assisted admin,
      reporting or public-content workflows.
- [ ] Scope any volunteer or membership tracker around data minimisation,
      access control, retention, safeguarding and human decision-making.
- [ ] Consider a grant-opportunity and application workflow only after impact
      evidence and reusable organisational information are maintained
      reliably.
- [ ] Treat any FAQ assistant as a later, tightly bounded project that cannot
      provide medical, therapy, PTSD or crisis advice.

## Explicitly out of scope without separate approval

- Modifying or deleting the existing WordPress website.
- Changing Easyspace hosting, DNS, domain registration or email settings.
- Integrating or changing live payment and fundraising systems.
- Publishing unconfirmed personal, operational or financial information.

## Supporting documents

- [Project brief](project-brief.md)
- [Digital, Data and AI Opportunity Review](<HHN - Digital, Data, and AI Opportunity Review.pdf>)
- [Existing website audit](../AUDIT.md)
- [Stakeholder confirmation pack](stakeholder-confirmations.md)
- [Website QA report](qa-report.md)
- [Content maintenance guide](content-maintenance-guide.md)
- [External link and contact-route audit](external-link-audit.md)
- [Domain launch and rollback plan](launch-and-rollback-plan.md)
- [Pre-launch handover checklist](handover-checklist.md)
- [Development and deployment guide](../README.md)
