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
  staff: { heading: string; intro: string; members: { name: string; role: string; bio: string }[] };
  contact: { heading: string; description: string; addressLabel: string; address: string; phone: string; hours: string; mapTitle: string; footer: string };
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
      description: "A Verdello, la nostra cucina celebra le ricette tradizionali con un tocco contemporaneo. Dalla pasta fatta in casa ai dessert artigianali, ogni piatto è pensato per farti sentire a casa.",
    },
    specialties: {
      heading: "Specialità della casa",
      items: ["Risotto ai funghi porcini", "Tagliolini al tartufo", "Baccalà mantecato", "Tiramisù della casa"],
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
            { name: "Tagliolini al tartufo", description: "Pasta fresca con salsa cremosa al tartufo nero.", price: "€18" },
            { name: "Risotto ai funghi", description: "Risotto cremoso con funghi porcini e parmigiano.", price: "€17" },
          ],
        },
        {
          title: "Secondi",
          items: [
            { name: "Baccalà mantecato", description: "Baccalà tradizionale con crostini caldi.", price: "€16" },
            { name: "Scaloppine al limone", description: "Scaloppine di vitello con salsa al limone.", price: "€19" },
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
      intro: "Un gruppo appassionato di chef, camerieri e sommelier che lavora insieme per rendere ogni serata speciale.",
      members: [
        { name: "Luca", role: "Chef", bio: "Creatore del menu stagionale e maestro della pasta fresca." },
        { name: "Sara", role: "Responsabile sala", bio: "Accoglie gli ospiti con calore e cura ogni dettaglio del servizio." },
        { name: "Marco", role: "Sommelier", bio: "Seleziona vini italiani per accompagnare ogni piatto." },
      ],
    },
    contact: {
      heading: "Contatti",
      description: "Siamo a Verdello in Via Solferino 53. Scrivici o chiamaci per prenotare il tuo tavolo.",
      addressLabel: "Indirizzo",
      address: "Via Solferino 53, Verdello (BG)",
      phone: "+39 035 1234567",
      hours: "Mar-Dom 12:00 – 15:00, 19:00 – 23:00",
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
      description: "En Verdello, nuestra cocina celebra recetas tradicionales con un toque contemporáneo. Desde pasta casera hasta postres artesanales, cada plato te hará sentir como en casa.",
    },
    specialties: {
      heading: "Especialidades de la casa",
      items: ["Risotto con setas porcini", "Tagliolini con trufa", "Bacalao encebollado", "Tiramisú de la casa"],
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
            { name: "Tagliolini con trufa", description: "Pasta fresca con salsa cremosa de trufa negra.", price: "€18" },
            { name: "Risotto con setas", description: "Risotto cremoso con setas porcini y parmesano.", price: "€17" },
          ],
        },
        {
          title: "Segundos",
          items: [
            { name: "Bacalao encebollado", description: "Bacalao tradicional con tostadas calientes.", price: "€16" },
            { name: "Escalopes al limón", description: "Escalopes de ternera con salsa de limón.", price: "€19" },
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
      intro: "Un grupo apasionado de chefs, camareros y sommeliers que trabaja junto para hacer especial cada velada.",
      members: [
        { name: "Luca", role: "Chef", bio: "Creador del menú de temporada y maestro de la pasta fresca." },
        { name: "Sara", role: "Jefa de sala", bio: "Recibe a los huéspedes con calidez y cuida cada detalle del servicio." },
        { name: "Marco", role: "Sommelier", bio: "Selecciona vinos italianos para acompañar cada plato." },
      ],
    },
    contact: {
      heading: "Contacto",
      description: "Estamos en Verdello en Via Solferino 53. Escríbenos o llámanos para reservar tu mesa.",
      addressLabel: "Dirección",
      address: "Via Solferino 53, Verdello (BG)",
      phone: "+39 035 1234567",
      hours: "Mar-Dom 12:00 – 15:00, 19:00 – 23:00",
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
      description: "In Verdello, our kitchen celebrates traditional recipes with a contemporary touch. From homemade pasta to artisanal desserts, every dish is designed to make you feel at home.",
    },
    specialties: {
      heading: "House specialties",
      items: ["Porcini mushroom risotto", "Truffle tagliolini", "Crema di baccalà", "House tiramisu"],
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
            { name: "Truffle tagliolini", description: "Fresh pasta with creamy black truffle sauce.", price: "€18" },
            { name: "Mushroom risotto", description: "Creamy risotto with porcini mushrooms and Parmesan.", price: "€17" },
          ],
        },
        {
          title: "Mains",
          items: [
            { name: "Crema di baccalà", description: "Traditional cod with warm crostini.", price: "€16" },
            { name: "Veal scaloppine", description: "Veal scaloppine with lemon sauce.", price: "€19" },
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
      intro: "A passionate group of chefs, servers and sommeliers working together to make every evening special.",
      members: [
        { name: "Luca", role: "Chef", bio: "Creator of the seasonal menu and fresh pasta master." },
        { name: "Sara", role: "Front of house manager", bio: "Welcomes guests warmly and attends to every service detail." },
        { name: "Marco", role: "Sommelier", bio: "Selects Italian wines to pair with every dish." },
      ],
    },
    contact: {
      heading: "Contact",
      description: "We are in Verdello at Via Solferino 53. Message or call us to reserve your table.",
      addressLabel: "Address",
      address: "Via Solferino 53, Verdello (BG)",
      phone: "+39 035 1234567",
      hours: "Tue-Sun 12:00 – 15:00, 19:00 – 23:00",
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
