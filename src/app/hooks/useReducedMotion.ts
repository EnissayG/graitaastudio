import { useState, useEffect } from 'react';

function computeReduce(): boolean {
  if (typeof window === 'undefined') return false;
  const isMobile = window.innerWidth < 768;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return isMobile || prefersReduced;
}

export function useReducedMotion() {
  const [shouldReduce, setShouldReduce] = useState(computeReduce);

  useEffect(() => {
    const update = () => setShouldReduce(computeReduce());
    update();
    window.addEventListener('resize', update);
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    mq.addEventListener('change', update);
    return () => {
      window.removeEventListener('resize', update);
      mq.removeEventListener('change', update);
    };
  }, []);

  return shouldReduce;
}
