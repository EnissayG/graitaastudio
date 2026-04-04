import { Mail, MapPin, Send, MessageCircle, CheckCircle, AlertCircle, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/PageHero';
import { useDarkMode } from '../hooks/useDarkMode';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useAccentColor } from '../hooks/useAccentColor';
import { getFadeUp } from '../utils/motionVariants';

const FORM_NAME = 'contact';

const serviceOptions = [
  { value: 'new_site', labelKey: 'pages.contact.services.new_site' },
  { value: 'redesign', labelKey: 'pages.contact.services.redesign' },
  { value: 'ecommerce', labelKey: 'pages.contact.services.ecommerce' },
  { value: 'webapp', labelKey: 'pages.contact.services.webapp' },
  { value: 'consultation', labelKey: 'pages.contact.services.consultation' },
  { value: 'other', labelKey: 'pages.contact.services.other' },
] as const;

const faqIds = [1, 2, 3] as const;

export function ContactPage() {
  const { t } = useTranslation();
  const shouldReduce = useReducedMotion();
  const { isDark } = useDarkMode();
  const { accentBorder30, faqOpenBg } = useAccentColor();
  const faqMotionTransition = shouldReduce ? { duration: 0.01 } : { duration: 0.25, ease: 'easeInOut' as const };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    'bot-field': '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
      const isLocalDev =
        typeof window !== 'undefined' &&
        (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
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
      icon: <Mail size={24} strokeWidth={1.75} />,
      titleKey: 'pages.contact.emailLabel' as const,
      value: 'graitaastudio@gmail.com',
      link: 'mailto:graitaastudio@gmail.com',
    },
    {
      icon: <MapPin size={24} strokeWidth={1.75} />,
      titleKey: 'pages.contact.locationLabel' as const,
      valueKey: 'pages.contact.locationValue' as const,
      link: null,
    },
  ] as const;

  const inputClass =
    'w-full rounded-lg border border-[var(--border)] bg-[var(--bg-1)] px-4 py-3 text-sm text-[var(--text-1)] transition-[border-color,box-shadow] duration-200 focus:border-[var(--blue)] focus:outline-none focus:shadow-[0_0_0_3px_var(--blue-dim)]';

  const labelClass = 'mb-1.5 block text-[13px] font-medium text-[var(--text-2)]';

  return (
    <div className="pt-24">
      <PageHero
        eyebrow={t('pages.contact.eyebrow')}
        title={t('pages.contact.title')}
        subtitle={t('pages.contact.subtitle')}
      />

      <section className="bg-[var(--bg-1)] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <motion.div
                variants={getFadeUp(shouldReduce, { y: 20 })}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-1)] p-8 shadow-sm lg:p-10"
                style={{ borderWidth: '0.5px' }}
              >
                <div className="mb-8">
                  <MessageCircle className="mb-4 size-10 text-[var(--blue-text)]" strokeWidth={1.75} />
                  <h2 className="mb-3 text-2xl font-semibold text-[var(--text-1)]">{t('pages.contact.formTitle')}</h2>
                  <p className="text-[var(--text-2)]">{t('pages.contact.formSubtitle')}</p>
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
                    <label>
                      {t('pages.contact.honeypot')}{' '}
                      <input name="bot-field" value={formData['bot-field']} onChange={handleChange} />
                    </label>
                  </p>
                  <div ref={feedbackRef} aria-live="polite" className="min-h-[3rem]">
                    {status === 'success' && (
                      <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800 dark:border-green-800 dark:bg-green-950/40 dark:text-green-200">
                        <CheckCircle size={22} className="mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">{t('pages.contact.successTitle')}</p>
                          <p className="mt-1 text-sm">{t('pages.contact.successBody')}</p>
                        </div>
                      </div>
                    )}
                    {status === 'error' && (
                      <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">
                        <AlertCircle size={22} className="mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium">{t('pages.contact.errorTitle')}</p>
                          <p className="mt-1 text-sm">
                            {t('pages.contact.errorBody')}{' '}
                            <a href="mailto:graitaastudio@gmail.com" className="font-medium underline">
                              graitaastudio@gmail.com
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        {t('pages.contact.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        style={{ borderWidth: '0.5px' }}
                        placeholder={t('pages.contact.placeholderName')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        {t('pages.contact.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        style={{ borderWidth: '0.5px' }}
                        placeholder={t('pages.contact.placeholderEmail')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className={labelClass}>
                      {t('pages.contact.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ borderWidth: '0.5px' }}
                      placeholder={t('pages.contact.placeholderCompany')}
                    />
                  </div>

                  <div>
                    <label className={`${labelClass} mb-3`}>{t('pages.contact.projectType')}</label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((opt) => (
                        <motion.label
                          key={opt.value}
                          whileTap={shouldReduce ? { scale: 0.98 } : { scale: 0.97 }}
                          className="cursor-pointer"
                        >
                          <input type="checkbox" name="service" value={opt.value} className="peer sr-only" />
                          <span
                            className="inline-flex rounded-md border border-[var(--border)] bg-transparent px-4 py-2 text-[13px] text-[var(--text-2)] transition-colors duration-200 peer-checked:border-[var(--blue)] peer-checked:bg-[var(--blue-dim)] peer-checked:font-medium peer-checked:text-[var(--blue-text)]"
                            style={{ borderWidth: '0.5px', borderRadius: 6, padding: '8px 16px' }}
                          >
                            {t(opt.labelKey)}
                          </span>
                        </motion.label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      {t('pages.contact.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`${inputClass} resize-none`}
                      style={{ borderWidth: '0.5px' }}
                      placeholder={t('pages.contact.placeholderMessage')}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group relative w-full overflow-hidden rounded-lg bg-[var(--blue)] px-8 py-4 text-base font-medium text-[var(--on-accent)] transition-colors hover:bg-[var(--blue-hover)] disabled:opacity-70"
                    initial="rest"
                    whileHover={
                      status === 'sending' || shouldReduce ? undefined : 'hover'
                    }
                    variants={{ rest: {}, hover: {} }}
                  >
                    <motion.span
                      className="pointer-events-none absolute inset-0 z-0"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                      }}
                      variants={{
                        rest: { x: shouldReduce ? '0%' : '-100%' },
                        hover: shouldReduce
                          ? { x: '0%' }
                          : {
                              x: '100%',
                              transition: { duration: 0.6, ease: 'easeInOut' },
                            },
                      }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {status === 'sending' ? (
                        <span>{t('pages.contact.sending')}</span>
                      ) : (
                        <>
                          <span>{t('pages.contact.submit')}</span>
                          <Send size={20} className="transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              </motion.div>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <motion.div
                variants={getFadeUp(shouldReduce, { y: 20, delay: 0.1 })}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
              >
                <h3 className="mb-6 text-xl font-semibold text-[var(--text-1)]">{t('pages.contact.contactInfoTitle')}</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-[var(--border)] bg-[var(--bg-1)] p-6 transition-colors hover:border-[var(--blue-border)]"
                      style={{ borderWidth: '0.5px' }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="flex size-12 shrink-0 items-center justify-center rounded-[10px] border border-[var(--blue-border)] bg-[var(--blue-dim)] text-[var(--blue-text)]"
                          style={{ borderWidth: '0.5px' }}
                        >
                          {info.icon}
                        </div>
                        <div>
                          <div className="mb-1 text-sm text-[var(--text-3)]">{t(info.titleKey)}</div>
                          {info.link ? (
                            <a href={info.link} className="text-[var(--text-1)] transition-colors hover:text-[var(--blue-text)]">
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-[var(--text-1)]">
                              {'valueKey' in info ? t(info.valueKey) : info.value}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={getFadeUp(shouldReduce, { y: 20, delay: 0.15 })}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className={`rounded-xl p-8 ${
                  isDark
                    ? 'border border-[var(--blue-border)] bg-[var(--bg-2)]'
                    : 'bg-[var(--blue)] text-white'
                }`}
                style={{ borderWidth: isDark ? '0.5px' : undefined }}
              >
                <h3 className={`mb-4 text-2xl font-semibold ${isDark ? 'text-[var(--text-1)]' : ''}`}>
                  {t('pages.contact.sidebarTitle')}
                </h3>
                <p className={`mb-6 ${isDark ? 'text-[var(--text-2)]' : 'text-white/90'}`}>
                  {t('pages.contact.sidebarBody')}
                </p>
                <motion.a
                  href="mailto:graitaastudio@gmail.com"
                  className={`inline-block rounded-lg px-6 py-3 font-medium transition-colors ${
                    isDark
                      ? 'bg-[var(--blue)] text-[var(--on-accent)] hover:bg-[var(--blue-hover)]'
                      : 'bg-white text-[var(--blue)] hover:bg-white/95'
                  }`}
                  animate={
                    shouldReduce
                      ? { boxShadow: 'none' }
                      : {
                          boxShadow: isDark
                            ? [
                                '0 0 0 0px rgba(96,165,250,0.35)',
                                '0 0 0 6px rgba(96,165,250,0)',
                              ]
                            : [
                                '0 0 0 0px rgba(255,255,255,0.3)',
                                '0 0 0 6px rgba(255,255,255,0)',
                              ],
                        }
                  }
                  transition={
                    shouldReduce ? { duration: 0 } : { duration: 1.5, repeat: Infinity }
                  }
                >
                  {t('pages.contact.sidebarCta')}
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-2)] px-6 py-16 lg:px-8 lg:py-20" style={{ borderTopWidth: '0.5px' }}>
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="mb-12 text-center"
            variants={getFadeUp(shouldReduce, { y: 16, duration: 0.5 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2 className="mb-4 text-2xl font-semibold text-[var(--text-1)] lg:text-3xl">{t('pages.contact.faqTitle')}</h2>
            <p className="text-[var(--text-2)]">{t('pages.contact.faqSubtitle')}</p>
          </motion.div>
          <div className="space-y-3">
            {faqIds.map((id, index) => {
              const p = `pages.contact.faq${id}`;
              const isOpen = openFaq === index;
              return (
                <motion.div
                  key={id}
                  variants={getFadeUp(shouldReduce, { y: 12, duration: 0.45, delay: index * 0.05 })}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  className={`rounded-[10px] border border-[var(--border)] bg-[var(--bg-1)] transition-all duration-200 ${
                    isOpen ? '' : 'hover:border-[var(--border-hover)]'
                  }`}
                  style={{
                    borderWidth: '0.5px',
                    ...(isOpen
                      ? { borderColor: accentBorder30, backgroundColor: faqOpenBg }
                      : {}),
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-[18px] text-left text-[var(--text-1)]"
                  >
                    <span>{t(`${p}.q`)}</span>
                    <motion.span
                      className="inline-flex shrink-0 text-[var(--blue-text)]"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: shouldReduce ? 0 : 0.2 }}
                      aria-hidden
                    >
                      <Plus size={16} strokeWidth={2} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={faqMotionTransition}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-[18px] pt-0 leading-relaxed text-[var(--text-2)]">{t(`${p}.a`)}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
