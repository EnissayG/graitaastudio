import { Code, Palette, Smartphone, Zap, Search, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";

export function ServicesPage() {
  const services = [
    {
      icon: <Palette size={32} />,
      title: "Design UI/UX",
      description: "Création d'interfaces modernes et intuitives qui captivent vos utilisateurs et renforcent votre identité de marque.",
      features: ["Interface sur mesure", "Prototypage interactif", "Design responsive", "Guide de style"]
    },
    {
      icon: <Code size={32} />,
      title: "Développement Web",
      description: "Développement de sites web performants et évolutifs avec les technologies les plus récentes.",
      features: ["React & Next.js", "Code optimisé", "Performance maximale", "Maintenance"]
    },
    {
      icon: <Smartphone size={32} />,
      title: "Responsive Design",
      description: "Des sites qui s'adaptent parfaitement à tous les appareils, du mobile au desktop.",
      features: ["Mobile-first", "Tablette optimisée", "Desktop professionnel", "Tests multi-appareils"]
    },
    {
      icon: <Zap size={32} />,
      title: "Optimisation Performance",
      description: "Sites ultra-rapides pour une meilleure expérience utilisateur et un meilleur référencement.",
      features: ["Temps de chargement réduit", "SEO optimisé", "Compression d'assets", "Cache intelligent"]
    },
    {
      icon: <Search size={32} />,
      title: "SEO & Marketing",
      description: "Stratégies de référencement pour améliorer votre visibilité et attirer plus de clients.",
      features: ["Audit SEO complet", "Mots-clés ciblés", "Google Analytics", "Stratégie de contenu"]
    },
    {
      icon: <ShoppingCart size={32} />,
      title: "E-Commerce",
      description: "Création de boutiques en ligne complètes pour vendre vos produits efficacement.",
      features: ["Catalogue produits", "Paiement sécurisé", "Gestion des stocks", "Tableau de bord"]
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-8 bg-muted/40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[var(--brand-foreground)] tracking-wide uppercase text-sm mb-3 block">
              Nos services
            </span>
            <h1 className="text-3xl lg:text-4xl text-foreground font-semibold mb-6">
              Solutions digitales sur-mesure
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Du concept à la mise en ligne, nous vous accompagnons à chaque étape pour créer
              un site web qui reflète votre vision et atteint vos objectifs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 rounded-2xl border border-border hover:border-[var(--brand-muted)] hover:shadow-lg transition-all duration-200"
              >
                <div className="w-16 h-16 bg-[var(--brand-muted)] text-[var(--brand)] rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl text-foreground font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-foreground">
                      <svg className="w-5 h-5 text-[var(--brand)] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-[var(--brand)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl text-white font-semibold mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Discutons de vos besoins et créons ensemble quelque chose d'exceptionnel.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--brand)] px-8 py-4 rounded-xl hover:bg-white/95 transition-colors text-base font-medium"
          >
            Contactez-nous
          </a>
        </div>
      </section>
    </div>
  );
}