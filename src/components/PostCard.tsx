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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/posts/${publication.slug}`} className="block group">
        <motion.div
          className="card-gradient rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-500 glow-border"
          whileHover={{ y: -5, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {/* Image */}
          <div className="relative aspect-video overflow-hidden">
            <img
              src={publication.image}
              alt={publication.title[language]}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <Badge 
                variant="secondary" 
                className="bg-accent/90 text-accent-foreground hover:bg-accent border-0 backdrop-blur-sm"
              >
                {categoryLabels[publication.category][language]}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Date */}
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
              <Calendar className="h-4 w-4" />
              <time dateTime={publication.date}>{formatDate(publication.date)}</time>
            </div>

            {/* Title */}
            <h3 className="text-lg font-serif font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
              {publication.title[language]}
            </h3>

            {/* Summary */}
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
              {publication.summary[language]}
            </p>

            {/* Read More */}
            <div className="flex items-center gap-2 text-accent font-medium text-sm">
              <span>{language === 'pt' ? 'Leia mais' : 'Read more'}</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
};
