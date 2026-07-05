import type { MetadataRoute } from "next";
import { publicSitePaths } from "@/content/routes";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicSitePaths.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
