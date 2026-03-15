# Graitaa Studio

Site vitrine et portfolio (projet issu d’un export Figma, converti en app React + Vite).

---

## Charte graphique (template)

Couleurs, typographie et variables utilisées dans le projet (définies dans `src/styles/theme.css` et `src/styles/fonts.css`).

| Élément | Valeur |
|--------|--------|
| **Police titres / corps** | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Google Fonts) |
| **Couleur principale (brand)** | `#2563eb` (bleu) — variable CSS `--brand` |
| **Couleur brand au survol** | `#1d4ed8` — `--brand-hover` |
| **Fond atténué brand** | `#dbeafe` — `--brand-muted` (badges, fonds) |
| **Texte principal** | `#0f172a` — `--foreground` |
| **Texte secondaire** | `#64748b` — `--muted-foreground` |
| **Fond de page** | `#ffffff` — `--background` |
| **Bordures** | `rgba(15, 23, 42, 0.08)` — `--border` |
| **Rayon des bords** | `0.625rem` (10px) — `--radius` |

Pour modifier la charte : éditer les variables dans `:root` de `src/styles/theme.css` et, pour la police, `src/styles/fonts.css`.

---

## Technologies

| Domaine        | Technologie |
|----------------|-------------|
| **Framework**  | [React](https://react.dev/) 18 |
| **Build**      | [Vite](https://vitejs.dev/) 6 |
| **Routing**    | [React Router](https://reactrouter.com/) 7 |
| **Styles**     | [Tailwind CSS](https://tailwindcss.com/) 4 (`@tailwindcss/vite`) |
| **Composants** | [Radix UI](https://www.radix-ui.com/), style [shadcn/ui](https://ui.shadcn.com/) |
| **Animations** | [Motion](https://motion.dev/), tw-animate-css |
| **Icônes**     | [Lucide React](https://lucide.dev/), [MUI Icons](https://mui.com/material-ui/material-icons/) |
| **Formulaires**| [React Hook Form](https://react-hook-form.com/) |
| **Graphiques** | [Recharts](https://recharts.org/) |
| **Autres**     | Emotion, MUI Material, date-fns, Sonner, Embla Carousel |

---

## Prérequis

- **Node.js** 18+ (LTS recommandé) — [nodejs.org](https://nodejs.org/)
- **npm** (livré avec Node)

---

## Consignes : build et lancement

### 1. Cloner et entrer dans le projet

```bash
git clone https://github.com/<votre-username>/GraitaaStudio.git
cd GraitaaStudio
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer en développement

```bash
npm run dev
```

Ouvre [http://localhost:5173](http://localhost:5173). Les modifications sont rechargées à chaud.

### 4. Build de production

```bash
npm run build
```

Le build est généré dans le dossier **`dist/`**.

### 5. Prévisualiser le build

```bash
npm run preview
```

Sert le contenu de `dist/` en local (pour tester avant déploiement).

---

## Scripts disponibles

| Commande           | Description |
|--------------------|-------------|
| `npm install`      | Installe les dépendances |
| `npm run dev`      | Serveur de développement (hot reload) |
| `npm run build`    | Build de production → `dist/` |
| `npm run preview`  | Prévisualise le build (`dist/`) |

---

## Structure du projet

```
GraitaaStudio/
├── index.html                 # Entrée HTML
├── package.json
├── vite.config.ts             # Vite (alias @, base GitHub Pages)
├── postcss.config.mjs
├── src/
│   ├── main.tsx               # Point d’entrée React + CSS global
│   ├── app/
│   │   ├── App.tsx            # RouterProvider
│   │   ├── routes.tsx         # Routes (React Router)
│   │   ├── layouts/
│   │   │   └── RootLayout.tsx # En-tête, pied de page, fond
│   │   ├── pages/             # Une page par route
│   │   └── components/        # Header, Footer, Hero, etc.
│   │       ├── figma/         # Utilitaires (ex. ImageWithFallback)
│   │       └── ui/            # Composants UI (boutons, cartes, etc.)
│   └── styles/
│       ├── index.css          # Import fonts, tailwind, theme
│       ├── fonts.css
│       ├── tailwind.css
│       └── theme.css
└── .github/workflows/
    └── deploy.yml             # Déploiement GitHub Pages
```

---

## Déploiement GitHub Pages

1. **Settings → Pages** du dépôt : **Source** = **GitHub Actions**.
2. À chaque push sur `main` (ou `master`), le workflow build et déploie.
3. Site en ligne : `https://<username>.github.io/GraitaaStudio/`

Le workflow copie `index.html` en `404.html` pour que le routage SPA fonctionne sur toutes les URLs.

**Aperçu des liens (réseaux sociaux)** : le site inclut des balises Open Graph et Twitter Card. L’image de prévisualisation est `public/og-preview.svg`. Pour un rendu optimal (Facebook, LinkedIn, etc.), remplacez dans `index.html` la valeur de `og:image` et `twitter:image` par l’URL absolue de votre image (ex. `https://votreuser.github.io/GraitaaStudio/og-preview.png`) et déposez une version PNG 1200×630 dans `public/` si besoin.

---

## Licence et crédits

Projet privé. Crédits des librairies et ressources : voir [ATTRIBUTIONS.md](ATTRIBUTIONS.md).
