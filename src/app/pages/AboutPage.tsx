import { Fragment } from 'react';
import { CheckCircle, Users, Award, Lightbulb, Heart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { PageHero } from '../components/PageHero';
import { statsBarConfig } from '../components/StatsBar';
import { useAnimatedStat } from '../hooks/useAnimatedStat';
import { useAccentColor } from '../hooks/useAccentColor';
import { easeScroll } from '../lib/motionPresets';

const gridVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeScroll } },
};

function AboutStatCell({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const { ref, display } = useAnimatedStat(target, { stiffness: 60, damping: 25 });
  return (
    <div
      ref={ref}
      className="flex-1 border-b-[0.5px] border-[var(--border)] px-6 py-7 text-center last:border-b-0 md:border-b-0 md:border-r-[0.5px] md:last:border-r-0"
    >
      <div className="text-[44px] font-bold leading-none tabular-nums text-[var(--text-1)]">
        {display}
        <span className="text-[var(--blue-text)]">{suffix}</span>
      </div>
      <div className="text-[11px] uppercase tracking-[2px] text-[var(--text-3)]" style={{ marginTop: 6 }}>
        {label}
      </div>
    </div>
  );
}

export function AboutPage() {
  const { t } = useTranslation();
  const {
    accent,
    accentBorder30,
    accentShadow06,
    accentNum20,
    accentGradient08_03,
    accentLine20,
    accentMuted08,
    accentMuted10,
    accentGradientLine,
  } = useAccentColor();
  const projHoverShadow = `0 12px 32px ${accentShadow06}`;

  const valueDefs = [
    { icon: <Lightbulb size={22} strokeWidth={1.75} />, key: 'creativity' as const },
    { icon: <Users size={22} strokeWidth={1.75} />, key: 'collab' as const },
    { icon: <Award size={22} strokeWidth={1.75} />, key: 'excellence' as const },
    { icon: <CheckCircle size={22} strokeWidth={1.75} />, key: 'reliability' as const },
  ];

  const processStepKeys = ['step1', 'step2', 'step3', 'step4'] as const;

  const missionPointKeys = ['missionP1', 'missionP2', 'missionP3'] as const;

  return (
    <div className="pt-24">
      <PageHero
        eyebrow={t('pages.about.eyebrow')}
        title={t('pages.about.title')}
        subtitle={t('pages.about.subtitle')}
      />

      <section className="bg-[var(--bg-1)] px-6 py-12 lg:px-8 lg:py-16">
        <motion.div
          className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-[var(--stats-band-border)] bg-[var(--stats-band-bg)]"
          style={{ borderWidth: '0.5px', borderRadius: 12 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: easeScroll }}
        >
          <div className="flex flex-col md:flex-row md:flex-nowrap">
            {statsBarConfig.map((s) => (
              <AboutStatCell key={s.labelKey} target={s.target} suffix={s.suffix} label={t(s.labelKey)} />
            ))}
          </div>
        </motion.div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-2)] px-6 py-20 lg:px-8 lg:py-24" style={{ borderTopWidth: '0.5px' }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: easeScroll }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--blue-text)]">
              {t('pages.about.missionLabel')}
            </p>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-[var(--text-1)]" style={{ fontSize: 36, fontWeight: 700 }}>
              {t('pages.about.missionTitle')}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-[var(--text-2)]">{t('pages.about.missionBody')}</p>
            <ul className="flex flex-col gap-2.5" style={{ gap: 10 }}>
              {missionPointKeys.map((k) => (
                <li key={k} className="flex items-start gap-2 text-sm text-[var(--text-2)]">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-[var(--blue-text)]" strokeWidth={2} aria-hidden />
                  {t(`pages.about.${k}`)}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="flex-1 rounded-2xl p-10"
            style={{
              background: accentGradient08_03,
              border: `0.5px solid ${accentLine20}`,
              borderRadius: 16,
              padding: 40,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: easeScroll, delay: 0.08 }}
          >
            <p className="text-lg italic leading-[1.7] text-[var(--text-2)]">{t('pages.about.quote')}</p>
            <div className="mt-6 border-t border-[var(--border)] pt-4 text-[13px] text-[var(--blue-text)]" style={{ borderTopWidth: '0.5px' }}>
              {t('pages.about.quoteAttribution')}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--bg-1)] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: easeScroll }}
          >
            <h2 className="mb-3 text-2xl font-semibold text-[var(--text-1)] lg:text-3xl">{t('pages.about.valuesTitle')}</h2>
            <p className="text-lg text-[var(--text-2)]">{t('pages.about.valuesSubtitle')}</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {valueDefs.map((value, index) => {
              const p = `pages.about.${value.key}`;
              return (
                <motion.div
                  key={value.key}
                  variants={cardVariants}
                  whileHover={{
                    y: -4,
                    borderColor: accentBorder30,
                    transition: { duration: 0.2 },
                  }}
                  className="relative rounded-xl border border-[var(--border)] bg-[var(--bg-1)]"
                  style={{ borderWidth: '0.5px', padding: '32px 28px' }}
                >
                  <span
                    className="pointer-events-none absolute right-5 top-4 font-mono text-[11px] font-medium"
                    style={{ color: accentNum20 }}
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div
                    className="mb-5 flex size-12 items-center justify-center rounded-xl text-[var(--blue-text)]"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      border: `0.5px solid ${accentLine20}`,
                      backgroundColor: accentMuted08,
                    }}
                  >
                    {value.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-[var(--text-1)]" style={{ fontSize: 18, fontWeight: 600 }}>
                    {t(`${p}.title`)}
                  </h3>
                  <p className="text-sm leading-[1.7] text-[var(--text-2)]">{t(`${p}.description`)}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-2)] px-6 py-20 lg:px-8 lg:py-24" style={{ borderTopWidth: '0.5px' }}>
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: easeScroll }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--blue-text)]">
              {t('pages.about.processLabel')}
            </p>
            <h2 className="text-2xl font-semibold text-[var(--text-1)] lg:text-3xl">{t('pages.about.processTitle')}</h2>
          </motion.div>

          <div className="hidden lg:block">
            <div className="flex w-full items-start">
              {processStepKeys.map((stepKey, i) => {
                const p = `pages.about.${stepKey}`;
                const step = { n: `0${i + 1}`, title: t(`${p}.title`), description: t(`${p}.description`) };
                return (
                  <Fragment key={stepKey}>
                    <motion.div
                      className="flex w-[200px] shrink-0 flex-col items-center text-center"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.45, delay: i * 0.06, ease: easeScroll }}
                    >
                      <div
                        className="flex size-10 items-center justify-center rounded-full text-base font-bold text-[var(--blue-text)]"
                        style={{
                          width: 40,
                          height: 40,
                          border: `1.5px solid ${accent}`,
                          fontSize: 16,
                          fontWeight: 700,
                          backgroundColor: accentMuted10,
                        }}
                      >
                        {step.n}
                      </div>
                      <h3 className="mt-4 text-[15px] font-semibold text-[var(--text-1)]" style={{ fontWeight: 600 }}>
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-2)]">{step.description}</p>
                    </motion.div>
                    {i < processStepKeys.length - 1 ? (
                      <div
                        className="mx-2 min-h-px min-w-0 flex-1 self-start"
                        style={{ height: 1, marginTop: 20, background: accentGradientLine }}
                        aria-hidden
                      />
                    ) : null}
                  </Fragment>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-10 lg:hidden">
            {processStepKeys.map((stepKey, i) => {
              const p = `pages.about.${stepKey}`;
              return (
                <motion.div
                  key={stepKey}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, delay: i * 0.05, ease: easeScroll }}
                  className="flex gap-4"
                >
                  <div
                    className="flex size-10 shrink-0 items-center justify-center rounded-full text-base font-bold text-[var(--blue-text)]"
                    style={{
                      width: 40,
                      height: 40,
                      border: `1.5px solid ${accent}`,
                      backgroundColor: accentMuted10,
                    }}
                  >
                    {`0${i + 1}`}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[var(--text-1)]">{t(`${p}.title`)}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-2)]">{t(`${p}.description`)}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-1)] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: easeScroll }}
          >
            <h2 className="mb-3 text-2xl font-semibold text-[var(--text-1)] lg:text-3xl">{t('pages.about.workTitle')}</h2>
            <p className="text-lg text-[var(--text-2)]">{t('pages.about.workSubtitle')}</p>
          </motion.div>
          <motion.div
            className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {projects.map((project) => {
              const base = `projects.byId.${project.id}`;
              const Wrapper = project.url ? motion.a : motion.div;
              const wrapperProps = project.url
                ? { href: project.url, target: '_blank' as const, rel: 'noopener noreferrer' }
                : {};
              return (
                <Wrapper
                  key={project.id}
                  {...wrapperProps}
                  variants={cardVariants}
                  whileHover={
                    project.url
                      ? {
                          y: -4,
                          borderColor: accentBorder30,
                          boxShadow: projHoverShadow,
                          transition: { duration: 0.2 },
                        }
                      : undefined
                  }
                  className="group flex flex-col items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--bg-1)] p-8"
                  style={{ borderWidth: '0.5px' }}
                >
                  <div
                    className={
                      project.imageCover
                        ? 'h-28 w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-2)] [&_img]:h-full [&_img]:w-full [&_img]:object-cover'
                        : `flex h-20 items-center justify-center [&_img]:max-h-16 [&_img]:w-auto [&_img]:object-contain ${project.invertOnLight ? '[&_img]:invert [&_img]:dark:invert-0' : ''}`
                    }
                    style={project.imageCover ? { borderWidth: '0.5px' } : undefined}
                  >
                    <img src={project.logo} alt={String(t(`${base}.logoAlt`))} />
                  </div>
                  <div className="text-center">
                    <h3 className="mb-1 text-xl font-semibold text-[var(--text-1)] transition-colors group-hover:text-[var(--blue-text)]">
                      {t(`${base}.title`)}
                    </h3>
                    <p className="mb-2 text-sm text-[var(--text-2)]">{t(`${base}.description`)}</p>
                    {project.url ? (
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--blue-text)]">
                        {t('pages.about.viewSite')} <ExternalLink size={14} />
                      </span>
                    ) : null}
                  </div>
                </Wrapper>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-2)] px-6 py-20 lg:px-8" style={{ borderTopWidth: '0.5px' }}>
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: easeScroll }}
          >
            <Heart className="mx-auto mb-4 size-10 text-[var(--blue-text)]" strokeWidth={1.75} />
            <h2 className="mb-4 text-2xl font-semibold text-[var(--text-1)] lg:text-3xl">{t('pages.about.finalTitle')}</h2>
            <p className="mb-8 text-lg text-[var(--text-2)]">{t('pages.about.finalSubtitle')}</p>
            <Link
              to="/contact"
              className="inline-flex rounded-lg bg-[var(--blue)] px-8 py-4 text-base font-medium text-[var(--on-accent)] transition-colors hover:bg-[var(--blue-hover)]"
            >
              {t('pages.about.finalCta')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
