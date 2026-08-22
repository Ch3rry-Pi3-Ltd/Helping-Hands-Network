import Image from "next/image";
import Link from "next/link";
import { navigation, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-intro">
          <Link href="/" className="footer-brand">
            <Image src="/images/logo.png" alt="" width={58} height={49} quality={60} />
            <span>Healing Hands Network</span>
          </Link>
          <p>{siteConfig.mission}</p>
          <p className="charity-number">
            Registered charity number {siteConfig.charityNumber}
          </p>
        </div>

        <div>
          <h2>Explore</h2>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Our work</h2>
          <ul>
            <li>
              <Link href="/our-work/bosnia-and-herzegovina">Bosnia</Link>
            </li>
            <li>
              <Link href="/our-work/ukraine">Ukraine Aid</Link>
            </li>
            <li>
              <Link href="/our-work/uk-veterans">UK support</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Get in touch</h2>
          <ul>
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={siteConfig.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <p>© {new Date().getFullYear()} Healing Hands Network</p>
        <p>
          <Link href="/privacy">Privacy</Link>
          <span aria-hidden="true"> · </span>
          Parallel website prototype — content subject to charity approval.
        </p>
      </div>
    </footer>
  );
}
