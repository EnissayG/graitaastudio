import { motion } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function BackgroundEffects() {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return (
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute h-[min(80vw,600px)] w-[min(80vw,600px)] rounded-full opacity-[0.07] blur-3xl"
          style={{
            background: 'radial-gradient(circle, var(--brand) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute h-[min(80vw,600px)] w-[min(80vw,600px)] rounded-full opacity-[0.07] blur-3xl"
        style={{
          background: 'radial-gradient(circle, var(--brand) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
        }}
        initial={{ x: '-50%', y: '-50%' }}
        animate={{
          x: ['-50%', '-48%', '-50%'],
          y: ['-50%', '-52%', '-50%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
