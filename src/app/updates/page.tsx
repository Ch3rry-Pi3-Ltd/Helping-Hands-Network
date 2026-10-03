import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Updates",
  "News, events and project updates from Healing Hands Network.",
  "/updates",
);

export default function UpdatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Updates"
        title="Stories, events and project news"
        intro="Follow Healing Hands Network's work, fundraising and volunteer activity."
      />

      <section className="section section-warm">
        <div className="site-container empty-state">
          <span className="empty-state-mark">HHN</span>
          <SectionHeading
            eyebrow="Latest news"
            title="Keep up with Healing Hands Network"
            intro="News, photographs and fundraising announcements are currently shared through the charity's Facebook page."
            align="center"
          />
          <div className="button-row">
            <ButtonLink href={siteConfig.facebook} external>
              View updates on Facebook
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact the charity
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Stay involved"
        title="Help the next chapter take shape."
        text="Donate, fundraise or offer your time to support people living with the effects of war."
      >
        <ButtonLink href="/support-us" variant="light">
          Support our work
        </ButtonLink>
        <ButtonLink href="/volunteer" variant="secondary">
          Volunteer
        </ButtonLink>
      </CtaBand>
    </>
  );
}
