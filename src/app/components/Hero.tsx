import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { BrowserMockup } from './BrowserMockup';
import { ShimmerCTA } from './ShimmerCTA';
import { useAccentColor } from '../hooks/useAccentColor';

export function Hero() {
  const { t } = useTranslation();
  const { heroOrbSmall } = useAccentColor();

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[var(--bg-1)] px-6 pb-16 pt-24 lg:px-8">
      <div
        className="pointer-events-none absolute right-[3%] top-[5%] z-0 size-[320px] rounded-full bg-[radial-gradient(circle,var(--blue-dim)_0%,transparent_68%)] opacity-90"
        style={{ animation: 'float 11s ease-in-out infinite' }}
      />
      <div
        className="pointer-events-none absolute bottom-[8%] right-[28%] z-0 size-[180px] rounded-full"
        style={{ background: heroOrbSmall, animation: 'float 14s ease-in-out infinite reverse' }}
      />
      <div
        className="pointer-events-none absolute right-[18%] top-[18%] z-0 size-[68px] rounded-full border border-[var(--blue-border)] opacity-40"
        style={{ animation: 'spin 28s linear infinite' }}
      />
      <div
        className="pointer-events-none absolute bottom-[32%] right-[42%] z-0 size-[38px] rounded-full border border-[var(--blue-border)] opacity-30"
        style={{ animation: 'spin 20s linear infinite reverse' }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="order-2 flex flex-col items-start text-left lg:order-1"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="mb-6 inline-flex rounded-lg border border-[var(--blue-border)] bg-[var(--blue-dim)] px-4 py-2 text-sm font-medium tracking-wide text-[var(--blue-text)]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0 }}
          >
            {t('hero.badge')}
          </motion.span>

          <motion.h1
            className="mb-6 text-3xl font-semibold leading-[1.15] tracking-tight text-[var(--text-1)] sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          >
            {t('hero.titleBefore')}{' '}
            <span className="text-[var(--blue-text)]">{t('hero.titleHighlight')}</span>
          </motion.h1>

          <motion.p
            className="mb-8 max-w-xl text-base leading-relaxed text-[var(--text-2)] md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <div className="flex flex-wrap gap-3">
            <ShimmerCTA to="/contact" className="rounded-lg px-7 py-3.5 text-base font-medium">
              {t('hero.ctaPrimary')}
              <ArrowRight size={18} className="shrink-0" />
            </ShimmerCTA>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] px-7 py-3.5 text-base font-medium text-[var(--text-2)] transition-colors hover:bg-[var(--surface)]"
              style={{ borderWidth: '0.5px' }}
            >
              {t('hero.ctaSecondary')}
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative order-1 lg:order-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <BrowserMockup />
        </motion.div>
      </div>
    </section>
  );
}
