import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

type ThemeToggleProps = {
  isDark: boolean;
  onToggle: () => void;
};

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  const { t } = useTranslation();

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileTap={{ scale: 0.92 }}
      className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-2)] transition-colors hover:bg-[var(--blue-dim)]"
      style={{ borderWidth: '0.5px' }}
      aria-label={isDark ? t('theme.light') : t('theme.dark')}
    >
      {isDark ? <Moon size={16} strokeWidth={1.75} /> : <Sun size={16} strokeWidth={1.75} />}
    </motion.button>
  );
}
