const baseURL = "jexcellence.de";

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light - not needed when using ThemeProvider
  neutral: "custom", // sand | gray | slate
  brand: "emerald", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "custom", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "color", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

// Jexcellence - metadata
const meta = {
  icons: {
    icon: '/favicon.ico',
  },
  title: "Jexcellence | Innovative Web & Softwarelösungen",
  description: "Jexcellence ist Ihre Fullstack-Agentur für Webdesign, Softwareentwicklung & Smart Digital Solutions. Von der individuellen Website über E-Commerce bis zu kreativen Business-Automationen – wir bringen Ihre digitale Vision exzellent erlebbar ins Web. Starten Sie Ihr Projekt mit technischer Exzellenz und persönlicher Beratung.",
};

const og = {
  icons: {
    icon: '/favicon.ico',
  },
  title: "Jexcellence | Innovative Web & Softwarelösungen",
  description: "Jexcellence – Fullstack-Webentwicklung, klasse Design, individuelle Lösungen und echte Exzellenz für Ihr digitales Projekt. Gemeinsam digital erfolgreich werden.",
  type: "website",
  image: "https://jexcellence.de/images/avatar_1.png",
};

const schema = {
  logo: "https://jexcellence.de/images/avatar_1.png",
  type: "LocalBusiness",
  name: "Jexcellence",
  description: "Jexcellence bietet smarte, maßgeschneiderte Web-, Software- und E-Commerce-Lösungen für Unternehmen, Startups & Persönlichkeiten. Modern, zuverlässig und immer mit Leidenschaft für Innovation.",
  email: "justin.eiletz@jexcellence.de",
};

const social = {
  instagram: "https://www.instagram.com/jexcellence_/",
};

export { baseURL, style, meta, og, schema, social };