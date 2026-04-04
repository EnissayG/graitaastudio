import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useAnimatedStat } from '../hooks/useAnimatedStat';
import { easeScroll } from '../lib/motionPresets';

const statConfig = [
  { target: 10, suffix: '+', labelKey: 'statsAbout.projects' },
  { target: 10, suffix: '+', labelKey: 'statsAbout.clients' },
  { target: 4, suffix: '+', labelKey: 'statsAbout.years' },
  { target: 100, suffix: '%', labelKey: 'statsAbout.satisfaction' },
] as const;

function AboutStat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, display } = useAnimatedStat(target);
  return (
    <div ref={ref} className="text-center">
      <div className="mb-2 text-4xl font-semibold tabular-nums text-[var(--brand)] lg:text-5xl">
        {display}
        <span>{suffix}</span>
      </div>
      <div className="text-base text-muted-foreground">{label}</div>
    </div>
  );
}

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-[var(--bg-1)] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: easeScroll }}
        >
          <motion.span
            className="mb-3 block text-sm uppercase tracking-wide text-[var(--brand-foreground)]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: easeScroll, delay: 0 }}
          >
            {t('aboutHome.eyebrow')}
          </motion.span>
          <motion.h2
            className="mb-4 text-3xl font-semibold text-foreground lg:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: easeScroll, delay: 0.08 }}
          >
            {t('aboutHome.title')}
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: easeScroll, delay: 0.16 }}
          >
            {t('aboutHome.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-16 grid grid-cols-2 gap-10 lg:grid-cols-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: easeScroll }}
        >
          {statConfig.map((stat) => (
            <AboutStat
              key={stat.labelKey}
              target={stat.target}
              suffix={stat.suffix}
              label={t(stat.labelKey)}
            />
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: easeScroll }}
        >
          <Link
            to="/about"
            className="inline-block rounded-xl bg-[var(--blue)] px-10 py-5 text-lg text-[var(--on-accent)] transition-colors hover:bg-[var(--blue-hover)]"
          >
            {t('aboutHome.cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
