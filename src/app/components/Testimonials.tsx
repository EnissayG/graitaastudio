import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Andy',
      role: 'Mirai Ramen',
      content: 'J\'avais une idée précise pour l\'image de Mirai Ramen, et Graitaa Studio a réussi à la rendre concrète avec un site qui est à la fois beau, moderne et cohérent avec la marque. Le processus était fluide et le résultat dépasse mes attentes.',
      rating: 5,
    },
    {
      name: 'Carlens',
      role: 'Cofandi',
      content: 'Graitaa Studio m\'a aidé à présenter Cofandi de façon beaucoup plus professionnelle. Le site est clair, sérieux et efficace. On sent qu\'il y a une vraie réflexion derrière le design et la structure.',
      rating: 5,
    },
    {
      name: 'Khalid',
      role: 'Barbier',
      content: 'Je voulais quelque chose de propre, classe et facile à consulter pour mes clients. Graitaa Studio a compris exactement ce que je cherchais. Le site représente bien mon image et mon service.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-[var(--brand-foreground)] tracking-wide uppercase text-sm mb-3 block">
            Témoignages
          </span>
          <h2 className="text-3xl lg:text-4xl text-foreground font-semibold mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Leur succès est notre meilleure référence
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-3xl relative hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[var(--brand-muted)]">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-[var(--brand)] fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="relative z-10">
                <div className="text-lg text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}