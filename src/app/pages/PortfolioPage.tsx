import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { PageHero } from '../components/PageHero';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useIsMobile } from '../hooks/useIsMobile';
import { useAccentColor } from '../hooks/useAccentColor';
import {
  getExternalLinkIconVariants,
  getFadeUp,
  getLinkGapHoverVariants,
  getSlideInX,
} from '../utils/motionVariants';

function projectTags(t: (k: string, o?: object) => unknown, id: number): string[] {
  const raw = t(`projects.byId.${id}.tags`, { returnObjects: true });
  return Array.isArray(raw) ? (raw as string[]) : [];
}

export function PortfolioPage() {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();
  const isMobile = useIsMobile();
  const { accentOverlay08 } = useAccentColor();
  const linkGap = getLinkGapHoverVariants(shouldReduce);
  const iconVar = getExternalLinkIconVariants(shouldReduce);
  const noHover = isMobile || shouldReduce;

  return (
    <div className="pt-24">
      <PageHero
        eyebrow={t('pages.portfolio.eyebrow')}
        title={t('pages.portfolio.title')}
        subtitle={t('pages.portfolio.subtitle')}
      />

      <section className="bg-[var(--bg-1)] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-24 lg:space-y-28">
          {projects.map((project, index) => {
            const imageLeft = index % 2 === 0;
            const base = `projects.byId.${project.id}`;
            const tags = projectTags(t, project.id);

            const imageBlock = (
              <motion.div
                className="relative w-full flex-1"
                variants={isMobile ? undefined : getSlideInX(shouldReduce, imageLeft ? 'left' : 'right', 28)}
                initial={isMobile ? false : 'hidden'}
                whileInView={isMobile ? undefined : 'show'}
                viewport={isMobile ? undefined : { once: true, margin: '-60px' }}
              >
                <motion.div
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[var(--border)]"
                  style={{ borderWidth: '0.5px' }}
                  initial="rest"
                  whileHover={noHover ? 'rest' : 'hover'}
                  variants={{
                    rest: { scale: 1 },
                    hover: shouldReduce
                      ? { scale: 1 }
                      : { scale: 1.02, transition: { duration: 0.4, ease: 'easeOut' } },
                  }}
                >
                  <img
                    src={project.image}
                    alt={String(t(`${base}.logoAlt`))}
                    className={`size-full ${project.imageCover ? 'object-cover' : 'object-contain'} ${project.invertOnLight ? 'invert dark:invert-0' : ''}`}
                  />
                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-xl"
                    style={{ backgroundColor: accentOverlay08 }}
                    variants={{
                      rest: { opacity: 0 },
                      hover: shouldReduce
                        ? { opacity: 0 }
                        : { opacity: 1, transition: { duration: 0.3 } },
                    }}
                  />
                </motion.div>
              </motion.div>
            );

            const textBlock = (
              <motion.div
                className="flex w-full flex-1 flex-col justify-center gap-4"
                variants={isMobile ? undefined : getSlideInX(shouldReduce, imageLeft ? 'right' : 'left', 20)}
                initial={isMobile ? false : 'hidden'}
                whileInView={isMobile ? undefined : 'show'}
                viewport={isMobile ? undefined : { once: true, margin: '-60px' }}
              >
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded border border-[var(--blue-border)] bg-[var(--blue-dim)] px-3 py-1 text-[11px] font-medium uppercase tracking-[1.5px] text-[var(--blue-text)]"
                      style={{ borderWidth: '0.5px', borderRadius: '4px' }}
                    >
                      <span
                        className="mr-[5px] inline-block size-[5px] shrink-0 rounded-full bg-[var(--blue-text)]"
                        aria-hidden
                      />
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-3)]">
                  {t(`${base}.category`)}
                </p>
                <h2 className="text-2xl font-semibold text-[var(--text-1)] lg:text-3xl">{t(`${base}.title`)}</h2>
                <p className="text-lg leading-relaxed text-[var(--text-2)]">{t(`${base}.longDescription`)}</p>
                <div className="space-y-3 border-t border-[var(--border)] pt-4 text-sm" style={{ borderTopWidth: '0.5px' }}>
                  <div>
                    <h4 className="mb-1 font-semibold text-[var(--text-1)]">{t('pages.portfolio.challenge')}</h4>
                    <p className="leading-relaxed text-[var(--text-2)]">{t(`${base}.challenges`)}</p>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-[var(--text-1)]">{t('pages.portfolio.solution')}</h4>
                    <p className="leading-relaxed text-[var(--text-2)]">{t(`${base}.solution`)}</p>
                  </div>
                </div>
                {project.url ? (
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center text-sm font-medium text-[var(--blue-text)]"
                    initial="rest"
                    whileHover={noHover ? 'rest' : 'hover'}
                    variants={linkGap}
                  >
                    {t('pages.portfolio.viewSite')}
                    <motion.span className="inline-flex" variants={iconVar}>
                      <ExternalLink size={14} className="shrink-0" />
                    </motion.span>
                  </motion.a>
                ) : null}
              </motion.div>
            );

            return (
              <div
                key={project.id}
                className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14"
              >
                {imageLeft ? (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-2)] px-6 py-20 lg:px-8" style={{ borderTopWidth: '0.5px' }}>
        <motion.div
          className="mx-auto max-w-4xl rounded-xl border border-[var(--blue-border)] bg-[var(--bg-1)] px-8 py-14 text-center shadow-sm"
          style={{ borderWidth: '0.5px' }}
          variants={isMobile ? undefined : getFadeUp(shouldReduce)}
          initial={isMobile ? false : 'hidden'}
          whileInView={isMobile ? undefined : 'show'}
          viewport={isMobile ? undefined : { once: true, margin: '-60px' }}
        >
          <h2 className="mb-4 text-2xl font-semibold text-[var(--text-1)] lg:text-3xl">
            {t('pages.portfolio.bottomTitle')}
          </h2>
          <p className="mb-8 text-lg text-[var(--text-2)]">{t('pages.portfolio.bottomSubtitle')}</p>
          <Link
            to="/contact"
            className="inline-flex rounded-lg bg-[var(--blue)] px-8 py-4 text-base font-medium text-[var(--on-accent)] transition-colors hover:bg-[var(--blue-hover)]"
          >
            {t('pages.portfolio.bottomCta')}
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
