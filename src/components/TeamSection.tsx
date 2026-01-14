import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { teamMembers, TeamMember } from '@/data/team';
import { TeamCard } from './TeamCard';
import { X, Linkedin, Instagram } from 'lucide-react';

export const TeamSection = () => {
  const { t, language } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        {/* Cabeçalho da Seção */}
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

        {/* Grid da Equipe (4 Colunas em telas grandes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard 
              key={member.id} 
              member={member} 
              index={index} 
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>

      {/* Modal de Detalhes do Membro */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-background w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-border"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-accent/20 transition-colors z-10"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Foto no Modal */}
                <div className="w-full md:w-2/5 h-64 md:h-auto bg-secondary relative">
                  {/* Substitua pelo componente Image do Next.js se estiver usando */}
                  <div className="w-full h-full flex items-center justify-center bg-accent/10">
                     {/* Placeholder se não tiver imagem real, usar a mesma lógica do card */}
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${selectedMember.image || '/placeholder-avatar.jpg'})` }} />
                  </div>
                </div>

                {/* Conteúdo do Modal */}
                <div className="flex-1 p-8 text-left">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-1 w-[90%]">
                    {selectedMember.name}
                  </h3>
                  <p className="text-accent font-medium text-lg mb-6">
                    {selectedMember.role[language]}
                  </p>
                  
                  <div className="prose prose-sm text-muted-foreground mb-8 min-h-[264px] max-h-[300px] overflow-y-auto pr-2">
                    {selectedMember.bio[language]}
                  </div>

                  <div className="flex gap-4">
                    {selectedMember.linkedin && (
                      <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-accent hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {selectedMember.instagram && (
                      <a href={selectedMember.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-purple hover:text-white transition-colors">
                        <Instagram className="w-5 h-5" />
                        <span>Instagram</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};