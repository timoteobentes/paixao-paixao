export type PublicationCategory = 'eventos' | 'na-midia' | 'noticias' | 'artigos';

export interface Publication {
  id: string;
  slug: string;
  category: PublicationCategory;
  title: {
    pt: string;
    en: string;
  };
  summary: {
    pt: string;
    en: string;
  };
  content: {
    pt: string;
    en: string;
  };
  authors: string[];
  date: string;
  image: string;
  tags: string[];
  downloadUrl?: string;
}

export const categoryLabels: Record<PublicationCategory, { pt: string; en: string }> = {
  eventos: { pt: 'Eventos', en: 'Events' },
  'na-midia': { pt: 'Na Mídia', en: 'In the Media' },
  noticias: { pt: 'Notícias', en: 'News' },
  artigos: { pt: 'Artigos', en: 'Articles' },
};

export const publications: Publication[] = [
  {
    id: '1',
    slug: 'pcb-amazonia',
    category: 'artigos',
    title: {
      pt: 'Cadeia Produtiva da Bioeconomia (CPB): Integrando a Amazônia para não entregar a Amazônia',
      en: 'Productive Chain of Bioeconomics (PCB): Integrating the Amazon to not deliver the Amazon',
    },
    summary: {
      pt: 'O potencial da bioeconomia amazônica como vetor de desenvolvimento sustentável, destacando a integração entre biodiversidade, conhecimento, inovação tecnológica e capital humano. Defende a construção de um ecossistema de bioinovação capaz de inserir a Amazônia nas cadeias globais de valor de forma ética, legal e não predatória, valorizando a floresta em pé e promovendo desenvolvimento regional alinhado ao mindset 4.0.',
      en: 'The potential of the Amazonian bioeconomy as a driver of sustainable development, highlighting the integration of biodiversity, knowledge, technological innovation, and human capital. It advocates for the construction of a bio-innovation ecosystem capable of ethically, legally, and non-predatorily integrating the Amazon into global value chains, valuing the standing forest and promoting regional development aligned with the 4.0 mindset.',
    },
    content: {
      pt: `
        O que não podemos ter na sociedade da informação? O conhecimento. A região que possui a maior biodiversidade do planeta também possui muito conhecimento – pouco ou muito explorado. Sabe-se que, a partir de inovações tecnológicas, notadamente a biotecnologia, surgiram novos negócios no contexto global, especialmente nas indústrias farmacêutica, cosmética e de fertilizantes para o agronegócio.

        Segundo dados da Organização para a Cooperação e Desenvolvimento Econômico (OCDE), a bioeconomia movimenta aproximadamente 8 trilhões de reais no mercado global, gerando cerca de 22 milhões de empregos. Portanto, como harmonizar a Cadeia Produtiva da Bioeconomia (CPB) da região amazônica – área estratégica sob a perspectiva geopolítica brasileira – aos fluxos bioeconômicos globais?

        O fortalecimento dos mecanismos que podem dinamizar essa CPB na Amazônia, como a integração digital e o desenvolvimento de capacidades técnicas (elevação dos níveis de infraestrutura e do índice de qualidade do capital humano), tende a funcionar apenas quando integrado a outros fatores que revelariam na Amazônia o ecossistema ideal para um Sistema Regional de Bioinovação.

        Novos processos bioeconômicos envolvendo o mapeamento e a bioprospecção do patrimônio genético da biodiversidade – por meio de inovações como a tecnologia Blockchain e os contratos inteligentes – tornam viável e praticável a atuação de bioempreendimentos dentro do arcabouço legal e em conformidade com as convenções globais sobre a exploração econômica da biodiversidade (como o Protocolo de Nagoya).

        Do ponto de vista político, econômico e jurídico, esse modelo permitiria que a Amazônia brasileira se integrasse às cadeias bioprodutivas globais – mas desta vez de forma racional, não expropriatória e não predatória. Da floresta em pé, o capital natural – como afirma Bertha Becker – tem mais valor. O desenvolvimento sustentável que buscamos para a região se baseia nessa sinergia de processos que envolvem, desde o desenvolvimento humano até o desenvolvimento regional.

        É hora de falarmos sobre mentalidade 4.0 e modelos de negócios disruptivos para o meio ambiente amazônico.
      `,
      en: `
        What we can not we in the information society? The knowledge. The region that has the greatest biodiversity on the planet also has many knowledge - little or very explored. It is known that from technological innovations, notably biotechnology, new businesses have emerged in the global context, especially in the industries of pharmaceuticals, cosmetics, and fertilizers for agribusiness. 

        According to data from the Organization for Economic Cooperation and Development (OECD), the bioeconomy moves approximately 8 trillion reais in the global market, generating approximately 22 million jobs. Therefore, how to harmonize the Bioeconomy Productive Chain (BPC) of the Amazon region - a strategic area under the Brazilian geopolitical point of view - to global bioeconomic flows? 

        Strengthening the mechanisms that can energize this BPC in the Amazon, such as digital integration and technical capacity building (raising infrastructure levels and the quality index of human capital), only tend to work when integrated with other factors that would reveal in the Amazon the ideal ecosystem for a Regional Bio-innovation System. 

        New bioeconomic processes involving mapping and bioprospecting of genetic heritage of biodiversity - through innovations such as Blockchain Technology and Smart Contracts - make it feasible and workable for bio-businesses to occur within the legal framework and in compliance with global conventions about the economic exploitation of biodiversity ( such as the Nagoya Protocol). 

        From a political, economic and legal point of view, in this model we would enable the Brazilian Amazon to integrate into the world's bioproductive chains - but this time in a rational, non-expropriatory and predatory way. From the standing forest, natural capital - as Bertha Becker claims - has more value. The sustainable development that we seek for the region is based on this synergy of processes that involve, from the human development, the regional development.

        It's time to ''Amazonidas'' talk about mindset 4.0 and disruptives business models for Amazon's environment.
      `,
    },
    authors: ['Dr. Rafael Paixão'],
    date: '2019-04-11',
    image: 'https://media.licdn.com/dms/image/v2/C5612AQFUhdsXqCXzQA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1639877756699?e=2147483647&v=beta&t=UQKS-cwbbCPUEQXXJcbkUBUDWdOAVx5-9Msz5mGY4iQ',
    tags: ['PCB', 'Amazonas', 'Bioeconomia', 'Inovação', 'Sustentabilidade'],
    // downloadUrl: '#',
  },
  {
    id: '2',
    slug: 'selva-projeto-desenvolvimento-amazonas',
    category: 'artigos',
    title: {
      pt: 'Um Disruptivo Modelo de Desenvolvimento para o Amazonas: O Projeto SELVA',
      en: 'A Disruptive Development Model for the Amazon: The SELVA Project',
    },
    summary: {
      pt: 'A economia verde como caminho estratégico para o desenvolvimento sustentável do Amazonas, destacando a necessidade de alinhar inovação, bioeconomia e tecnologia para gerar valor global, preservar o capital natural e fortalecer o protagonismo regional e nacional na Amazônia.',
      en: 'The green economy as a strategic path for the sustainable development of the Amazon, highlighting the need to align innovation, bioeconomy, and technology to generate global value, preserve natural capital, and strengthen regional and national leadership in the Amazon.',
    },
    content: {
      pt: `
        No Amazonas temos potencial para desenvolver, via economia verde, um mercado de escalabilidade global. Explico: ao passo que o Estado brasileiro fornece subsídios para o Polo Industrial de Manaus, esquece, no entanto, de adaptar sua política às oportunidades no ecossistema global de inovação. Resumindo, o Governo Central, através de subsídio, faz um dever de casa - muito raso, aliás, em face do seu dever constitucional de equilíbrio entre as regiões brasileiras, que continuam desequilibradas, ao não planejar o incremento no modelo pela via da nova matriz de oportunidade desenvolvimentista – e talvez única viável - que é a economia verde. Essa negligência no protagonismo resultará em que, muito em breve, o Brasil talvez já não seja capaz de resguardar sua soberania sobre a imensa hileia para a exploração racional do seu capital natural.

        A verdadeira intenção na concessão de subsídios fiscais concedidos à região, cujo status geopolítico para o país é da maior relevância (vide os Aquíferos da Grande Amazônia), não foi, certamente, criar castas de poder político, econômico e social, mas desenvolver, pela conservação e valorização, o que já era tido como objeto de valor comercia desde há muito, como se provou na experiência pretérita da exploração das seringueiras (Hevea Brasiliensis), que catapultou a região ao desenvolvimento, mas justo por falta de planejamento e visão de longo prazo, acabou em perda do capital natural.

        Ao alinharmos estratégias de produção do modelo de desenvolvimento atualmente consagrado pela política de incentivos fiscais aos instrumentos adaptados à nova economia verde, criaremos o mindset 4.0. nos atores locais e regionais, adaptando-os à exploração inteligente da gama de produtos oriundas da Bioeconomia.

        Para que o protagonismo nacional aconteça na bioeconomia, em nível global, soluções locais e regionais alimentando o empreendedorismo criativo na Amazônia 4.0. são vitais. O professor Carlos Nobre[1] nos apresenta alguns vetores através da idealização de bases (hubs) de inovações-verdes estratégicas, criando-se, como no caso da startup que designei por "SELVA"- Sistema Eco Legal de Valores Amazônicos, um banco de ativos informacionais exportáveis através das soluções tecnológicas de comercialização em redes globais da bioeconomia.

        Sintetizando o futuro do AMAZONIC BLOCKCHAIN ECOSYSTEM: tecnologia que permitirá que o sistema crie cadeias e valores digitais, novos atores e mercados regionais, e inovações-verdes comerciais, na região considerada ''greencore'' do planeta.

        O meio ambiente produzirá de maneira sustentável quando fornecer e receber – justa e equitativamente – na exploração digital da biodiversidade, na valorização da Propriedade Intelectual e do Conhecimento Tradicional – novos mecanismos de apoio ao desenvolvimento humano aos povos da Amazônia, que fora da unidade das riquezas materiais, nos mostra toda a humanidade das riquezas naturais.
      `,
      en: `
        In the Amazon, we have the potential to develop a globally scalable market through the green economy. Let me explain: while the Brazilian state provides subsidies to the Manaus Industrial Hub, it forgets, however, to adapt its policy to the opportunities in the global innovation ecosystem. In short, the Central Government, through subsidies, does its homework – a very superficial one, in fact, considering its constitutional duty to balance the Brazilian regions, which remain unbalanced – by not planning for an increase in the model through the new matrix of developmental opportunity – and perhaps the only viable one – that is the green economy. This negligence in taking the lead will result in Brazil, very soon, perhaps no longer being able to safeguard its sovereignty over the immense Amazon rainforest for the rational exploitation of its natural capital.

        The true intention behind granting tax subsidies to the region, whose geopolitical status is of paramount importance to the country (see the Amazon Aquifers), was certainly not to create castes of political, economic, and social power, but to develop, through conservation and valorization, what has long been considered a commercially valuable asset, as demonstrated by the past experience of rubber tree (Hevea brasiliensis) exploitation, which catapulted the region to development, but, precisely due to a lack of planning and long-term vision, ended in the loss of natural capital.

        By aligning production strategies of the development model currently enshrined in tax incentive policies with instruments adapted to the new green economy, we will create a 4.0 mindset in local and regional actors, adapting them to the intelligent exploitation of the range of products derived from the bioeconomy.

        For national leadership to occur in the bioeconomy at a global level, local and regional solutions fueling creative entrepreneurship in Amazon 4.0 are vital. Professor Carlos Nobre[1] presents us with some vectors through the idealization of strategic green innovation hubs, creating, as in the case of the startup I designated as "SELVA" - Eco-Legal System of Amazonian Values, a bank of exportable informational assets through technological solutions for commercialization in global bioeconomy networks.

        Synthesizing the future of the AMAZONIC BLOCKCHAIN ECOSYSTEM: technology that will allow the system to create digital value chains, new regional actors and markets, and commercial green innovations, in the region considered the "greencore" of the planet.

        The environment will produce sustainably when it provides and receives – fairly and equitably – in the digital exploitation of biodiversity, in the valorization of Intellectual Property and Traditional Knowledge – new mechanisms to support human development for the peoples of the Amazon, which, beyond the unity of material wealth, shows us the full humanity of natural resources.
      `,
    },
    authors: ['Dr. Rafael Paixão'],
    date: '2020-06-05',
    image: 'https://media.licdn.com/dms/image/v2/C4D12AQFINHRd4cZgEQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1591385003393?e=1770249600&v=beta&t=alwQOA7eoH88kfLcowNrgwnbM4FR_4XHFhnbCYx_AQg',
    tags: ['SELVA', 'Amazônia', 'Desenvolvimento Sustentável', 'Economia Verde', 'Inovação' ],
  }
];

export const getPublicationBySlug = (slug: string): Publication | undefined => {
  return publications.find((pub) => pub.slug === slug);
};

export const getRelatedPublications = (currentSlug: string, limit: number = 3): Publication[] => {
  const current = getPublicationBySlug(currentSlug);
  if (!current) return publications.slice(0, limit);
  
  return publications
    .filter((pub) => pub.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize same category
      const aScore = a.category === current.category ? 1 : 0;
      const bScore = b.category === current.category ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, limit);
};
