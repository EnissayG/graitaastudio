const base = (typeof import.meta !== "undefined" && (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL) || "/";
const asset = (path: string) => (base.endsWith("/") ? base + path.replace(/^\//, "") : base + path);

export const projects = [
  {
    id: 1,
    name: "Mirai Ramen",
    title: "Mirai Ramen",
    description: "Distributeurs de ramen 24/7 à Montréal",
    category: "Site vitrine · Restauration",
    url: "https://mirairamen.netlify.app/",
    image: asset("/logo-mirai-ramen.png"),
    logo: asset("/logo-mirai-ramen.png"),
    logoAlt: "Mirai Ramen",
    tags: ["Site vitrine", "Restauration"],
    challenges:
      "Créer une expérience utilisateur qui reflète la modernité du concept tout en respectant l'esthétique japonaise traditionnelle.",
    solution:
      "Design minimaliste avec palette de couleurs inspirée du Japon, animations subtiles et navigation intuitive.",
    longDescription:
      "Un site web moderne et captivant pour un concept innovant de distributeur automatique de ramen. Design épuré qui met en valeur l'expérience culinaire japonaise avec une interface intuitive et des visuels attrayants.",
    invertOnLight: false,
    imageCover: true,
  },
  {
    id: 2,
    name: "Cofandi Service",
    title: "Cofandi Service",
    description: "Services Cofandi",
    category: "Site vitrine · Café & vente",
    url: "https://cofandiservice.netlify.app/",
    image: asset("/logo-cofandi.png"),
    logo: asset("/logo-cofandi.png"),
    logoAlt: "Cofandi",
    tags: ["Site vitrine", "Café & vente"],
    challenges:
      "Présenter le produit de manière accessible et attractive pour un large public.",
    solution:
      "Design épuré centré sur l'expérience et les visuels, avec des informations bien structurées.",
    longDescription:
      "Site web pour un distributeur automatique intelligent de café. Interface moderne qui facilite la découverte des produits et présente le concept de façon claire et attractive.",
    invertOnLight: false,
    imageCover: true,
  },
  {
    id: 3,
    name: "QG Barbier",
    title: "QG Barbier – Le Quartier Général",
    description: "Le Quartier Général",
    category: "Site vitrine · Services",
    url: "",
    image: asset("/qg-barbier-quartier-general.png"),
    logo: asset("/qg-barbier-quartier-general.png"),
    logoAlt: "QG Barbier - Le Quartier Général",
    tags: ["Site vitrine", "Services"],
    challenges:
      "Créer une présence en ligne qui attire une clientèle locale et facilite les réservations.",
    solution:
      "Site élégant avec galerie photos, prise de rendez-vous simple et informations de localisation claires.",
    longDescription:
      "Site web professionnel et élégant pour un salon de coiffure moderne à Montréal. Design sophistiqué qui reflète l'atmosphère premium du salon, avec galerie et prise de rendez-vous en ligne.",
    invertOnLight: false,
    imageCover: true,
  },
] as const;
