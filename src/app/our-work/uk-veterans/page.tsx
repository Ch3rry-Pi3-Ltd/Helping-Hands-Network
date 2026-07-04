import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { QuoteCard } from "@/components/quote-card";
import { SectionHeading } from "@/components/section-heading";
import { StatusNote } from "@/components/status-note";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "UK Veterans",
  "Learn about Healing Hands Network's complementary therapy support for UK veterans, serving personnel and families.",
  "/our-work/uk-veterans",
);

export default function UKVeteransPage() {
  return (
    <>
      <PageHeader
        eyebrow="UK Veterans"
        title="Support closer to home"
        intro="Complementary therapy and compassionate support for veterans, serving personnel and families living with the effects of war."
        tone="navy"
      >
        <ButtonLink href="/volunteer">Offer your skills</ButtonLink>
      </PageHeader>

      <section className="section">
        <div className="site-container editorial-grid">
          <div>
            <SectionHeading
              eyebrow="Why it matters"
              title="Some effects of active service are hidden"
            />
            <p className="lead">
              Post-traumatic stress and physical injury can affect everyday
              life, relationships and whole families.
            </p>
            <p>
              Healing Hands Network’s UK work has brought volunteer therapists
              into veterans’ groups and support settings, offering treatments
              in calm, familiar environments.
            </p>
            <p>
              The project is intended to complement specialist services,
              working alongside organisations already supporting the armed
              forces community.
            </p>
            <StatusNote>
              Current partner organisations, locations and therapist
              requirements need charity confirmation before launch.
            </StatusNote>
          </div>
          <div className="editorial-image editorial-image-tall">
            <Image
              src="/images/veterans-group.jpg"
              alt="Veterans and support workers gathered around a table at a community meeting"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 42vw"
            />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="site-container quote-grid">
          <QuoteCard
            quote="Before having the treatment, I found it difficult to walk because of the pain. To my amazement, afterwards I was pain free."
            attribution="Veteran and Healing Hands Network client"
          />
          <QuoteCard
            quote="It's very comforting to have Healing Hands at our group and to see how they bring change, hope and positive energy to our lives."
            attribution="Veterans' support coordinator"
          />
        </div>
      </section>

      <CtaBand
        eyebrow="Therapists needed"
        title="Use your experience to support the armed forces community."
        text="Ask about current UK opportunities and the experience or induction required."
      >
        <ButtonLink href="/volunteer" variant="light">
          Learn about volunteering
        </ButtonLink>
      </CtaBand>
    </>
  );
}
