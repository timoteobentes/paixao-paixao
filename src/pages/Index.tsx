import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { TeamSection } from '@/components/TeamSection';
import { FAQSection } from '@/components/FAQSection';

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <BackgroundEffects />
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <TeamSection />
        <FAQSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
