# Launch checklist

This is the authoritative list of completed and outstanding work for the
Healing Hands Network website prototype.

Last reviewed: 4 July 2026.

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
- [x] Add local development, safety and Vercel deployment instructions.
- [x] Keep WordPress, hosting, DNS, email and payment systems disconnected.

## Stakeholder confirmations

These items block publication of the affected content.

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

## Content updates after confirmation

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

## Quality assurance

- [ ] Run `npm install` from a clean checkout.
- [x] Run `npm run lint`.
- [x] Run `npm run typecheck`.
- [ ] Run `npm run build` using the intended production environment value.
- [ ] Test all pages at mobile, tablet and desktop widths.
- [ ] Test navigation, links and controls using only a keyboard.
- [ ] Check visible focus states, heading order, landmarks, colour contrast and
      screen-reader names.
- [ ] Verify every image has approved, useful alternative text.
- [ ] Check every internal, email, telephone, social and fundraising link.
- [ ] Verify canonical URLs, Open Graph previews, `robots.txt` and
      `sitemap.xml` use the approved production URL.
- [ ] Confirm that no secrets, private records or live-system credentials are
      present in the repository or deployment configuration.

## Git and Vercel preview

- [x] Put the project in an approved Git repository.
- [ ] Import that repository into Vercel using the Next.js framework preset.
- [ ] Add `NEXT_PUBLIC_SITE_URL` to the Vercel environment configuration.
- [ ] Deploy and review a Vercel preview.
- [ ] Complete stakeholder review on the preview and record approval.
- [ ] Resolve all review findings and repeat the quality checks.

## Production launch

- [ ] Agree a launch and rollback plan covering the existing WordPress site.
- [ ] Confirm responsibility for the domain, DNS, hosting and email changes.
- [ ] Set the final production environment URL and deploy the approved build.
- [ ] Connect the live domain only after explicit stakeholder approval.
- [ ] Verify HTTPS, redirects, metadata, sitemap, forms and external support
      routes on the live domain.
- [ ] Monitor the live site after launch and retain a tested rollback route.

## Explicitly out of scope without separate approval

- Modifying or deleting the existing WordPress website.
- Changing Easyspace hosting, DNS, domain registration or email settings.
- Integrating or changing live payment and fundraising systems.
- Publishing unconfirmed personal, operational or financial information.

## Supporting documents

- [Project brief](project-brief.md)
- [Existing website audit](../AUDIT.md)
- [Development and deployment guide](../README.md)
