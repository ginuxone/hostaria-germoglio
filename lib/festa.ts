import type { Locale } from "./translations";

export interface FestaPhoto {
  src: string;
  width: number;
  height: number;
  alt: Record<Locale, string>;
}

export interface FestaEdition {
  year: number;
  // ISO dates (YYYY-MM-DD); leave `start` null until the date is announced.
  start: string | null;
  end?: string;
  // Free text shown next to the date, e.g. "dalle 12:00".
  time?: Record<Locale, string>;
  description: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  // Put the edition's photos in /public/images/festa/<year>/.
  photos: FestaPhoto[];
}

// One entry per year. To add a new edition, copy the newest entry to the top
// of the list and update it: the page features the first entry and lists
// the others as past editions.
export const festaEditions: FestaEdition[] = [
  {
    year: 2026,
    start: null,
    description: {
      it: "Una giornata in cascina con i piatti della nostra cucina italo-peruviana, musica dal vivo e gli animali della fattoria da visitare. Un'occasione per stare insieme, grandi e piccoli.",
      es: "Un día en la granja con los platos de nuestra cocina ítalo-peruana, música en vivo y los animales de la granja para visitar. Una ocasión para estar juntos, grandes y pequeños.",
      en: "A day at the farm with dishes from our Italian-Peruvian kitchen, live music and the farm animals to visit. A chance to get together, for grown-ups and kids alike.",
    },
    highlights: {
      it: ["Cucina italiana e peruviana all'aperto", "Musica dal vivo", "Visita agli animali della fattoria", "Giochi per i bambini"],
      es: ["Cocina italiana y peruana al aire libre", "Música en vivo", "Visita a los animales de la granja", "Juegos para los niños"],
      en: ["Italian and Peruvian food outdoors", "Live music", "Meet the farm animals", "Games for the kids"],
    },
    photos: [],
  },
];

const dateLocales: Record<Locale, string> = { it: "it-IT", es: "es-ES", en: "en-GB" };

// "12 luglio 2026" or "12 – 13 luglio 2026"; null while the date is unknown.
export function formatEditionDate(edition: FestaEdition, locale: Locale): string | null {
  if (!edition.start) return null;
  const format = new Intl.DateTimeFormat(dateLocales[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const start = new Date(`${edition.start}T00:00:00Z`);
  if (!edition.end) return format.format(start);
  return format.formatRange(start, new Date(`${edition.end}T00:00:00Z`));
}
