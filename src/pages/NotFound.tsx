import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { BackgroundEffects } from "@/components/BackgroundEffects";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden selection:bg-accent/30 selection:text-accent-foreground">
      <BackgroundEffects />
      
      {/* Glow Roxo/Azul Central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          {/* Efeito Glitch 404 Premium */}
          <div className="relative inline-block mb-2">
            <h1 className="text-[10rem] md:text-[14rem] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent via-purple to-primary leading-none drop-shadow-[0_0_50px_rgba(var(--accent),0.3)]">
              404
            </h1>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Jurisdição não encontrada.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 font-sans max-w-lg mx-auto leading-relaxed">
            A página ou recurso legal que você está tentando acessar está fora de vigência ou foi movida para outro domínio.
          </p>

          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-3 px-8 py-5 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-[0_0_30px_-5px_rgba(var(--accent),0.5)] transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Retornar à Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
