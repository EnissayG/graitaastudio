import { Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/graitaastudio/', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: 'https://ca.linkedin.com/in/yassine-graitaa-1a049b263', label: 'LinkedIn' },
  ];

  const footerLinks = {
    'Services': [
      { label: 'Design Web', path: '/services' },
      { label: 'Développement', path: '/services' },
      { label: 'E-Commerce', path: '/services' },
      { label: 'SEO', path: '/services' },
      { label: 'Maintenance', path: '/services' },
    ],
    'Entreprise': [
      { label: 'À propos', path: '/about' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Services', path: '/services' },
      { label: 'Contact', path: '/contact' },
      { label: 'Accueil', path: '/' },
    ],
    'Contact': [
      { label: 'graitaastudio@gmail.com', path: '/contact' },
      { label: 'Montréal, Québec', path: '/contact' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-3xl tracking-tight">
              <span className="text-white">Graitaa</span>
              <span className="text-[var(--brand)]">Studio</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg">
              Studio de design et développement web basé à Montréal. 
              Créons ensemble des expériences web exceptionnelles qui transforment 
              votre vision en réalité digitale.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[var(--brand)] transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white mb-6 text-lg">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-[var(--brand)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {currentYear} Graitaa Studio. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[var(--brand)] transition-colors duration-200">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--brand)] transition-colors duration-200">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}