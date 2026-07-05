# Content maintenance guide

This guide describes how to keep the Healing Hands Network website accurate
after launch without exposing sensitive information or bypassing review.

## Responsibilities

Three responsibilities should be assigned, even if one person holds more than
one role:

- **Requester:** supplies the source material and explains why it has changed.
- **Charity approver:** confirms factual accuracy, consent and publication.
- **Website editor:** makes the change, runs the checks and publishes it.

Record the named people in the [handover checklist](handover-checklist.md).
Passwords, bank details, beneficiary records, safeguarding information and
other sensitive data must never be added to GitHub issues, source files or
deployment logs.

## Standard update process

1. Obtain the proposed wording, source and intended publication date.
2. Confirm that the charity approver has checked facts, names, dates, links,
   image consent and safeguarding implications.
3. Make the change on a short-lived Git branch.
4. Open a pull request describing the source and approval without copying
   sensitive material into it.
5. Let GitHub Actions run lint, type, build, link and accessibility checks.
6. Review the Vercel preview on mobile and desktop.
7. Merge only after the charity approver accepts the preview.
8. Check the production page and record the publication date.

For an urgent safety, privacy or legal removal, take the affected material down
first, then document and review the corrective change.

## Where content lives

- Shared contact details, navigation, programme summaries, testimonials and
  fundraising routes: `src/content/site.ts`
- Longer page wording: the relevant file under `src/app`
- Images: `public/images`
- Page titles and descriptions: each page file and `src/lib/metadata.ts`
- Public routes used by the sitemap and automated tests:
  `src/content/routes.ts`
- Privacy wording: `src/app/privacy/page.tsx`

Adding a new public page also requires an entry in `src/content/routes.ts`.
That makes the page part of the sitemap and the automated accessibility suite.

## Images

Before adding or replacing an image, record:

- who owns it and who supplied it;
- permission to publish it on the website;
- consent for identifiable people;
- any safeguarding, location or security risk;
- an accurate, dignified text alternative;
- whether the image has an agreed removal date.

Do not use an image solely because it appeared on the legacy website or social
media. Optimise large images before committing them and avoid embedding private
metadata where practical.

## Fundraising and contact routes

Check fundraising links at least quarterly and before each campaign promotion.
Reachability alone does not establish that a campaign remains approved,
controlled by the charity or accurate.

The charity approver should confirm:

- the intended recipient and purpose;
- current administrator access;
- whether donations are still accepted;
- current campaign wording and named partners;
- the correct Gift Aid and offline-support process.

Email, telephone and postal details should be checked with the responsible
person rather than tested through unsolicited messages or calls.

## Routine review

Review the following at least every three months:

- contact details and named responsibilities;
- donation routes and downloadable forms;
- programme descriptions, dates and partners;
- volunteering requirements;
- published news and impact figures;
- image consent and removal requests;
- privacy wording and analytics use;
- dependency, GitHub Actions and Vercel warnings.

Run these checks before publishing:

```bash
npm run lint
npm run typecheck
NEXT_PUBLIC_SITE_URL=https://your-approved-domain.example npm run build
npm run test:e2e
```

