import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { motion, useScroll, useSpring } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useDarkMode } from '../hooks/useDarkMode';
import { ThemeToggle } from './ThemeToggle';
import { ShimmerCTA } from './ShimmerCTA';
import { LanguageSwitcher } from './LanguageSwitcher';

function ScrollReadingBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.12 });
  return (
    <motion.div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-0.5 origin-left bg-[var(--blue)]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}

export function Header() {
  const { t } = useTranslation();
  const { isDark, toggle: toggleTheme } = useDarkMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { labelKey: 'nav.home', path: '/' },
    { labelKey: 'nav.services', path: '/services' },
    { labelKey: 'nav.portfolio', path: '/portfolio' },
    { labelKey: 'nav.about', path: '/about' },
    { labelKey: 'nav.contact', path: '/contact' },
  ] as const;

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const linkClass = (path: string) => {
    const active = isActive(path);
    return `text-[15px] pb-1 border-b-[1.5px] transition-colors duration-200 ${
      active
        ? 'text-[var(--blue)] border-[var(--blue)]'
        : 'text-[var(--text-2)] border-transparent hover:text-[var(--blue)]'
    }`;
  };

  return (
    <>
      <ScrollReadingBar />
      <header
        className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] backdrop-blur-[16px]"
        style={{
          borderBottomWidth: '0.5px',
          backgroundColor: 'var(--header-bg)',
        }}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-6 lg:px-8">
          <Link to="/" className="text-2xl tracking-tight transition-opacity hover:opacity-80">
            <span className="text-[var(--text-1)]">Graitaa</span>
            <span className="text-[var(--blue)]">Studio</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={linkClass(item.path)}>
                {t(item.labelKey)}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <ShimmerCTA to="/contact" className="rounded-lg px-5 py-2.5 text-sm font-medium">
              {t('header.startProject')}
            </ShimmerCTA>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[var(--text-2)] hover:text-[var(--blue)]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen ? (
          <div className="border-t border-[var(--border)] px-6 py-4 md:hidden" style={{ borderTopWidth: '0.5px' }}>
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 ${linkClass(item.path)}`}
                >
                  {t(item.labelKey)}
                </Link>
              ))}
              <ShimmerCTA
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 w-full justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium"
              >
                {t('header.startProject')}
              </ShimmerCTA>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}
