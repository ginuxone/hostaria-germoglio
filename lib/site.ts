import { type Locale, locales, pagePaths } from "./translations";

export const siteUrl = "https://www.hostariagermoglio.it";

export const vatNumber = "04339080162";

export const phone = {
  display: "+39 371 695 6239",
  href: "tel:+393716956239",
};

// Table bookings go through WhatsApp on the restaurant's mobile number.
export function whatsappUrl(message: string): string {
  return `https://wa.me/393716956239?text=${encodeURIComponent(message)}`;
}

export const socialLinks: { label: string; href: string | null }[] = [
  { label: "Instagram", href: "https://www.instagram.com/hostariagermoglioverdello/" },
  { label: "Facebook", href: "https://www.facebook.com/HostariaGermoglioVerdello/" },
  // Set to the restaurant's profile URL to show the link.
  { label: "TikTok", href: null },
];

export type Page = keyof typeof pagePaths;

export function localePath(locale: Locale, page: Page): string {
  const path = pagePaths[page];
  return path ? `/${locale}/${path}` : `/${locale}`;
}

export function languageAlternates(page: Page): Record<string, string> {
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, localePath(locale, page)])),
    "x-default": localePath("it", page),
  };
}
