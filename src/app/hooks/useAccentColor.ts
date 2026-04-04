import { useEffect, useState } from 'react';

function readIsDark(): boolean {
  if (typeof document === 'undefined') return false;
  return document.documentElement.dataset.theme === 'dark';
}

/** Couleurs d’accent pour props Motion / styles inline (alignées sur index.css). */
export function useAccentColor() {
  const [isDark, setIsDark] = useState(readIsDark);

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(root.dataset.theme === 'dark');
    });
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return {
    isDark,
    accent: isDark ? '#60a5fa' : '#2563EB',
    accentHover: isDark ? '#93c5fd' : '#1d4ed8',
    accentDim: isDark ? 'rgba(96,165,250,0.12)' : 'rgba(37,99,235,0.1)',
    accentBorder: isDark ? 'rgba(96,165,250,0.2)' : 'rgba(37,99,235,0.25)',
    accentBorder30: isDark ? 'rgba(96,165,250,0.25)' : 'rgba(37,99,235,0.3)',
    accentMuted08: isDark ? 'rgba(96,165,250,0.1)' : 'rgba(37,99,235,0.08)',
    accentMuted10: isDark ? 'rgba(96,165,250,0.1)' : 'rgba(37,99,235,0.1)',
    accentLine20: isDark ? 'rgba(96,165,250,0.2)' : 'rgba(37,99,235,0.2)',
    accentFade15: isDark ? 'rgba(96,165,250,0.15)' : 'rgba(37,99,235,0.15)',
    accentNum20: isDark ? 'rgba(96,165,250,0.2)' : 'rgba(37,99,235,0.2)',
    accentShadow06: isDark ? 'rgba(96,165,250,0.06)' : 'rgba(37,99,235,0.06)',
    accentShadow08: isDark ? 'rgba(96,165,250,0.08)' : 'rgba(37,99,235,0.08)',
    accentOverlay08: isDark ? 'rgba(96,165,250,0.08)' : 'rgba(37,99,235,0.08)',
    accentGradient08_03: isDark
      ? 'linear-gradient(135deg, rgba(96,165,250,0.08) 0%, rgba(96,165,250,0.03) 100%)'
      : 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0.03) 100%)',
    accentGradientLine: isDark
      ? 'linear-gradient(90deg, #60a5fa, rgba(96,165,250,0.2))'
      : 'linear-gradient(90deg, #2563EB, rgba(37,99,235,0.2))',
    mockRing: isDark ? 'rgba(96,165,250,0.1)' : 'rgba(37,99,235,0.1)',
    mockHoverShadow: isDark ? 'rgba(96,165,250,0.14)' : 'rgba(37,99,235,0.12)',
    heroOrbSmall: isDark
      ? 'radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 68%)'
      : 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 68%)',
    faqOpenBg: isDark ? 'rgba(96,165,250,0.06)' : 'rgba(37,99,235,0.03)',
  };
}
