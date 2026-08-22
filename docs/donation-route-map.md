# Donation route map

Reviewed: 22 August 2026.

Purpose: make every public giving route clear before the website tells people
where to donate.

This is a working map, not an approval record. Public routes can be reachable
online while still needing charity confirmation.

## Current known routes

| Route | Public destination | Intended purpose to confirm | Current prototype treatment | Confirmation needed |
| --- | --- | --- | --- | --- |
| GoFundMe profile | `https://www.gofundme.com/u/healing-hands-network` | Preferred GoFundMe route for current campaigns. | Presented first because Sue confirmed GoFundMe is preferred due to lower costs and Roger instructed this profile URL should be used. | Confirm charity administrator access and that the profile/campaign wording remains current. |
| CAF Donate | `https://cafdonate.cafonline.org/23120` | General donations or approved charity support. | Added as a public donation route after Sue supplied the link and it returned HTTP 200. | Confirm desired prominence and wording. |
| JustGiving charity profile | Public Healing Hands Network charity profile. | General donations. | Kept as a secondary route because Sue confirmed the charity is registered with JustGiving but does not prefer it as the main platform. | Confirm whether to keep linking to the profile. |
| JustGiving Ukraine campaign | `https://www.justgiving.com/campaign/justgivingaidforukraine` | Ukraine aid and associated current priorities. | No longer presented as the main route. | Confirm whether to keep, demote or remove this campaign link. |
| GoFundMe animal-shelter campaign | Public campaign observed during audit. | Specific campaign support. | Not promoted in the prototype. | Is this still current, controlled and appropriate to promote? |
| Giving Lottery | Public Giving Lottery route to be supplied. | Lottery-based support. | Mentioned as an approved route, but asks supporters to request the current link until Sue supplies it. | Supply current link and any required lottery wording or marketing material. |
| Give as You Live | Public Give as You Live route to be supplied. | Online shopping fundraising. | Mentioned as an approved route, but asks supporters to request the current link until Sue supplies it. | Supply current link and approved promotional wording/material. |
| Standing order / Gift Aid forms | Existing downloadable-form route on legacy site. | Bank transfer, recurring giving and Gift Aid. | Email request route only. | Supply current forms, bank-transfer wording and approved handling instructions. |
| Fundraising / sponsorship | Email discussion route. | Supporter-led fundraising or sponsorship. | Linked via contact email. | Confirm preferred email owner and response process. |

## Decision needed before launch

Sue has confirmed GoFundMe is the preferred main online fundraising platform,
and Roger has supplied the GoFundMe profile URL to use. Before final launch,
confirm that the charity has administrator access and that the profile/campaign
wording remains approved.

Sue also supplied a working CAF Donate URL. Confirm whether it should be a
primary or secondary route before launch.

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
