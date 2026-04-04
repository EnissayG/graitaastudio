import { Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/graitaastudio/', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: 'https://ca.linkedin.com/in/yassine-graitaa-1a049b263', label: 'LinkedIn' },
  ];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-2)]" style={{ borderTopWidth: '0.5px' }}>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="text-3xl tracking-tight">
              <span className="text-[var(--text-1)]">Graitaa</span>
              <span className="text-[var(--blue)]">Studio</span>
            </div>
            <p className="text-lg leading-relaxed text-[var(--text-2)]">{t('footer.blurb')}</p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-2)] transition-colors hover:border-[var(--blue-border)] hover:bg-[var(--blue-dim)] hover:text-[var(--blue)]"
                  style={{ borderWidth: '0.5px' }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-medium text-[var(--text-1)]">{t('footer.groupServices')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-[var(--text-2)] transition-colors hover:text-[var(--blue)]">
                  {t('footer.linkWebDesign')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[var(--text-2)] transition-colors hover:text-[var(--blue)]">
                  {t('footer.linkDevelopment')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[var(--text-2)] transition-colors hover:text-[var(--blue)]">
                  {t('footer.linkEcommerce')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[var(--text-2)] transition-colors hover:text-[var(--blue)]">
                  {t('footer.linkSeo')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[var(--text-2)] transition-colors hover:text-[var(--blue)]">
                  {t('footer.linkMaintenance')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-medium text-[var(--text-1)]">{t('footer.groupCompany')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-[var(--text-2)] transition-colors hover:text-[var(--blue)]">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-[var(--text-2)] transition-colors hover:text-[var(--blue)]">
                  {t('nav.portfolio')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[var(--text-2)] transition-colors hover:text-[var(--blue)]">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[var(--text-2)] transition-colors hover:text-[var(--blue)]">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[var(--text-2)] transition-colors hover:text-[var(--blue)]">
                  {t('nav.home')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-medium text-[var(--text-1)]">{t('footer.groupContact')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-[var(--text-2)] transition-colors hover:text-[var(--blue)]">
                  graitaastudio@gmail.com
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[var(--text-2)] transition-colors hover:text-[var(--blue)]">
                  {t('contactHome.locationValue')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] px-6 py-7 sm:flex-row sm:items-center lg:px-[56px]"
          style={{ borderTopWidth: '0.5px' }}
        >
          <div className="text-2xl tracking-tight opacity-60">
            <span className="text-[var(--text-1)]">Graitaa</span>
            <span className="text-[var(--blue)]">Studio</span>
          </div>
          <p className="text-center text-sm text-[var(--text-3)] sm:flex-1">
            {t('footer.rights', { year: currentYear })}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--text-3)]">
            <a href="#" className="transition-colors hover:text-[var(--blue)]">
              {t('footer.privacyPolicy')}
            </a>
            <a href="#" className="transition-colors hover:text-[var(--blue)]">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
