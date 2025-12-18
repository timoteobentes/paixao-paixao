import { FileText, Shield, Megaphone, Lock, AlertTriangle } from 'lucide-react';

export interface Service {
  id: string;
  slug: string;
  icon: typeof FileText;
  translationKey: 'digitalContracts' | 'intellectualProperty' | 'digitalMarketing' | 'compliance' | 'crisisManagement';
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'contratos-digitais',
    icon: FileText,
    translationKey: 'digitalContracts',
  },
  {
    id: '2',
    slug: 'propriedade-intelectual',
    icon: Shield,
    translationKey: 'intellectualProperty',
  },
  {
    id: '3',
    slug: 'marketing-digital',
    icon: Megaphone,
    translationKey: 'digitalMarketing',
  },
  {
    id: '4',
    slug: 'compliance-digital',
    icon: Lock,
    translationKey: 'compliance',
  },
  {
    id: '5',
    slug: 'gestao-de-crise',
    icon: AlertTriangle,
    translationKey: 'crisisManagement',
  },
];
