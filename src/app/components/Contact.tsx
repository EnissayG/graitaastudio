import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { easeScroll } from '../lib/motionPresets';
import { useDarkMode } from '../hooks/useDarkMode';

const EMAIL = 'graitaastudio@gmail.com';

export function Contact() {
  const { t } = useTranslation();
  const { isDark } = useDarkMode();

  const contactInfo = [
    {
      icon: <Mail size={28} />,
      titleKey: 'contactHome.email',
      value: EMAIL,
    },
    {
      icon: <MapPin size={28} />,
      titleKey: 'contactHome.location',
      valueKey: 'contactHome.locationValue',
    },
  ] as const;

  return (
    <section
      id="contact"
      className={`px-6 py-32 lg:px-8 ${isDark ? 'mx-4 rounded-2xl border border-[var(--blue-border)] bg-[var(--bg-2)]' : 'bg-[var(--blue)]'}`}
      style={{ borderWidth: isDark ? '0.5px' : undefined, borderRadius: isDark ? 16 : undefined }}
    >
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: easeScroll }}
      >
        <div className="mb-14 text-center">
          <h2
            className={`mb-4 text-3xl font-semibold lg:text-4xl ${isDark ? 'text-[var(--text-1)]' : 'text-white'}`}
          >
            {t('contactHome.title')}
          </h2>
          <p
            className={`mx-auto max-w-2xl text-lg leading-relaxed ${isDark ? 'text-[var(--text-2)]' : 'text-white/90'}`}
          >
            {t('contactHome.subtitle')}
          </p>
        </div>

        <div className="mx-auto mb-12 grid max-w-2xl gap-6 md:grid-cols-2">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`rounded-xl border p-8 text-center transition-all ${
                isDark
                  ? 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--blue-border)]'
                  : 'border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20'
              }`}
              style={{ borderWidth: '0.5px' }}
            >
              <div
                className={`mb-4 inline-flex size-16 items-center justify-center rounded-xl ${
                  isDark ? 'bg-[var(--blue-dim)] text-[var(--blue-text)]' : 'bg-white/20 text-white'
                }`}
              >
                {info.icon}
              </div>
              <div className={`mb-2 text-sm ${isDark ? 'text-[var(--text-3)]' : 'text-blue-100'}`}>
                {t(info.titleKey)}
              </div>
              <div className={`text-lg ${isDark ? 'text-[var(--text-1)]' : 'text-white'}`}>
                {'valueKey' in info ? t(info.valueKey) : info.value}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="group flex items-center gap-3 rounded-xl bg-[var(--blue)] px-10 py-5 text-lg text-[var(--on-accent)] transition-colors hover:bg-[var(--blue-hover)]"
          >
            <span>{t('contactHome.ctaPrimary')}</span>
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`mailto:${EMAIL}`}
            className={`rounded-xl border px-10 py-5 text-lg transition-colors ${
              isDark
                ? 'border-[var(--blue-border)] bg-transparent text-[var(--blue-text)] hover:bg-[var(--blue-dim)]'
                : 'border-white/40 bg-white/20 text-white hover:bg-white/30'
            }`}
            style={{ borderWidth: '0.5px' }}
          >
            {t('contactHome.ctaEmail')}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
