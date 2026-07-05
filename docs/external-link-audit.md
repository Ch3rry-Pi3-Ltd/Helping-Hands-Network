# External link and contact-route audit

Checked: 5 July 2026.

This audit checks technical reachability and visible destination identity. It
does not prove ownership, charity approval, factual accuracy or that money
should be directed to a campaign.

## Published by the prototype

| Route | Result | Finding | Remaining confirmation |
| --- | --- | --- | --- |
| [Facebook](https://www.facebook.com/healinghandsnetwork) | HTTP 200 | Page identifies itself as Healing Hands Network. | Confirm administrator access and that the page remains approved. |
| [JustGiving — Aid for Ukraine](https://www.justgiving.com/campaign/justgivingaidforukraine) | HTTP 200 | Page identifies the campaign and Healing Hands Network; its structured page data reports an active status. | Campaign wording concerns older activity and must be approved before launch. |
| [GoFundMe — Aid for Ukraine continues](https://www.gofundme.com/f/aid-for-ukraine-continues) | HTTP 200 | Page names Susan Stretton as organiser and Healing Hands Network as beneficiary; a donation action is displayed. | Confirm current control, purpose and whether it should remain promoted. |

## Candidate routes awaiting a charity decision

| Route | Result | Finding | Remaining confirmation |
| --- | --- | --- | --- |
| [JustGiving charity profile](https://www.justgiving.com/charity/healinghandsnetwork) | HTTP 200 | Page identifies Healing Hands Network and its public page data reports an active charity profile. | Confirm administrator access and whether this should be the primary destination. |
| [GoFundMe — Kherson animal shelter](https://www.gofundme.com/f/help-for-ukraine-kherson-irina-dog-and-cat-shelter) | HTTP 200 | Page identifies Healing Hands Network as organiser and shows recent dated updates. | Confirm current need, control and whether the charity wants it linked. |
| [GivingLottery](https://www.givinglottery.org.uk/superdraw/healing-hands-network) | HTTP 200 | Route displays Healing Hands Network within the current Super Draw page. | Confirm participation, control and any required lottery wording or age restrictions. |

## Website and direct contact routes

- The Vercel website returned HTTP 200.
- `healinghandsnetwork@gmail.com` is syntactically valid. No unsolicited test
  email was sent; ownership and monitoring remain to be confirmed.
- `07815 628372` is formatted as a UK mobile number. No unsolicited call was
  made; ownership and preferred publication format remain to be confirmed.
- The postal address remains a stakeholder confirmation item.
- The legacy domain still resolves to the existing hosting, but its `www`
  HTTPS endpoint presented a self-signed certificate during this audit. Normal
  certificate verification therefore failed.

## Decision

No link was added, removed or promoted as a result of reachability alone.
Repeat this audit immediately before launch and obtain the confirmations in
the [stakeholder pack](stakeholder-confirmations.md).

