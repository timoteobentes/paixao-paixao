import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { services } from '@/data/services';
import { ServiceCard } from './ServiceCard';

export const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            {t.services.subtitle}
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-accent to-purple" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
