import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { useLanguage } from '@/contexts/LanguageContext';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Serviço não encontrado</p>
      </div>
    );
  }

  const serviceData = t.services.items[service.translationKey];
  const Icon = service.icon;

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
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.servicePage.backToServices}
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div
              className="inline-flex p-5 rounded-2xl bg-accent/10 text-accent mb-6"
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <Icon className="h-12 w-12" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              {serviceData.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {serviceData.fullDescription}
            </p>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="card-gradient rounded-2xl p-8 md:p-12 border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-8 text-center">
                {t.servicePage.benefits}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceData.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="flex-shrink-0 p-1.5 rounded-full bg-accent/20">
                      <CheckCircle className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-center mt-16"
          >
            <div className="card-gradient rounded-2xl p-8 md:p-12 border border-accent/30 glow-border">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Precisa de Ajuda com {serviceData.title}?
              </h3>
              <p className="text-muted-foreground mb-8">
                Nossa equipe de especialistas está pronta para ajudar você a resolver seus desafios
                jurídicos no mundo digital.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-medium rounded-xl glow-cyan"
              >
                <Link to="/contato">
                  {t.servicePage.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Other Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl mx-auto mt-20"
          >
            <h3 className="text-xl font-serif font-semibold text-foreground mb-6 text-center">
              Outros Serviços
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {services
                .filter((s) => s.slug !== slug)
                .map((otherService) => {
                  const otherData = t.services.items[otherService.translationKey];
                  const OtherIcon = otherService.icon;
                  return (
                    <Link
                      key={otherService.id}
                      to={`/servicos/${otherService.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all text-sm font-medium"
                    >
                      <OtherIcon className="h-4 w-4" />
                      {otherData.title}
                    </Link>
                  );
                })}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default ServicePage;
