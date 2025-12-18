import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-border bg-card">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-serif font-bold text-foreground">
                Paixão <span className="text-gradient">&</span> Paixão
              </span>
              <span className="block text-xs text-muted-foreground tracking-widest uppercase">
                Advogados Associados
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t.hero.subheadline.slice(0, 100)}...
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/#team" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {t.nav.team}
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">{t.nav.services}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/servicos/contratos-digitais" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {t.services.items.digitalContracts.title}
                </Link>
              </li>
              <li>
                <Link to="/servicos/propriedade-intelectual" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {t.services.items.intellectualProperty.title}
                </Link>
              </li>
              <li>
                <Link to="/servicos/compliance-digital" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {t.services.items.compliance.title}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">{t.nav.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                {t.contact.info.email}
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                {t.contact.info.phone}
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                {t.contact.info.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              {t.footer.privacy}
            </Link>
            <Link to="/termos" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
