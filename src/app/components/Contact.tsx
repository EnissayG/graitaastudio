import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={28} />,
      title: 'Email',
      value: 'hello@graitaastudio.com',
    },
    {
      icon: <Phone size={28} />,
      title: 'Téléphone',
      value: '+1 (514) 123-4567',
    },
    {
      icon: <MapPin size={28} />,
      title: 'Localisation',
      value: 'Montréal, Québec',
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 lg:px-8 bg-[var(--brand)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl text-white font-semibold mb-4">
            Transformons votre vision en réalité
          </h2>
          <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            Vous avez un projet en tête ? Parlons-en ensemble et créons quelque chose d'exceptionnel.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                <div className="text-white">
                  {info.icon}
                </div>
              </div>
              <div className="text-blue-100 text-sm mb-2">
                {info.title}
              </div>
              <div className="text-white text-lg">
                {info.value}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact"
            className="px-10 py-5 bg-white text-[var(--brand)] rounded-full hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3 group text-lg"
          >
            <span>Démarrer votre projet</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="mailto:hello@graitaastudio.com"
            className="px-10 py-5 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors duration-200 text-lg border border-white/40"
          >
            Envoyez-nous un email
          </a>
        </div>
      </div>
    </section>
  );
}