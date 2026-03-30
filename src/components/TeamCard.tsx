import { motion } from 'framer-motion';
import { Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="group relative cursor-pointer h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2.5rem]"
    >
      {/* Container do Card */}
      <div className="bg-background/40 backdrop-blur-sm rounded-[2.5rem] p-5 border border-border/40 hover:border-primary/30 transition-all duration-700 h-full flex flex-col hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] ease-[cubic-bezier(0.16,1,0.3,1)]">
        
        {/* Área da Foto com Recorte Elegante Asimétrico */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-tl-2xl rounded-tr-[4rem] rounded-br-2xl rounded-bl-[4rem] bg-secondary mb-6 isolate">
            <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            {/* Inner Shadow for depth */}
            <div className="absolute inset-0 shadow-[inset_0_-40px_40px_-20px_rgba(0,0,0,0.5)] z-10 pointer-events-none rounded-tl-2xl rounded-tr-[4rem] rounded-br-2xl rounded-bl-[4rem]"></div>
        </div>

        {/* Informações Iniciais (Abaixo da foto) */}
        <div className="px-3 pb-3 text-center">
          <h3 className="text-xl font-serif font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-500">
            {member.name}
          </h3>
          <p className="text-muted-foreground/80 text-sm font-medium uppercase tracking-wider">
            {member.role[language]}
          </p>
        </div>

        {/* OVERLAY DE HOVER (Dark Card Premium) */}
        <div className="absolute inset-0 bg-[#0f1115] rounded-[2.5rem] p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0 shadow-2xl ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden">
          
          {/* Subtle Glow Top Right inside Overlay */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 blur-[50px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <div className="text-[10px] text-accent/80 mb-2 uppercase tracking-[0.2em] font-medium">Perfil</div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight">
              {member.name}
            </h3>
            <p className="text-gray-400 text-sm mb-5 font-medium">
              {member.role[language]}
            </p>
            
            <p className="text-gray-300/90 text-[15px] leading-relaxed line-clamp-4 font-sans border-l-2 border-accent/40 pl-4">
              {member.bio[language]}
            </p>

            <span className="text-accent text-sm mt-5 inline-block font-medium hover:text-white transition-colors">
              Ler perfil completo &rarr;
            </span>
          </div>

          <div className="relative z-10 mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
            <div className="flex gap-3">
              {member.linkedin && (
                <div className="p-2.5 rounded-full bg-white/5 hover:bg-accent hover:text-accent-foreground text-gray-300 transition-all duration-300 border border-white/5">
                  <Linkedin className="h-4 w-4" />
                </div>
              )}
              {member.instagram && (
                <div className="p-2.5 rounded-full bg-white/5 hover:bg-purple hover:text-white text-gray-300 transition-all duration-300 border border-white/5">
                  <Instagram className="h-4 w-4" />
                </div>
              )}
            </div>
            
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 hover:bg-accent hover:text-white transition-all duration-300 shadow-lg">
                <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};