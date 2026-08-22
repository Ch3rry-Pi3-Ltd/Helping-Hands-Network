import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { HandsIcon, HeartIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { StatusNote } from "@/components/status-note";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Volunteer",
  "Find out how qualified therapists and other supporters can volunteer with Healing Hands Network.",
  "/volunteer",
);

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Volunteer"
        title="Offer your hands, time or support"
        intro="Healing Hands Network is built around people who choose to share their skills, energy and compassion."
      >
        <ButtonLink
          href={`mailto:${siteConfig.email}?subject=Volunteering%20with%20Healing%20Hands%20Network`}
        >
          Ask about volunteering
        </ButtonLink>
      </PageHeader>

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Ways to take part"
            title="You do not have to be a therapist to help"
            intro="The existing charity structure welcomes both therapist members and supporting members."
            align="center"
          />
          <div className="volunteer-grid">
            <article className="volunteer-card">
              <HandsIcon />
              <h2>Therapist volunteers</h2>
              <p>
                Qualified therapists trained in certified, insurable
                mainstream modalities can join to support the charity&apos;s work,
                travel to Sarajevo when able, or become supporter members.
              </p>
              <ul className="check-list">
                <li>Share recognised complementary therapy skills</li>
                <li>Hold professional qualification and insurance cover</li>
                <li>Attend relevant induction or trauma-aware training</li>
                <li>Support projects directly or through fundraising</li>
              </ul>
            </article>
            <article className="volunteer-card volunteer-card-teal">
              <HeartIcon />
              <h2>Supporting members</h2>
              <p>
                Non-therapists can promote the charity, help at events,
                fundraise, offer practical expertise or simply support the
                network as a member.
              </p>
              <ul className="check-list">
                <li>Organise or support fundraising</li>
                <li>Help raise awareness locally</li>
                <li>Offer event, admin or practical support</li>
              </ul>
            </article>
          </div>
          <StatusNote>
            Membership fees, application forms, current opportunities and
            detailed eligibility criteria still need charity confirmation
            before launch.
          </StatusNote>
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-container">
          <SectionHeading
            eyebrow="Getting started"
            title="A simple, supported route into the network"
            align="center"
          />
          <ol className="steps-grid">
            <li>
              <span>1</span>
              <h3>Get in touch</h3>
              <p>Tell the charity about your skills, location and interest.</p>
            </li>
            <li>
              <span>2</span>
              <h3>Check the fit</h3>
              <p>
                Discuss current needs, membership and any professional
                requirements.
              </p>
            </li>
            <li>
              <span>3</span>
              <h3>Prepare together</h3>
              <p>
                Complete the current application and any relevant induction.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <CtaBand
        eyebrow="Start a conversation"
        title="Could you be part of Healing Hands Network?"
        text="The charity can explain where help is currently needed and what the next step looks like."
      >
        <ButtonLink
          href={`mailto:${siteConfig.email}?subject=Volunteering%20with%20Healing%20Hands%20Network`}
          variant="light"
        >
          Email the charity
        </ButtonLink>
      </CtaBand>
    </>
  );
}
