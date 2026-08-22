import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { QuoteCard } from "@/components/quote-card";
import { SectionHeading } from "@/components/section-heading";
import { projects, testimonials, ukSupport } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "About us",
  "Discover how Healing Hands Network began and how its volunteer therapists support people affected by war.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Healing Hands Network"
        title="Care, freely given"
        intro="A volunteer-led UK charity supporting people with the mental, physical and emotional after-effects of war."
      />

      <section className="section">
        <div className="site-container editorial-grid">
          <div>
            <SectionHeading
              eyebrow="How it started"
              title="Three women, a war-torn city and a desire to help"
            />
            <p className="lead">
              In the early 1990s, three women watched the Balkan conflict and
              the Siege of Sarajevo unfold and wondered what they could do.
            </p>
            <p>
              When the war ended in 1996, they travelled to Sarajevo. They
              offered Reiki, healing and other complementary therapies freely
              to people who needed gentle support, working in homes and
              hospitals with whatever space was available.
            </p>
            <p>
              Therapist friends wanted to help too. From that simple act of
              care, Healing Hands Network grew into the charity it is today.
            </p>
          </div>
          <div className="editorial-image">
            <Image
              src="/images/sarajevo-hands.jpg"
              alt="Hands resting together during a therapy session in Sarajevo"
              fill
              sizes="(max-width: 760px) 100vw, 42vw"
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-container">
          <SectionHeading
            eyebrow="What guides us"
            title="A human approach to recovery"
            align="center"
          />
          <div className="values-grid">
            <article>
              <span>01</span>
              <h3>Compassion</h3>
              <p>
                Offering time, attention and therapeutic care in a calm,
                nurturing environment.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Impartiality</h3>
              <p>
                Treating everyone who comes for support regardless of race,
                colour or creed.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Voluntary service</h3>
              <p>
                Bringing together qualified therapists and supporters who give
                their skills and energy.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Our work today"
            title="One mission, two principal areas of work"
            intro="Sue has confirmed the charity's principal active work is now Bosnia and Herzegovina and Ukraine aid. Current UK support continues through military FABCAMPS, but is not presented as a full third programme."
            align="center"
          />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.href} project={project} />
            ))}
          </div>
          <div className="action-grid supporting-work-grid">
            <ButtonLink href={ukSupport.href} variant="secondary">
              Read about current UK support
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="site-container quote-grid">
          {testimonials.slice(1).map((testimonial) => (
            <QuoteCard key={testimonial.attribution} {...testimonial} />
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Join the network"
        title="Your skills or support can make a difference."
        text="Therapists and non-therapists can both play a part in the charity's work."
      >
        <ButtonLink href="/volunteer" variant="light">
          Explore volunteering
        </ButtonLink>
      </CtaBand>
    </>
  );
}
