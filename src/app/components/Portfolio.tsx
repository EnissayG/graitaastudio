import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { projects } from '../data/projects';

  return (
    <section id="portfolio" className="py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[var(--brand-foreground)] text-sm font-medium tracking-wide uppercase block mb-2">
            Portfolio
          </span>
          <h2 className="text-2xl lg:text-3xl text-foreground font-semibold mb-2">
            Projets récents
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Un aperçu de nos dernières créations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {projects.map((project, index) => {
            const href = project.url || '/portfolio';
            const isExternal = !!project.url;
            const content = (
              <>
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.logoAlt}
                    className={`w-full h-full group-hover:scale-[1.02] transition-transform duration-300 ${project.imageCover ? 'object-cover' : 'object-contain'} ${project.invertOnLight ? 'invert dark:invert-0' : ''}`}
                  />
                </div>
                <div className="p-5">
                  <span className="text-[var(--brand)] text-xs font-medium uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-foreground font-semibold mt-1 group-hover:text-[var(--brand)] transition-colors">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground mt-2">
                    {isExternal ? 'Voir le site' : 'Voir le projet'}
                    <ExternalLink size={14} className="opacity-70" />
                  </span>
                </div>
              </>
            );
            return isExternal ? (
              <a
                key={project.id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden border border-border bg-muted/30 hover:border-[var(--brand-muted)] hover:shadow-md transition-all duration-300"
              >
                {content}
              </a>
            ) : (
              <Link
                key={project.id}
                to={href}
                className="group block rounded-2xl overflow-hidden border border-border bg-muted/30 hover:border-[var(--brand-muted)] hover:shadow-md transition-all duration-300"
              >
                {content}
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center bg-[var(--brand)] text-white px-8 py-3.5 rounded-xl text-base font-medium hover:bg-[var(--brand-hover)] transition-colors duration-200"
          >
            Voir tous les projets
          </Link>
        </div>
      </div>
    </section>
  );
}