import { CheckCircle, Users, Award, Lightbulb, Target, Heart, Zap, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    name: "Mirai Ramen",
    description: "Distributeurs de ramen 24/7 à Montréal",
    url: "https://mirairamen.netlify.app/",
    logo: "/logo-mirai-ramen.png",
    logoAlt: "Mirai Ramen",
    invertOnLight: false,
  },
  {
    name: "Cofandi Service",
    description: "Services Cofandi",
    url: "https://cofandiservice.netlify.app/",
    logo: "/logo-cofandi.png",
    logoAlt: "Cofandi",
    invertOnLight: true,
  },
  {
    name: "QG Barbier",
    description: "Le Quartier Général",
    url: "",
    logo: "/qg-barbier-quartier-general.png",
    logoAlt: "QG Barbier - Le Quartier Général",
    invertOnLight: false,
    imageCover: true,
  },
];

export function AboutPage() {
  const stats = [
    { number: "10+", label: "Projets réalisés" },
    { number: "10+", label: "Clients satisfaits" },
    { number: "4+", label: "Années d'expérience" },
    { number: "100%", label: "Projets livrés" },
  ];

  const values = [
    {
      icon: <Lightbulb size={28} />,
      title: "Créativité",
      description: "Nous apportons des solutions innovantes et uniques à chaque projet, en repoussant constamment les limites du design et de la technologie.",
    },
    {
      icon: <Users size={28} />,
      title: "Collaboration",
      description: "Une approche collaborative transparente où votre vision devient notre mission. Nous travaillons main dans la main avec vous.",
    },
    {
      icon: <Award size={28} />,
      title: "Excellence",
      description: "Un engagement inébranlable envers la qualité, les meilleures pratiques et les standards les plus élevés de l'industrie.",
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Fiabilité",
      description: "Des délais respectés, des promesses tenues et des résultats garantis. Votre succès est notre priorité absolue.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Découverte",
      description: "Nous prenons le temps de comprendre votre entreprise, vos objectifs et votre vision pour créer une stratégie sur mesure.",
    },
    {
      number: "02",
      title: "Design",
      description: "Création de maquettes et prototypes interactifs qui donnent vie à vos idées avec une attention particulière aux détails.",
    },
    {
      number: "03",
      title: "Développement",
      description: "Transformation du design en un site web performant, optimisé et parfaitement fonctionnel avec les meilleures technologies.",
    },
    {
      number: "04",
      title: "Lancement",
      description: "Déploiement soigné de votre site avec tests rigoureux, formation et support pour assurer un lancement réussi.",
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
              À propos
            </span>
            <h1 className="text-3xl lg:text-4xl text-foreground font-semibold mb-6">
              Design web depuis Montréal
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Graitaa Studio est un studio créatif spécialisé en design et développement web.
              Nous aidons les entreprises de Montréal et d'ailleurs à se démarquer avec des sites web
              modernes qui génèrent des résultats concrets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl text-[var(--brand)] font-semibold mb-2 tabular-nums">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Target className="w-10 h-10 text-[var(--brand)] mx-auto mb-4" />
            <h2 className="text-2xl lg:text-3xl text-foreground font-semibold mb-4">
              Notre mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chez Graitaa Studio, notre mission est de donner vie à vos idées en créant des sites web
              qui non seulement sont visuellement époustouflants, mais qui génèrent aussi des résultats concrets.
              Nous croyons que chaque entreprise mérite une présence en ligne qui reflète son unicité et
              qui engage ses clients de manière significative.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl text-foreground font-semibold mb-4">
              Nos valeurs
            </h2>
            <p className="text-lg text-muted-foreground">
              Les principes qui guident notre travail quotidien
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 rounded-2xl border border-border hover:border-[var(--brand-muted)] hover:shadow-lg transition-all duration-200"
              >
                <div className="w-14 h-14 bg-[var(--brand-muted)] text-[var(--brand)] rounded-xl flex items-center justify-center mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl text-foreground font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl text-foreground font-semibold mb-4">
              Notre processus
            </h2>
            <p className="text-lg text-muted-foreground">
              Une approche structurée pour garantir votre succès
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className=""
              >
                <div className="text-5xl text-[var(--brand-muted)] font-semibold mb-3 tabular-nums">
                  {step.number}
                </div>
                <h3 className="text-xl text-foreground font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations / Projets */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl text-foreground font-semibold mb-4">
              Réalisations
            </h2>
            <p className="text-lg text-muted-foreground">
              Quelques projets que nous avons livrés (liens temporaires)
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => {
              const Wrapper = project.url ? motion.a : motion.div;
              const wrapperProps = project.url
                ? { href: project.url, target: "_blank" as const, rel: "noopener noreferrer" }
                : {};
              return (
                <Wrapper
                  key={project.name}
                  {...wrapperProps}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col items-center gap-4 p-8 rounded-2xl border border-border bg-background hover:border-[var(--brand-muted)] hover:shadow-lg transition-all duration-200"
                >
                  <div
                    className={
                      project.imageCover
                        ? "h-28 w-full rounded-xl overflow-hidden bg-muted [&_img]:w-full [&_img]:h-full [&_img]:object-cover"
                        : `h-20 flex items-center justify-center [&_img]:max-h-16 [&_img]:w-auto [&_img]:object-contain ${project.invertOnLight ? "[&_img]:dark:invert-0 [&_img]:invert" : ""}`
                    }
                  >
                    <img src={project.logo} alt={project.logoAlt} />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl text-foreground font-semibold mb-1 group-hover:text-[var(--brand)] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {project.description}
                    </p>
                    {project.url && (
                      <span className="inline-flex items-center gap-1 text-sm text-[var(--brand)] font-medium">
                        Voir le site <ExternalLink size={14} />
                      </span>
                    )}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-10 h-10 text-[var(--brand)] mx-auto mb-4" />
          <h2 className="text-2xl lg:text-3xl text-foreground font-semibold mb-4">
            Créons quelque chose ensemble
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Prêt à transformer votre présence en ligne ? Discutons de votre projet.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--brand)] text-white px-8 py-4 rounded-xl hover:bg-[var(--brand-hover)] transition-colors text-base font-medium"
          >
            Contactez-nous
          </a>
        </div>
      </section>
    </div>
  );
}