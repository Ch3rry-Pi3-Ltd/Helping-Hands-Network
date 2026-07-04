import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Privacy",
  "How Healing Hands Network handles information when you use this website.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Your privacy on this website"
        intro="A plain-English explanation of the limited information collected by this website prototype."
      />

      <section className="section">
        <div className="site-container legal-content">
          <p className="lead">
            Healing Hands Network respects your privacy. This website is
            designed to collect as little personal information as possible.
          </p>

          <h2>Website analytics</h2>
          <p>
            We use Vercel Web Analytics to understand general website use,
            including page views, popular pages, referring websites,
            approximate country, and browser or device type.
          </p>
          <p>
            Vercel Web Analytics is cookie-free and provides anonymised,
            aggregated information. It does not give Healing Hands Network your
            name, email address or full IP address, and we cannot use it to
            identify individual visitors.
          </p>

          <h2>When you contact us</h2>
          <p>
            This website does not contain a contact form. If you choose to
            contact the charity by email or telephone, the information you
            provide will be used to respond to your enquiry and handled through
            the charity&apos;s normal communication systems.
          </p>

          <h2>External websites</h2>
          <p>
            The website links to services operated by other organisations,
            including Facebook and fundraising platforms. Their own privacy and
            cookie policies apply when you visit them.
          </p>

          <h2>Questions about your information</h2>
          <p>
            For privacy questions or requests concerning information held by
            Healing Hands Network, email{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>

          <p className="legal-updated">Last updated: 4 July 2026.</p>
        </div>
      </section>
    </>
  );
}
