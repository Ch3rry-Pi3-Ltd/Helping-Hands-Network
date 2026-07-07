# Donation route map

Reviewed: 7 July 2026.

Purpose: make every public giving route clear before the website tells people
where to donate.

This is a working map, not an approval record. Public routes can be reachable
online while still needing charity confirmation.

## Current known routes

| Route | Public destination | Intended purpose to confirm | Current prototype treatment | Confirmation needed |
| --- | --- | --- | --- | --- |
| JustGiving Ukraine campaign | `https://www.justgiving.com/campaign/justgivingaidforukraine` | Ukraine aid and associated current priorities. | Linked as available but marked for confirmation. | Is this the primary campaign? Is the wording still current? |
| GoFundMe Ukraine campaign | `https://www.gofundme.com/f/aid-for-ukraine-continues` | Continuing aid for Ukraine. | Linked as available but marked for confirmation. | Is the campaign still active and controlled by the charity/approved organiser? |
| JustGiving charity profile | Public Healing Hands Network charity profile. | General donations. | Audited but not promoted as the primary route yet. | Should this be the safer default donation route? |
| GoFundMe animal-shelter campaign | Public campaign observed during audit. | Specific campaign support. | Not promoted in the prototype. | Is this still current, controlled and appropriate to promote? |
| GivingLottery | Public GivingLottery page. | Lottery-based support. | Mentioned as needing confirmation. | Is participation active and approved? What wording is required? |
| Standing order / Gift Aid forms | Existing downloadable-form route on legacy site. | Recurring giving and Gift Aid. | Email request route only. | Supply current forms and approved handling instructions. |
| Fundraising / sponsorship | Email discussion route. | Supporter-led fundraising or sponsorship. | Linked via contact email. | Confirm preferred email owner and response process. |

## Decision needed before launch

Choose one primary donation action for the website header and main calls to
action:

- JustGiving campaign;
- JustGiving charity profile;
- GoFundMe campaign;
- contact-first route;
- another approved route.

The current prototype avoids choosing for the charity.

## Tracking fields for each route

Use these fields before adding or changing a donation link:

| Field | Value |
| --- | --- |
| Platform name |  |
| Public URL |  |
| Campaign/profile title |  |
| Purpose |  |
| Owner/admin |  |
| Finance/contact owner |  |
| Active? |  |
| Primary route? |  |
| Gift Aid available? |  |
| Required wording |  |
| Approval date |  |
| Review date |  |

## Measurement options

The current analytics setup is privacy-respecting and aggregate only. It can
show broad traffic patterns, not donor identity.

If the charity later wants to measure donation journeys, decide first:

- what question needs answering;
- whether aggregate referral data is enough;
- whether the fundraising platform provides its own reporting;
- what privacy notice wording is required;
- who will review the data.

Do not add invasive tracking or visitor identification.

