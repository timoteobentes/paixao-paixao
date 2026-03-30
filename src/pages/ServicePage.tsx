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
        <p>{t.servicePage.noService}</p>
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
      // Fundo premium com iluminação zenital discreta
      className="min-h-screen bg-background relative overflow-hidden selection:bg-accent/30 selection:text-accent-foreground"
    >
      <Header />

      {/* Gradiente sutil no topo simulando luz cênica */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-secondary/40 via-background/20 to-transparent pointer-events-none" />

      {/* Elementos Decorativos de Fundo (Círculos Sutis Blur) */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] pointer-events-none overflow-hidden z-0 opacity-40 mix-blend-screen">
        <div className="absolute -top-[10%] -right-[10%] w-[70%] h-[70%] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[60%] h-[60%] rounded-full bg-purple/5 blur-[120px]" />
      </div>

      <main className="relative z-10 pt-40 pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Botão Voltar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <a
              href="/#services"
              onClick={(e) => handleNavClick(e, '/#services')}
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm uppercase tracking-widest font-semibold group"
            >
              <div className="p-2 rounded-full bg-secondary/80 group-hover:bg-accent/10 transition-colors">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              </div>
              {t.servicePage.backToServices || 'Voltar'}
            </a>
          </motion.div>

          {/* Cabeçalho da Página (Fade In Up Cinematográfico) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mb-24"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light font-serif text-foreground mb-8 leading-[1.1] tracking-tight">
              {/* Destaque sutil na cor do projeto (text-accent) */}
              <span className="text-accent font-medium">{serviceData.title.split(' ')[0]}</span>{' '}
              {serviceData.title.split(' ').slice(1).join(' ')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-sans font-light leading-relaxed max-w-3xl">
              {serviceData.fullDescription}
            </p>
          </motion.div>

          {/* Grid de Benefícios (Fade in Up seqüencial) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32"
          >
            {serviceData.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="group relative flex flex-col justify-end p-8 min-h-[160px] rounded-3xl bg-secondary/30 border border-border/40 hover:border-accent/60 hover:bg-secondary/60 transition-all duration-700 cursor-default overflow-hidden"
              >
                 {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                    {/* Linha decorativa (Barra de progresso visual) */}
                    <div className="w-12 h-[2px] bg-accent/40 group-hover:w-full group-hover:bg-accent transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] mb-auto" />
                    
                    <p className="text-foreground text-lg font-sans font-medium leading-relaxed group-hover:text-accent transition-colors duration-500">
                      {benefit}
                    </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Novo CTA Glassmorphism Definitivo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden bg-background/40 backdrop-blur-2xl border border-border/50 rounded-[3rem] p-12 md:p-20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] group mb-20"
          >
            {/* Ambient Lighting do Glass */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-60 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            <div className="absolute -top-[50%] -right-[20%] w-[80%] h-[150%] bg-accent/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight tracking-tight">
                  Pronto para a evolução digital guiada pela <span className="text-accent">segurança jurídica?</span>
                </h3>
                <p className="text-muted-foreground font-sans text-xl leading-relaxed">
                  Agende agora mesmo uma consultoria para elaborarmos uma arquitetura de proteção absoluta moldada ao seu nível de inovação.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <Link to="/contato">
                  <Button
                    size="lg"
                    className="relative group/btn bg-primary hover:bg-primary text-primary-foreground font-bold font-sans text-lg rounded-full px-10 py-8 shadow-[0_0_40px_-10px_rgba(var(--primary),0.6)] overflow-hidden transition-all duration-500 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center">
                      Falar com Especialista
                      <ArrowUpRight className="ml-3 w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-500" />
                    </span>
                    {/* Hover light flash */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-12 group-hover/btn:animate-shimmer" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Outros Serviços Minimalista */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center border-t border-border/40 pt-16"
          >
            <p className="text-sm uppercase tracking-widest font-bold text-muted-foreground/50 mb-8 font-sans">
              Explorar outras soluções
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                {services
                .filter((s) => s.slug !== slug)
                .slice(0, 3)
                .map((other) => (
                    <Link 
                        key={other.id} 
                        to={`/servicos/${other.slug}`}
                        className="text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-300 border border-border/50 px-6 py-3 rounded-full bg-background backdrop-blur-sm"
                    >
                        {t.services.items[other.translationKey].title}
                    </Link>
                ))}
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default ServicePage;