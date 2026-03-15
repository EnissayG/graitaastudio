import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Mirai Ramen",
      category: "Site vitrine · Restauration",
      description: "Un site web moderne et captivant pour un concept innovant de distributeur automatique de ramen. Design épuré qui met en valeur l'expérience culinaire japonaise avec une interface intuitive et des visuels attrayants.",
      image: "https://images.unsplash.com/photo-1644073758253-0e7e4b9003da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYW1lbiUyMGJvd2wlMjBqYXBhbmVzZSUyMG1vZGVybnxlbnwxfHx8fDE3NzM1NTExOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Site vitrine", "Restauration"],
      challenges: "Créer une expérience utilisateur qui reflète la modernité du concept tout en respectant l'esthétique japonaise traditionnelle.",
      solution: "Design minimaliste avec palette de couleurs inspirée du Japon, animations subtiles et navigation intuitive.",
    },
    {
      id: 2,
      title: "Cofandi",
      category: "Site vitrine · Café & vente",
      description: "Site web pour un distributeur automatique intelligent de café. Interface moderne qui facilite la découverte des produits et présente le concept de façon claire et attractive.",
      image: "https://images.unsplash.com/photo-1730916335055-88fd6e6a9771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB2ZW5kaW5nJTIwbWFjaGluZXxlbnwxfHx8fDE3NzM1NTExOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Site vitrine", "Café & vente"],
      challenges: "Présenter le produit de manière accessible et attractive pour un large public.",
      solution: "Design épuré centré sur l'expérience et les visuels, avec des informations bien structurées.",
    },
    {
      id: 3,
      title: "QG Quartier Général Barber Shop",
      category: "Site vitrine · Services",
      description: "Site web professionnel et élégant pour un salon de coiffure moderne à Montréal. Design sophistiqué qui reflète l'atmosphère premium du salon, avec galerie et prise de rendez-vous en ligne.",
      image: "https://images.unsplash.com/photo-1759142016096-a9d1a5ebcc09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwY2hhaXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczNTUxMTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Site vitrine", "Services"],
      challenges: "Créer une présence en ligne qui attire une clientèle locale et facilite les réservations.",
      solution: "Site élégant avec galerie photos, prise de rendez-vous simple et informations de localisation claires.",
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
              Portfolio
            </span>
            <h1 className="text-3xl lg:text-4xl text-foreground font-semibold mb-6">
              Nos réalisations
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Découvrez les projets web que nous avons conçus et développés avec passion pour nos clients.
              Chaque projet est une opportunité de créer quelque chose d'exceptionnel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <span className="text-[var(--brand-foreground)] text-sm tracking-wide uppercase">
                    {project.category}
                  </span>
                  <h2 className="text-2xl lg:text-3xl text-foreground font-semibold mt-3 mb-4">
                    {project.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[var(--brand-muted)] text-[var(--brand-foreground)] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Défi</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Solution</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* View Project Link */}
                <button className="inline-flex items-center gap-2 text-[var(--brand)] hover:text-[var(--brand-hover)] transition-colors group">
                  <span>Voir le projet</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl text-foreground font-semibold mb-4">
            Vous Avez Un Projet En Tête ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Travaillons ensemble pour créer quelque chose d'extraordinaire.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--brand)] text-white px-8 py-4 rounded-xl hover:bg-[var(--brand-hover)] transition-colors text-base font-medium"
          >
            Démarrer un projet
          </a>
        </div>
      </section>
    </div>
  );
}