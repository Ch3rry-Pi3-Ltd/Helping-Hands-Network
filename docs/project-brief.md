# Healing Hands Network website project brief

This document records the original brief for the parallel website prototype.

## Context

- Rebuild and modernise the public website for Healing Hands Network, a UK
  charity.
- Review the existing website at
  [healinghandsnetwork.org.uk](https://www.healinghandsnetwork.org.uk/).
- Keep the current WordPress website unchanged while the replacement is built
  and reviewed separately.
- Preserve the charity's established feel, tone, mission and identity. The
  first version should be a respectful modernisation rather than a rebrand.
- Do not modify WordPress, Easyspace hosting, DNS, email, payments or any other
  live charity system.

## Initial audit

Before building, review and document:

- Current pages, navigation, content, wording and imagery.
- Visual style, colours and overall tone.
- Donation routes and supporter and volunteer journeys.
- Mobile responsiveness and general usability.
- Accessibility, including contrast, text size, alt text and keyboard access.
- SEO basics, including titles, headings, metadata and structured content.
- Broken links, stale pages and unclear calls to action.
- Ways to make routine content updates manageable for non-technical users.

The audit and resulting recommendations are recorded in
[the website audit](../AUDIT.md).

## Build requirements

- Use Next.js with the App Router, TypeScript and modern best practices.
- Use Tailwind CSS unless there is a strong reason not to.
- Make the application deployable to Vercel.
- Use clean, reusable components.
- Keep content easy to update using local structured content, Markdown, MDX or
  another simple maintainable approach.
- Preserve useful existing copy and avoid changing the meaning of the mission.
- Use placeholders or visible confirmation notes where current information is
  unavailable.
- Do not fabricate statistics, testimonials, impact figures or case studies.
- Do not hard-code credentials, passwords, private hosting details or other
  private information.

## Design direction

- Respectful, calm, warm and trustworthy.
- Recognisably Healing Hands Network rather than corporate, flashy or generic.
- Improved readability, spacing, layout and mobile usability.
- Clear routes for donating, volunteering and contacting the charity.
- Existing imagery and content reused where appropriate and approved.

## Proposed information architecture

- Home
- About
- Our work
  - Bosnia and Herzegovina
  - Ukraine Aid
  - UK Veterans
- Volunteer
- Support Us / Donate
- Updates / Impact
- Contact

## Reusable interface

- Header and navigation
- Footer
- Hero and page headers
- Project and mission cards
- Donation and support cards
- Volunteer calls to action
- Impact/statistic and update cards when approved content exists
- Contact details
- General content sections
- Accessible links and buttons

## SEO and accessibility

- Page-specific metadata and Open Graph metadata.
- Semantic HTML and a sitemap-ready structure.
- Accessible colour contrast, keyboard navigation and responsive layouts.
- Accurate image alternative text, with placeholders where descriptions
  require confirmation.

## Donations and support

- Review public fundraising routes such as JustGiving, GoFundMe,
  GivingLottery, standing orders, Gift Aid and sponsorship.
- Link to confirmed public routes or mark uncertain ones as requiring
  confirmation.
- Do not integrate payments without separate explicit approval.
- Do not invent donation platforms or financial claims.

## Delivery requirements

- Provide local development and Vercel deployment instructions.
- Ensure the application can be installed with `npm install` and run with
  `npm run dev`.
- Keep the replacement isolated until it has been reviewed and approved.

Current implementation and launch work are tracked in the
[launch checklist](launch-checklist.md).
