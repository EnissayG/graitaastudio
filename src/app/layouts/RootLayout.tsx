import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TrustBar } from '../components/TrustBar';
import { BackgroundEffects } from '../components/BackgroundEffects';
import { ScrollToTop } from '../components/ScrollToTop';
import { HtmlLang } from '../components/HtmlLang';
import { ThemeProvider } from '../hooks/useDarkMode';

export function RootLayout() {
  return (
    <ThemeProvider>
      <HtmlLang />
      <div className="relative min-h-screen overflow-hidden bg-[var(--bg-1)]">
        <ScrollToTop />
        <BackgroundEffects />
        <Header />
        <main>
          <Outlet />
        </main>
        <TrustBar />
        <Footer />
      </div>
    </ThemeProvider>
  );
}