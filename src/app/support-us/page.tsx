import { ButtonLink } from "@/components/button-link";
import { FundraisingPromotion } from "@/components/fundraising-promotion";
import { HeartIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { StatusNote } from "@/components/status-note";
import { fundraisingDestinations, supportRoutes } from "@/content/site";
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

      <section className="section section-soft">
        <div className="site-container">
          <SectionHeading
            eyebrow="Featured fundraising partners"
            title="Support HHN while you play or shop"
            intro="These verified external services provide two additional ways to raise funds. Scan a code from another device or use the accessible links provided."
            align="center"
          />

          <div className="fundraising-promotion-grid">
            <FundraisingPromotion
              provider="GivingLottery"
              title="A weekly chance to help Healing Hands Network"
              description="Choose Healing Hands Network when buying a GivingLottery ticket and part of every ticket will support the charity's work."
              qrValue={fundraisingDestinations.givingLottery}
              qrLabel="Scan with another device to open the official HHN GivingLottery page."
              tone="lottery"
              actions={[
                {
                  href: fundraisingDestinations.givingLottery,
                  label: "Play GivingLottery",
                  variant: "light",
                },
              ]}
            >
              <p>
                18+. Great Britain only. Always play responsibly. If gambling
                is causing concern, visit{" "}
                <a
                  href="https://www.gambleaware.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GambleAware
                </a>
                .
              </p>
            </FundraisingPromotion>

            <FundraisingPromotion
              provider="Give as You Live"
              title="Turn everyday shopping into free donations"
              description="Shop online through Give as You Live and participating retailers can make a donation to Healing Hands Network at no extra cost to you."
              qrValue={fundraisingDestinations.giveAsYouLiveDonate}
              qrLabel="Scan with another device for HHN donation and fundraising options."
              tone="shopping"
              actions={[
                {
                  href: fundraisingDestinations.giveAsYouLive,
                  label: "Shop and raise",
                },
                {
                  href: fundraisingDestinations.giveAsYouLiveDonate,
                  label: "Donate through Give as You Live",
                  variant: "secondary",
                },
              ]}
            >
              <p>
                Give as You Live also offers secure one-off and monthly
                donations through its dedicated Healing Hands Network page.
              </p>
            </FundraisingPromotion>
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
            profile. Sue has also supplied a working CAF Donate page and
            confirmed the charity&apos;s GivingLottery and Give as You Live
            pages. Bank-transfer and Gift Aid details still need final forms or
            instructions before launch.
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
