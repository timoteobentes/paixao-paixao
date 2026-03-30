import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { PostCard } from '@/components/PostCard';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { publications, PublicationCategory, categoryLabels } from '@/data/posts';
import { Loader2 } from 'lucide-react';

const ITEMS_PER_PAGE = 6;

type FilterCategory = 'all' | PublicationCategory;

const filterOptions: { key: FilterCategory; label: { pt: string; en: string } }[] = [
  { key: 'all', label: { pt: 'Todos', en: 'All' } },
  { key: 'eventos', label: categoryLabels.eventos },
  { key: 'na-midia', label: categoryLabels['na-midia'] },
  { key: 'noticias', label: categoryLabels.noticias },
  { key: 'artigos', label: categoryLabels.artigos },
];

export default function Publications() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  const filteredPublications = useMemo(() => {
    if (activeFilter === 'all') return publications;
    return publications.filter((pub) => pub.category === activeFilter);
  }, [activeFilter]);

  const visiblePublications = filteredPublications.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPublications.length;

  const handleFilterChange = (filter: FilterCategory) => {
    setActiveFilter(filter);
    setVisibleCount(ITEMS_PER_PAGE); // Reseta a carga para reanimar a grade base
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-accent-foreground">
      {/* Background limpo unificado */}
      <BackgroundEffects />
      
      <Header />

      <main className="relative pt-40 pb-20">
        <div className="container mx-auto px-6">
          
          {/* Cabeçalho do Blog */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
              {language === 'pt' ? 'Nosso Radar Digital' : 'Our Digital Radar'}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto font-sans leading-relaxed">
              {language === 'pt'
                ? 'Perspectivas jurídicas, artigos profundos e nossa visão de vanguarda sobre o futuro do Direito e Tecnologia.'
                : 'Legal perspectives, deep articles, and our vanguard vision on the future of Law and Technology.'}
            </p>
          </motion.div>

          {/* Filtros em Formato Pill (Premium Animado) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-16 p-2 bg-secondary/30 backdrop-blur-md rounded-full w-fit mx-auto border border-border/40"
          >
            {filterOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => handleFilterChange(option.key)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-500 ease-out outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  activeFilter === option.key
                    ? 'text-white shadow-[0_0_20px_-5px_rgba(var(--accent),0.4)] dark:text-black'
                    : 'text-muted-foreground/70 hover:text-foreground hover:bg-white/5'
                }`}
              >
                {activeFilter === option.key && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute inset-0 bg-accent rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{option.label[language]}</span>
              </button>
            ))}
          </motion.div>

          {/* Grid de Publicações com AnimatePresence e Modo popLayout para Reposicionamento Mágico */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <AnimatePresence mode="popLayout">
              {visiblePublications.map((publication, index) => (
                <PostCard
                  key={publication.id}
                  publication={publication}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State Animado */}
          <AnimatePresence>
            {filteredPublications.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20 bg-secondary/10 rounded-3xl border border-border/20 backdrop-blur-sm"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4 border border-border">
                  <span className="text-2xl opacity-50">📭</span>
                </div>
                <p className="text-muted-foreground font-medium text-lg">
                  {language === 'pt'
                    ? 'Nenhuma publicação encontrada nesta categoria no momento.'
                    : 'No publications found in this category at the moment.'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botão de Ver Mais Elegante */}
          <AnimatePresence>
            {hasMore && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center mt-12"
              >
                <Button
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 font-semibold border-border/50 hover:bg-secondary/50 hover:border-accent text-foreground transition-all duration-300 gap-3 min-w-[200px]"
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin text-accent" />
                  ) : (
                    language === 'pt' ? 'Carregar Mais Histórias' : 'Load More Stories'
                  )}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
