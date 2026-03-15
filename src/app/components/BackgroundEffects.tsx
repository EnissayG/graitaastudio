import { motion } from 'motion/react';

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Un seul blob principal – mouvement lent et discret */}
      <motion.div
        className="absolute w-[min(80vw,600px)] h-[min(80vw,600px)] rounded-full opacity-[0.07] blur-3xl"
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
