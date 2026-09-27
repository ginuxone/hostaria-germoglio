import { getLocale, translations } from "./translations";
import { address, localePath, openingHours, phone, shareImage, siteUrl, socialLinks } from "./site";

// schema.org Restaurant data for search engines (Google Maps, local results).
export function restaurantJsonLd(localeParam: string): string {
  const locale = getLocale(localeParam);
  const t = translations[locale];

  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteUrl}/#restaurant`,
    name: t.brand.name,
    description: t.meta.home,
    url: `${siteUrl}${localePath(locale, "home")}`,
    image: `${siteUrl}${shareImage.url}`,
    telephone: phone.href.replace("tel:", ""),
    servesCuisine: ["Italian", "Peruvian"],
    priceRange: "€€",
    acceptsReservations: true,
    hasMenu: `${siteUrl}${localePath(locale, "menu")}`,
    inLanguage: locale,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      postalCode: address.postalCode,
      addressLocality: address.city,
      addressRegion: address.province,
      addressCountry: address.country,
    },
    openingHoursSpecification: openingHours.flatMap(({ day, slots }) =>
      slots.map(([opens, closes]) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${day}`,
        opens,
        closes,
      })),
    ),
    sameAs: socialLinks.flatMap(({ href }) => (href ? [href] : [])),
  };

  // Escape "<" so the payload can't close the surrounding <script> tag.
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
