import type { MetadataRoute } from "next";
import { locales, pagePaths } from "../lib/translations";
import { languageAlternates, localePath, siteUrl, type Page } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Object.keys(pagePaths) as Page[];
  const absolute = (path: string) => `${siteUrl}${path}`;

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: absolute(localePath(locale, page)),
      changeFrequency: "monthly" as const,
      priority: page === "home" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(languageAlternates(page)).map(([lang, path]) => [lang, absolute(path)]),
        ),
      },
    })),
  );
}
