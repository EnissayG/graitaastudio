import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { easeScroll } from '../lib/motionPresets';

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg-2)] px-6 pt-24 pb-16">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: easeScroll }}
      >
        <div className="mb-10">
          <div className="mb-4 text-7xl font-semibold tabular-nums text-[var(--blue)] sm:text-8xl">404</div>
          <h1 className="mb-4 text-3xl font-semibold text-[var(--text-1)] lg:text-4xl">{t('notFound.title')}</h1>
          <p className="text-lg leading-relaxed text-[var(--text-2)]">{t('notFound.description')}</p>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--blue)] px-8 py-4 text-base font-medium text-[var(--on-accent)] transition-colors hover:bg-[var(--blue-hover)]"
          >
            <Home size={20} />
            <span>{t('notFound.home')}</span>
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg-1)] px-8 py-4 text-base font-medium text-[var(--text-1)] transition-colors hover:border-[var(--blue-border)]"
            style={{ borderWidth: '0.5px' }}
          >
            <ArrowLeft size={20} />
            <span>{t('notFound.back')}</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
