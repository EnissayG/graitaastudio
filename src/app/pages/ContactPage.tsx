import { Mail, MapPin, Send, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";

const FORM_NAME = 'contact';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    "bot-field": "",
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const feedbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((status === 'success' || status === 'error') && feedbackRef.current) {
      feedbackRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const body = new FormData(form);
    body.set('form-name', FORM_NAME);

    try {
      const res = await fetch('/', { method: 'POST', body });
      const isLocalDev = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
      // Netlify : 200 après redirect, ou 302. En local le POST donne 404.
      if (res.ok || res.status === 302 || (res.status === 404 && isLocalDev)) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '', 'bot-field': '' });
        return;
      }
      setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "graitaastudio@gmail.com",
      link: "mailto:graitaastudio@gmail.com",
    },
    {
      icon: <MapPin size={24} />,
      title: "Localisation",
      value: "Montréal, Québec",
      link: null,
    },
  ];

  const services = [
    "Nouveau site web",
    "Refonte de site existant",
    "E-Commerce",
    "Application web",
    "Consultation",
    "Autre",
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
              Contact
            </span>
            <h1 className="text-3xl lg:text-4xl text-foreground font-semibold mb-6">
              Discutons de votre projet
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vous avez une idée de projet ? Une question ? Nous sommes là pour vous écouter
              et vous accompagner dans la réalisation de votre vision digitale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-background p-10 rounded-3xl border border-border shadow-lg"
              >
                <div className="mb-8">
                  <MessageCircle className="w-10 h-10 text-[var(--brand)] mb-4" />
                  <h2 className="text-2xl text-foreground font-semibold mb-3">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-muted-foreground">
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures.
                  </p>
                </div>

                <form
                  name={FORM_NAME}
                  method="post"
                  action="/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value={FORM_NAME} />
                  <p hidden>
                    <label>Ne pas remplir : <input name="bot-field" value={formData['bot-field']} onChange={handleChange} /></label>
                  </p>
                  <div ref={feedbackRef} aria-live="polite" className="min-h-[3rem]">
                    {status === 'success' && (
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800">
                        <CheckCircle size={22} className="flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Message envoyé</p>
                          <p className="text-sm mt-1">Nous vous recontacterons rapidement à l’adresse indiquée.</p>
                        </div>
                      </div>
                    )}
                    {status === 'error' && (
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800">
                        <AlertCircle size={22} className="flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Erreur d’envoi</p>
                          <p className="text-sm mt-1">
                            Vous pouvez nous écrire directement à{" "}
                            <a href="mailto:graitaastudio@gmail.com" className="underline font-medium">graitaastudio@gmail.com</a>.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-foreground mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-muted)] transition-all"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-muted)] transition-all"
                        placeholder="jean@exemple.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-foreground mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-muted)] transition-all"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div>
                    <label className="block text-foreground mb-3">
                      Type de projet
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {services.map((service, index) => (
                        <label
                          key={index}
                          className="flex items-center space-x-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            name="service"
                            value={service}
                            className="w-4 h-4 text-[var(--brand)] border-border rounded focus:ring-[var(--brand)]"
                          />
                          <span className="text-sm text-foreground">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-muted)] transition-all resize-none"
                      placeholder="Parlez-nous de votre projet..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-[var(--brand)] text-white px-8 py-4 rounded-xl hover:bg-[var(--brand-hover)] transition-colors flex items-center justify-center gap-2 text-base font-medium group disabled:opacity-70"
                  >
                    {status === 'sending' ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <span>Envoyer le message</span>
                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl text-foreground font-semibold mb-6">
                  Informations de Contact
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="bg-background p-6 rounded-2xl border border-border hover:border-[var(--brand-muted)] transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[var(--brand-muted)] text-[var(--brand)] rounded-xl flex items-center justify-center flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">{info.title}</div>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-foreground hover:text-[var(--brand)] transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-foreground">{info.value}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-[var(--brand)] p-8 rounded-2xl text-white"
              >
                <h3 className="text-2xl mb-4">Consultation Gratuite</h3>
                <p className="text-white/90 mb-6">
                  Profitez d'une consultation gratuite de 30 minutes pour discuter de votre projet
                  et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
                </p>
                <a
                  href="mailto:graitaastudio@gmail.com"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Réserver maintenant
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl text-foreground font-semibold mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-muted-foreground">
              Voici quelques réponses aux questions les plus courantes
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Quel est le délai moyen pour créer un site web ?",
                a: "En général, un site web prend entre 4 à 8 semaines, selon la complexité du projet.",
              },
              {
                q: "Proposez-vous de la maintenance après le lancement ?",
                a: "Oui, nous offrons des forfaits de maintenance pour assurer que votre site reste à jour et sécurisé.",
              },
              {
                q: "Travaillez-vous avec des clients en dehors de Montréal ?",
                a: "Absolument ! Nous travaillons avec des clients partout au Québec et au Canada.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-background p-6 rounded-xl border border-border cursor-pointer group"
              >
                <summary className="text-foreground list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-[var(--brand)]">+</span>
                </summary>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
