import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { QuoteCard } from "@/components/quote-card";
import { SectionHeading } from "@/components/section-heading";
import { StatusNote } from "@/components/status-note";
import { testimonials } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Bosnia and Herzegovina",
  "Learn about Healing Hands Network's long-running complementary therapy work in Sarajevo.",
  "/our-work/bosnia-and-herzegovina",
);

export default function BosniaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bosnia and Herzegovina"
        title="Alongside Sarajevo since 1996"
        intro="Free complementary therapies and gentle support for people living with the long-term physical and emotional effects of the Balkan War."
      >
        <ButtonLink href="/volunteer">Volunteer with us</ButtonLink>
      </PageHeader>

      <section className="section">
        <div className="site-container editorial-grid">
          <div>
            <SectionHeading
              eyebrow="Why we are there"
              title="The aftermath of war does not end when the fighting stops"
            />
            <p className="lead">
              Healing Hands Network began in Sarajevo soon after the war ended.
              The charity has continued because people still live with trauma,
              loss, pain and displacement.
            </p>
            <p>
              Qualified and experienced volunteer therapists offer treatments
              such as massage, reflexology, aromatherapy, Reiki and other
              complementary approaches. The aim is to provide a safe, peaceful
              space and help improve wellbeing.
            </p>
            <p>
              The charity has historically worked with local associations
              supporting concentration camp survivors, civilian war victims,
              women affected by war and families of Srebrenica.
            </p>
            <StatusNote>
              Current clinic dates, outreach venues, partner groups and
              volunteer costs need charity confirmation before launch.
            </StatusNote>
          </div>
          <div className="editorial-image editorial-image-tall">
            <Image
              src="/images/sarajevo-group.jpg"
              alt="A small support group seated together in the Healing Hands Network clinic in Sarajevo"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 42vw"
            />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="site-container two-column-copy">
          <div>
            <SectionHeading eyebrow="What happens" title="Care shaped around the person" />
          </div>
          <div>
            <p>
              Some clients say they sleep better, feel relief from continual
              aches and pains, or experience renewed hope. For others, the
              treatment is simply an hour to pause and feel cared for.
            </p>
            <p>
              Therapists listen without taking sides and offer support to
              everyone who comes, regardless of background or belief.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container narrow-quote">
          <QuoteCard {...testimonials[0]} featured />
        </div>
      </section>

      <CtaBand
        eyebrow="Be part of the work"
        title="Help us keep showing up in Sarajevo."
        text="Qualified therapists can ask about volunteering. Supporters can help with fundraising and practical costs."
      >
        <ButtonLink href="/volunteer" variant="light">
          Volunteering information
        </ButtonLink>
        <ButtonLink href="/support-us" variant="secondary">
          Support the project
        </ButtonLink>
      </CtaBand>
    </>
  );
}
