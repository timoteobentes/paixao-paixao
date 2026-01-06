import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Scale, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

// --- COMPONENTE DIGITAL REFINADO ---
const DigitalWord = ({ word }: { word: string }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true);
      
      // 1. DURAÇÃO MAIOR (Elegância): O efeito dura entre 800ms e 1200ms
      // Isso permite que o usuário perceba a mudança de fonte sem ser um "flash" agressivo.
      setTimeout(() => {
        setIsGlitching(false);
      }, 800 + Math.random() * 400);

      // 2. INTERVALO MAIS ESPAÇADO: Acontece a cada 4s a 8s
      // Menos frequente = Mais sofisticado.
      setTimeout(triggerGlitch, 4000 + Math.random() * 4000);
    };

    const timer = setTimeout(triggerGlitch, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="relative inline-block mx-2">
      <span
        className={`relative z-10 block transition-all duration-500 ease-in-out ${
          isGlitching
            ? 'font-mono font-medium tracking-widest text-accent scale-105 -skew-x-6 drop-shadow-[0_0_10px_rgba(var(--accent),0.3)]'
            : 'font-serif text-gradient' 
        }`}
      >
        {word}
      </span>
      
      {/* Sombras "Ghost" muito mais sutis e lentas */}
      <span 
        className={`absolute top-0 left-0 -ml-[2px] text-purple/40 font-mono mix-blend-overlay transition-opacity duration-300 ${
            isGlitching ? 'opacity-100 translate-x-[2px]' : 'opacity-0'
        }`}
      >
        {word}
      </span>
      <span 
        className={`absolute top-0 left-0 ml-[2px] text-cyan-400/40 font-mono mix-blend-overlay transition-opacity duration-300 ${
            isGlitching ? 'opacity-100 -translate-x-[2px]' : 'opacity-0'
        }`}
      >
        {word}
      </span>
    </span>
  );
};

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
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 bg-[url(/hero-back.jpg)] bg-center bg-no-repeat bg-cover" />
      <div className="absolute inset-0 bg-white/75 dark:bg-black/60 backdrop-blur-[2px]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Animated Circles - Mantidos iguais */}
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur-md border border-border/50 text-sm font-medium text-foreground shadow-sm">
              <Scale className="h-4 w-4 text-accent" />
              Expertise em Direito Digital
              <Zap className="h-4 w-4 text-purple" />
            </span>
          </motion.div>

          {/* Headline com Efeito Suave */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 text-foreground drop-shadow-sm flex flex-wrap justify-center gap-x-3 gap-y-2"
            style={{ lineHeight: 1.17 }}
          >
            {t.hero.headline.split(' ').map((word, i) => {
              const isTargetWord = ['Digital', 'Conectado', 'Connected'].some(target => 
                word.includes(target)
              );

              if (isTargetWord) {
                return <DigitalWord key={i} word={word} />;
              }

              return <span key={i}>{word} </span>;
            })}
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