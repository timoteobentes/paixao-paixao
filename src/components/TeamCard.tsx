import { motion } from 'framer-motion';
import { Linkedin, Instagram, User, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TeamMember } from '@/data/team';

interface TeamCardProps {
  member: TeamMember;
  index: number;
  onClick: () => void;
}

export const TeamCard = ({ member, index, onClick }: TeamCardProps) => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative cursor-pointer h-full"
    >
      {/* Container do Card */}
      <div className="bg-background rounded-[2rem] p-4 border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
        
        {/* Área da Foto (Fundo Cinza/Secundário como na imagem) */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-secondary mb-4">
            {/* Se tiver URL de imagem real, use <img src={member.image} ... /> */}
            <div className="w-full h-full flex items-center justify-center bg-accent/5 group-hover:scale-105 transition-transform duration-700">
              {/* <User className="w-20 h-20 text-accent/30" /> */}
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
        </div>

        {/* Informações Iniciais (Abaixo da foto) */}
        <div className="px-2 pb-2 text-center">
          <h3 className="text-xl font-serif font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
            {member.name}
          </h3>
          <p className="text-muted-foreground text-sm">
            {member.role[language]}
          </p>
        </div>

        {/* OVERLAY DE HOVER (Estilo Dark Card da Imagem) */}
        <div className="absolute inset-0 bg-[#1a1a1a] rounded-[2rem] p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-2xl">
          
          <div>
            <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Sobre</div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight">
              {member.name}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {member.role[language]}
            </p>
            
            {/* Minibio com truncamento (line-clamp) */}
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
              {member.bio[language]}
            </p>

            <p className="text-gray-400 text-lg mt-4">
              Saiba mais...
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-between">
            <div className="flex gap-3">
              {member.linkedin && (
                <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                  <Linkedin className="h-4 w-4" />
                </div>
              )}
              {member.instagram && (
                <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                  <Instagram className="h-4 w-4" />
                </div>
              )}
            </div>
            
            {/* Ícone indicando que é clicável */}
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};