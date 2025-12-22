import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { teamMembers } from '@/data/team';
import { TeamCard } from './TeamCard';

export const TeamSection = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-24 bg-secondary/30 relative">
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
            {t.team.subtitle}
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-purple to-accent" />
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
