import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { StatusNote } from "@/components/status-note";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Ukraine Aid",
  "Learn how Healing Hands Network supports Ukraine with vehicles and humanitarian, medical and surgical aid.",
  "/our-work/ukraine",
);

export default function UkrainePage() {
  return (
    <>
      <PageHeader
        eyebrow="Ukraine Aid"
        title="Practical help, delivered where it is needed"
        intro="Supporting Ukraine with vehicles and humanitarian, medical and surgical aid, working through trusted partners."
        tone="blue"
      >
        <ButtonLink href="/support-us">Support Ukraine aid</ButtonLink>
      </PageHeader>

      <section className="section">
        <div className="site-container ukraine-layout">
          <div className="ukraine-art" aria-hidden="true">
            <div className="ukraine-art-sun" />
            <div className="ukraine-art-road" />
            <div className="ukraine-art-field" />
          </div>
          <div>
            <SectionHeading
              eyebrow="The response"
              title="Vehicles, medical supplies and humanitarian aid"
            />
            <p className="lead">
              Healing Hands Network responded to the war in Ukraine by
              collecting and delivering practical aid.
            </p>
            <p>
              The current public website describes ambulances and SUVs being
              used for evacuation, transporting injured and elderly people,
              and taking urgent supplies to areas affected by destruction and
              bombing.
            </p>
            <p>
              It names StaySafeUA, a Ukrainian volunteer NGO, and UK to Ukraine
              as collaborators helping assistance reach communities across the
              country.
            </p>
            <p>
              Sue has advised that each Ukraine delivery trip, carrying
              surgical, medical and humanitarian aid, generators and related
              supplies, costs approximately £1,600.
            </p>
            <StatusNote>
              Confirm current partner names, delivery activity, campaign
              priorities and whether the approximate £1,600 trip cost should
              be used in prominent fundraising copy before launch.
            </StatusNote>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-container">
          <SectionHeading
            eyebrow="How support helps"
            title="A route for practical action"
            align="center"
          />
          <div className="values-grid">
            <article>
              <span>01</span>
              <h3>Vehicles</h3>
              <p>
                Public appeals have helped provide ambulances and utility
                vehicles requested by partners.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Medical aid</h3>
              <p>
                Donated medical and surgical supplies form part of the
              charity’s response.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Everyday essentials</h3>
              <p>
                Humanitarian supplies support people facing displacement,
                damaged homes and disrupted services.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Amazon wishlist</h3>
              <p>
                Sue has confirmed there is an Amazon wishlist, but it needs to
                be checked for current items, availability and prices before it
                is promoted.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ukraine appeal"
        title="Help practical aid keep moving."
        text="View the charity's public fundraising routes, each clearly marked for confirmation before launch."
      >
        <ButtonLink href="/support-us" variant="light">
          See donation options
        </ButtonLink>
      </CtaBand>
    </>
  );
}
