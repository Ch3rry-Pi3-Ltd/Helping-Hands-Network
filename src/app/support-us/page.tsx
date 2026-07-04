import { ButtonLink } from "@/components/button-link";
import { HeartIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { StatusNote } from "@/components/status-note";
import { supportRoutes } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Support us",
  "Donate, fundraise, sponsor or request standing order and Gift Aid information from Healing Hands Network.",
  "/support-us",
);

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support us"
        title="Help healing reach further"
        intro="Donations, fundraising and practical support all help volunteers continue caring for people affected by war."
      />

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Ways to give"
            title="Choose the route that works for you"
            intro="This prototype does not process payments. It only links to public campaigns or opens a conversation with the charity."
            align="center"
          />
          <div className="support-grid">
            {supportRoutes.map((route) => {
              const external = route.href.startsWith("http");

              return (
                <article className="support-card" key={route.title}>
                  <span className="support-icon">
                    <HeartIcon />
                  </span>
                  <h2>{route.title}</h2>
                  <p>{route.description}</p>
                  <StatusNote>{route.status}</StatusNote>
                  <ButtonLink
                    href={route.href}
                    external={external}
                    variant="secondary"
                  >
                    {route.label}
                  </ButtonLink>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="site-container narrow-content">
          <SectionHeading
            eyebrow="Before this page goes live"
            title="Donation routes need one final charity check"
          />
          <p>
            The legacy website also references old downloadable membership,
            donation, standing order, sponsorship, Gift Aid and collecting-tin
            forms. Those files may contain outdated information, so they have
            not been copied into this prototype.
          </p>
          <p>
            The charity should nominate its primary online campaign and supply
            current approved forms. No GivingLottery route was confirmed during
            the public-site review.
          </p>
        </div>
      </section>
    </>
  );
}
