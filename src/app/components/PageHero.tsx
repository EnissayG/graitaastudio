import { motion } from 'motion/react';
import { easeScroll } from '../lib/motionPresets';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Réduit le padding vertical du bloc hero */
  compact?: boolean;
  /** Ligne décorative 40×2px sous l’eyebrow */
  eyebrowAccent?: boolean;
};

export function PageHero({ eyebrow, title, subtitle, compact, eyebrowAccent }: PageHeroProps) {
  return (
    <section
      className={`border-b border-[var(--border)] bg-[var(--bg-2)] px-6 lg:px-8 ${compact ? 'py-10 lg:py-12' : 'py-16 lg:py-20'}`}
      style={{ borderBottomWidth: '0.5px' }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.span
          className={`block text-sm font-medium uppercase tracking-wide text-[var(--blue-text)] ${eyebrowAccent ? 'mb-0' : 'mb-3'}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeScroll }}
        >
          {eyebrow}
        </motion.span>
        {eyebrowAccent ? (
          <motion.div
            className="mx-auto bg-[var(--blue)]"
            style={{ width: 40, height: 2, borderRadius: 2, marginTop: 8 }}
            initial={{ opacity: 0, scaleX: 0.5 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.45, ease: easeScroll, delay: 0.05 }}
          />
        ) : null}
        <motion.h1
          className={`text-3xl font-semibold tracking-tight text-[var(--text-1)] lg:text-4xl ${eyebrowAccent || compact ? 'mb-4' : 'mb-5'} ${eyebrowAccent ? 'mt-4' : ''}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeScroll, delay: 0.08 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg leading-relaxed text-[var(--text-2)]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeScroll, delay: 0.16 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
