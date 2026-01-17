import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Download, ArrowLeft, Tag } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { PostCard } from '@/components/PostCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { getPublicationBySlug, getRelatedPublications, categoryLabels } from '@/data/posts';
import NotFound from './NotFound';

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const publication = slug ? getPublicationBySlug(slug) : undefined;
  const relatedPublications = slug ? getRelatedPublications(slug, 3) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!publication) {
    return <NotFound />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <BackgroundEffects />
      <Header />

      <main className="relative pt-32 pb-20">
        <article className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/posts"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{language === 'pt' ? 'Voltar para Publicações' : 'Back to Publications'}</span>
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            {/* Category Badge */}
            <Badge 
              variant="secondary" 
              className="bg-accent/10 text-accent hover:bg-accent/20 border-0 mb-4"
            >
              {categoryLabels[publication.category][language]}
            </Badge>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              {publication.title[language]}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={publication.date}>{formatDate(publication.date)}</time>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{publication.authors.join(', ')}</span>
              </div>
            </div>
          </motion.header>

          {/* Cover Image */}
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border">
              <img
                src={publication.image}
                alt={publication.title[language]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </motion.figure>

          {/* Abstract */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="card-gradient rounded-xl p-6 border border-border/50">
              <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                {language === 'pt' ? 'Resumo' : 'Abstract'}
              </h2>
              <p className="text-foreground/90 leading-relaxed text-lg">
                {publication.summary[language]}
              </p>
            </div>
          </motion.div>

          {/* Download Button */}
          {publication.downloadUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-8"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 w-full md:w-auto"
                asChild
              >
                <a href={publication.downloadUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5" />
                  {language === 'pt' ? 'Baixar Publicação' : 'Download Publication'}
                </a>
              </Button>
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
          >
            <div className="text-foreground/90 leading-relaxed whitespace-pre-line">
              {publication.content[language].split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n');
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                      {items.map((item, i) => (
                        <li key={i} className="text-foreground/90">
                          {item.replace(/^[\d]+\.\s\*\*/, '').replace(/\*\*:/, ':').replace(/^-\s/, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16 pb-8 border-b border-border"
          >
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                {language === 'pt' ? 'Tags' : 'Tags'}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {publication.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="hover:bg-accent/10 hover:border-accent/50 transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </article>

        {/* Related Publications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="container mx-auto px-4 md:px-6"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">
            {language === 'pt' ? 'Veja Também' : 'See Also'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {relatedPublications.map((pub, index) => (
              <PostCard key={pub.id} publication={pub} index={index} />
            ))}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
