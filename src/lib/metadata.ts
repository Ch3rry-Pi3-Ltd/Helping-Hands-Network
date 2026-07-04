import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export function createMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: "/images/logo.png",
          width: 600,
          height: 502,
          alt: "Healing Hands Network logo",
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: ["/images/logo.png"],
    },
  };
}
