import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useIsMobile } from '../hooks/useIsMobile';
import { getFadeUp, getStagger } from '../utils/motionVariants';

const testimonialKeys = ['t1', 't2', 't3'] as const;

export function Testimonials() {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();
  const isMobile = useIsMobile();
  const cardVariants = getFadeUp(shouldReduce, { y: 20, duration: 0.5 });

  return (
    <section id="testimonials" className="bg-[var(--bg-2)] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          variants={isMobile ? undefined : getStagger(shouldReduce)}
          initial={isMobile ? false : 'hidden'}
          whileInView={isMobile ? undefined : 'show'}
          viewport={isMobile ? undefined : { once: true, margin: '-60px' }}
        >
          <motion.span
            className="mb-3 block text-sm uppercase tracking-wide text-[var(--brand-foreground)]"
            variants={isMobile ? undefined : getFadeUp(shouldReduce, { y: 16 })}
          >
            {t('testimonials.eyebrow')}
          </motion.span>
          <motion.h2
            className="mb-4 text-3xl font-semibold text-foreground lg:text-4xl"
            variants={isMobile ? undefined : getFadeUp(shouldReduce, { y: 16 })}
          >
            {t('testimonials.title')}
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-muted-foreground"
            variants={isMobile ? undefined : getFadeUp(shouldReduce, { y: 16 })}
          >
            {t('testimonials.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={isMobile ? undefined : getStagger(shouldReduce)}
          initial={isMobile ? false : 'hidden'}
          whileInView={isMobile ? undefined : 'show'}
          viewport={isMobile ? undefined : { once: true, margin: '-60px' }}
        >
          {testimonialKeys.map((key) => {
            const p = `testimonials.${key}`;
            return (
              <motion.div
                key={key}
                variants={isMobile ? undefined : cardVariants}
                className="relative rounded-xl border border-[var(--border)] bg-[var(--bg-1)] p-8 transition-shadow duration-300 hover:shadow-lg"
                style={{ borderWidth: '0.5px' }}
              >
                <div className="absolute right-6 top-6 text-[var(--blue-dim)]">
                  <Quote size={44} fill="currentColor" />
                </div>

                <div className="relative z-10 mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[var(--blue)] text-[var(--blue)]" />
                  ))}
                </div>

                <p className="relative z-10 mb-8 leading-relaxed text-[var(--text-2)]">
                  &ldquo;{t(`${p}.content`)}&rdquo;
                </p>

                <div className="relative z-10">
                  <div className="text-lg text-[var(--text-1)]">{t(`${p}.name`)}</div>
                  <div className="text-sm text-[var(--text-3)]">{t(`${p}.role`)}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
