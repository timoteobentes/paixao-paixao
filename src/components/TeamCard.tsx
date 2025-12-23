import { motion } from 'framer-motion';
import {
  Linkedin,
  Instagram,
  Facebook,
  FileText,
  XIcon
} from 'lucide-react';
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
        className="group relative card-gradient rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-500 flex items-center justify-between gap-10"
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Conteúdo textual (lado esquerdo) */}
        <div className="flex-1 text-start max-w-xl">
          <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
            {member.name}
          </h3>

          <p className="text-accent font-medium text-sm mb-4">
            {member.role[language]}
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {member.bio[language]}
          </p>

          <div className="flex items-center gap-3">
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

            {member.facebook && (
              <motion.a
                href={member.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary hover:bg-purple hover:text-purple-foreground transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="h-4 w-4" />
              </motion.a>
            )}

            {member.x && (
              <motion.a
                href={member.x}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary hover:bg-purple hover:text-purple-foreground transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <XIcon className="h-4 w-4" />
              </motion.a>
            )}

            {member.lattes && (
              <motion.a
                href={member.lattes}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary hover:bg-purple hover:text-purple-foreground transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="h-4 w-4" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Avatar (lado direito) */}
        <div className="relative flex-shrink-0">
          {/* Elemento decorativo circular */}
          <div className="absolute inset-0 rounded-full border border-dashed border-border scale-110 pointer-events-none" />

          <img
            src={member.image}
            alt={member.name}
            className="relative w-[30rem] h-[25rem] object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
