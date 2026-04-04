import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useMotionValueEvent, useSpring } from 'motion/react';

export type AnimatedStatSpringOptions = { stiffness?: number; damping?: number };

export function useAnimatedStat(target: number, springOpts?: AnimatedStatSpringOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, {
    stiffness: springOpts?.stiffness ?? 50,
    damping: springOpts?.damping ?? 20,
  });
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(spring, 'change', (v) => {
    setDisplay(Math.round(v));
  });

  useEffect(() => {
    if (inView) {
      mv.set(target);
    }
  }, [inView, target, mv]);

  return { ref, display };
}
