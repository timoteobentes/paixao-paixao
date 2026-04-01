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
    name: 'Dr. Ricardo Carvalho Paixão',
    role: {
      pt: 'Advogado (OAB/AM n. 3.742)',
      en: 'Lawyer (OAB/AM n. 3.742)',
    },
    bio: {
      pt: 'Advogado (OAB/AM n. 3.742) com 25 anos de experiência, com atuação destacada em Manaus e Brasília. Professor universitário e de pós-graduação, com sólida contribuição na formação acadêmica e profissional no campo jurídico. Fundador e CEO do ITEAM, desenvolve e lidera iniciativas voltadas à inovação, capacitação e aprimoramento estratégico no setor jurídico, com foco em excelência, tecnologia e desenvolvimento institucional.',
      en: "Lawyer (OAB/AM n. 3.742) with 25 years of experience, with a distinguished career in Manaus and Brasília. University and postgraduate professor, with solid contributions to the academic and professional training in the legal field. Founder and CEO of ITEAM, he develops and leads initiatives focused on innovation, training, and strategic improvement in the legal sector, with a focus on excellence, technology, and institutional development.",
    },
    image: '/ricardo.png',
    linkedin: 'https://www.linkedin.com/in/ricardo-paix%C3%A3o-a83aa475',
    instagram: 'https://www.instagram.com/ricopaixao_',
    facebook: '',
    x: '',
    lattes: ''
  },
  {
    id: '4',
    name: 'Dra. Gisella Paixão',
    role: {
      pt: 'Advogado (OAB/AM n. 3.742)',
      en: 'Lawyer (OAB/AM n. 3.742)',
    },
    bio: {
      pt: 'Advogado (OAB/AM n. 3.742).',
      en: "Lawyer (OAB/AM n. 3.742).",
    },
    image: '/gisella.png',
    linkedin: '',
    instagram: '',
    facebook: '',
    x: '',
    lattes: ''
  },
  {
    id: '5',
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
];
