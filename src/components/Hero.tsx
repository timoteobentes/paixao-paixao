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
      
      // Duração elegante e rápida (300-500ms)
      setTimeout(() => {
        setIsGlitching(false);
      }, 300 + Math.random() * 200);

      // Espaçamento esporádico (5 a 12 segundos)
      setTimeout(triggerGlitch, 5000 + Math.random() * 7000);
    };

    const timer = setTimeout(triggerGlitch, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="relative inline-block mx-2 font-sans tracking-tight">
      <span
        className={`relative z-10 block transition-all duration-300 ease-in-out ${
          isGlitching
            ? 'text-accent scale-[1.02] -skew-x-2 drop-shadow-[0_0_12px_rgba(var(--accent),0.5)]'
            : 'text-gradient-primary' 
        }`}
      >
        {word}
      </span>
      
      {/* Ghost shadows extremante sutis */}
      <span 
        className={`absolute top-0 left-0 -ml-[1px] text-primary/40 mix-blend-screen transition-opacity duration-300 ${
            isGlitching ? 'opacity-100 translate-x-[1px]' : 'opacity-0'
        }`}
      >
        {word}
      </span>
      <span 
        className={`absolute top-0 left-0 ml-[1px] text-accent/40 mix-blend-screen transition-opacity duration-300 ${
            isGlitching ? 'opacity-100 -translate-x-[1px]' : 'opacity-0'
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20" id="hero">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 bg-[url(/hero-back.jpg)] bg-center bg-no-repeat bg-cover" />
      <div className="absolute inset-0 bg-background/80 dark:bg-background/90 backdrop-blur-sm" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />

      {/* Animated Minimal Circles */}
      <motion.div
        className="absolute top-1/4 right-10 w-[500px] h-[500px] rounded-full border-[0.5px] border-primary/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-[300px] h-[300px] rounded-full border border-accent/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border-white/10 text-xs font-semibold uppercase tracking-wider text-muted-foreground shadow-sm">
              <Scale className="h-3.5 w-3.5 text-primary" />
              Expertise em Direito Digital
              <Zap className="h-3.5 w-3.5 text-accent" />
            </span>
          </motion.div>

          {/* Headline com Tipografia Mista */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-serif font-bold mb-8 text-foreground drop-shadow-sm flex flex-wrap justify-center items-center gap-x-4 gap-y-2"
            style={{ lineHeight: 1.15 }}
          >
            {t.hero.headline.split(' ').map((word, i) => {
              const isTargetWord = ['Digital', 'Conectado', 'Connected'].some(target => 
                word.includes(target)
              );

              if (isTargetWord) {
                return <DigitalWord key={i} word={word} />;
              }

              return <span key={i} className="tracking-tight">{word}</span>;
            })}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-sans"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Button
              size="lg"
              onClick={scrollToServices}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-7 text-base font-semibold rounded-full glow-primary shadow-2xl transition-all duration-500 ease-out"
            >
              <span className="tracking-wide">{t.hero.cta}</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="px-8 py-7 text-base font-semibold rounded-full border-border/50 hover:bg-secondary/50 bg-transparent backdrop-blur-sm transition-all duration-500 hover:border-border"
            >
              <a href="/contato"><span className="tracking-wide">{t.nav.contact}</span></a>
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};