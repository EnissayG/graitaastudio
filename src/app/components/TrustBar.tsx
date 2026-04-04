import { Shield, Clock, Award, MapPin, HeartHandshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const items = [
  { icon: Shield, labelKey: 'trustBar.privacy' },
  { icon: Clock, labelKey: 'trustBar.response' },
  { icon: Award, labelKey: 'trustBar.delivery' },
  { icon: MapPin, labelKey: 'trustBar.based' },
  { icon: HeartHandshake, labelKey: 'trustBar.support' },
] as const;

export function TrustBar() {
  const { t } = useTranslation();

  return (
    <section
      className="border-t border-[var(--border)] bg-[var(--bg-2)] px-[56px] py-6"
      style={{ borderTopWidth: '0.5px' }}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {items.map(({ icon: Icon, labelKey }) => (
          <div key={labelKey} className="flex items-center gap-1.5">
            <Icon size={14} className="shrink-0 text-[var(--blue-text)]" strokeWidth={2} aria-hidden />
            <span className="text-[13px] text-[var(--text-3)]">{t(labelKey)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
