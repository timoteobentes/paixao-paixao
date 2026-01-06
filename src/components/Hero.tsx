import { motion } from 'framer-motion';
import { ArrowRight, Scale, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      
      {/* --- BACKGROUND CONFIGURATION --- */}
      
      {/* 1. Imagem de Fundo (Fixa e Cobrindo tudo) */}
      <div className="absolute inset-0 bg-[url(/hero-back.jpg)] bg-center bg-no-repeat bg-cover" />

      {/* 2. Overlay de Contraste (O Segredo da Legibilidade) 
          - bg-background/XX: Usa a cor do fundo do tema (branco no light, preto no dark) com transparência.
          - backdrop-blur-sm: Aplica um desfoque moderno estilo "vidro", ajudando o texto a saltar.
      */}
      <div className="absolute inset-0 bg-white/75 dark:bg-black/60 backdrop-blur-[2px]" />

      {/* 3. Gradiente Inferior (Suavidade na transição) 
          - from-background: Começa na cor sólida do tema (para esconder o corte da imagem).
          - to-transparent: Vai ficando transparente para cima.
      */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

      {/* ------------------------------- */}

      {/* Animated Circles */}
      <motion.div
        className="absolute top-1/4 right-10 w-64 h-64 rounded-full border border-accent/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full border border-purple/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            {/* Adicionei backdrop-blur e ajustei a borda para destacar mais o badge sobre a imagem */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur-md border border-border/50 text-sm font-medium text-foreground shadow-sm">
              <Scale className="h-4 w-4 text-accent" />
              Expertise em Direito Digital
              <Zap className="h-4 w-4 text-purple" />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-8 text-foreground drop-shadow-sm"
          >
            {t.hero.headline.split(' ').map((word, i) => (
              <span key={i}>
                {word === 'Digital' || word === 'Conectado' || word === 'Connected' ? (
                  <span className="text-gradient">{word}</span>
                ) : (
                  word
                )}{' '}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={scrollToServices}
              className="group bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-medium rounded-xl glow-cyan shadow-lg"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              // Adicionei bg-background/50 para garantir leitura do botão outline sobre a imagem
              className="px-8 py-6 text-lg font-medium rounded-xl border-2 hover:bg-secondary bg-background/40 backdrop-blur-sm"
            >
              <a href="/contato">{t.nav.contact}</a>
            </Button>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2 bg-background/20 backdrop-blur-sm">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-accent"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};