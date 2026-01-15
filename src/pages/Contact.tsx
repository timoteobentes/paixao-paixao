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
      href: `mailto:${t.contact.info.email}`,
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: t.contact.info.phone,
      href: `tel:${t.contact.info.phone.replace(/\D/g, '')}`,
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
      href: '',
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

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
              {t.contact.subtitle}
            </h1>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-accent to-purple" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="card-gradient rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                  {t.contact.info.title}
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="flex items-start gap-4 group"
                      whileHover={{ x: 4 }}
                    >
                      <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="block text-sm text-muted-foreground">{item.label}</span>
                        <span className="text-foreground font-medium group-hover:text-accent transition-colors">
                          {item.value}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="card-gradient rounded-2xl p-8 border border-border overflow-hidden relative h-64">
                <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8588559348323!2d-60.027213225028895!3d-3.1319783968434938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c05c1e7e7485d%3A0xe6b926c186dbcfd2!2sEdif%C3%ADcio%20Rio%20Negro%20Center!5e0!3m2!1spt-BR!2sbr!4v1766527315391!5m2!1spt-BR!2sbr" width="1000" height="250" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                {/* Abstract tech grid overlay */}
                {/* <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(hsl(var(--accent)) 1px, transparent 1px),
                      linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px',
                  }}
                /> */}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-gradient rounded-2xl p-8 border border-border"
            >
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
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
