import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useAnimatedStat } from '../hooks/useAnimatedStat';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { getFadeUp, getStagger } from '../utils/motionVariants';

export const statsBarConfig = [
  { target: 10, suffix: '+', labelKey: 'statsBar.projects' },
  { target: 10, suffix: '+', labelKey: 'statsBar.clients' },
  { target: 4, suffix: '+', labelKey: 'statsBar.years' },
  { target: 100, suffix: '%', labelKey: 'statsBar.onTime' },
] as const;

export function StatCounter({
  target,
  suffix,
  label,
  itemVariants,
}: {
  target: number;
  suffix: string;
  label: string;
  itemVariants: ReturnType<typeof getFadeUp>;
}) {
  const { ref, display } = useAnimatedStat(target);
  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="rounded-xl border border-[var(--border)] bg-[var(--bg-1)] px-4 py-6 text-center shadow-sm sm:px-5 sm:py-7"
      style={{ borderWidth: '0.5px' }}
    >
      <div className="text-2xl font-bold tabular-nums text-[var(--text-1)] sm:text-3xl lg:text-4xl">
        {display}
        <span className="text-[var(--blue-text)]">{suffix}</span>
      </div>
      <div className="mt-2 text-[10px] font-medium uppercase leading-snug tracking-wide text-[var(--text-3)] sm:text-[11px]">
        {label}
      </div>
    </motion.div>
  );
}

export function StatsBar() {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();
  const itemVariants = getFadeUp(shouldReduce, { y: 16, duration: 0.5 });

  return (
    <section
      className="border-[var(--stats-band-border)] bg-[var(--stats-band-bg)] px-6 py-10 lg:px-8 lg:py-12"
      style={{ borderTopWidth: '0.5px', borderBottomWidth: '0.5px' }}
    >
      <motion.div
        className="mx-auto max-w-6xl"
        variants={getFadeUp(shouldReduce, { y: 20 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        <motion.div
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
          variants={getStagger(shouldReduce)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {statsBarConfig.map((s) => (
            <StatCounter
              key={s.labelKey}
              target={s.target}
              suffix={s.suffix}
              label={t(s.labelKey)}
              itemVariants={itemVariants}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
