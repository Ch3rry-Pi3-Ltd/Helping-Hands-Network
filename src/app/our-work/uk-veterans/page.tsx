import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { QuoteCard } from "@/components/quote-card";
import { SectionHeading } from "@/components/section-heading";
import { StatusNote } from "@/components/status-note";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "UK military family support",
  "Learn about Healing Hands Network's current UK support through military FABCAMPS residential weeks.",
  "/our-work/uk-veterans",
);

export default function UKVeteransPage() {
  return (
    <>
      <PageHeader
        eyebrow="UK support"
        title="Supporting military families through FABCAMPS"
        intro="Current UK activity is focused on providing free therapies at military charity FABCAMPS residential weeks in Wales and Scotland."
        tone="navy"
      >
        <ButtonLink href="/volunteer">Offer your skills</ButtonLink>
      </PageHeader>

      <section className="section">
        <div className="site-container editorial-grid">
          <div>
            <SectionHeading
              eyebrow="Current activity"
              title="A focused UK commitment"
            />
            <p className="lead">
              Sue has confirmed that Healing Hands Network has little or no
              wider UK veterans work at present, following Covid.
            </p>
            <p>
              The charity currently attends and helps at military charity
              FABCAMPS each year. These are one-week residential activity
              holidays in Wales and Scotland for bereaved military families,
              created to support recovery.
            </p>
            <p>
              Healing Hands Network provides free therapies to guests during
              those weeks.
            </p>
            <StatusNote>
              Confirm approved FABCAMPS wording, image choice and whether this
              page should remain separate before final launch.
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
            attribution="Healing Hands Network client"
          />
          <QuoteCard
            quote="It's very comforting to have Healing Hands at our group and to see how they bring change, hope and positive energy to our lives."
            attribution="Veterans' support coordinator"
          />
        </div>
      </section>

      <CtaBand
        eyebrow="Therapists needed"
        title="Future UK opportunities depend on local volunteer coverage."
        text="Sue has contacts at veteran support centres, monthly groups and veterans' cafés, but local members would be needed before that work could restart."
      >
        <ButtonLink href="/volunteer" variant="light">
          Learn about volunteering
        </ButtonLink>
      </CtaBand>
    </>
  );
}
