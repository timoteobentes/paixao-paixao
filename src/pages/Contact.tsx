import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { ContactForm } from '@/components/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: t.contact.info.email,
      href: null // Forçando nulo para que não seja mais clicável via <a href>
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: t.contact.info.phone,
      href: `tel:${t.contact.info.phone.replace(/\\D/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Endereço',
      value: t.contact.info.address,
      href: 'https://maps.app.goo.gl/B9jQW5bKqqxbyyjN6',
    },
    {
      icon: Clock,
      label: 'Horário',
      value: 'Seg - Sex: 9h - 17h',
      href: null,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <BackgroundEffects />
      <Header />

      <main className="pt-40 pb-32">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
              {t.contact.subtitle}
            </h1>
            <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-accent" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="bg-background/40 backdrop-blur-md rounded-3xl p-10 border border-border/40 hover:border-border/80 transition-colors duration-500">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
                  {t.contact.info.title}
                </h2>
                <div className="space-y-8">
                  {contactInfo.map((item, index) => {
                    // Renderiza como DIV estática caso não tenha href (Ex: Email e Horário)
                    if (!item.href) {
                      return (
                        <motion.div
                          key={index}
                          className="flex items-start gap-5 group"
                        >
                          <div className="p-3.5 rounded-2xl bg-secondary/80 text-foreground transition-colors">
                            <item.icon className="h-5 w-5 opacity-70" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <span className="block text-sm text-muted-foreground/80 font-medium uppercase tracking-wider mb-1 font-sans">{item.label}</span>
                            <span className="text-foreground font-semibold text-lg font-sans">
                              {item.value}
                            </span>
                          </div>
                        </motion.div>
                      );
                    }

                    // Renderiza como link interativo caso tenha href (Ex: Telefone e Mapa)
                    return (
                      <motion.a
                        key={index}
                        href={item.href}
                        target={item.label === 'Endereço' ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="flex items-start gap-5 group cursor-pointer"
                        whileHover={{ x: 6 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className="p-3.5 rounded-2xl bg-secondary text-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                          <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="block text-sm text-muted-foreground/80 font-medium uppercase tracking-wider mb-1 font-sans">{item.label}</span>
                          <span className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors font-sans">
                            {item.value}
                          </span>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-background/40 backdrop-blur-md rounded-3xl p-3 border border-border/40 overflow-hidden relative h-[300px]">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-secondary">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8588559348323!2d-60.027213225028895!3d-3.1319783968434938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c05c1e7e7485d%3A0xe6b926c186dbcfd2!2sEdif%C3%ADcio%20Rio%20Negro%20Center!5e0!3m2!1spt-BR!2sbr!4v1766527315391!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="filter hover:brightness-110 transition-all duration-700"></iframe>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background/40 backdrop-blur-md rounded-3xl p-10 border border-border/40 flex flex-col justify-center"
            >
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
                Envie sua Mensagem
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Contact;
