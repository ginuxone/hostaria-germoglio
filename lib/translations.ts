export type Locale = "it" | "es" | "en";

export const locales: Locale[] = ["it", "es", "en"];

export const localeLabels: Record<Locale, string> = {
  it: "Italiano",
  es: "Español",
  en: "English",
};

export const pagePaths = {
  home: "",
  menu: "menu",
  staff: "staff",
  contact: "contact",
} as const;

export const translations: Record<Locale, {
  brand: { name: string; tagline: string };
  nav: { home: string; menu: string; staff: string; contact: string };
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
    phone: string;
    hoursLabel: string;
    hours: { day: string; times: string[] }[];
    closedLabel: string;
    mapTitle: string;
    footer: string;
  };
}> = {
  it: {
    brand: { name: "Hostaria Germoglio", tagline: "Cucina italiana a Verdello" },
    nav: { home: "Home", menu: "Menu", staff: "Staff", contact: "Contatti" },
    hero: {
      title: "Sapori autentici, atmosfera accogliente",
      description: "Scopri piatti regionali preparati con ingredienti freschi e un servizio famigliare nel cuore di Verdello.",
      button: "Prenota un tavolo",
    },
    about: {
      heading: "Benvenuti a Hostaria Germoglio",
      description: "Nata nel 2012 con la cucina tipica bergamasca e le nostre pizze napoletane, dal 2019 l'Hostaria è gestita da una famiglia italo-peruviana che ha arricchito il menu con i sapori del Perù. Vi accogliamo in un'atmosfera calda e familiare, circondati da una trattoria dove è possibile visitare gli animali.",
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
      phone: "+39 371 695 6239",
      hoursLabel: "Orari",
      hours: [
        { day: "Domenica", times: ["12:15 – 15:00", "19:15 – 22:00"] },
        { day: "Lunedì", times: ["12:15 – 15:00"] },
        { day: "Martedì", times: ["12:15 – 15:00"] },
        { day: "Mercoledì", times: ["12:15 – 15:00"] },
        { day: "Giovedì", times: [] },
        { day: "Venerdì", times: ["12:15 – 15:00", "19:15 – 22:00"] },
        { day: "Sabato", times: ["12:15 – 15:00", "19:15 – 22:00"] },
      ],
      closedLabel: "Chiuso",
      mapTitle: "Dove ci trovi",
      footer: "Ti aspettiamo a Hostaria Germoglio.",
    },
  },
  es: {
    brand: { name: "Hostaria Germoglio", tagline: "Cocina italiana en Verdello" },
    nav: { home: "Inicio", menu: "Menú", staff: "Equipo", contact: "Contacto" },
    hero: {
      title: "Sabores auténticos, ambiente acogedor",
      description: "Descubre platos regionales elaborados con ingredientes frescos y un servicio familiar en el corazón de Verdello.",
      button: "Reserva una mesa",
    },
    about: {
      heading: "Bienvenidos a Hostaria Germoglio",
      description: "Fundada en 2012 con la cocina típica de Bérgamo y nuestras pizzas napolitanas, desde 2019 la Hostaria está gestionada por una familia ítalo-peruana que ha enriquecido el menú con los sabores de Perú. Te recibimos en un ambiente cálido y familiar, rodeado de una trattoria donde se pueden visitar los animales.",
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
      ],
    },
    contact: {
      heading: "Contacto",
      description: "Estamos en Verdello en Via Solferino 53. Escríbenos o llámanos para reservar tu mesa.",
      addressLabel: "Dirección",
      address: "Via Solferino 53, Verdello (BG)",
      phoneLabel: "Teléfono",
      phone: "+39 371 695 6239",
      hoursLabel: "Horario",
      hours: [
        { day: "Domingo", times: ["12:15 – 15:00", "19:15 – 22:00"] },
        { day: "Lunes", times: ["12:15 – 15:00"] },
        { day: "Martes", times: ["12:15 – 15:00"] },
        { day: "Miércoles", times: ["12:15 – 15:00"] },
        { day: "Jueves", times: [] },
        { day: "Viernes", times: ["12:15 – 15:00", "19:15 – 22:00"] },
        { day: "Sábado", times: ["12:15 – 15:00", "19:15 – 22:00"] },
      ],
      closedLabel: "Cerrado",
      mapTitle: "Dónde encontrarnos",
      footer: "Te esperamos en Hostaria Germoglio.",
    },
  },
  en: {
    brand: { name: "Hostaria Germoglio", tagline: "Italian dining in Verdello" },
    nav: { home: "Home", menu: "Menu", staff: "Team", contact: "Contact" },
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
      phone: "+39 371 695 6239",
      hoursLabel: "Hours",
      hours: [
        { day: "Sunday", times: ["12:15 – 15:00", "19:15 – 22:00"] },
        { day: "Monday", times: ["12:15 – 15:00"] },
        { day: "Tuesday", times: ["12:15 – 15:00"] },
        { day: "Wednesday", times: ["12:15 – 15:00"] },
        { day: "Thursday", times: [] },
        { day: "Friday", times: ["12:15 – 15:00", "19:15 – 22:00"] },
        { day: "Saturday", times: ["12:15 – 15:00", "19:15 – 22:00"] },
      ],
      closedLabel: "Closed",
      mapTitle: "Find us here",
      footer: "We look forward to welcoming you at Hostaria Germoglio.",
    },
  },
};

export function getLocale(value: string | string[] | undefined): Locale {
  if (typeof value !== "string") return "it";
  if (value === "es" || value === "en" || value === "it") return value;
  return "it";
}
