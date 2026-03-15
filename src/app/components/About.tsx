import { CheckCircle, Users, Award, Lightbulb } from 'lucide-react';
import { Link } from 'react-router';

export function About() {
  const stats = [
    { number: '10+', label: 'Projets réalisés' },
    { number: '10+', label: 'Clients satisfaits' },
    { number: '4+', label: 'Années d\'expérience' },
    { number: '100%', label: 'Taux de satisfaction' },
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[var(--brand-foreground)] tracking-wide uppercase text-sm mb-3 block">
            À propos
          </span>
          <h2 className="text-3xl lg:text-4xl text-foreground font-semibold mb-4">
            Studio créatif à Montréal
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nous aidons les entreprises à se démarquer avec des sites web modernes et performants.
            Design, développement et stratégie digitale pour des résultats concrets.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl text-[var(--brand)] font-semibold mb-2 tabular-nums">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/about"
            className="inline-block bg-[var(--brand)] text-white px-10 py-5 rounded-full hover:bg-[var(--brand-hover)] transition-colors duration-200 text-lg"
          >
            En savoir plus sur nous
          </Link>
        </div>
      </div>
    </section>
  );
}