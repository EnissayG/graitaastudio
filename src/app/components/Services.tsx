import type { LucideIcon } from 'lucide-react';
import { Smartphone, Zap, Palette, Search, Code2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useAccentColor } from '../hooks/useAccentColor';
import { getFadeUp, getStagger } from '../utils/motionVariants';

type ServiceDef = {
  icon: LucideIcon;
  keyPrefix: 'uiux' | 'dev' | 'responsive' | 'perf' | 'seo' | 'ecommerce';
};

const serviceDefs: ServiceDef[] = [
  { icon: Palette, keyPrefix: 'uiux' },
  { icon: Code2, keyPrefix: 'dev' },
  { icon: Smartphone, keyPrefix: 'responsive' },
  { icon: Zap, keyPrefix: 'perf' },
  { icon: Search, keyPrefix: 'seo' },
  { icon: ShoppingBag, keyPrefix: 'ecommerce' },
];

const cardItemVariants = (shouldReduce: boolean) => getFadeUp(shouldReduce, { y: 20, duration: 0.5 });

function ServiceCard({
  title,
  description,
  features,
  icon: Icon,
  hoverBorder,
  hoverShadow,
  shouldReduce,
}: {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  hoverBorder: string;
  hoverShadow: string;
  shouldReduce: boolean;
}) {
  return (
    <motion.div
      variants={cardItemVariants(shouldReduce)}
      whileHover={
        shouldReduce
          ? {}
          : {
              y: -5,
              borderColor: hoverBorder,
              boxShadow: hoverShadow,
            }
      }
      transition={{ duration: 0.2 }}
      className="rounded-xl border border-[var(--border)] bg-[var(--bg-1)] px-6 py-7"
      style={{ borderWidth: '0.5px' }}
    >
      <motion.div
        className="mb-4 flex size-10 items-center justify-center rounded-[10px] border border-[var(--blue-border)] bg-[var(--blue-dim)] text-[var(--blue)]"
        style={{ borderWidth: '0.5px' }}
        whileHover={
          shouldReduce
            ? {}
            : {
                rotate: [0, -8, 8, 0],
                transition: { duration: 0.4 },
              }
        }
      >
        <Icon size={20} strokeWidth={1.75} />
      </motion.div>
      <h3 className="mb-2 text-base font-semibold text-[var(--text-1)]">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-[var(--text-2)]">{description}</p>
      <ul
        className="space-y-1.5 border-t border-[var(--border)] pt-4"
        style={{ borderTopWidth: '0.5px' }}
      >
        {features.map((f) => (
          <li key={f} className="text-[13px] leading-snug text-[var(--text-2)]">
            <span className="text-[var(--blue-text)]">– </span>
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Services() {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();
  const { accentBorder30, accentShadow08 } = useAccentColor();
  const hoverShadow = `0 12px 32px ${accentShadow08}`;

  return (
    <section id="services" className="bg-[var(--bg-1)] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          variants={getStagger(shouldReduce)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.span
            className="mb-3 block text-sm font-medium uppercase tracking-wide text-[var(--blue)]"
            variants={getFadeUp(shouldReduce, { y: 16 })}
          >
            {t('servicesHome.eyebrow')}
          </motion.span>
          <motion.h2
            className="mb-4 text-3xl font-semibold text-[var(--text-1)] lg:text-4xl"
            variants={getFadeUp(shouldReduce, { y: 16 })}
          >
            {t('servicesHome.title')}
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-[var(--text-2)]"
            variants={getFadeUp(shouldReduce, { y: 16 })}
          >
            {t('servicesHome.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-16 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3"
          variants={getStagger(shouldReduce)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {serviceDefs.map((def) => {
            const p = `servicesHome.${def.keyPrefix}`;
            return (
              <ServiceCard
                key={def.keyPrefix}
                icon={def.icon}
                title={t(`${p}.title`)}
                description={t(`${p}.description`)}
                features={[t(`${p}.f1`), t(`${p}.f2`)]}
                hoverBorder={accentBorder30}
                hoverShadow={hoverShadow}
                shouldReduce={shouldReduce}
              />
            );
          })}
        </motion.div>

        <motion.div
          className="text-center"
          variants={getFadeUp(shouldReduce)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--blue)] px-8 py-3.5 text-base font-medium text-[var(--on-accent)] transition-colors hover:bg-[var(--blue-hover)]"
          >
            {t('servicesHome.cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
