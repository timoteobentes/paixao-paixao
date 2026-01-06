import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Rola para o topo ao carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Lógica de navegação inteligente (com suporte a scroll na Home)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (!href.startsWith('/#')) {
      navigate(href);
      return;
    }
    const targetId = href.replace('/#', '');
    navigate('/', { state: { scrollTo: targetId } });
  };

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <p>Serviço não encontrado</p>
      </div>
    );
  }

  const serviceData = t.services.items[service.translationKey];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      // Usa as cores do tema (bg-background) em vez de cor fixa
      className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-accent-foreground"
    >
      <Header />

      {/* Elementos Decorativos de Fundo (Círculos Sutis) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none overflow-hidden z-0 opacity-40 dark:opacity-20">
        <div className="absolute -top-[10%] -right-[10%] w-[70%] h-[70%] rounded-full border border-accent/30" />
        <div className="absolute top-[5%] -right-[5%] w-[90%] h-[90%] rounded-full border border-purple/20" />
      </div>

      <main className="relative z-10 pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Botão Voltar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <a
              href="/#services"
              onClick={(e) => handleNavClick(e, '/#services')}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm uppercase tracking-widest font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.servicePage.backToServices || 'Voltar'}
            </a>
          </motion.div>

          {/* Cabeçalho da Página (Estilo Editorial Grande) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mb-24"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light font-serif text-foreground mb-8 leading-[1.1]">
              {/* Destaque sutil na cor do projeto (text-accent) */}
              <span className="text-accent">{serviceData.title.split(' ')[0]}</span>{' '}
              {serviceData.title.split(' ').slice(1).join(' ')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl">
              {serviceData.fullDescription}
            </p>
          </motion.div>

          {/* Grid de Benefícios (Layout do Modelo, Cores do Projeto) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32"
          >
            {serviceData.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group relative flex flex-col justify-end p-8 min-h-[150px] rounded-2xl bg-secondary/30 border border-border/50 hover:border-accent hover:bg-secondary/50 transition-all duration-500 cursor-default overflow-hidden"
              >
                 {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                    {/* Linha decorativa (Barra de progresso visual) */}
                    <div className="w-12 h-[3px] bg-accent/50 group-hover:w-full group-hover:bg-accent transition-all duration-700 ease-out mb-auto" />
                    
                    <p className="text-foreground text-lg font-medium leading-tight group-hover:text-accent transition-colors">
                      {benefit}
                    </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Seção "Saiba Mais" / CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-border pt-16"
          >
            <h2 className="text-4xl md:text-5xl font-light font-serif text-foreground mb-8">
              Saiba mais
            </h2>
            
            <div className="flex flex-col md:flex-row gap-12 items-start text-muted-foreground">
              <div className="max-w-lg">
                <p className="mb-8 text-lg">
                  Para saber mais informações, agendar uma conversa ou entender como podemos ajudar especificamente no seu caso:
                </p>
                
                <div className="flex flex-col gap-6">
                  {/* Link estilo texto sublinhado (como na referência) mas com cor Accent */}
                  <Button
                    asChild
                    variant="link"
                    className="self-start text-accent hover:text-accent/80 p-0 h-auto text-xl font-medium decoration-2 underline-offset-8 hover:underline"
                  >
                    <Link to="/contato" className="flex items-center gap-2">
                      Entre em contato com nossa equipe
                      <ArrowUpRight className="w-6 h-6" />
                    </Link>
                  </Button>

                  <div className="mt-8">
                    <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60 mb-4">
                      Outras Áreas de Atuação
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {services
                        .filter((s) => s.slug !== slug)
                        .slice(0, 3)
                        .map((other) => (
                            <Link 
                                key={other.id} 
                                to={`/servicos/${other.slug}`}
                                className="text-sm font-medium text-foreground/70 hover:text-accent hover:border-accent transition-colors border border-border px-4 py-2 rounded-full bg-background"
                            >
                                {t.services.items[other.translationKey].title}
                            </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default ServicePage;