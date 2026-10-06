import type { Locale } from "./translations";

export interface FestaPhoto {
  src: string;
  width: number;
  height: number;
  alt: Record<Locale, string>;
}

export interface FestaProgramDay {
  date: string; // YYYY-MM-DD
  items: { time: string; activity: Record<Locale, string> }[];
}

export interface FestaEdition {
  year: number;
  // Edition count printed on the flyer, e.g. 19 for "19ª edizione".
  number?: number;
  // ISO dates (YYYY-MM-DD); leave `start` null until the date is announced.
  start: string | null;
  end?: string;
  // Free text shown next to the date, e.g. "dalle 12:00".
  time?: Record<Locale, string>;
  description: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  // Day-by-day schedule, when known.
  program?: FestaProgramDay[];
  freeEntry?: boolean;
  // Put the edition's flyer and photos in /public/images/festa/<year>/.
  flyer?: FestaPhoto;
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
  {
    year: 2025,
    number: 19,
    start: "2025-07-11",
    end: "2025-07-13",
    freeEntry: true,
    description: {
      it: "Tre giorni di \"Cascina Germoglio in festa\" nell'area del maneggio: esibizioni equestri, laboratori con gli animali della cascina, gite in carrozza, cucina tipica bergamasca e paella, musica e il grande concerto dei Medicina Crow.",
      es: "Tres días de \"Cascina Germoglio in festa\" en la zona del picadero: exhibiciones ecuestres, talleres con los animales de la granja, paseos en carruaje, cocina típica de Bérgamo y paella, música y el gran concierto de Medicina Crow.",
      en: "Three days of \"Cascina Germoglio in festa\" in the riding arena: horse shows, workshops with the farm animals, carriage rides, traditional Bergamo food and paella, music and a big concert by Medicina Crow.",
    },
    highlights: {
      it: ["Esibizioni equestri", "Cucina tipica bergamasca e paella", "Laboratori con gli animali e mini-gite in carrozza", "Concerto dei Medicina Crow"],
      es: ["Exhibiciones ecuestres", "Cocina típica de Bérgamo y paella", "Talleres con los animales y paseos en carruaje", "Concierto de Medicina Crow"],
      en: ["Horse shows", "Traditional Bergamo food and paella", "Animal workshops and carriage rides", "Medicina Crow in concert"],
    },
    program: [
      {
        date: "2025-07-11",
        items: [
          { time: "18:00", activity: { it: "Esibizione equestre a cura della ASD Associazione Aiuto a Vivere (Teatro Stalla)", es: "Exhibición ecuestre a cargo de la ASD Associazione Aiuto a Vivere (Teatro Stalla)", en: "Horse show by ASD Associazione Aiuto a Vivere (Teatro Stalla)" } },
          { time: "19:00–23:00", activity: { it: "Ristorante con cucina tipica bergamasca, paella e servizio bar", es: "Restaurante con cocina típica de Bérgamo, paella y bar", en: "Restaurant with traditional Bergamo food, paella and bar" } },
          { time: "21:00", activity: { it: "Esibizioni equestri", es: "Exhibiciones ecuestres", en: "Horse shows" } },
          { time: "22:00", activity: { it: "Musica di intrattenimento", es: "Música en vivo", en: "Live music" } },
        ],
      },
      {
        date: "2025-07-12",
        items: [
          { time: "17:00–19:00", activity: { it: "Laboratori con gli animali di Cascina Germoglio e mini-gite in carrozza", es: "Talleres con los animales de Cascina Germoglio y paseos en carruaje", en: "Workshops with the Cascina Germoglio animals and short carriage rides" } },
          { time: "19:00–23:00", activity: { it: "Ristorante con cucina tipica bergamasca, paella e servizio bar", es: "Restaurante con cocina típica de Bérgamo, paella y bar", en: "Restaurant with traditional Bergamo food, paella and bar" } },
          { time: "21:00", activity: { it: "Esibizioni equestri", es: "Exhibiciones ecuestres", en: "Horse shows" } },
          { time: "22:00", activity: { it: "Musica di intrattenimento", es: "Música en vivo", en: "Live music" } },
        ],
      },
      {
        date: "2025-07-13",
        items: [
          { time: "10:00", activity: { it: "Trekking della solidarietà con cavalli e biciclette", es: "Trekking solidario con caballos y bicicletas", en: "Charity trek on horseback and by bike" } },
          { time: "12:00–14:00", activity: { it: "Ristorante con cucina tipica bergamasca e servizio bar", es: "Restaurante con cocina típica de Bérgamo y bar", en: "Restaurant with traditional Bergamo food and bar" } },
          { time: "17:00–19:00", activity: { it: "Laboratori con gli animali di Cascina Germoglio e mini-gite in carrozza", es: "Talleres con los animales de Cascina Germoglio y paseos en carruaje", en: "Workshops with the Cascina Germoglio animals and short carriage rides" } },
          { time: "17:00", activity: { it: "Raduno di camion allestiti, Harley Davidson, Vespa e macchine d'epoca e tuning", es: "Concentración de camiones decorados, Harley Davidson, Vespas, coches clásicos y tuning", en: "Meet-up of custom trucks, Harley-Davidsons, Vespas, vintage and tuned cars" } },
          { time: "18:00", activity: { it: "Aperitivo con esibizioni equestri", es: "Aperitivo con exhibiciones ecuestres", en: "Aperitivo with horse shows" } },
          { time: "19:00–23:00", activity: { it: "Ristorante con cucina tipica bergamasca, paella e servizio bar", es: "Restaurante con cocina típica de Bérgamo, paella y bar", en: "Restaurant with traditional Bergamo food, paella and bar" } },
          { time: "21:00", activity: { it: "Grande concerto dei \"Medicina Crow\"", es: "Gran concierto de \"Medicina Crow\"", en: "Live concert by \"Medicina Crow\"" } },
        ],
      },
    ],
    flyer: {
      src: "/images/festa/2025/volantino.webp",
      width: 639,
      height: 807,
      alt: {
        it: "Volantino di Cascina Germoglio in festa, 19ª edizione, 11–13 luglio 2025",
        es: "Cartel de Cascina Germoglio in festa, 19.ª edición, 11–13 de julio de 2025",
        en: "Flyer for Cascina Germoglio in festa, 19th edition, 11–13 July 2025",
      },
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

// "Venerdì 11 luglio" for a program day.
export function formatProgramDay(date: string, locale: Locale): string {
  const text = new Intl.DateTimeFormat(dateLocales[locale], {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
  return text.charAt(0).toUpperCase() + text.slice(1);
}
