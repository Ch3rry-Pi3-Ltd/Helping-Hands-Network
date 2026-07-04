import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/our-work",
    "/our-work/bosnia-and-herzegovina",
    "/our-work/ukraine",
    "/our-work/uk-veterans",
    "/volunteer",
    "/support-us",
    "/updates",
    "/contact",
  ];

  return paths.map((path) => ({
    url: new URL(path || "/", siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
