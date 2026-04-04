import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';

type ShimmerCTAProps = {
  children: ReactNode;
  className?: string;
  to?: string;
  href?: string;
  onClick?: () => void;
};

export function ShimmerCTA({ children, className = '', to, href, onClick }: ShimmerCTAProps) {
  const shouldReduce = useReducedMotion();

  const inner = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      <motion.span
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
        initial={{ x: shouldReduce ? '0%' : '-100%' }}
        whileHover={shouldReduce ? undefined : { x: '100%' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)',
          width: '55%',
          height: '100%',
          skewX: '-14deg',
        }}
      />
    </>
  );

  const base = `relative inline-flex overflow-hidden bg-[var(--blue)] text-[var(--on-accent)] transition-colors hover:bg-[var(--blue-hover)] ${className}`;

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={base}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={base}>
        {inner}
      </a>
    );
  }
  return <span className={base}>{inner}</span>;
}
