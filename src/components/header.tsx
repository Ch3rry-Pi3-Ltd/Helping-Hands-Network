import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { MenuIcon } from "@/components/icons";
import { navigation } from "@/content/site";

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <ul className={mobile ? "mobile-nav-list" : "desktop-nav-list"}>
      {navigation.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="notice-bar">
        <div className="site-container notice-inner">
          <p>Volunteer-led support for people affected by war</p>
          <p>Registered charity 1080268</p>
        </div>
      </div>
      <div className="site-container header-inner">
        <Link href="/" className="brand" aria-label="Healing Hands Network home">
          <Image
            src="/images/logo.png"
            alt=""
            width={68}
            height={57}
            priority
            className="brand-logo"
          />
          <span>
            <strong>Healing Hands</strong>
            <small>Network</small>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="desktop-nav">
          <NavLinks />
        </nav>

        <div className="header-action">
          <ButtonLink href="/support-us">Donate</ButtonLink>
        </div>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <MenuIcon />
            <span>Menu</span>
          </summary>
          <nav aria-label="Mobile navigation">
            <NavLinks mobile />
            <ButtonLink href="/support-us" className="mobile-donate">
              Donate
            </ButtonLink>
          </nav>
        </details>
      </div>
    </header>
  );
}
