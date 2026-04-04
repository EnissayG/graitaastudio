import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useAccentColor } from '../hooks/useAccentColor';
import {
  getExternalLinkIconVariants,
  getFadeUp,
  getLinkGapHoverVariants,
  getSlideInX,
  getStagger,
} from '../utils/motionVariants';

const MotionLink = motion(Link);

function projectTags(t: (k: string, o?: object) => unknown, id: number): string[] {
  const raw = t(`projects.byId.${id}.tags`, { returnObjects: true });
  return Array.isArray(raw) ? (raw as string[]) : [];
}

export function Portfolio() {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();
  const { accentOverlay08 } = useAccentColor();

  const linkGap = getLinkGapHoverVariants(shouldReduce);
  const iconVar = getExternalLinkIconVariants(shouldReduce);

  return (
    <section id="portfolio" className="bg-[var(--bg-2)] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-14 text-center"
          variants={getStagger(shouldReduce)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.span
            className="mb-2 block text-sm font-medium uppercase tracking-wide text-[var(--blue-text)]"
            variants={getFadeUp(shouldReduce, { y: 16 })}
          >
            {t('portfolioSection.eyebrow')}
          </motion.span>
          <motion.h2
            className="mb-2 text-2xl font-semibold text-[var(--text-1)] lg:text-3xl"
            variants={getFadeUp(shouldReduce, { y: 16 })}
          >
            {t('portfolioSection.title')}
          </motion.h2>
          <motion.p
            className="mx-auto max-w-xl text-base text-[var(--text-2)]"
            variants={getFadeUp(shouldReduce, { y: 16 })}
          >
            {t('portfolioSection.subtitle')}
          </motion.p>
        </motion.div>

        <div className="mb-12 space-y-16 lg:space-y-20">
          {projects.map((project, index) => {
            const href = project.url || '/portfolio';
            const isExternal = !!project.url;
            const imageLeft = index % 2 === 0;
            const base = `projects.byId.${project.id}`;
            const tags = projectTags(t, project.id);

            const imageBlock = (
              <motion.div
                className="relative flex-1"
                variants={getSlideInX(shouldReduce, imageLeft ? 'left' : 'right', 28)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
              >
                <motion.div
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[var(--border)]"
                  style={{ borderWidth: '0.5px' }}
                  initial="rest"
                  whileHover={shouldReduce ? 'rest' : 'hover'}
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
                className="flex flex-1 flex-col justify-center gap-3"
                variants={getSlideInX(shouldReduce, imageLeft ? 'right' : 'left', 20)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
              >
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded border border-[var(--blue-border)] bg-[var(--blue-dim)] px-3 py-1 text-[11px] font-medium uppercase tracking-[1.5px] text-[var(--blue-text)]"
                      style={{ borderWidth: '0.5px', borderRadius: '4px' }}
                    >
                      <span
                        className="mr-[5px] inline-block shrink-0 rounded-full bg-[var(--blue-text)]"
                        style={{ width: 5, height: 5 }}
                        aria-hidden
                      />
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-medium uppercase tracking-wide text-[var(--text-3)]">
                  {t(`${base}.category`)}
                </span>
                <h3 className="text-xl font-semibold text-[var(--text-1)] lg:text-2xl">{t(`${base}.title`)}</h3>
                <p className="text-[15px] leading-relaxed text-[var(--text-2)]">{t(`${base}.longDescription`)}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium text-[var(--text-1)]">{t('portfolioSection.challenge')}</p>
                    <p className="text-[var(--text-2)]">{t(`${base}.challenges`)}</p>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--text-1)]">{t('portfolioSection.solution')}</p>
                    <p className="text-[var(--text-2)]">{t(`${base}.solution`)}</p>
                  </div>
                </div>
                {isExternal ? (
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center text-sm font-medium text-[var(--blue-text)]"
                    initial="rest"
                    whileHover={shouldReduce ? 'rest' : 'hover'}
                    variants={linkGap}
                  >
                    {t('portfolioSection.viewSite')}
                    <motion.span className="inline-flex" variants={iconVar}>
                      <ExternalLink size={14} className="shrink-0" />
                    </motion.span>
                  </motion.a>
                ) : (
                  <MotionLink
                    to={href}
                    className="mt-1 inline-flex items-center text-sm font-medium text-[var(--blue-text)]"
                    initial="rest"
                    whileHover={shouldReduce ? 'rest' : 'hover'}
                    variants={linkGap}
                  >
                    {t('portfolioSection.viewProject')}
                    <motion.span className="inline-flex" variants={iconVar}>
                      <ExternalLink size={14} className="shrink-0" />
                    </motion.span>
                  </MotionLink>
                )}
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

        <motion.div
          className="text-center"
          variants={getFadeUp(shouldReduce)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--blue)] px-8 py-3.5 text-base font-medium text-[var(--on-accent)] transition-colors hover:bg-[var(--blue-hover)]"
          >
            {t('portfolioSection.cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
