import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Smartphone, Zap, Palette, Search, Code2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { easeScroll } from '../lib/motionPresets';
import { useAccentColor } from '../hooks/useAccentColor';

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

function ServiceCard({
  title,
  description,
  features,
  icon: Icon,
  hoverBorder,
  hoverShadow,
}: {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  hoverBorder: string;
  hoverShadow: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      whileHover={{
        y: -5,
        borderColor: hoverBorder,
        boxShadow: hoverShadow,
      }}
      transition={{ duration: 0.2 }}
      className="rounded-xl border border-[var(--border)] bg-[var(--bg-1)] px-6 py-7"
      style={{ borderWidth: '0.5px' }}
    >
      <motion.div
        className="mb-4 flex size-10 items-center justify-center rounded-[10px] border border-[var(--blue-border)] bg-[var(--blue-dim)] text-[var(--blue)]"
        style={{ borderWidth: '0.5px' }}
        animate={hovered ? { rotate: [0, -8, 8, 0] } : { rotate: 0 }}
        transition={{ duration: 0.4 }}
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
  const { accentBorder30, accentShadow08 } = useAccentColor();
  const hoverShadow = `0 12px 32px ${accentShadow08}`;

  return (
    <section id="services" className="bg-[var(--bg-1)] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: easeScroll }}
        >
          <motion.span
            className="mb-3 block text-sm font-medium uppercase tracking-wide text-[var(--blue)]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: easeScroll, delay: 0 }}
          >
            {t('servicesHome.eyebrow')}
          </motion.span>
          <motion.h2
            className="mb-4 text-3xl font-semibold text-[var(--text-1)] lg:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: easeScroll, delay: 0.08 }}
          >
            {t('servicesHome.title')}
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-[var(--text-2)]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: easeScroll, delay: 0.16 }}
          >
            {t('servicesHome.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-16 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
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
              />
            );
          })}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: easeScroll }}
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
