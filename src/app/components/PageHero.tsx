import { motion } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { getFadeUp, getScaleXReveal } from '../utils/motionVariants';

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
  const shouldReduce = useReducedMotion();

  return (
    <section
      className={`border-b border-[var(--border)] bg-[var(--bg-2)] px-6 lg:px-8 ${compact ? 'py-10 lg:py-12' : 'py-16 lg:py-20'}`}
      style={{ borderBottomWidth: '0.5px' }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.span
          className={`block text-sm font-medium uppercase tracking-wide text-[var(--blue-text)] ${eyebrowAccent ? 'mb-0' : 'mb-3'}`}
          variants={getFadeUp(shouldReduce, { y: 16 })}
          initial="hidden"
          animate="show"
        >
          {eyebrow}
        </motion.span>
        {eyebrowAccent ? (
          <motion.div
            className="mx-auto bg-[var(--blue)]"
            style={{ width: 40, height: 2, borderRadius: 2, marginTop: 8 }}
            variants={getScaleXReveal(shouldReduce, 0.05)}
            initial="hidden"
            animate="show"
          />
        ) : null}
        <motion.h1
          className={`text-3xl font-semibold tracking-tight text-[var(--text-1)] lg:text-4xl ${eyebrowAccent || compact ? 'mb-4' : 'mb-5'} ${eyebrowAccent ? 'mt-4' : ''}`}
          variants={getFadeUp(shouldReduce, { y: 16, delay: 0.08 })}
          initial="hidden"
          animate="show"
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg leading-relaxed text-[var(--text-2)]"
          variants={getFadeUp(shouldReduce, { y: 16, delay: 0.16 })}
          initial="hidden"
          animate="show"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
