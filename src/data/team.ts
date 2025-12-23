export interface TeamMember {
  id: string;
  name: string;
  role: {
    pt: string;
    en: string;
  };
  bio: {
    pt: string;
    en: string;
  };
  image: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  x?: string;
  lattes?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Rafael Paixão',
    role: {
      pt: 'Advogado',
      en: 'Lawyer',
    },
    bio: {
      pt: 'Advogado, pesquisador, empreendedor e professor. Doutorando em Biotecnologia pela UFAM, com foco em inovação e desenvolvimento sustentável. Mestre em Direito Político e Econômico (Mackenzie) e especialista em Direito Digital (USP), Negócios da Amazônia (UEA) e Tecnologias para Negócios (PUC/RS). Fundador da SELVA – Amazonic Blockchain Ecosystem, atua com consultoria jurídica em novas tecnologias, propriedade intelectual e governança, com ênfase na valorização dos ativos naturais da Amazônia. Ex-professor universitário e membro ativo da OAB/AM, com destacada atuação em Direito e inovação. Professor universitário (UNINORTE)',
      en: "Lawyer, researcher, entrepreneur, and professor. PhD candidate in Biotechnology at UFAM, focusing on innovation and sustainable development. Master's degree in Political and Economic Law (Mackenzie) and specialist in Digital Law (USP), Amazonian Business (UEA), and Technologies for Business (PUC/RS). Founder of SELVA – Amazonian Blockchain Ecosystem, he works as a legal consultant in new technologies, intellectual property, and governance, with an emphasis on valuing the natural assets of the Amazon. Former university professor and active member of the OAB/AM (Brazilian Bar Association, Amazonas chapter), with a distinguished career in Law and innovation. University professor (UNINORTE).",
    },
    image: '/rafael-paixao.png',
    linkedin: 'https://www.linkedin.com/in/rafaelvpaixao/',
    instagram: 'https://www.instagram.com/rafaelvpaixao',
    facebook: 'https://www.facebook.com/rafael.paixao',
    x: 'https://x.com/rafaelvpaixao_',
    lattes: 'http://lattes.cnpq.br/4337157772372510'
  }
];
