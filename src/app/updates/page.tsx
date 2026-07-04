import { ButtonLink } from "@/components/button-link";
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
        intro="A clearer home for current charity updates, with dates and project labels that make older posts easy to understand."
      />

      <section className="section">
        <div className="site-container empty-state">
          <span className="empty-state-mark">HHN</span>
          <SectionHeading
            eyebrow="Content being prepared"
            title="The latest updates will appear here"
            intro="The current website's Events page contains notices from 2019 and 2023, so they have not been presented as upcoming events in this prototype."
            align="center"
          />
          <p>
            Before launch, the charity can add approved news, delivery updates,
            volunteer stories and event dates here. Each post should include a
            publication date and the relevant project.
          </p>
          <div className="button-row">
            <ButtonLink href={siteConfig.facebook} external>
              View updates on Facebook
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Send an update
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
