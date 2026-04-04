import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useAnimatedStat } from '../hooks/useAnimatedStat';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useIsMobile } from '../hooks/useIsMobile';
import { getFadeUp, getStagger } from '../utils/motionVariants';

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
  const shouldReduce = useReducedMotion();
  const isMobile = useIsMobile();

  return (
    <section id="about" className="bg-[var(--bg-1)] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          variants={isMobile ? undefined : getStagger(shouldReduce)}
          initial={isMobile ? false : 'hidden'}
          whileInView={isMobile ? undefined : 'show'}
          viewport={isMobile ? undefined : { once: true, margin: '-60px' }}
        >
          <motion.span
            className="mb-3 block text-sm uppercase tracking-wide text-[var(--brand-foreground)]"
            variants={isMobile ? undefined : getFadeUp(shouldReduce, { y: 16 })}
          >
            {t('aboutHome.eyebrow')}
          </motion.span>
          <motion.h2
            className="mb-4 text-3xl font-semibold text-foreground lg:text-4xl"
            variants={isMobile ? undefined : getFadeUp(shouldReduce, { y: 16 })}
          >
            {t('aboutHome.title')}
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-muted-foreground"
            variants={isMobile ? undefined : getFadeUp(shouldReduce, { y: 16 })}
          >
            {t('aboutHome.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-16 grid grid-cols-2 gap-10 lg:grid-cols-4"
          variants={isMobile ? undefined : getFadeUp(shouldReduce, { y: 24 })}
          initial={isMobile ? false : 'hidden'}
          whileInView={isMobile ? undefined : 'show'}
          viewport={isMobile ? undefined : { once: true, margin: '-60px' }}
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
          variants={isMobile ? undefined : getFadeUp(shouldReduce)}
          initial={isMobile ? false : 'hidden'}
          whileInView={isMobile ? undefined : 'show'}
          viewport={isMobile ? undefined : { once: true, margin: '-60px' }}
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
