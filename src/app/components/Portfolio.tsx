import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

export function Portfolio() {
  const projects = [
    {
      title: 'Mirai Ramen',
      category: 'Restauration',
      image: 'https://images.unsplash.com/photo-1644073758253-0e7e4b9003da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYW1lbiUyMGJvd2wlMjBqYXBhbmVzZSUyMG1vZGVybnxlbnwxfHx8fDE3NzM1NTExOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Cofandi',
      category: 'Technologie',
      image: 'https://images.unsplash.com/photo-1730916335055-88fd6e6a9771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB2ZW5kaW5nJTIwbWFjaGluZXxlbnwxfHx8fDE3NzM1NTExOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'QG Quartier Général',
      category: 'Services',
      image: 'https://images.unsplash.com/photo-1759142016096-a9d1a5ebcc09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwY2hhaXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczNTUxMTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

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
          {projects.map((project, index) => (
            <Link
              key={index}
              to="/portfolio"
              className="group block rounded-2xl overflow-hidden border border-border bg-muted/30 hover:border-[var(--brand-muted)] hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
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
                  Voir le projet
                  <ExternalLink size={14} className="opacity-70" />
                </span>
              </div>
            </Link>
          ))}
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