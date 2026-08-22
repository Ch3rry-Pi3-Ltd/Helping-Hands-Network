# External link and contact-route audit

Checked: 5 July 2026. Updated with Sue's 22 August 2026 links.

This audit checks technical reachability and visible destination identity. It
does not prove ownership, charity approval, factual accuracy or that money
should be directed to a campaign.

## Published by the prototype

| Route | Result | Finding | Remaining confirmation |
| --- | --- | --- | --- |
| [Facebook](https://www.facebook.com/healinghandsnetwork) | HTTP 200 | Page identifies itself as Healing Hands Network. | Confirm administrator access and that the page remains approved. |
| [CAF Donate](https://cafdonate.cafonline.org/23120) | HTTP 200 on 22 August 2026 | Sue supplied this as a donation route and the page was reachable. | Confirm desired prominence and approved wording. |
| [JustGiving — Aid for Ukraine](https://www.justgiving.com/campaign/justgivingaidforukraine) | HTTP 200 | Page identifies the campaign and Healing Hands Network; its structured page data reports an active status. | Campaign wording concerns older activity and must be approved before launch. |
| [GoFundMe — Aid for Ukraine continues](https://www.gofundme.com/f/aid-for-ukraine-continues) | HTTP 200 | Page names Susan Stretton as organiser and Healing Hands Network as beneficiary; a donation action is displayed. | Confirm current control, purpose and whether it should remain promoted. |

## Candidate routes awaiting a charity decision

| Route | Result | Finding | Remaining confirmation |
| --- | --- | --- | --- |
| [JustGiving charity profile](https://www.justgiving.com/charity/healinghandsnetwork) | HTTP 200 | Page identifies Healing Hands Network and its public page data reports an active charity profile. | Confirm administrator access and whether this should be the primary destination. |
| [GoFundMe — Kherson animal shelter](https://www.gofundme.com/f/help-for-ukraine-kherson-irina-dog-and-cat-shelter) | HTTP 200 | Page identifies Healing Hands Network as organiser and shows recent dated updates. | Confirm current need, control and whether the charity wants it linked. |
| [GivingLottery](https://www.givinglottery.org.uk/superdraw/healing-hands-network) | HTTP 200 | Route displays Healing Hands Network within the current Super Draw page. | Confirm participation, control and any required lottery wording or age restrictions. |

## Links supplied by Sue on 22 August 2026

| Route | Result | Finding | Decision |
| --- | --- | --- | --- |
| `https://cafdonate.cafonline.org/23120` | HTTP 200 | CAF Donate page was reachable. | Added to Support Us. |
| `https://gofund.me/healinghandsnetwork` | HTTP 200 but resolved to GoFundMe homepage | Did not resolve as a specific campaign. | Do not use as final link; ask Sue for exact URL. |
| `https://gofundme.com/healinghandsnetwork` | HTTP 404 | No matching campaign page found. | Do not use. |
| `https://www.gofundme.com/f/healinghandsnetwork` | HTTP 404 | No matching campaign page found. | Do not use. |
| `https://www.facebook.com/HealingHandsNetwork` | HTTP 200 | Resolves to the existing Healing Hands Network Facebook page. | Existing Facebook link remains suitable. |
| `https://www.thegivinglottery.co.uk/` | DNS failed from the development environment | The supplied domain did not resolve during this check. | Ask Sue for the exact current Giving Lottery page. |

## Website and direct contact routes

- The Vercel website returned HTTP 200.
- `healinghandsnetwork@gmail.com` is syntactically valid. No unsolicited test
  email was sent; ownership and monitoring remain to be confirmed.
- `07734 462000` was supplied by Sue on 22 August 2026 as the current phone
  number. No unsolicited call was made.
- `emmahhn1@gmail.com` was supplied by Sue for admin support enquiries.
- The postal address remains a stakeholder confirmation item.
- The legacy domain still resolves to the existing hosting, but its `www`
  HTTPS endpoint presented a self-signed certificate during this audit. Normal
  certificate verification therefore failed.

## Decision

No link was added, removed or promoted as a result of reachability alone.
Repeat this audit immediately before launch and obtain the confirmations in
the [stakeholder pack](stakeholder-confirmations.md).
