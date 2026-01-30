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
    name: 'Dr. Rafael Veiga Paixão',
    role: {
      pt: 'Advogado (OAB/AM n. 11.322)',
      en: 'Lawyer (OAB/AM n. 11.322)',
    },
    bio: {
      pt: 'Advogado (OAB/AM n. 11.322), pesquisador, empreendedor e professor. Doutorando em Biotecnologia pela UFAM, com foco em inovação e desenvolvimento sustentável. Mestre em Direito Político e Econômico (Mackenzie) e especialista em Direito Digital (USP), Negócios da Amazônia (UEA) e Tecnologias para Negócios (PUC/RS). Fundador da SELVA – Amazonic Blockchain Ecosystem, atua com consultoria jurídica em novas tecnologias, propriedade intelectual e governança, com ênfase na valorização dos ativos naturais da Amazônia. Ex-professor universitário e membro ativo da OAB/AM, com destacada atuação em Direito e inovação. Professor universitário (UNINORTE)',
      en: "Lawyer (OAB/AM n. 11.322), researcher, entrepreneur, and professor. PhD candidate in Biotechnology at UFAM, focusing on innovation and sustainable development. Master's degree in Political and Economic Law (Mackenzie) and specialist in Digital Law (USP), Amazonian Business (UEA), and Technologies for Business (PUC/RS). Founder of SELVA – Amazonian Blockchain Ecosystem, he works as a legal consultant in new technologies, intellectual property, and governance, with an emphasis on valuing the natural assets of the Amazon. Former university professor and active member of the OAB/AM (Brazilian Bar Association, Amazonas chapter), with a distinguished career in Law and innovation. University professor (UNINORTE).",
    },
    image: '/rafael.png',
    linkedin: 'https://www.linkedin.com/in/rafaelvpaixao',
    instagram: 'https://www.instagram.com/rafaelvpaixao',
    facebook: 'https://www.facebook.com/rafael.paixao',
    x: 'https://x.com/rafaelvpaixao_',
    lattes: 'http://lattes.cnpq.br/4337157772372510'
  },
  {
    id: '2',
    name: 'Dr. Antônio Dionysio Carvalho Paixão',
    role: {
      pt: 'Advogado (OAB/PA n. 4.410)',
      en: 'Lawyer (OAB/PA n. 4.410)',
    },
    bio: {
      pt: 'Advogado (OAB/PA n. 4.410). Especialista em Direito Tributário e Processos Estratégicos. Procurador do Município de Manaus (aposentado).',
      en: "Lawyer (OAB/PA n. 4.410). Specialist in Tax Law and Strategic Processes. Former Municipal Attorney of Manaus (retired).",
    },
    image: '/dionysio.png',
    linkedin: 'https://www.linkedin.com/in/dionysio-paix%C3%A3o-46401736',
    instagram: 'https://www.instagram.com/dpgmail',
    facebook: '',
    x: '',
    lattes: ''
  },
  {
    id: '3',
    name: 'Waleska Braga',
    role: {
      pt: 'Economista. Especialista em Métodos Ágeis',
      en: 'Economist. Specialist in Agile Methods',
    },
    bio: {
      pt: 'Economista. Especialista em Métodos Ágeis',
      en: "Economist. Specialist in Agile Methods",
    },
    image: '/waleska.png',
    linkedin: '',
    instagram: 'https://www.instagram.com/waleskafbraga',
    facebook: '',
    x: '',
    lattes: ''
  },
  {
    id: '4',
    name: 'Sofia Laranjeira',
    role: {
      pt: 'Analista de Inovação',
      en: 'Innovation Analyst',
    },
    bio: {
      pt: 'Analista de Inovação',
      en: 'Innovation Analyst',
    },
    image: 'https://renatapimentel.com.br/wp-content/uploads/2024/06/advogado-para-empresas-scaled.jpg',
    linkedin: 'https://www.linkedin.com/in/sofia-laranjeira-a91644186',
    instagram: 'https://www.instagram.com/sofialrj_/',
    facebook: '',
    x: '',
    lattes: ''
  },
];
