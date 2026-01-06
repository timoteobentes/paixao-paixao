/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { href: '/#hero', label: t.nav.home },
    { href: '/#services', label: t.nav.services },
    { href: '/#team', label: t.nav.team },
    { href: '/#faq', label: t.nav.faq },
    { href: '/contato', label: t.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href.replace('/#', '/');
  };

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

  useEffect(() => {
    if (location.pathname === '/' && location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo;

      setTimeout(() => {
        smoothScrollTo(targetId);
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

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
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="glass mx-4 mt-4 rounded-2xl"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="/" 
              onClick={(e) => handleNavClick(e, '/#hero')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <motion.div
                className="relative flex flex-col items-center text-foreground"
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <span className="text-xl md:text-2xl font-serif font-bold">
                  PAIXÃO & PAIXÃO
                </span>
                <span className='w-[100%] h-[1px] bg-foreground'></span>
                <span className="block text-[10px] md:text-xs tracking-widest uppercase">
                  Advogados Associados
                </span>
              </motion.div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm font-medium transition-colors hover:text-accent cursor-pointer ${
                    isActive(link.href) ? 'text-accent' : 'text-foreground/80'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Actions (Language / Theme / Mobile) */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                className="hidden sm:flex items-center gap-1.5 text-sm"
              >
                <Globe className="h-4 w-4" />
                <span className="uppercase font-medium">{language}</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {theme === 'light' ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-border/50"
            >
              <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-base font-medium transition-colors cursor-pointer ${
                      isActive(link.href) ? 'text-accent' : 'text-foreground/80'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex items-center gap-2 pt-2 border-t border-border/50">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                    className="flex items-center gap-1.5"
                  >
                    <Globe className="h-4 w-4" />
                    <span className="uppercase font-medium">{language === 'pt' ? 'EN' : 'PT'}</span>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};