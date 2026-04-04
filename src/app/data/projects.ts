const base =
  (typeof import.meta !== 'undefined' && (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL) || '/';
const asset = (path: string) => (base.endsWith('/') ? base + path.replace(/^\//, '') : base + path);

export const projects = [
  {
    id: 1,
    url: 'http://mirairamen.ca/',
    image: asset('/logo-mirai-ramen.png'),
    logo: asset('/logo-mirai-ramen.png'),
    invertOnLight: false,
    imageCover: true,
  },
  {
    id: 2,
    url: 'https://cofandiservice.com/',
    image: asset('/logo-cofandi.png'),
    logo: asset('/logo-cofandi.png'),
    invertOnLight: false,
    imageCover: true,
  },
  {
    id: 3,
    url: 'https://qgbarbershop.netlify.app/',
    image: asset('/qg-barbier-quartier-general.png'),
    logo: asset('/qg-barbier-quartier-general.png'),
    invertOnLight: false,
    imageCover: true,
  },
] as const;
