import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

// Sur GitHub Pages l'app est sous /GraitaaStudio/, en local à la racine
const basename =
  typeof window !== 'undefined' && window.location.pathname.startsWith('/GraitaaStudio')
    ? '/GraitaaStudio'
    : '/';

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "portfolio", Component: PortfolioPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFoundPage },
      ],
    },
  ],
  { basename }
);