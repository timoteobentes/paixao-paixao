import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-accent-foreground">
      <BackgroundEffects />
      <Header />

      <main className="relative pt-40 pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-foreground mb-6 tracking-tight">
              {language === 'pt' ? 'Política de Privacidade' : 'Privacy Policy'}
            </h1>
            <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-accent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-background/40 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-border/40"
          >
            <div className="prose prose-invert prose-lg max-w-4xl mx-auto prose-p:text-muted-foreground prose-headings:font-serif prose-headings:text-foreground prose-a:text-accent hover:prose-a:text-accent/80 font-sans">
              <p>Última atualização: 30 de Março de 2026</p>
              
              <h2>1. Introdução</h2>
              <p>
                A Paixão & Paixão Advogados Associados valoriza a sua privacidade e está comprometida
                em proteger os seus dados pessoais. Esta política de privacidade informará como
                cuidamos dos seus dados pessoais quando você visita o nosso website. Elaboramos nossa política 
                para ser clara e estar completamente alinhada à LGPD.
              </p>

              <h2>2. Os dados que coletamos sobre você</h2>
              <p>
                Podemos coletar, usar, armazenar e transferir diferentes tipos de dados
                pessoais sobre você, através de nossos formulários de contato. Estes dados podem ser categorizados da seguinte forma:
              </p>
              <ul>
                <li><strong>Dados de Identidade:</strong> inclui nome, sobrenome ou títulos corporativos.</li>
                <li><strong>Dados de Contato:</strong> inclui endereço de e-mail e números de telefone.</li>
                <li><strong>Dados Técnicos:</strong> inclui endereço de protocolo de internet (IP), dados de login de navegador, etc.</li>
              </ul>

              <h2>3. Como usamos os seus dados pessoais</h2>
              <p>
                Reteremos e usaremos os seus dados apenas quando a lei nos permitir e em rigoroso cumprimento com a Lei Geral de Proteção de Dados (LGPD).
                Mais comumente, usaremos os seus dados pessoais nas seguintes circunstâncias:
              </p>
              <ul>
                <li>Quando precisarmos executar o contrato legal de prestação de serviços jurídicos que estamos prestes a celebrar ou já celebramos com você.</li>
                <li>Quando for estritamente necessário para os nossos interesses legítimos, e desde que seus interesses não se sobreponham a eles.</li>
                <li>Quando precisarmos cumprir uma obrigação regulatória.</li>
              </ul>

              <h2>4. Segurança de Dados no Universo Digital</h2>
              <p>
                Sendo um escritório de advocacia focado em Direito Digital, as medidas de segurança adotadas aqui representam a vanguarda do setor de cibersegurança e compliance.
                Implementamos diretrizes de segurança avançadas para evitar que os seus dados
                pessoais sejam acidentalmente perdidos, usados de forma inadequada, alterados ou divulgados.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
