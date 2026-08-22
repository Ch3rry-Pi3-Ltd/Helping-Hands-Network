# Sue Stretton follow-up website feedback

**Project:** Healing Hands Network website  
**Received/recorded:** 22 August 2026  
**From:** Sue Stretton / Healing Hands Network

## Purpose of this record

This document records Sue's latest follow-up feedback after the first set of
website corrections. It captures new contact details, donation links,
photo/video questions and social-channel guidance.

## Original feedback from Sue

```text
Hi Roger and Lucy,

Thank you again for your reply.

Can I send you photos etc to add? I have some that will be good to use.
Also some videos.

I will work on other things over the next couple of days.

This is so exciting!!

Sue x

Also, the quoted phone number is no longer in use - it's 077344 62000 now which is me.
Director Healing Hands Network
UK regd, charity 1080268

High Sheriffs Award
BBC Making a Difference Award Finalist

Please help us continue our vital work by donating via the link below.
https://.[gofund.me.com/healinghandsnetwork](http://gofund.me.com/healinghandsnetwork)
[https://cafdonate.cafonline.org/23120](https://cafdonate.cafonline.org/23120)
healinghandsnetwork@gmail.com
077 344 62000
[www.healinghandsnetwork.org.uk](http://www.healinghandsnetwork.org.uk/)
admin support enquiries   emmahhn1@gmail.com
web page [www.healinghandsnetwork.org.uk](http://www.healinghandsnetwork.org.uk/)
[www.Facebook.com/HealingHandsNetwo](http://www.facebook.com/HealingHandsNetwork)rk
[www.thegivinglottery.co.uk](http://www.thegivinglottery.co.uk/)
we do not support X

Bosnia continuing work       Ukrainian Appeal.

Helping those affected by war and its aftermath in UK and overseas.
```

## Summary

- Sue is happy to send photos and videos for possible use on the website.
- The old phone number is no longer in use.
- The current phone number supplied by Sue is **07734 462000**.
- Sue supplied a separate admin-support email:
  **emmahhn1@gmail.com**.
- Sue supplied a CAF Donate link:
  <https://cafdonate.cafonline.org/23120>.
- Sue supplied a GoFundMe-style link, but the pasted URL appears malformed.
- Sue supplied Facebook and Giving Lottery references.
- Sue confirmed the charity does **not** support X.
- Sue supplied a concise positioning line:
  "Helping those affected by war and its aftermath in UK and overseas."
- Sue included recognition notes:
  **High Sheriffs Award** and **BBC Making a Difference Award Finalist**.

## Link checks

Checked from the development environment on 22 August 2026.

| Link | Result | Decision |
| --- | --- | --- |
| `https://cafdonate.cafonline.org/23120` | HTTP 200 | Added as a public donation route. |
| `https://gofund.me/healinghandsnetwork` | HTTP 200 but resolved to the GoFundMe homepage, not a campaign page. | Do not use as the final campaign link. Ask Sue for the exact URL. |
| `https://gofundme.com/healinghandsnetwork` | HTTP 404. | Do not use. |
| `https://www.gofundme.com/f/healinghandsnetwork` | HTTP 404. | Do not use. |
| `https://www.gofundme.com/u/healing-hands-network` | HTTP 200 and page title identifies it as Healing Hands Network's GoFundMe profile. | Use as the public GoFundMe route. |
| `https://www.facebook.com/HealingHandsNetwork` | HTTP 200 and resolves to the existing Facebook page. | Existing Facebook link remains suitable. |
| `https://www.thegivinglottery.co.uk/` | DNS resolution failed from the development environment. | Do not add as a live link until Sue supplies a working page. |
| `https://www.healinghandsnetwork.org.uk/` | SSL verification failed because of the existing self-signed certificate issue. | Keep existing domain-launch warning in place. |

## Implementation status

Implemented in the website and supporting project documentation.

### Completed website changes

- Updated public phone number to **07734 462000**.
- Added **emmahhn1@gmail.com** as an admin-support email on the Contact page.
- Added **CAF Donate** as a public support route.
- Updated the site description to Sue's supplied positioning line:
  "Helping those affected by war and its aftermath in the UK and overseas."
- Updated GoFundMe to use the Healing Hands Network profile URL supplied by
  Roger: <https://www.gofundme.com/u/healing-hands-network>.
- Kept Giving Lottery/Give as You Live marked as awaiting working links and
  approved promotional material.
- Recorded that the charity does not support X; no X/Twitter social link is
  present on the website.
- Added photo/video submission guidance to the content-maintenance process.

### Still awaiting Sue or charity input

- Confirmation that the charity has administrator access to the GoFundMe
  profile and that the visible profile/campaign wording remains current.
- Working Giving Lottery page URL and any required wording.
- Give as You Live page URL and approved wording.
- Confirmation that the CAF Donate page should be a prominent donation route.
- Current bank-transfer wording and Gift Aid form/instructions.
- Photo files, video files or video links.
- For each photo/video: permission, caption, alt text, names/locations to avoid,
  and whether it can be used publicly.
- Exact wording/year/category for the High Sheriffs Award and BBC Making a
  Difference Award Finalist note before publishing award claims.
