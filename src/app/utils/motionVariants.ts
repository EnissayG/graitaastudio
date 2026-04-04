import type { Variants } from 'motion/react';
import { easeScroll } from '../lib/motionPresets';

const ease = easeScroll as unknown as [number, number, number, number];

export type FadeUpOptions = {
  delay?: number;
  y?: number;
  duration?: number;
};

export function getFadeUp(shouldReduce: boolean, opts?: FadeUpOptions): Variants {
  const delay = opts?.delay ?? 0;
  const y = opts?.y ?? 24;
  const duration = opts?.duration ?? 0.55;
  if (shouldReduce) {
    return {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: delay > 0 ? { delay, duration: 0.01 } : { duration: 0.01 },
      },
    };
  }
  return {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration, ease, delay },
    },
  };
}

export function getStagger(shouldReduce: boolean): Variants {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduce ? 0 : 0.07,
        delayChildren: shouldReduce ? 0 : 0.06,
      },
    },
  };
}

/** Slide in horizontally (e.g. portfolio image / text columns). */
export function getSlideInX(shouldReduce: boolean, from: 'left' | 'right', px: number): Variants {
  const x = from === 'left' ? -px : px;
  if (shouldReduce) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
    };
  }
  return {
    hidden: { opacity: 0, x },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease },
    },
  };
}

export function getScaleXReveal(shouldReduce: boolean, delay = 0): Variants {
  if (shouldReduce) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { delay, duration: 0.01 } },
    };
  }
  return {
    hidden: { opacity: 0, scaleX: 0.5 },
    show: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 0.45, ease, delay },
    },
  };
}

export function getLinkGapHoverVariants(shouldReduce: boolean): Variants {
  if (shouldReduce) {
    return { rest: { gap: '6px' }, hover: { gap: '6px' } };
  }
  return {
    rest: { gap: '6px' },
    hover: { gap: '10px', transition: { duration: 0.2 } },
  };
}

export function getExternalLinkIconVariants(shouldReduce: boolean): Variants {
  if (shouldReduce) {
    return { rest: { rotate: 45 }, hover: { rotate: 45 } };
  }
  return {
    rest: { rotate: 45 },
    hover: { rotate: 0, transition: { duration: 0.2 } },
  };
}
