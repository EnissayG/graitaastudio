import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { motion } from 'motion/react';

const locales = [
  { code: 'fr' as const, label: 'FR' },
  { code: 'en' as const, label: 'EN' },
];

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const active = i18n.language?.toLowerCase().startsWith('en') ? 'en' : 'fr';

  return (
    <div
      className="flex items-center gap-0.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-0.5"
      style={{ borderWidth: '0.5px' }}
      role="group"
      aria-label={t('language.switchLabel')}
    >
      <Languages size={14} className="ml-1.5 shrink-0 text-[var(--text-3)]" aria-hidden />
      {locales.map(({ code, label }) => (
        <motion.button
          key={code}
          type="button"
          onClick={() => void i18n.changeLanguage(code)}
          whileTap={{ scale: 0.95 }}
          className={`min-w-[2.25rem] rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${
            active === code
              ? 'bg-[var(--blue-dim)] text-[var(--blue-text)]'
              : 'text-[var(--text-2)] hover:text-[var(--text-1)]'
          }`}
          aria-pressed={active === code}
          aria-label={code === 'fr' ? t('language.fr') : t('language.en')}
        >
          {label}
        </motion.button>
      ))}
    </div>
  );
}
