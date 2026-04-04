import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { easeScroll } from '../lib/motionPresets';

const testimonialKeys = ['t1', 't2', 't3'] as const;

export function Testimonials() {
  const { t } = useTranslation();

  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.07 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeScroll } },
  };

  return (
    <section id="testimonials" className="bg-[var(--bg-2)] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
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
            {t('testimonials.eyebrow')}
          </motion.span>
          <motion.h2
            className="mb-4 text-3xl font-semibold text-foreground lg:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: easeScroll, delay: 0.08 }}
          >
            {t('testimonials.title')}
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: easeScroll, delay: 0.16 }}
          >
            {t('testimonials.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {testimonialKeys.map((key) => {
            const p = `testimonials.${key}`;
            return (
              <motion.div
                key={key}
                variants={cardVariants}
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
