import { ButtonLink } from "@/components/button-link";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { StatusNote } from "@/components/status-note";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Contact",
  "Contact Healing Hands Network by email, phone or post.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We would be glad to hear from you"
        intro="Ask about volunteering, supporting the charity, current projects or anything else connected with Healing Hands Network."
      />

      <section className="section">
        <div className="site-container contact-grid">
          <article className="contact-card contact-card-primary">
            <MailIcon />
            <p className="card-kicker">Email</p>
            <h2>Send us a message</h2>
            <p>
              The general charity inbox is the best starting point for most
              enquiries.
            </p>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </article>

          <article className="contact-card">
            <PhoneIcon />
            <p className="card-kicker">Phone</p>
            <h2>Call the charity</h2>
            <p>If no one is available, please leave a clear message.</p>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
              {siteConfig.phone}
            </a>
          </article>

          <article className="contact-card">
            <MapPinIcon />
            <p className="card-kicker">Post</p>
            <h2>Write to us</h2>
            <address>
              {siteConfig.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          </article>

          <article className="contact-card contact-card-soft">
            <p className="card-kicker">Not sure where to start?</p>
            <h2>Use the general inbox</h2>
            <p>
              Include a short subject such as “Volunteering”, “Donation form”
              or “Ukraine aid” so your message can be directed quickly.
            </p>
            <ButtonLink href={`mailto:${siteConfig.email}`}>
              Email Healing Hands
            </ButtonLink>
          </article>
        </div>
        <div className="site-container contact-note">
          <StatusNote>
            Phone number and postal address were taken from the current public
            site and should be confirmed by the charity before launch.
          </StatusNote>
        </div>
      </section>
    </>
  );
}
