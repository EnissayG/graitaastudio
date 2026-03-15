import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Gauche : contenu */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left"
          >
            <motion.span
              variants={item}
              className="inline-flex text-[var(--brand-foreground)] bg-[var(--brand-muted)] px-4 py-2 rounded-full text-sm font-medium tracking-wide mb-6"
            >
              Conception Web Professionnelle
            </motion.span>

            <motion.h1
              variants={item}
              className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl text-foreground font-semibold tracking-tight leading-[1.15] mb-6"
            >
              Créons votre{' '}
              <span className="text-[var(--brand)]">présence digitale</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8"
            >
              Des sites web modernes, élégants et performants qui transforment vos
              visiteurs en clients. Design sur-mesure et expérience utilisateur
              exceptionnelle.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-[var(--brand)] text-white px-7 py-3.5 rounded-xl font-medium text-base hover:bg-[var(--brand-hover)] transition-colors duration-200"
              >
                Démarrer un projet
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-medium text-base border-2 border-border text-foreground hover:bg-muted transition-colors duration-200"
              >
                Voir nos réalisations
              </Link>
            </motion.div>
          </motion.div>

          {/* Droite : image */}
          <motion.div
            variants={item}
            initial="hidden"
            animate="visible"
            className="relative order-first lg:order-none"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-muted">
              <ImageWithFallback
                src={HERO_IMAGE}
                alt="Espace de travail web professionnel"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
