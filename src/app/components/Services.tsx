import { Smartphone, Zap, Palette, Search, Code, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';

export function Services() {
  const services = [
    {
      icon: <Palette size={24} />,
      title: 'Design UI/UX',
      description: 'Interfaces modernes et intuitives',
    },
    {
      icon: <Code size={24} />,
      title: 'Développement',
      description: 'Sites performants et évolutifs',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Responsive',
      description: 'Adapté à tous les appareils',
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance',
      description: 'Vitesse et optimisation',
    },
    {
      icon: <Search size={24} />,
      title: 'SEO',
      description: 'Visibilité en ligne maximale',
    },
    {
      icon: <ShoppingCart size={24} />,
      title: 'E-Commerce',
      description: 'Boutiques en ligne complètes',
    },
  ];

  return (
    <section id="services" className="py-24 px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-[var(--brand-foreground)] tracking-wide uppercase text-sm mb-3 block">
            Nos services
          </span>
          <h2 className="text-3xl lg:text-4xl text-foreground font-semibold mb-4">
            Solutions complètes pour votre présence en ligne
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            De la conception à la mise en ligne, nous accompagnons vos projets web de A à Z.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-4 rounded-xl border border-transparent bg-background hover:border-border hover:shadow-sm transition-[border-color,box-shadow] duration-200"
            >
              <div className="w-16 h-16 bg-[var(--brand-muted)] text-[var(--brand)] rounded-xl flex items-center justify-center mx-auto hover:bg-[var(--brand)] hover:text-white transition-colors duration-200">
                {service.icon}
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-snug">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center bg-[var(--brand)] text-white px-8 py-3.5 rounded-xl font-medium hover:bg-[var(--brand-hover)] transition-colors duration-200"
          >
            Découvrir tous nos services
          </Link>
        </div>
      </div>
    </section>
  );
}