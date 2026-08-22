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
  const sponsoredIdeas = [
    "walk",
    "run",
    "jump",
    "firewalk",
    "climb",
    "haircut",
    "give something up for a month",
  ];

  const communityIdeas = [
    "coffee morning",
    "craft workshop with an added donation",
    "cake sale",
    "craft sale",
    "garden party",
    "Halloween party or cake sale",
    "sewing, art or craft group collection",
    "book sale",
  ];

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
            Sue has confirmed GoFundMe is the preferred main online platform,
            and the prototype now links to the Healing Hands Network GoFundMe
            profile. Sue has also supplied a working CAF Donate page. Giving
            Lottery, Give as You Live, bank-transfer and Gift Aid details still
            need final links or instructions before launch.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Fundraising ideas"
            title="Simple ways supporters could raise money"
            intro="Sue suggested these as practical examples for supporters. The final page can be adjusted once the charity confirms preferred wording and enquiry handling."
            align="center"
          />
          <div className="support-grid">
            <article className="support-card">
              <h2>Sponsored activities</h2>
              <ul className="check-list">
                {sponsoredIdeas.map((idea) => (
                  <li key={idea}>{idea}</li>
                ))}
              </ul>
            </article>
            <article className="support-card">
              <h2>Community fundraising</h2>
              <ul className="check-list">
                {communityIdeas.map((idea) => (
                  <li key={idea}>{idea}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
