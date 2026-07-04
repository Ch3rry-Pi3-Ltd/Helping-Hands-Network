import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Our work",
  "Explore Healing Hands Network projects in Bosnia and Herzegovina, Ukraine and the UK.",
  "/our-work",
);

export default function OurWorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Supporting people affected by war"
        intro="Healing Hands Network works overseas and in the UK, responding with complementary therapies, practical aid and compassionate support."
      />

      <section className="section" aria-labelledby="work-areas-heading">
        <div className="site-container">
          <h2 id="work-areas-heading" className="visually-hidden">
            Our areas of work
          </h2>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.href} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-container narrow-content">
          <SectionHeading
            eyebrow="Our approach"
            title="Listening first, then offering practical care"
          />
          <p className="lead">
            War leaves physical, emotional and psychological effects that can
            continue long after conflict ends.
          </p>
          <p>
            The charity’s response is deliberately personal. Qualified
            complementary therapists offer gentle treatments; supporters help
            with fundraising, awareness and practical work; and trusted
            partners help assistance reach the communities that need it.
          </p>
          <p>
            Details of current locations, schedules and partnerships will be
            checked with the charity before this prototype is published.
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="Help us continue"
        title="Care is made possible by people who choose to help."
        text="Volunteer, fundraise or make a donation through a confirmed public campaign."
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
