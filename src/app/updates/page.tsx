import { ButtonLink } from "@/components/button-link";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { StatusNote } from "@/components/status-note";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Updates",
  "News, events and project updates from Healing Hands Network.",
  "/updates",
);

const updateTypes = [
  {
    title: "Project updates",
    description:
      "Short, dated notes about Bosnia and Herzegovina, Ukraine aid, UK veterans or partner activity.",
    needs:
      "Approved wording, date, project label, image permission if a photograph is used.",
  },
  {
    title: "Impact summaries",
    description:
      "Plain-English summaries of what supporters helped make possible over a defined period.",
    needs:
      "Evidence source, approval owner, date range and a clear explanation of what the figures mean.",
  },
  {
    title: "Volunteer stories",
    description:
      "Human stories from volunteers, therapists, supporters or partners, written with dignity and consent.",
    needs:
      "Explicit consent, safeguarding review, preferred name/role and approved photograph or no photograph.",
  },
] as const;

const impactFields = [
  "Date or reporting period",
  "Project or country",
  "What happened",
  "Who or what was helped",
  "Evidence source",
  "Approval status",
] as const;

const publishingSteps = [
  "Collect the update in a simple written format.",
  "Check facts, consent, safeguarding and any photographs.",
  "Add it to the website as draft content.",
  "Review the preview before publication.",
] as const;

export default function UpdatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Updates"
        title="Stories, events and project news"
        intro="A clearer home for current charity updates, with dates and project labels that make older posts easy to understand."
      />

      <section className="section">
        <div className="site-container updates-intro">
          <div>
            <SectionHeading
              eyebrow="Ready for approved content"
              title="A practical structure for future news and impact"
              intro="The prototype does not publish old events as if they are current. Instead, this page is prepared to receive approved updates, stories and impact summaries when the charity is ready."
            />
            <StatusNote>
              The current website&apos;s Events page includes older notices from
              2019 and 2023. They have not been reused as current events in
              this prototype.
            </StatusNote>
          </div>
          <aside className="review-card">
            <p className="card-kicker">Prototype status</p>
            <h2>Draft content area</h2>
            <p>
              This page is intentionally a framework. It should only become a
              live news or impact page once Susan or another charity approver
              supplies current, approved material.
            </p>
          </aside>
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-container">
          <SectionHeading
            eyebrow="Content types"
            title="What could appear here"
            intro="These are the safest first categories because they are easy to review, date and correct."
          />
          <div className="update-card-grid">
            {updateTypes.map((item) => (
              <article className="update-card" key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p className="update-card-note">
                  <strong>Needed first:</strong> {item.needs}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container impact-layout">
          <div>
            <SectionHeading
              eyebrow="Impact reporting"
              title="A simple evidence-first template"
              intro="The proposal suggested clearer impact reporting. The first step is not a complex system; it is a reliable structure for collecting the right information."
            />
            <ul className="field-list">
              {impactFields.map((field) => (
                <li key={field}>{field}</li>
              ))}
            </ul>
          </div>
          <div className="workflow-card">
            <p className="card-kicker">Publishing workflow</p>
            <h2>Keep it reviewed and low-admin</h2>
            <ol>
              {publishingSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="site-container empty-state">
          <span className="empty-state-mark">HHN</span>
          <SectionHeading
            eyebrow="Current public updates"
            title="Use Facebook until website updates are approved"
            intro="For now, the prototype points people to the charity's existing public Facebook presence while the website update process is agreed."
            align="center"
          />
          <div className="button-row">
            <ButtonLink href={siteConfig.facebook} external>
              View updates on Facebook
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Send a website update
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
