import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const { t } = useLanguage();
  const serviceData = t.services.items[service.translationKey];
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link to={`/servicos/${service.slug}`} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2rem]">
        <motion.div
          className="group relative h-full bg-background/40 backdrop-blur-sm rounded-[2rem] p-10 border border-border/40 hover:border-success/40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex flex-col"
          whileHover={{ y: -8 }}
        >
          {/* Subtle Glow Underlay that kicks in on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent rounded-[2rem]" />
          </div>

          <div className="relative z-10 flex flex-col h-full">
            {/* Icon Header */}
            <div className="mb-8 flex items-start justify-between">
              <div className="p-4 rounded-2xl bg-secondary/80 text-foreground group-hover:bg-success/10 group-hover:text-success transition-colors duration-500">
                <Icon className="h-6 w-6" />
              </div>
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-background/50 text-muted-foreground group-hover:bg-success group-hover:text-success-foreground group-hover:border-success transition-all duration-500">
                <ArrowUpRight className="h-5 w-5 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-success transition-colors duration-500">
              {serviceData.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed flex-grow font-sans text-[15px]">
              {serviceData.description}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};
