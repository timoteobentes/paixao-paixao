import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AmaDevSignature from './AmaDevSignature';

export const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const smoothScrollTo = (targetId: string) => {
    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (!href.startsWith('/#')) {
      navigate(href);
      window.scrollTo(0, 0);
      return;
    }

    const targetId = href.replace('/#', '');

    if (location.pathname === '/') {
      smoothScrollTo(targetId);
    } else {
      navigate('/', { state: { scrollTo: targetId } });
    }
  };

  return (
    <footer className="relative border-t border-border/40 bg-card overflow-hidden">
      {/* Subtle Background Glow for Footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Identity */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="group inline-flex flex-col items-start">
              <span className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                PAIXÃO & PAIXÃO
              </span>
              <span className='w-full h-[1px] bg-foreground/20 mt-1 mb-1.5 transition-colors group-hover:bg-primary/40'></span>
              <span className="block text-xs tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                Advogados Associados
              </span>
            </Link>
            <p className="text-base text-muted-foreground/80 leading-relaxed max-w-sm font-sans">
              {t.footer.subheadline}
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-secondary/50 border border-border/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:border-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-secondary/50 border border-border/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:border-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold text-foreground mb-6">Navegação</h4>
            <ul className="space-y-4">
              {[
                { label: t.nav.home, href: '/#hero' },
                { label: t.nav.services, href: '/#services' },
                { label: t.nav.team, href: '/#team' },
                { label: t.nav.contact, href: '/contato' },
                { label: t.footer.privacy, href: '/privacidade' }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if(item.href.startsWith('/#')) handleNavClick(e, item.href);
                    }}
                    className="group flex items-center text-[15px] font-sans font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialities */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-foreground mb-6">{t.nav.services}</h4>
            <ul className="space-y-4">
              {[
                { label: t.services.items.digitalContracts.title, href: '/servicos/contratos-digitais' },
                { label: t.services.items.intellectualProperty.title, href: '/servicos/propriedade-intelectual' },
                { label: t.services.items.compliance.title, href: '/servicos/compliance-digital' },
                { label: t.services.items.crisisManagement.title, href: '/servicos/gestao-de-crise' }
              ].map((service) => (
                <li key={service.label}>
                  <Link 
                    to={service.href} 
                    className="group flex items-center text-[15px] font-sans font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="relative line-clamp-1">
                      {service.label}
                    </span>
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (Refactored to point to form) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-foreground mb-6">{t.nav.contact}</h4>
            <ul className="space-y-6">
              {/* Email Link -> Now redirects internally to Contact Page */}
              <li className="flex items-center gap-4 text-[15px] font-sans text-muted-foreground group">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Mail className="h-4 w-4" />
                </div>
                <Link to="/contato" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-foreground font-medium transition-colors">
                  {t.contact.info.email}
                </Link>
              </li>
              
              <li className="flex items-center gap-4 text-[15px] font-sans text-muted-foreground group">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Phone className="h-4 w-4" />
                </div>
                <a href="/contato" className="hover:text-foreground font-medium transition-colors">
                  {t.contact.info.phone}
                </a>
              </li>
              
              <li className="flex items-start gap-4 text-[15px] font-sans text-muted-foreground group">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary mt-0.5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="leading-relaxed font-medium">
                  {t.contact.info.address}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-muted-foreground/60">
            © {year} {t.footer.rights}
          </p>
          <div className="flex gap-2 items-center text-sm font-medium text-muted-foreground/60">
            <AmaDevSignature />
          </div>
        </div>
      </div>
    </footer>
  );
};
