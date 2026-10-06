import type { GalleryCategory } from "./gallery";

export type Locale = "it" | "es" | "en";

export type Weekday =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

export const locales: Locale[] = ["it", "es", "en"];

export const localeLabels: Record<Locale, string> = {
  it: "Italiano",
  es: "Español",
  en: "English",
};

export const pagePaths = {
  home: "",
  menu: "menu",
  gallery: "gallery",
  festa: "festa-in-cascina",
  staff: "staff",
  contact: "contact",
} as const;

export const translations: Record<Locale, {
  brand: { name: string; tagline: string };
  meta: { home: string; menu: string; gallery: string; festa: string; staff: string; contact: string; imageAlt: string };
  nav: { home: string; menu: string; gallery: string; festa: string; staff: string; contact: string };
  hero: { title: string; description: string; button: string };
  about: { heading: string; description: string };
  specialties: { heading: string; items: string[] };
  menu: { heading: string; sections: { title: string; items: { name: string; description: string; price: string }[] }[] };
  staff: { heading: string; intro: string; members: { name: string; role: string; bio: string; photo: string }[] };
  contact: {
    heading: string;
    description: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    whatsappLabel: string;
    whatsappHint: string;
    whatsappMessage: string;
    hoursLabel: string;
    days: Record<Weekday, string>;
    closedLabel: string;
    mapTitle: string;
    footer: string;
    vatLabel: string;
  };
  notFound: { title: string; description: string; button: string };
  gallery: {
    heading: string;
    intro: string;
    all: string;
    categories: Record<GalleryCategory, string>;
    close: string;
    previous: string;
    next: string;
    cta: string;
  };
  festa: {
    heading: string;
    intro: string;
    edition: string;
    editionNumber: string;
    dateTba: string;
    freeEntry: string;
    flyer: string;
    programHeading: string;
    scheduleHeading: string;
    photosHeading: string;
    pastHeading: string;
    cta: string;
    whatsappMessage: string;
  };
}> = {
  it: {
    brand: { name: "Hostaria Germoglio", tagline: "Cucina italiana a Verdello" },
    meta: {
      home: "Ristorante italo-peruviano a Verdello (BG): cucina bergamasca, pizze napoletane e sapori del Perù in un'atmosfera famigliare.",
      menu: "Il menu dell'Hostaria Germoglio a Verdello: casoncelli, risotto, lomo saltado, ají de gallina e dolci della casa.",
      gallery: "Foto dei piatti, della sala e della cucina dell'Hostaria Germoglio a Verdello: sapori italiani e peruviani.",
      festa: "La Festa in cascina dell'Hostaria Germoglio a Verdello: ogni anno una giornata di festa tra cucina, musica e animali della fattoria.",
      staff: "Conosci Zoila, Jorge, Renato e Martina: la famiglia italo-peruviana e il team dell'Hostaria Germoglio.",
      contact: "Indirizzo, telefono e orari dell'Hostaria Germoglio, Via Solferino 53, Verdello (BG). Prenota su WhatsApp.",
      imageAlt: "La sala dell'Hostaria Germoglio a Verdello, con la chef Zoila",
    },
    nav: { home: "Home", menu: "Menu", gallery: "Galleria", festa: "Festa in cascina", staff: "Staff", contact: "Contatti" },
    hero: {
      title: "Sapori autentici, atmosfera accogliente",
      description: "Scopri piatti regionali preparati con ingredienti freschi e un servizio famigliare nel cuore di Verdello.",
      button: "Prenota un tavolo",
    },
    about: {
      heading: "Benvenuti a Hostaria Germoglio",
      description: "Nata nel 2012 con la cucina tipica bergamasca e le nostre pizze napoletane, dal 2019 l'Hostaria è gestita da una famiglia italo-peruviana che ha arricchito il menu con i sapori del Perù. Vi accogliamo in un'atmosfera calda e familiare, circondati da una fattoria dove è possibile visitare gli animali.",
    },
    specialties: {
      heading: "Specialità della casa",
      items: ["Risotto ai funghi porcini", "Casoncelli del Germoglio", "Lomo Saltado", "Tiramisù della casa"],
    },
    menu: {
      heading: "Il nostro menu",
      sections: [
        {
          title: "Antipasti",
          items: [
            { name: "Bruschette miste", description: "Pane tostato con pomodorini, basilico e olio d'oliva.", price: "€10" },
            { name: "Carpaccio di manzo", description: "Carne marinata con rucola e scaglie di parmigiano.", price: "€14" },
          ],
        },
        {
          title: "Primi",
          items: [
            { name: "Casoncelli del Germoglio", description: "Pasta ripiena bergamasca fatta in casa, servita con burro fuso, salvia e pancetta croccante.", price: "€18" },
            { name: "Risotto ai funghi", description: "Risotto cremoso con funghi porcini e parmigiano.", price: "€17" },
          ],
        },
        {
          title: "Secondi",
          items: [
            { name: "Lomo Saltado", description: "Straccetti di manzo saltati al wok con cipolla rossa, pomodoro e coriandolo, serviti con riso e patatine fritte.", price: "€19" },
            { name: "Ají de Gallina", description: "Pollo sfilacciato in una cremosa salsa di aji amarillo e noci, gratinato al parmigiano, con riso e patate.", price: "€17" },
            { name: "Causa Rellena", description: "Rotolo di patata gialla peruviana ripieno, guarnito con olive e maionese al lime.", price: "€14" },
            { name: "Arroz con Mariscos", description: "Riso allo zafferano con gamberi, cozze e vongole, profumato al coriandolo.", price: "€22" },
          ],
        },
        {
          title: "Dolci",
          items: [
            { name: "Tiramisù della casa", description: "Dessert classico con caffè e crema al mascarpone.", price: "€8" },
            { name: "Panna cotta ai frutti di bosco", description: "Panna cotta delicata con coulis di frutti di bosco.", price: "€8" },
          ],
        },
      ],
    },
    staff: {
      heading: "Il nostro team",
      intro: "La famiglia italo-peruviana e il team che rendono ogni serata all'Hostaria Germoglio speciale.",
      members: [
        { name: "Zoila", role: "Chef e Titolare", bio: "Guida la cucina dell'Hostaria portando in tavola i sapori del suo Perù natale insieme alla tradizione italiana della casa.", photo: "/images/staff-zoila.jpg" },
        { name: "Jorge", role: "PR e Barman", bio: "Accoglie ogni ospite con il sorriso e cura la sala e il bar, rendendo ogni serata un'esperienza calorosa.", photo: "/images/staff-jorge.jpg" },
        { name: "Renato", role: "Cameriere", bio: "Segue i tavoli con attenzione e precisione, sempre pronto a consigliare i piatti del giorno.", photo: "/images/staff-renato.jpg" },
        { name: "Martina", role: "Cameriera", bio: "Con energia ed entusiasmo, si assicura che ogni ospite si senta a casa dal primo all'ultimo piatto.", photo: "/images/staff-martina.jpg" },
      ],
    },
    contact: {
      heading: "Contatti",
      description: "Siamo a Verdello in Via Solferino 53. Scrivici o chiamaci per prenotare il tuo tavolo.",
      addressLabel: "Indirizzo",
      address: "Via Solferino 53, Verdello (BG)",
      phoneLabel: "Telefono",
      whatsappLabel: "Prenota su WhatsApp",
      whatsappHint: "Scrivici su WhatsApp con giorno, orario e numero di persone: ti confermiamo il tavolo il prima possibile.",
      whatsappMessage: "Ciao! Vorrei prenotare un tavolo all'Hostaria Germoglio.\nGiorno: \nOrario: \nNumero di persone: \nNome: ",
      hoursLabel: "Orari",
      days: {
        Sunday: "Domenica",
        Monday: "Lunedì",
        Tuesday: "Martedì",
        Wednesday: "Mercoledì",
        Thursday: "Giovedì",
        Friday: "Venerdì",
        Saturday: "Sabato",
      },
      closedLabel: "Chiuso",
      mapTitle: "Dove ci trovi",
      footer: "Ti aspettiamo a Hostaria Germoglio.",
      vatLabel: "Partita IVA",
    },
    notFound: {
      title: "Pagina non trovata",
      description: "La pagina che cerchi non esiste o è stata spostata.",
      button: "Torna alla home",
    },
    gallery: {
      heading: "Galleria",
      intro: "Uno sguardo ai nostri piatti, alla sala e a quello che succede in cucina.",
      all: "Tutte",
      categories: { food: "Piatti e drink", restaurant: "La sala", kitchen: "Dietro le quinte" },
      close: "Chiudi",
      previous: "Foto precedente",
      next: "Foto successiva",
      cta: "Ti è venuta fame?",
    },
    festa: {
      heading: "Festa in cascina",
      intro: "Una volta all'anno la cascina che circonda l'Hostaria si riempie di amici, famiglie e bambini: una giornata di festa all'aria aperta tra buona cucina, musica e gli animali della fattoria.",
      edition: "Edizione {year}",
      editionNumber: "{n}ª edizione",
      dateTba: "Data in arrivo",
      freeEntry: "Ingresso gratuito",
      flyer: "Il volantino",
      programHeading: "Cosa ti aspetta",
      scheduleHeading: "Il programma",
      photosHeading: "Le foto",
      pastHeading: "Le edizioni passate",
      cta: "Info sulla prossima edizione su WhatsApp",
      whatsappMessage: "Ciao! Vorrei informazioni sulla prossima edizione della Festa in cascina.\nNome: ",
    },
  },
  es: {
    brand: { name: "Hostaria Germoglio", tagline: "Cocina italiana en Verdello" },
    meta: {
      home: "Restaurante ítalo-peruano en Verdello (BG): cocina bergamasca, pizzas napolitanas y sabores de Perú en un ambiente familiar.",
      menu: "El menú de la Hostaria Germoglio en Verdello: casoncelli, risotto, lomo saltado, ají de gallina y postres de la casa.",
      gallery: "Fotos de los platos, el comedor y la cocina de la Hostaria Germoglio en Verdello: sabores italianos y peruanos.",
      festa: "La Festa in cascina de la Hostaria Germoglio en Verdello: cada año un día de fiesta con comida, música y los animales de la granja.",
      staff: "Conoce a Zoila, Jorge, Renato y Martina: la familia ítalo-peruana y el equipo de la Hostaria Germoglio.",
      contact: "Dirección, teléfono y horario de la Hostaria Germoglio, Via Solferino 53, Verdello (BG). Reserva por WhatsApp.",
      imageAlt: "El comedor de la Hostaria Germoglio en Verdello, con la chef Zoila",
    },
    nav: { home: "Inicio", menu: "Menú", gallery: "Galería", festa: "Festa in cascina", staff: "Equipo", contact: "Contacto" },
    hero: {
      title: "Sabores auténticos, ambiente acogedor",
      description: "Descubre platos regionales elaborados con ingredientes frescos y un servicio familiar en el corazón de Verdello.",
      button: "Reserva una mesa",
    },
    about: {
      heading: "Bienvenidos a Hostaria Germoglio",
      description: "Fundada en 2012 con la cocina típica de Bérgamo y nuestras pizzas napolitanas, desde 2019 la Hostaria está gestionada por una familia ítalo-peruana que ha enriquecido el menú con los sabores de Perú. Te recibimos en un ambiente cálido y familiar, rodeado de una granja donde se pueden visitar los animales.",
    },
    specialties: {
      heading: "Especialidades de la casa",
      items: ["Risotto con setas porcini", "Casoncelli del Germoglio", "Lomo Saltado", "Tiramisú de la casa"],
    },
    menu: {
      heading: "Nuestro menú",
      sections: [
        {
          title: "Entrantes",
          items: [
            { name: "Bruschettas mixtas", description: "Pan tostado con tomates cherry, albahaca y aceite de oliva.", price: "€10" },
            { name: "Carpaccio de ternera", description: "Carne marinada con rúcula y lascas de parmesano.", price: "€14" },
          ],
        },
        {
          title: "Primeros",
          items: [
            { name: "Casoncelli del Germoglio", description: "Pasta rellena bergamasca casera, servida con mantequilla fundida, salvia y panceta crujiente.", price: "€18" },
            { name: "Risotto con setas", description: "Risotto cremoso con setas porcini y parmesano.", price: "€17" },
          ],
        },
        {
          title: "Segundos",
          items: [
            { name: "Lomo Saltado", description: "Tiras de lomo salteadas al wok con cebolla roja, tomate y cilantro, servidas con arroz y papas fritas.", price: "€19" },
            { name: "Ají de Gallina", description: "Pollo deshilachado en una cremosa salsa de ají amarillo y nueces, gratinado con parmesano, con arroz y papas.", price: "€17" },
            { name: "Causa Rellena", description: "Rollo de papa amarilla peruana relleno, decorado con aceitunas y mayonesa de lima.", price: "€14" },
            { name: "Arroz con Mariscos", description: "Arroz al azafrán con langostinos, mejillones y almejas, perfumado con cilantro.", price: "€22" },
          ],
        },
        {
          title: "Postres",
          items: [
            { name: "Tiramisú de la casa", description: "Postre clásico con café y crema de mascarpone.", price: "€8" },
            { name: "Panna cotta con frutos rojos", description: "Panna cotta delicada con coulis de frutos rojos.", price: "€8" },
          ],
        },
      ],
    },
    staff: {
      heading: "Nuestro equipo",
      intro: "La familia ítalo-peruana y el equipo que hacen especial cada velada en la Hostaria Germoglio.",
      members: [
        { name: "Zoila", role: "Chef y Propietaria", bio: "Dirige la cocina de la Hostaria llevando a la mesa los sabores de su Perú natal junto con la tradición italiana de la casa.", photo: "/images/staff-zoila.jpg" },
        { name: "Jorge", role: "RRPP y Barman", bio: "Recibe a cada huésped con una sonrisa y cuida la sala y la barra, haciendo de cada noche una experiencia cálida.", photo: "/images/staff-jorge.jpg" },
        { name: "Renato", role: "Camarero", bio: "Atiende las mesas con atención y precisión, siempre listo para recomendar los platos del día.", photo: "/images/staff-renato.jpg" },
        { name: "Martina", role: "Camarera", bio: "Con energía y entusiasmo, se asegura de que cada huésped se sienta como en casa del primer al último plato.", photo: "/images/staff-martina.jpg" },
      ],
    },
    contact: {
      heading: "Contacto",
      description: "Estamos en Verdello en Via Solferino 53. Escríbenos o llámanos para reservar tu mesa.",
      addressLabel: "Dirección",
      address: "Via Solferino 53, Verdello (BG)",
      phoneLabel: "Teléfono",
      whatsappLabel: "Reserva por WhatsApp",
      whatsappHint: "Escríbenos por WhatsApp con el día, la hora y el número de personas: te confirmamos la mesa lo antes posible.",
      whatsappMessage: "¡Hola! Quisiera reservar una mesa en la Hostaria Germoglio.\nDía: \nHora: \nNúmero de personas: \nNombre: ",
      hoursLabel: "Horario",
      days: {
        Sunday: "Domingo",
        Monday: "Lunes",
        Tuesday: "Martes",
        Wednesday: "Miércoles",
        Thursday: "Jueves",
        Friday: "Viernes",
        Saturday: "Sábado",
      },
      closedLabel: "Cerrado",
      mapTitle: "Dónde encontrarnos",
      footer: "Te esperamos en Hostaria Germoglio.",
      vatLabel: "P. IVA",
    },
    notFound: {
      title: "Página no encontrada",
      description: "La página que buscas no existe o se ha movido.",
      button: "Volver al inicio",
    },
    gallery: {
      heading: "Galería",
      intro: "Un vistazo a nuestros platos, al comedor y a lo que pasa en la cocina.",
      all: "Todas",
      categories: { food: "Platos y bebidas", restaurant: "El local", kitchen: "Detrás de escena" },
      close: "Cerrar",
      previous: "Foto anterior",
      next: "Foto siguiente",
      cta: "¿Se te abrió el apetito?",
    },
    festa: {
      heading: "Festa in cascina",
      intro: "Una vez al año la granja que rodea la Hostaria se llena de amigos, familias y niños: un día de fiesta al aire libre con buena comida, música y los animales de la granja.",
      edition: "Edición {year}",
      editionNumber: "{n}.ª edición",
      dateTba: "Fecha por confirmar",
      freeEntry: "Entrada gratuita",
      flyer: "El cartel",
      programHeading: "Qué te espera",
      scheduleHeading: "El programa",
      photosHeading: "Las fotos",
      pastHeading: "Ediciones anteriores",
      cta: "Info sobre la próxima edición por WhatsApp",
      whatsappMessage: "¡Hola! Quisiera información sobre la próxima edición de la Festa in cascina.\nNombre: ",
    },
  },
  en: {
    brand: { name: "Hostaria Germoglio", tagline: "Italian dining in Verdello" },
    meta: {
      home: "Italian-Peruvian restaurant in Verdello (BG): Bergamo cuisine, Neapolitan pizzas and the flavors of Peru in a family atmosphere.",
      menu: "The Hostaria Germoglio menu in Verdello: casoncelli, risotto, lomo saltado, ají de gallina and house desserts.",
      gallery: "Photos of the dishes, dining room and kitchen at Hostaria Germoglio in Verdello: Italian and Peruvian flavors.",
      festa: "Festa in cascina at Hostaria Germoglio in Verdello: a yearly farm party with food, music and the farm animals.",
      staff: "Meet Zoila, Jorge, Renato and Martina: the Italian-Peruvian family and team behind Hostaria Germoglio.",
      contact: "Address, phone and opening hours for Hostaria Germoglio, Via Solferino 53, Verdello (BG). Book a table on WhatsApp.",
      imageAlt: "The dining room at Hostaria Germoglio in Verdello, with chef Zoila",
    },
    nav: { home: "Home", menu: "Menu", gallery: "Gallery", festa: "Festa in cascina", staff: "Team", contact: "Contact" },
    hero: {
      title: "Authentic flavors, warm atmosphere",
      description: "Discover regional dishes made with fresh ingredients and family-style service in the heart of Verdello.",
      button: "Reserve a table",
    },
    about: {
      heading: "Welcome to Hostaria Germoglio",
      description: "Founded in 2012 with traditional Bergamo cuisine and our Neapolitan-style pizzas, since 2019 the Hostaria has been run by an Italian-Peruvian family who enriched the menu with the flavors of Peru. We welcome you in a warm, family atmosphere, surrounded by a farmhouse trattoria where you can visit the animals.",
    },
    specialties: {
      heading: "House specialties",
      items: ["Porcini mushroom risotto", "Casoncelli del Germoglio", "Lomo Saltado", "House tiramisu"],
    },
    menu: {
      heading: "Our menu",
      sections: [
        {
          title: "Starters",
          items: [
            { name: "Mixed bruschette", description: "Toasted bread with cherry tomatoes, basil and olive oil.", price: "€10" },
            { name: "Beef carpaccio", description: "Marinated beef with arugula and Parmesan shavings.", price: "€14" },
          ],
        },
        {
          title: "Pasta",
          items: [
            { name: "Casoncelli del Germoglio", description: "Homemade Bergamo-style stuffed pasta, served with melted butter, sage and crispy pancetta.", price: "€18" },
            { name: "Mushroom risotto", description: "Creamy risotto with porcini mushrooms and Parmesan.", price: "€17" },
          ],
        },
        {
          title: "Mains",
          items: [
            { name: "Lomo Saltado", description: "Stir-fried beef strips with red onion, tomato and cilantro, served with rice and fries.", price: "€19" },
            { name: "Ají de Gallina", description: "Shredded chicken in a creamy ají amarillo and walnut sauce, topped with Parmesan, served with rice and potatoes.", price: "€17" },
            { name: "Causa Rellena", description: "Peruvian yellow potato roll, filled and topped with olives and lime mayonnaise.", price: "€14" },
            { name: "Arroz con Mariscos", description: "Saffron rice with prawns, mussels and clams, finished with cilantro.", price: "€22" },
          ],
        },
        {
          title: "Desserts",
          items: [
            { name: "House tiramisu", description: "Classic dessert with coffee and mascarpone cream.", price: "€8" },
            { name: "Panna cotta with berries", description: "Delicate panna cotta with berry coulis.", price: "€8" },
          ],
        },
      ],
    },
    staff: {
      heading: "Our team",
      intro: "The Italian-Peruvian family and team who make every evening at Hostaria Germoglio special.",
      members: [
        { name: "Zoila", role: "Head Chef & Owner", bio: "Leads the kitchen, bringing the flavors of her native Peru to the table alongside the house's Italian tradition.", photo: "/images/staff-zoila.jpg" },
        { name: "Jorge", role: "PR & Barman", bio: "Greets every guest with a smile and looks after the dining room and bar, making each evening feel warm and welcoming.", photo: "/images/staff-jorge.jpg" },
        { name: "Renato", role: "Waiter", bio: "Attends to tables with care and precision, always ready to recommend the dishes of the day.", photo: "/images/staff-renato.jpg" },
        { name: "Martina", role: "Waiter", bio: "With energy and enthusiasm, she makes sure every guest feels at home from the first course to the last.", photo: "/images/staff-martina.jpg" },
      ],
    },
    contact: {
      heading: "Contact",
      description: "We are in Verdello at Via Solferino 53. Message or call us to reserve your table.",
      addressLabel: "Address",
      address: "Via Solferino 53, Verdello (BG)",
      phoneLabel: "Phone",
      whatsappLabel: "Book on WhatsApp",
      whatsappHint: "Message us on WhatsApp with the day, time and number of guests, and we'll confirm your table as soon as possible.",
      whatsappMessage: "Hi! I'd like to book a table at Hostaria Germoglio.\nDay: \nTime: \nNumber of guests: \nName: ",
      hoursLabel: "Hours",
      days: {
        Sunday: "Sunday",
        Monday: "Monday",
        Tuesday: "Tuesday",
        Wednesday: "Wednesday",
        Thursday: "Thursday",
        Friday: "Friday",
        Saturday: "Saturday",
      },
      closedLabel: "Closed",
      mapTitle: "Find us here",
      footer: "We look forward to welcoming you at Hostaria Germoglio.",
      vatLabel: "VAT no.",
    },
    notFound: {
      title: "Page not found",
      description: "The page you're looking for doesn't exist or has moved.",
      button: "Back to home",
    },
    gallery: {
      heading: "Gallery",
      intro: "A look at our dishes, our dining room and what goes on in the kitchen.",
      all: "All",
      categories: { food: "Food & drink", restaurant: "The restaurant", kitchen: "Behind the scenes" },
      close: "Close",
      previous: "Previous photo",
      next: "Next photo",
      cta: "Feeling hungry?",
    },
    festa: {
      heading: "Festa in cascina",
      intro: "Once a year the farm around the Hostaria fills up with friends, families and children: a day-long outdoor party with good food, music and the farm animals.",
      edition: "{year} edition",
      editionNumber: "Edition no. {n}",
      dateTba: "Date coming soon",
      freeEntry: "Free entry",
      flyer: "The flyer",
      programHeading: "What to expect",
      scheduleHeading: "Programme",
      photosHeading: "Photos",
      pastHeading: "Past editions",
      cta: "Info on the next edition via WhatsApp",
      whatsappMessage: "Hi! I'd like some information about the next Festa in cascina.\nName: ",
    },
  },
};

export function getLocale(value: string | string[] | undefined): Locale {
  if (typeof value !== "string") return "it";
  if (value === "es" || value === "en" || value === "it") return value;
  return "it";
}
