import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function HtmlLang() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language?.toLowerCase().startsWith('en') ? 'en' : 'fr';
    document.documentElement.lang = lang;
  }, [i18n.language]);

  return null;
}
