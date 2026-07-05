# Domain launch and rollback plan

Status: draft for approval. This plan does not authorise a DNS, domain, email
or legacy-hosting change.

## Goal

Move the approved website to the charity's existing public domain while
preserving email, retaining the WordPress site as a temporary fallback and
providing a tested route back if launch checks fail.

## Required owners

Assign these people before scheduling the change:

- Charity launch approver: ______________________________
- DNS and domain operator: ______________________________
- Vercel operator: ______________________________________
- Website tester: _______________________________________
- Email owner/tester: ___________________________________
- Rollback decision-maker: ______________________________

No person should receive passwords through this repository.

## Public infrastructure snapshot

Observed on 5 July 2026:

- Nameservers: `ns1.namecity.com` and `ns2.namecity.com`
- Apex web address: `62.233.121.35`
- `www` web address: `62.233.121.36`
- Web-record TTL: approximately six hours
- Mail exchange: iomart mail servers, separate from the web records
- The current `www` HTTPS endpoint presents a self-signed certificate and
  fails normal certificate verification

This is a dated public-DNS snapshot, not an instruction to reuse values
blindly. Export or screenshot the complete current DNS zone immediately before
launch. Preserve all MX, TXT, verification and mail-related records.

## Preconditions

- [ ] Stakeholder content, images, donation routes and contact details approved.
- [ ] Final canonical hostname chosen: apex or `www`.
- [ ] GitHub Actions green on the approved commit.
- [ ] Approved production deployment identified and recorded.
- [ ] Current WordPress files and database backed up by their owner.
- [ ] Complete DNS zone exported or captured.
- [ ] Domain, DNS, Vercel and emergency contacts available during the window.
- [ ] Rollback authority and decision threshold agreed.
- [ ] A quiet launch window and monitoring period agreed.

## Preparation

1. Keep the existing DNS provider for the initial migration. Do not move
   nameservers during the website cutover.
2. Add both the apex domain and `www` hostname to the Vercel project.
3. Use Vercel's domain inspection to obtain the exact A, CNAME or verification
   records for this project. Do not rely on generic values copied from a guide.
4. Configure one hostname as canonical and redirect the other to it.
5. Set `NEXT_PUBLIC_SITE_URL` to the chosen canonical HTTPS URL for Production,
   Preview and Development, then deploy the approved commit.
6. Lower only the relevant web-record TTL in advance and wait for the previous
   six-hour TTL to expire.
7. Confirm that no proposed change alters MX or other email-related records.
8. Record the old web records, the approved Vercel deployment URL and the exact
   replacement records in the private launch log.

Vercel's current domain procedure is documented in
[Setting up a custom domain](https://vercel.com/docs/domains/set-up-custom-domain).

## Cutover

1. Confirm the approved Vercel deployment is still healthy.
2. Change only the apex and/or `www` web records specified by Vercel.
3. Leave nameservers, MX, TXT and unrelated subdomains unchanged.
4. Verify DNS from more than one network or public resolver.
5. Confirm Vercel has issued a valid certificate for both hostnames.
6. Confirm the non-canonical hostname redirects once to the canonical hostname.
7. Run the launch checks below.

## Launch checks

- Homepage and every public route return the expected status.
- Unknown routes return the branded 404 page.
- HTTPS is trusted and HTTP redirects to HTTPS.
- Canonical and Open Graph URLs use the final domain.
- `robots.txt` and `sitemap.xml` use the final domain.
- Navigation, images and internal links work.
- Email and telephone links contain the approved values.
- Approved fundraising destinations open correctly.
- Analytics loads without browser-policy errors.
- GitHub Actions and the latest Vercel deployment are green.
- Existing email delivery remains unchanged.

## Rollback

### Application or content failure

If DNS and certificates are healthy but the new deployment is faulty:

1. Use Vercel's production rollback to restore the previous known-good
   deployment.
2. Verify the affected pages and monitor production errors.
3. Fix the issue in a branch, obtain approval and redeploy through the normal
   workflow.

See [Vercel's rollback procedure](https://vercel.com/docs/deployments/rollback-production-deployment).

### DNS or certificate failure

If the domain does not resolve reliably or a trusted certificate is not issued
within the agreed launch window:

1. Restore the web A/CNAME records captured immediately before launch.
2. Do not change MX or mail-related records.
3. Confirm the legacy site is reachable again.
4. Allow the recorded DNS TTL to expire and continue monitoring.
5. Investigate before attempting another cutover.

The WordPress hosting must remain intact until the charity accepts the new
site and the rollback period has ended.

## Success and closure

Keep enhanced monitoring for at least 48 hours. Close the launch only after the
charity confirms the site, donation routes and email operate correctly. Retain
the backup and rollback record for an agreed period before separately deciding
whether to retire the legacy hosting.

