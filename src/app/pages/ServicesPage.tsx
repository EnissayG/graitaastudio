import { Check, Code2, Palette, Smartphone, Zap, Search, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/PageHero';
import { useDarkMode } from '../hooks/useDarkMode';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useAccentColor } from '../hooks/useAccentColor';
import { getFadeUp, getStagger } from '../utils/motionVariants';

const serviceKeys = ['uiux', 'dev', 'responsive', 'perf', 'seo', 'ecommerce'] as const;

const serviceIcons = [Palette, Code2, Smartphone, Zap, Search, ShoppingBag];

export function ServicesPage() {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();
  const { isDark } = useDarkMode();
  const { accentBorder, accentShadow06, accentNum20 } = useAccentColor();
  const cardHoverShadow = `0 12px 32px ${accentShadow06}`;

  const reassuranceKeys = ['reassurance1', 'reassurance2', 'reassurance3'] as const;
  const cardVariants = getFadeUp(shouldReduce, { y: 20, duration: 0.5 });

  return (
    <div className="pt-24">
      <PageHero
        compact
        eyebrowAccent
        eyebrow={t('pages.services.eyebrow')}
        title={t('pages.services.title')}
        subtitle={t('pages.services.subtitle')}
      />

      <section className="bg-[var(--bg-1)] px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            variants={getStagger(shouldReduce)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {serviceKeys.map((key, index) => {
              const p = `pages.services.${key}`;
              const Icon = serviceIcons[index];
              const featuresRaw = t(`${p}.features`, { returnObjects: true });
              const features = Array.isArray(featuresRaw) ? (featuresRaw as string[]) : [];

              return (
                <motion.div
                  key={key}
                  variants={cardVariants}
                  whileHover={
                    shouldReduce
                      ? {}
                      : {
                          y: -4,
                          borderColor: accentBorder,
                          boxShadow: cardHoverShadow,
                          transition: { duration: 0.2 },
                        }
                  }
                  className="relative rounded-xl border border-[var(--border)] bg-[var(--bg-1)] p-8"
                  style={{ borderWidth: '0.5px' }}
                >
                  <span
                    className="pointer-events-none absolute right-5 top-4 font-mono text-[11px] font-medium"
                    style={{ color: accentNum20 }}
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div
                    className="mb-5 flex size-12 items-center justify-center rounded-[10px] border border-[var(--blue-border)] bg-[var(--blue-dim)] text-[var(--blue-text)]"
                    style={{ borderWidth: '0.5px' }}
                  >
                    <Icon size={28} strokeWidth={1.75} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-[var(--text-1)]">{t(`${p}.title`)}</h3>
                  <p className="mb-6 leading-relaxed text-[var(--text-2)]">{t(`${p}.description`)}</p>
                  <ul className="space-y-2 border-t border-[var(--border)] pt-5" style={{ borderTopWidth: '0.5px' }}>
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-[var(--text-2)]">
                        <span className="mr-2 shrink-0 text-[var(--blue-text)]">–</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section
        className={`relative overflow-hidden px-6 py-20 lg:px-8 ${isDark ? 'mx-4 rounded-2xl border border-[var(--blue-border)]' : ''}`}
        style={{
          background: isDark ? 'var(--bg-2)' : 'linear-gradient(135deg, #1d4ed8 0%, #2563EB 50%, #3b82f6 100%)',
          borderWidth: isDark ? '0.5px' : undefined,
          borderRadius: isDark ? 16 : undefined,
        }}
      >
        {!isDark && !shouldReduce ? (
          <>
            <div
              className="pointer-events-none absolute rounded-full border border-white/10"
              style={{ width: 300, height: 300, right: -80, top: -80 }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute rounded-full border border-[rgba(255,255,255,0.07)]"
              style={{ width: 200, height: 200, left: -60, bottom: -60 }}
              aria-hidden
            />
          </>
        ) : null}
        <motion.div
          className="relative z-10 mx-auto max-w-4xl text-center"
          variants={getFadeUp(shouldReduce)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <h2
            className={`mb-4 text-3xl font-semibold lg:text-4xl ${isDark ? 'text-[var(--text-1)]' : 'text-white'}`}
          >
            {t('pages.services.ctaTitle')}
          </h2>
          <p className={`mb-8 text-lg ${isDark ? 'text-[var(--text-2)]' : 'text-white/90'}`}>
            {t('pages.services.ctaSubtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-flex rounded-lg bg-[var(--blue)] px-8 py-4 text-base font-medium text-[var(--on-accent)] transition-colors hover:bg-[var(--blue-hover)]"
          >
            {t('pages.services.ctaButton')}
          </Link>
          <div
            className={`mt-4 flex flex-row flex-wrap items-center justify-center text-[13px] ${isDark ? 'text-[var(--text-2)]' : 'text-[rgba(255,255,255,0.75)]'}`}
            style={{ marginTop: 16, gap: 24 }}
          >
            {reassuranceKeys.map((k) => (
              <span key={k} className="inline-flex items-center gap-1.5">
                <Check
                  size={14}
                  className={`shrink-0 ${isDark ? 'text-[var(--blue-text)]' : 'text-white/80'}`}
                  strokeWidth={2.5}
                  aria-hidden
                />
                {t(`pages.services.${k}`)}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
