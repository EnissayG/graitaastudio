import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BackgroundEffects } from "../components/BackgroundEffects";
import { ScrollToTop } from "../components/ScrollToTop";

export function RootLayout() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <ScrollToTop />
      <BackgroundEffects />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}