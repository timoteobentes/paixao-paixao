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
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Rafael Paixão',
    role: {
      pt: 'Sócio Fundador',
      en: 'Founding Partner',
    },
    bio: {
      pt: 'Especialista em Direito Digital com mais de 15 anos de experiência. Mestre em Proteção de Dados pela USP.',
      en: 'Digital Law specialist with over 15 years of experience. Master in Data Protection from USP.',
    },
    image: '/placeholder.svg',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    id: '2',
    name: 'Dra. Carolina Paixão',
    role: {
      pt: 'Sócia Fundadora',
      en: 'Founding Partner',
    },
    bio: {
      pt: 'Especialista em Propriedade Intelectual e Contratos Digitais. Doutora em Direito pela PUC-SP.',
      en: 'Specialist in Intellectual Property and Digital Contracts. PhD in Law from PUC-SP.',
    },
    image: '/placeholder.svg',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    id: '3',
    name: 'Dr. Marcos Oliveira',
    role: {
      pt: 'Advogado Sênior',
      en: 'Senior Associate',
    },
    bio: {
      pt: 'Especialista em Compliance Digital e LGPD. Certificado em Data Privacy pela IAPP.',
      en: 'Specialist in Digital Compliance and LGPD. Certified in Data Privacy by IAPP.',
    },
    image: '/placeholder.svg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '4',
    name: 'Dra. Amanda Santos',
    role: {
      pt: 'Advogada Associada',
      en: 'Associate',
    },
    bio: {
      pt: 'Especialista em Gestão de Crise e Marketing Digital. MBA em Comunicação Corporativa.',
      en: 'Specialist in Crisis Management and Digital Marketing. MBA in Corporate Communication.',
    },
    image: '/placeholder.svg',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
];
