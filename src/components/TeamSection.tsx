import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { teamMembers, TeamMember } from '@/data/team';
import { TeamCard } from './TeamCard';
import { X, Linkedin, Instagram } from 'lucide-react';

const modalVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      damping: 25, 
      stiffness: 200, 
      staggerChildren: 0.1, 
      delayChildren: 0.1 
    }
  },
  exit: { 
    opacity: 0, 
    y: 20, 
    scale: 0.95, 
    transition: { duration: 0.2 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", damping: 25, stiffness: 200 } 
  }
};

export const TeamSection = () => {
  const { t, language } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Escurecer o scroll de fundo quando o modal abre (body lock)
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMember]);

  return (
    <section id="team" className="py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            {t.team.subtitle}
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-purple to-accent" />
        </motion.div>

        {/* Grid da Equipe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            
            {/* Backdrop: Fundo escuro com leve blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            
            {/* Container do Modal: Glassmorphism Ultra Premium */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-background/90 backdrop-blur-xl w-full max-w-4xl rounded-[2rem] shadow-[0_10px_50px_-12px_rgba(var(--primary),0.3)] overflow-hidden border border-white/10 flex flex-col md:flex-row z-10 max-h-[90vh]"
            >
              {/* Botão Fechar Isolado - Hover rotaciona 90 graus */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:rotate-90 hover:scale-110 transition-all duration-300 z-50 group"
              >
                <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </button>

              {/* Área da Foto com Degradê para mesclar o vidro */}
              <div className="w-full md:w-2/5 h-64 md:h-auto relative shrink-0 isolate">
                <img 
                  src={selectedMember.image || '/placeholder-avatar.jpg'} 
                  alt={selectedMember.name} 
                  className="w-full h-full object-cover"
                />
                {/* Degradê Mobile (escurece em baixo) */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent md:hidden pointer-events-none" />
                {/* Degradê Desktop (escurece na direita) */}
                <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-transparent via-background/20 to-background/90 pointer-events-none" />
              </div>

              {/* Área de Conteúdo Internamente Animada */}
              <div className="flex-1 p-8 md:p-12 text-left flex flex-col justify-center overflow-hidden">
                <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 w-[90%] leading-tight">
                  {selectedMember.name}
                </motion.h3>
                
                <motion.p variants={itemVariants} className="text-accent font-medium text-[13px] mb-8 uppercase tracking-[0.1em]">
                  {selectedMember.role[language]}
                </motion.p>
                
                {/* Scrollbar Customizada Ultra Minimalista */}
                <motion.div 
                  variants={itemVariants} 
                  className="prose prose-sm text-gray-300/90 leading-relaxed font-sans mb-10 overflow-y-auto pr-4 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20 transition-colors"
                  style={{ maxHeight: '280px' }}
                >
                  {selectedMember.bio[language]}
                </motion.div>

                {/* Botões Sociais com Padrão de Design Subindo */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-auto">
                  {selectedMember.linkedin && (
                    <a 
                      href={selectedMember.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 hover:text-primary hover:-translate-y-1 transition-all duration-300 text-sm font-medium text-gray-300 shadow-sm group"
                    >
                      <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {selectedMember.instagram && (
                    <a 
                      href={selectedMember.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-purple/20 hover:border-purple/50 hover:text-purple hover:-translate-y-1 transition-all duration-300 text-sm font-medium text-gray-300 shadow-sm group"
                    >
                      <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Instagram</span>
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};