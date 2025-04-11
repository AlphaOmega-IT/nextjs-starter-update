const baseURL = "jexcellence.de";

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light - not needed when using ThemeProvider
  neutral: "gray", // sand | gray | slate
  brand: "blue", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "inverse", // color | contrast | inverse
  solidStyle: "plastic", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

// default metadata
const meta = {
  icons: {
    icon: '/favicon.ico',
  },
  title: "LMBeauty | Professionelle Wimpern in Oldenburg",
  description: "Hi, ich bin Lisa – deine Make-up & Wimpernexpertin in Oldenburg. Mit Leidenschaft und Präzision hebe ich deine einzigartige Schönheit hervor. Ob natürlicher Alltagslook oder glamouröser Abendstil: Gemeinsam kreieren wir, was zu dir passt. Vertraue auf 𝗟𝗠 𝗕𝗲𝗮𝘂𝘁𝘆 – wo Professionalität und Herzblut dein Strahlen unterstreichen. 💫 Jetzt Termin sichern und dich verwandeln lassen!",
};

const og = {
  icons: {
    icon: '/favicon.ico',
  },
  title: "LMBeauty | Professionelle Wimpern in Oldenburg",
  description: "Hi, ich bin Lisa – deine Make-up & Wimpernexpertin in Oldenburg. Mit Leidenschaft und Präzision hebe ich deine einzigartige Schönheit hervor. Ob natürlicher Alltagslook oder glamouröser Abendstil: Gemeinsam kreieren wir, was zu dir passt. Vertraue auf 𝗟𝗠 𝗕𝗲𝗮𝘂𝘁𝘆 – wo Professionalität und Herzblut dein Strahlen unterstreichen. 💫 Jetzt Termin sichern und dich verwandeln lassen!.",
  type: "website",
  image: "https://jexcellence.de/images/avatar_1.png",
};

const schema = {
  logo: "https://jexcellence.de/images/avatar_1.png",
  type: "LocalBusiness",
  name: "LM Beauty",
  description: "Hi, ich bin Lisa – deine Make-up & Wimpernexpertin in Oldenburg. Mit Leidenschaft und Präzision hebe ich deine einzigartige Schönheit hervor. Ob natürlicher Alltagslook oder glamouröser Abendstil: Gemeinsam kreieren wir, was zu dir passt. Vertraue auf 𝗟𝗠 𝗕𝗲𝗮𝘂𝘁𝘆 – wo Professionalität und Herzblut dein Strahlen unterstreichen. 💫 Jetzt Termin sichern und dich verwandeln lassen!",
  email: "justin.eiletz@jexcellence.de",
};

const social = {
  instagram: "https://www.instagram.com/jexcellence_/",
};

export { baseURL, style, meta, og, schema, social };
