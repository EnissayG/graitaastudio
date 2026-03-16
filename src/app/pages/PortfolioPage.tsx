import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data/projects";

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
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group bg-muted">
                  <img
                    src={project.image}
                    alt={project.logoAlt}
                    className={`w-full h-full group-hover:scale-105 transition-transform duration-700 ${project.imageCover ? "object-cover" : "object-contain"} ${project.invertOnLight ? "invert dark:invert-0" : ""}`}
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
                    {project.longDescription}
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
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--brand)] hover:text-[var(--brand-hover)] transition-colors group"
                  >
                    <span>Voir le site</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : null}
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