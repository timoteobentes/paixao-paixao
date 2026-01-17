export interface Translation {
  nav: {
    home: string;
    services: string;
    team: string;
    posts: string;
    faq: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    learnMore: string;
    items: {
      digitalContracts: { title: string; description: string; fullDescription: string; benefits: string[] };
      intellectualProperty: { title: string; description: string; fullDescription: string; benefits: string[] };
      digitalMarketing: { title: string; description: string; fullDescription: string; benefits: string[] };
      compliance: { title: string; description: string; fullDescription: string; benefits: string[] };
      crisisManagement: { title: string; description: string; fullDescription: string; benefits: string[] };
    };
  };
  team: {
    title: string;
    subtitle: string;
  };
  faq: {
    title: string;
    subtitle: string;
    questions: { question: string; answer: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      success: string;
    };
    info: {
      email: string;
      phone: string;
      address: string;
    };
  };
  footer: {
    subheadline: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  servicePage: {
    benefits: string;
    cta: string;
    backToServices: string;
  };
}

export const translations: Record<'pt' | 'en', Translation> = {
  pt: {
    nav: {
      home: 'Início',
      services: 'Soluções',
      team: 'Equipe',
      posts: 'Publicações',
      faq: 'Dúvidas',
      contact: 'Contato',
    },
    hero: {
      headline: 'Excelência Jurídica em Direito Digital para um Mundo Conectado',
      subheadline: 'Atuamos com excelência na proteção de dados, segurança jurídica online e soluções modernas para os desafios do mundo digital.',
      cta: 'Nossas Soluções',
    },
    services: {
      title: 'Nossas Soluções',
      subtitle: 'Soluções jurídicas especializada para o mundo digital',
      learnMore: 'Saiba Mais',
      items: {
        digitalContracts: {
          title: 'Contratos Digitais',
          description: 'Elaboração e revisão de contratos para o ambiente digital com segurança jurídica.',
          fullDescription: 'Oferecemos serviços completos de elaboração, revisão e gestão de contratos digitais. Nossa equipe especializada garante que seus acordos eletrônicos tenham validade jurídica plena, protegendo seus interesses no ambiente virtual.',
          benefits: [
            'Validade jurídica garantida conforme legislação vigente',
            'Cláusulas personalizadas para seu modelo de negócio',
            'Integração com plataformas de assinatura digital',
            'Revisão de termos de uso e políticas de privacidade',
            'Suporte contínuo para atualizações contratuais',
          ],
        },
        intellectualProperty: {
          title: 'Propriedade Intelectual',
          description: 'Proteção de marcas, patentes, direitos autorais e ativos digitais.',
          fullDescription: 'Protegemos seus ativos intelectuais no mundo digital. Desde o registro de marcas e patentes até a defesa de direitos autorais em ambiente online, oferecemos soluções completas para valorizar e proteger sua criatividade.',
          benefits: [
            'Registro de marcas e patentes nacionais e internacionais',
            'Proteção de software e aplicativos',
            'Defesa contra pirataria e uso indevido',
            'Licenciamento e transferência de tecnologia',
            'Monitoramento de uso não autorizado',
          ],
        },
        digitalMarketing: {
          title: 'Orientação Legal ao Marketing Digital',
          description: 'Consultoria jurídica para campanhas e estratégias de marketing online.',
          fullDescription: 'Navegue com segurança pelas complexidades legais do marketing digital. Oferecemos orientação especializada para que suas campanhas estejam em conformidade com a legislação, evitando riscos e maximizando resultados.',
          benefits: [
            'Análise de conformidade de campanhas publicitárias',
            'Orientação sobre uso de dados para segmentação',
            'Revisão de parcerias com influenciadores',
            'Compliance com normas do CONAR',
            'Proteção contra práticas comerciais irregulares',
          ],
        },
        compliance: {
          title: 'Compliance Digital e Segurança de Dados',
          description: 'Adequação à LGPD e implementação de programas de governança de dados.',
          fullDescription: 'Garantimos que sua empresa esteja em total conformidade com a LGPD e outras regulamentações de proteção de dados. Implementamos programas robustos de governança que protegem sua organização e seus clientes.',
          benefits: [
            'Adequação completa à LGPD',
            'Elaboração de políticas de privacidade',
            'Treinamento de equipes',
            'Gestão de consentimentos e direitos dos titulares',
            'Auditorias periódicas de conformidade',
          ],
        },
        crisisManagement: {
          title: 'Gestão de Crise',
          description: 'Resposta rápida e estratégica a incidentes e crises digitais.',
          fullDescription: 'Quando crises digitais acontecem, cada minuto conta. Nossa equipe oferece resposta rápida e estratégica para minimizar danos, proteger sua reputação e garantir recuperação eficiente.',
          benefits: [
            'Resposta imediata 24/7 a incidentes',
            'Comunicação estratégica de crise',
            'Mitigação de danos reputacionais',
            'Coordenação com autoridades competentes',
            'Planos de prevenção e contingência',
          ],
        },
      },
    },
    team: {
      title: 'Nossa Equipe',
      subtitle: 'Profissionais dedicados à excelência jurídica digital',
    },
    faq: {
      title: 'Tira Dúvidas',
      subtitle: 'Respostas para as perguntas mais frequentes',
      questions: [
        {
          question: 'O que é Direito Digital?',
          answer: 'Direito Digital é o ramo do direito que estuda as relações jurídicas no ambiente virtual, englobando temas como proteção de dados, crimes cibernéticos, propriedade intelectual digital e contratos eletrônicos.',
        },
        {
          question: 'Minha empresa precisa se adequar à LGPD?',
          answer: 'Sim, toda empresa que coleta, armazena ou processa dados pessoais de cidadãos brasileiros deve estar em conformidade com a Lei Geral de Proteção de Dados (LGPD), independentemente do seu porte ou segmento.',
        },
        {
          question: 'Contratos digitais têm validade jurídica?',
          answer: 'Sim, contratos digitais possuem plena validade jurídica no Brasil, desde que atendam aos requisitos legais. A Medida Provisória 2.200-2/2001 e o Código Civil reconhecem a validade de documentos eletrônicos e assinaturas digitais.',
        },
        {
          question: 'Como proteger minha marca na internet?',
          answer: 'A proteção da marca na internet envolve o registro junto ao INPI, monitoramento de uso indevido, ações contra concorrência desleal e gestão de domínios. Nossa equipe oferece soluções completas para proteção da sua marca digital.',
        },
        {
          question: 'O que fazer em caso de vazamento de dados?',
          answer: 'Em caso de vazamento, é crucial agir rapidamente: identificar a extensão do incidente, comunicar a ANPD e os titulares afetados conforme exigido pela LGPD, implementar medidas de contenção e documentar todas as ações tomadas.',
        },
      ],
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Estamos prontos para atender você',
      form: {
        name: 'Nome',
        email: 'E-mail',
        subject: 'Assunto',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        success: 'Mensagem enviada com sucesso!',
      },
      info: {
        email: 'rafael@selva.eco.br',
        phone: '+55 (92) 94811-4406',
        address: 'Rua 24 de Maio, 220 - Centro, Manaus - AM (Edifício Rio Negro Center, sala 219)',
      },
    },
    footer: {
      subheadline: 'Excelência Jurídica em Direito Digital para um Mundo Conectado',
      rights: 'Paixão & Paixão Advogados. Todos os direitos reservados.',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Uso',
    },
    servicePage: {
      benefits: 'Benefícios',
      cta: 'Fale com um Especialista',
      backToServices: 'Voltar para Soluções',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      team: 'Team',
      posts: 'Posts',
      faq: 'FAQ',
      contact: 'Contact',
    },
    hero: {
      headline: 'Legal Excellence in Digital Law for a Connected World',
      subheadline: 'We excel in data protection, online legal security, and modern solutions for the challenges of the digital world.',
      cta: 'Our Solutions',
    },
    services: {
      title: 'Our Solutions',
      subtitle: 'Specialized legal soluctions for the digital world',
      learnMore: 'Learn More',
      items: {
        digitalContracts: {
          title: 'Digital Contracts',
          description: 'Drafting and reviewing contracts for the digital environment with legal security.',
          fullDescription: 'We offer complete services for drafting, reviewing, and managing digital contracts. Our specialized team ensures your electronic agreements have full legal validity, protecting your interests in the virtual environment.',
          benefits: [
            'Guaranteed legal validity under current legislation',
            'Customized clauses for your business model',
            'Integration with digital signature platforms',
            'Review of terms of use and privacy policies',
            'Ongoing support for contract updates',
          ],
        },
        intellectualProperty: {
          title: 'Intellectual Property',
          description: 'Protection of trademarks, patents, copyrights, and digital assets.',
          fullDescription: 'We protect your intellectual assets in the digital world. From trademark and patent registration to copyright defense online, we offer complete solutions to value and protect your creativity.',
          benefits: [
            'National and international trademark and patent registration',
            'Software and application protection',
            'Defense against piracy and misuse',
            'Technology licensing and transfer',
            'Monitoring of unauthorized use',
          ],
        },
        digitalMarketing: {
          title: 'Legal Guidance for Digital Marketing',
          description: 'Legal consulting for online marketing campaigns and strategies.',
          fullDescription: 'Navigate safely through the legal complexities of digital marketing. We offer specialized guidance so your campaigns comply with legislation, avoiding risks and maximizing results.',
          benefits: [
            'Compliance analysis of advertising campaigns',
            'Guidance on data use for targeting',
            'Review of influencer partnerships',
            'Compliance with advertising standards',
            'Protection against irregular commercial practices',
          ],
        },
        compliance: {
          title: 'Digital Compliance & Data Security',
          description: 'LGPD compliance and data governance program implementation.',
          fullDescription: 'We ensure your company is fully compliant with LGPD and other data protection regulations. We implement robust governance programs that protect your organization and your customers.',
          benefits: [
            'Complete LGPD compliance',
            'Privacy policy drafting',
            'Team training',
            'Consent management and data subject rights',
            'Periodic compliance audits',
          ],
        },
        crisisManagement: {
          title: 'Crisis Management',
          description: 'Fast and strategic response to digital incidents and crises.',
          fullDescription: 'When digital crises happen, every minute counts. Our team offers fast and strategic response to minimize damage, protect your reputation, and ensure efficient recovery.',
          benefits: [
            'Immediate 24/7 incident response',
            'Strategic crisis communication',
            'Reputational damage mitigation',
            'Coordination with competent authorities',
            'Prevention and contingency plans',
          ],
        },
      },
    },
    team: {
      title: 'Our Team',
      subtitle: 'Professionals dedicated to digital legal excellence',
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Answers to frequently asked questions',
      questions: [
        {
          question: 'What is Digital Law?',
          answer: 'Digital Law is the branch of law that studies legal relationships in the virtual environment, encompassing topics such as data protection, cybercrimes, digital intellectual property, and electronic contracts.',
        },
        {
          question: 'Does my company need to comply with LGPD?',
          answer: 'Yes, every company that collects, stores, or processes personal data of Brazilian citizens must comply with the General Data Protection Law (LGPD), regardless of size or segment.',
        },
        {
          question: 'Are digital contracts legally valid?',
          answer: 'Yes, digital contracts have full legal validity in Brazil, as long as they meet legal requirements. Provisional Measure 2.200-2/2001 and the Civil Code recognize the validity of electronic documents and digital signatures.',
        },
        {
          question: 'How do I protect my brand on the internet?',
          answer: 'Brand protection on the internet involves registration with INPI, monitoring of misuse, actions against unfair competition, and domain management. Our team offers complete solutions to protect your digital brand.',
        },
        {
          question: 'What to do in case of a data breach?',
          answer: 'In case of a breach, it is crucial to act quickly: identify the extent of the incident, notify the ANPD and affected data subjects as required by LGPD, implement containment measures, and document all actions taken.',
        },
      ],
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'We are ready to assist you',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        success: 'Message sent successfully!',
      },
      info: {
        email: 'rafael@selva.eco.br',
        phone: '+55 (92) 94811-4406',
        address: 'Rua 24 de Maio, 220 - Centro, Manaus - AM (Edifício Rio Negro Center, sala 219)',
      },
    },
    footer: {
      subheadline: 'Legal Excellence in Digital Law for a Connected World',
      rights: 'Paixão & Paixão Lawyers. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
    },
    servicePage: {
      benefits: 'Benefits',
      cta: 'Talk to a Specialist',
      backToServices: 'Back to Services',
    },
  },
};
