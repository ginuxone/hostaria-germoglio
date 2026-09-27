import type { Metadata } from "next";
import { getLocale, translations } from "./translations";
import { languageAlternates, localePath, type Page } from "./site";

const ogLocales = { it: "it_IT", es: "es_ES", en: "en_GB" } as const;

export async function pageMetadata(
  params: Promise<{ locale: string }>,
  page: Page,
): Promise<Metadata> {
  const locale = getLocale((await params).locale);
  const t = translations[locale];
  const title =
    page === "home"
      ? { absolute: `${t.brand.name} · ${t.brand.tagline}` }
      : { menu: t.menu.heading, staff: t.staff.heading, contact: t.contact.heading }[page];
  const description = t.meta[page];

  return {
    title,
    description,
    alternates: {
      canonical: localePath(locale, page),
      languages: languageAlternates(page),
    },
    openGraph: {
      type: "website",
      siteName: t.brand.name,
      locale: ogLocales[locale],
      url: localePath(locale, page),
      title: typeof title === "string" ? `${title} | ${t.brand.name}` : title.absolute,
      description,
    },
  };
}
