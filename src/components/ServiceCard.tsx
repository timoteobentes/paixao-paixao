import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/servicos/${service.slug}`} className="block h-full">
        <motion.div
          className="group relative h-full card-gradient rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-500 glow-border overflow-hidden"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {/* Glow Effect on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-accent/5 rounded-2xl" />
          </div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="mb-6 inline-flex">
              <motion.div
                className="p-4 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="h-7 w-7" />
              </motion.div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
              {serviceData.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              {serviceData.description}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-2 text-accent font-medium">
              <span>{t.services.learnMore}</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

          {/* Decorative Element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />
        </motion.div>
      </Link>
    </motion.div>
  );
};
