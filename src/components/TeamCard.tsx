import { motion } from 'framer-motion';
import { Linkedin, Instagram, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TeamMember } from '@/data/team';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export const TeamCard = ({ member, index }: TeamCardProps) => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="group relative card-gradient rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-500 text-center flex"
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover" />
          {/* Glow effect */}
          {/* <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" /> */}
        </div>

        {/* Info */}
        <div className="flex-1 text-start ml-12">
          <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
            {member.name}
          </h3>
          <p className="text-accent font-medium text-sm mb-3">
            {member.role[language]}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {member.bio[language]}
          </p>

          <div className="flex items-start justify-start gap-3">
            {member.linkedin && (
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
            )}
            {member.instagram && (
              <motion.a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary hover:bg-purple hover:text-purple-foreground transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-4 w-4" />
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
