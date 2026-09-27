import { type Locale, type Weekday, locales, pagePaths } from "./translations";

export const siteUrl = "https://www.hostariagermoglio.it";

// 1200×630 image used when links to the site are shared.
export const shareImage = { url: "/images/og-image.jpg", width: 1200, height: 630 };

export const vatNumber = "04339080162";

export const address = {
  street: "Via Solferino 53",
  postalCode: "24049",
  city: "Verdello",
  province: "BG",
  country: "IT",
};

// Listed in display order; each slot is [opens, closes] in 24h time.
export const openingHours: { day: Weekday; slots: [string, string][] }[] = [
  { day: "Sunday", slots: [["12:15", "15:00"], ["19:15", "22:00"]] },
  { day: "Monday", slots: [["12:15", "15:00"]] },
  { day: "Tuesday", slots: [["12:15", "15:00"]] },
  { day: "Wednesday", slots: [["12:15", "15:00"]] },
  { day: "Thursday", slots: [] },
  { day: "Friday", slots: [["12:15", "15:00"], ["19:15", "22:00"]] },
  { day: "Saturday", slots: [["12:15", "15:00"], ["19:15", "22:00"]] },
];

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
