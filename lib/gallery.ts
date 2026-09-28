import type { Locale } from "./translations";

export type GalleryCategory = "food" | "restaurant" | "kitchen";

export const galleryCategories: GalleryCategory[] = ["food", "restaurant", "kitchen"];

export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  category: GalleryCategory;
  alt: Record<Locale, string>;
}

const img = (
  file: string,
  width: number,
  height: number,
  category: GalleryCategory,
  alt: Record<Locale, string>,
): GalleryImage => ({ src: `/images/gallery/${file}.jpg`, width, height, category, alt });

// Display order for the "all" view: categories are interleaved on purpose.
export const galleryImages: GalleryImage[] = [
  img("lomo-saltado", 1599, 1066, "food", {
    it: "Lomo saltado con riso e patatine fritte",
    es: "Lomo saltado con arroz y papas fritas",
    en: "Lomo saltado with rice and fries",
  }),
  img("zoila-ai-fornelli", 1279, 1599, "kitchen", {
    it: "La chef Zoila ai fornelli",
    es: "La chef Zoila en los fogones",
    en: "Chef Zoila at the stove",
  }),
  img("sala-lavagna-benvenuto", 1066, 1600, "restaurant", {
    it: "La sala con la lavagna di benvenuto",
    es: "El comedor con la pizarra de bienvenida",
    en: "The dining room with the welcome chalkboard",
  }),
  img("ceviche", 1600, 1066, "food", {
    it: "Ceviche di pesce con patata dolce e lattuga",
    es: "Ceviche de pescado con camote y lechuga",
    en: "Fish ceviche with sweet potato and lettuce",
  }),
  img("pizza-in-forno", 1066, 1600, "food", {
    it: "Una pizza pronta per essere infornata",
    es: "Una pizza lista para entrar al horno",
    en: "A pizza about to go into the oven",
  }),
  img("tiradito-di-pesce", 1600, 1066, "food", {
    it: "Tiradito di pesce con salsa di ají amarillo",
    es: "Tiradito de pescado con salsa de ají amarillo",
    en: "Fish tiradito with ají amarillo sauce",
  }),
  img("bancone-bar", 1066, 1600, "restaurant", {
    it: "Il bancone del bar",
    es: "La barra del bar",
    en: "The bar",
  }),
  img("polpo-in-cottura", 1600, 1600, "kitchen", {
    it: "Polpo in cottura con le verdure",
    es: "Pulpo cocinándose con verduras",
    en: "Octopus simmering with vegetables",
  }),
  img("causa-rellena", 1600, 1066, "food", {
    it: "Causa rellena di patata gialla con olive",
    es: "Causa rellena de papa amarilla con aceitunas",
    en: "Causa rellena, yellow potato with olives",
  }),
  img("arroz-con-mariscos", 1600, 1066, "food", {
    it: "Arroz con mariscos con gamberi, cozze e vongole",
    es: "Arroz con mariscos con langostinos, mejillones y almejas",
    en: "Arroz con mariscos with prawns, mussels and clams",
  }),
  img("tavolo-apparecchiato", 1066, 1600, "restaurant", {
    it: "Tavolo apparecchiato con calici e fiori",
    es: "Mesa puesta con copas y flores",
    en: "A table set with glasses and flowers",
  }),
  img("impiattamento-lomo-saltado", 1600, 1066, "kitchen", {
    it: "Impiattamento del lomo saltado",
    es: "Emplatado del lomo saltado",
    en: "Plating the lomo saltado",
  }),
  img("papa-a-la-huancaina", 1600, 1066, "food", {
    it: "Papa a la huancaína con olive e lattuga",
    es: "Papa a la huancaína con aceitunas y lechuga",
    en: "Papa a la huancaína with olives and lettuce",
  }),
  img("cocktail-di-gamberi", 1066, 1600, "food", {
    it: "Cocktail di gamberi con avocado",
    es: "Cóctel de langostinos con palta",
    en: "Prawn cocktail with avocado",
  }),
  img("zoila-ritratto", 1280, 1600, "kitchen", {
    it: "Zoila, chef e titolare dell'Hostaria",
    es: "Zoila, chef y propietaria de la Hostaria",
    en: "Zoila, head chef and owner of the Hostaria",
  }),
  img("pizza-rucola", 1600, 1066, "food", {
    it: "Pizza con rucola e pomodorini",
    es: "Pizza con rúcula y tomates cherry",
    en: "Pizza with arugula and cherry tomatoes",
  }),
  img("sala-tavoli", 1066, 1600, "restaurant", {
    it: "I tavoli della sala",
    es: "Las mesas del comedor",
    en: "Tables in the dining room",
  }),
  img("pesce-fritto-salsa-criolla", 1600, 1066, "food", {
    it: "Pesce fritto con salsa criolla, lime e avocado",
    es: "Pescado frito con salsa criolla, limón y palta",
    en: "Fried fish with salsa criolla, lime and avocado",
  }),
  img("rifinitura-cannello", 1600, 1600, "kitchen", {
    it: "Rifinitura di un piatto con il cannello",
    es: "Terminando un plato con el soplete",
    en: "Finishing a dish with a blowtorch",
  }),
  img("carne-alla-griglia", 1600, 1066, "food", {
    it: "Carne alla griglia con rosmarino",
    es: "Carne a la parrilla con romero",
    en: "Grilled steak with rosemary",
  }),
  img("birra-cusquena", 1279, 1600, "food", {
    it: "Birra peruviana Cusqueña",
    es: "Cerveza peruana Cusqueña",
    en: "Cusqueña, a Peruvian beer",
  }),
  img("servizio-vino", 1066, 1600, "restaurant", {
    it: "Il servizio del vino al tavolo",
    es: "El servicio del vino en la mesa",
    en: "Wine service at the table",
  }),
  img("ingredienti-peruviani", 1600, 1066, "food", {
    it: "Peperoncini ají, lime, pomodori e coriandolo",
    es: "Ajíes, limones, tomates y cilantro",
    en: "Ají peppers, limes, tomatoes and cilantro",
  }),
  img("cucina-al-lavoro", 1066, 1600, "kitchen", {
    it: "La cucina al lavoro",
    es: "La cocina en plena actividad",
    en: "The kitchen at work",
  }),
  img("dolce-della-casa", 1600, 1066, "food", {
    it: "Dolce della casa con caramello e fragola",
    es: "Postre de la casa con caramelo y fresa",
    en: "House dessert with caramel and strawberry",
  }),
  img("apertura-vino", 1066, 1600, "restaurant", {
    it: "Apertura di una bottiglia di vino",
    es: "Abriendo una botella de vino",
    en: "Opening a bottle of wine",
  }),
  img("foglie-di-banano", 1066, 1600, "kitchen", {
    it: "Fagottini in foglie di banano pronti per la cottura",
    es: "Envueltos en hojas de plátano listos para cocinar",
    en: "Parcels wrapped in banana leaves, ready to cook",
  }),
  img("cocktail-della-casa", 1600, 1066, "food", {
    it: "Cocktail della casa",
    es: "Cócteles de la casa",
    en: "House cocktails",
  }),
];
