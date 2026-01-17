import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { PostCard } from '@/components/PostCard';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { publications, PublicationCategory, categoryLabels } from '@/data/posts';
import { Loader2 } from 'lucide-react';

const ITEMS_PER_PAGE = 5;

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
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <BackgroundEffects />
      <Header />

      <main className="relative pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              {language === 'pt' ? 'Publicações' : 'Publications'}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'pt'
                ? 'Acompanhe nossas últimas publicações, artigos e participações em eventos sobre Direito Digital.'
                : 'Follow our latest publications, articles, and event participations on Digital Law.'}
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
          >
            {filterOptions.map((option) => (
              <Button
                key={option.key}
                variant={activeFilter === option.key ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleFilterChange(option.key)}
                className={`transition-all duration-300 ${
                  activeFilter === option.key
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                    : 'hover:border-accent/50 hover:text-accent'
                }`}
              >
                {option.label[language]}
              </Button>
            ))}
          </motion.div>

          {/* Publications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {visiblePublications.map((publication, index) => (
              <PostCard
                key={publication.id}
                publication={publication}
                index={index}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredPublications.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">
                {language === 'pt'
                  ? 'Nenhuma publicação encontrada nesta categoria.'
                  : 'No publications found in this category.'}
              </p>
            </motion.div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center"
            >
              <Button
                onClick={handleLoadMore}
                disabled={isLoading}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
              >
                {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                {language === 'pt' ? 'Carregar Mais' : 'Load More'}
              </Button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
