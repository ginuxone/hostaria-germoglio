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
    number: 20,
    start: "2026-07-10",
    end: "2026-07-12",
    freeEntry: true,
    description: {
      it: "Tre giorni di \"Cascina Germoglio in festa\" nell'area del maneggio: esibizioni equestri e lo spettacolo \"Notturno Equus\" della Fondazione Emilia Bosis, la serata spagnola, cucina tipica bergamasca, paella e costatone alla brace, laboratori con gli animali, gite in carrozza e il raduno di Mustang, Harley e auto d'epoca.",
      es: "Tres días de \"Cascina Germoglio in festa\" en la zona del picadero: exhibiciones ecuestres y el espectáculo \"Notturno Equus\" de la Fondazione Emilia Bosis, la noche española, cocina típica de Bérgamo, paella y chuletón a la brasa, talleres con los animales, paseos en carruaje y la concentración de Mustang, Harley y coches clásicos.",
      en: "Three days of \"Cascina Germoglio in festa\" in the riding arena: horse shows and the \"Notturno Equus\" show by Fondazione Emilia Bosis, a Spanish night, traditional Bergamo food, paella and grilled steak, workshops with the animals, carriage rides and a meet-up of Mustangs, Harleys and vintage cars.",
    },
    highlights: {
      it: ["Esibizioni equestri e \"Notturno Equus\"", "Serata tipica spagnola", "Cucina bergamasca, paella e costatone alla brace", "Laboratori con gli animali e mini-gite in carrozza", "Raduno di Mustang, Harley Davidson e auto d'epoca", "Gonfiabili per i bambini"],
      es: ["Exhibiciones ecuestres y \"Notturno Equus\"", "Noche típica española", "Cocina de Bérgamo, paella y chuletón a la brasa", "Talleres con los animales y paseos en carruaje", "Concentración de Mustang, Harley Davidson y coches clásicos", "Castillos hinchables para los niños"],
      en: ["Horse shows and \"Notturno Equus\"", "Spanish night", "Bergamo food, paella and grilled steak", "Animal workshops and carriage rides", "Mustang, Harley-Davidson and vintage car meet-up", "Bouncy castles for the kids"],
    },
    program: [
      {
        date: "2026-07-10",
        items: [
          { time: "16:00", activity: { it: "Santa Messa presso la sala polivalente \"Mons. Roberto Amadei\" (Cascina Germoglio)", es: "Santa Misa en la sala polivalente \"Mons. Roberto Amadei\" (Cascina Germoglio)", en: "Holy Mass in the \"Mons. Roberto Amadei\" hall (Cascina Germoglio)" } },
          { time: "18:00", activity: { it: "Esibizione equestre a cura della ASD Associazione Aiuto a Vivere (Teatro Stalla)", es: "Exhibición ecuestre a cargo de la ASD Associazione Aiuto a Vivere (Teatro Stalla)", en: "Horse show by ASD Associazione Aiuto a Vivere (Teatro Stalla)" } },
          { time: "19:00–23:00", activity: { it: "Ristorante con cucina tipica bergamasca, paella, costatone alla brace e servizio bar", es: "Restaurante con cocina típica de Bérgamo, paella, chuletón a la brasa y bar", en: "Restaurant with traditional Bergamo food, paella, grilled steak and bar" } },
          { time: "21:00", activity: { it: "Esibizioni equestri", es: "Exhibiciones ecuestres", en: "Horse shows" } },
          { time: "22:00", activity: { it: "DJ Fiji, musica revival nazionale e internazionale", es: "DJ Fiji, música revival italiana e internacional", en: "DJ Fiji, Italian and international revival music" } },
        ],
      },
      {
        date: "2026-07-11",
        items: [
          { time: "17:00–19:00", activity: { it: "Laboratori con gli animali di Cascina Germoglio e mini-gite in carrozza", es: "Talleres con los animales de Cascina Germoglio y paseos en carruaje", en: "Workshops with the Cascina Germoglio animals and short carriage rides" } },
          { time: "18:00", activity: { it: "Spettacolo teatrale-equestre a cura della Fondazione Emilia Bosis (Teatro Stalla)", es: "Espectáculo teatral-ecuestre a cargo de la Fondazione Emilia Bosis (Teatro Stalla)", en: "Theatre and horse show by Fondazione Emilia Bosis (Teatro Stalla)" } },
          { time: "19:00–23:00", activity: { it: "Ristorante con cucina tipica bergamasca, paella, costatone alla brace e servizio bar; per la serata spagnola carne spagnola, pata negra e tinto de verano", es: "Restaurante con cocina típica de Bérgamo, paella, chuletón a la brasa y bar; para la noche española carne española, pata negra y tinto de verano", en: "Restaurant with traditional Bergamo food, paella, grilled steak and bar; for the Spanish night, Spanish meat, pata negra ham and tinto de verano" } },
          { time: "21:00", activity: { it: "Serata tipica spagnola con esibizioni equestri, balli e musica spagnola", es: "Noche típica española con exhibiciones ecuestres, bailes y música española", en: "Spanish night with horse shows, dancing and Spanish music" } },
          { time: "22:00", activity: { it: "Musica di intrattenimento", es: "Música en vivo", en: "Live music" } },
        ],
      },
      {
        date: "2026-07-12",
        items: [
          { time: "10:00", activity: { it: "Raduno di auto Mustang, Harley Davidson, auto d'epoca e Vespa", es: "Concentración de Mustang, Harley Davidson, coches clásicos y Vespas", en: "Meet-up of Mustangs, Harley-Davidsons, vintage cars and Vespas" } },
          { time: "12:00–14:00", activity: { it: "Ristorante con cucina tipica bergamasca e servizio bar", es: "Restaurante con cocina típica de Bérgamo y bar", en: "Restaurant with traditional Bergamo food and bar" } },
          { time: "17:00–19:00", activity: { it: "Laboratori con gli animali di Cascina Germoglio e mini-gite in carrozza", es: "Talleres con los animales de Cascina Germoglio y paseos en carruaje", en: "Workshops with the Cascina Germoglio animals and short carriage rides" } },
          { time: "17:00", activity: { it: "Giri in Mustang", es: "Paseos en Mustang", en: "Rides in a Mustang" } },
          { time: "19:00–23:00", activity: { it: "Ristorante con cucina tipica bergamasca, paella, costatone alla brace e servizio bar", es: "Restaurante con cocina típica de Bérgamo, paella, chuletón a la brasa y bar", en: "Restaurant with traditional Bergamo food, paella, grilled steak and bar" } },
          { time: "21:00", activity: { it: "Esibizioni equestri e spettacolo \"Notturno Equus\" a cura della Fondazione Emilia Bosis", es: "Exhibiciones ecuestres y espectáculo \"Notturno Equus\" a cargo de la Fondazione Emilia Bosis", en: "Horse shows and the \"Notturno Equus\" show by Fondazione Emilia Bosis" } },
        ],
      },
    ],
    flyer: {
      src: "/images/festa/2026/volantino.webp",
      width: 697,
      height: 984,
      alt: {
        it: "Volantino di Cascina Germoglio in festa, 20ª edizione, 10–12 luglio 2026",
        es: "Cartel de Cascina Germoglio in festa, 20.ª edición, 10–12 de julio de 2026",
        en: "Flyer for Cascina Germoglio in festa, 20th edition, 10–12 July 2026",
      },
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
