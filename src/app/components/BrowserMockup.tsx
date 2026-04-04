import { Lock, RotateCw } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useAccentColor } from '../hooks/useAccentColor';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useIsMobile } from '../hooks/useIsMobile';

export function BrowserMockup() {
  const { t } = useTranslation();
  const { mockRing, mockHoverShadow, accentFade15 } = useAccentColor();
  const shouldReduce = useReducedMotion();
  const isMobile = useIsMobile();
  const boxRest = `0 24px 48px rgba(0,0,0,0.08), 0 0 0 0.5px ${mockRing}`;
  const boxHover = `0 32px 64px ${mockHoverShadow}`;

  return (
    <div className={shouldReduce ? 'mx-auto w-full max-w-[400px]' : 'w-full [perspective:1000px]'}>
      <motion.div
        className="relative w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-2)]"
        style={{
          borderWidth: '0.5px',
          transformStyle: shouldReduce ? undefined : 'preserve-3d',
          boxShadow: boxRest,
          transform: shouldReduce ? 'none' : undefined,
        }}
        initial={shouldReduce ? { rotateY: 0, rotateX: 0 } : { rotateY: -4, rotateX: 2 }}
        whileHover={
          shouldReduce || isMobile
            ? {}
            : {
                rotateY: 0,
                rotateX: 0,
                boxShadow: boxHover,
                transition: { duration: 0.4, ease: 'easeOut' },
              }
        }
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div
          className="flex items-center gap-2.5 border-b border-[var(--border)] bg-[var(--bg-3)] px-4 py-2.5"
          style={{ borderBottomWidth: '0.5px', padding: '10px 16px', gap: '10px' }}
        >
          <div className="flex gap-2">
            <span className="size-[9px] rounded-full bg-[#ff5f57]" />
            <span className="size-[9px] rounded-full bg-[#ffbd2e]" />
            <span className="size-[9px] rounded-full bg-[#28ca42]" />
          </div>
          <div
            className="flex flex-1 items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--blue-dim)] px-3 py-1 font-mono text-[11px] text-[var(--text-3)]"
            style={{ borderWidth: '0.5px', padding: '5px 12px', borderRadius: '6px' }}
          >
            <Lock size={10} className="shrink-0 text-[#22c55e]" strokeWidth={2} />
            <span className="truncate">{t('browserMockup.url')}</span>
          </div>
          <RotateCw size={12} className="shrink-0 text-[var(--text-3)]" strokeWidth={2} />
        </div>

        <div className="relative p-4" style={{ padding: '16px' }}>
          <div className="mb-3.5 flex items-center justify-between" style={{ marginBottom: '14px' }}>
            <div
              className="h-2 w-12 rounded-sm"
              style={{
                width: 48,
                height: 8,
                borderRadius: 2,
                background: 'linear-gradient(90deg, var(--text-1) 60%, var(--blue) 60%)',
              }}
            />
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="rounded-sm bg-[var(--border)]"
                  style={{ width: 20, height: 5, borderRadius: 2 }}
                />
              ))}
            </div>
            <span className="rounded bg-[var(--blue)]" style={{ width: 36, height: 16, borderRadius: 4 }} />
          </div>

          <div className="flex flex-row gap-3" style={{ gap: '12px' }}>
            <div className="min-w-0 flex-1">
              <span
                className="mb-2.5 block rounded-sm"
                style={{ width: 52, height: 6, borderRadius: 3, marginBottom: '10px', backgroundColor: accentFade15 }}
              />
              <span
                className="mb-1.5 block rounded-sm bg-[var(--text-1)]/85"
                style={{ width: '75%', height: 10, borderRadius: 2, marginBottom: '6px' }}
              />
              <span
                className="mb-3 block rounded-sm bg-[var(--blue)]/90"
                style={{ width: '55%', height: 10, borderRadius: 2, marginBottom: '12px' }}
              />
              <div className="flex flex-col gap-1">
                <span className="block rounded-sm bg-[var(--border)]" style={{ width: '100%', height: 5, borderRadius: 2 }} />
                <span className="block rounded-sm bg-[var(--border)]" style={{ width: '70%', height: 5, borderRadius: 2 }} />
              </div>
              <div className="mt-2.5 flex gap-1.5" style={{ marginTop: '10px', gap: '6px' }}>
                <span className="rounded bg-[var(--blue)]" style={{ width: 60, height: 18, borderRadius: 4 }} />
                <span
                  className="rounded border border-[var(--border)] bg-transparent"
                  style={{ width: 48, height: 18, borderRadius: 4, borderWidth: '0.5px' }}
                />
              </div>
            </div>

            <div
              className="relative shrink-0 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-3)]"
              style={{ width: 110, height: 78, borderWidth: '0.5px', borderRadius: 8 }}
            >
              <div className="absolute left-0 top-0 h-1/2 w-full bg-[var(--blue-dim)]" />
              <div
                className="absolute inset-0 m-auto h-[40%] w-[60%] rounded bg-[var(--blue)]/25"
                style={{ borderRadius: 4 }}
              />
            </div>
          </div>

          <div className="my-3 border-t border-[var(--border)]" style={{ margin: '12px 0', borderTopWidth: '0.5px' }} />

          <div className="grid grid-cols-3 gap-1.5" style={{ gap: '6px' }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-2"
                style={{ borderWidth: '0.5px', borderRadius: 6, padding: '8px' }}
              >
                <span
                  className="mb-1.5 block rounded"
                  style={{ width: 14, height: 14, borderRadius: 4, marginBottom: '6px', backgroundColor: accentFade15 }}
                />
                <span
                  className="mb-1 block rounded-sm bg-[var(--text-1)]/50"
                  style={{ width: '55%', height: 5, borderRadius: 2 }}
                />
                <span
                  className="mb-1 block rounded-sm bg-[var(--border)]"
                  style={{ width: '90%', height: 4, borderRadius: 2 }}
                />
                <span className="block rounded-sm bg-[var(--border)]" style={{ width: '65%', height: 4, borderRadius: 2 }} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
