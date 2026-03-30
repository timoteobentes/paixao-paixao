import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Publication, categoryLabels } from '@/data/posts';
import { Badge } from '@/components/ui/badge';

interface PostCardProps {
  publication: Publication;
  index: number;
}

export const PostCard = ({ publication, index }: PostCardProps) => {
  const { language } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="h-full flex flex-col"
    >
      <Link to={`/posts/${publication.slug}`} className="block group h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl">
        <div className="flex flex-col h-full bg-background/60 backdrop-blur-md rounded-2xl overflow-hidden border border-border/50 hover:border-accent/40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(var(--accent),0.2)]">
          {/* Cover Image with elegant slow zoom */}
          <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
            <img
              src={publication.image}
              alt={publication.title[language]}
              className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
            {/* Dark Gradient Overlay to blend content below */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
            
            {/* Premium Category Badge */}
            <div className="absolute top-4 left-4">
              <Badge 
                variant="secondary" 
                className="bg-black/60 backdrop-blur-md border border-white/10 text-white font-medium text-xs tracking-wide uppercase px-3 py-1 shadow-sm"
              >
                {categoryLabels[publication.category][language]}
              </Badge>
            </div>
          </div>

          {/* Card Content Edit */}
          <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10">
            {/* Meta Date (Sans) */}
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-sans mb-4">
              <Calendar className="h-4 w-4" />
              <time dateTime={publication.date} className="tracking-wide">{formatDate(publication.date)}</time>
            </div>

            {/* Imposing Title (Serif) */}
            <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 line-clamp-2 group-hover:text-accent transition-colors duration-500 leading-tight">
              {publication.title[language]}
            </h3>

            {/* Sans Summary */}
            <p className="text-muted-foreground/90 font-sans text-[15px] leading-relaxed line-clamp-3 mb-6 flex-1">
              {publication.summary[language]}
            </p>

            {/* Read More Link */}
            <div className="flex items-center gap-2 text-accent font-semibold text-sm mt-auto group-hover:text-accent/80 transition-colors">
              <span className="uppercase tracking-widest text-xs font-sans">{language === 'pt' ? 'Ler Artigo' : 'Read Article'}</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
