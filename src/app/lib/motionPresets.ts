/** Courbe standard scroll-in (sections, cartes) */
export const easeScroll = [0.16, 1, 0.3, 1] as const;

export const fadeUpView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.55, ease: easeScroll },
};

export const headerStagger = {
  eyebrow: { delay: 0 },
  title: { delay: 0.08 },
  subtitle: { delay: 0.16 },
};
