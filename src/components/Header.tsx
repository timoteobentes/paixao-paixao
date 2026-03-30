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
  const [scrolled, setScrolled] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { href: '/#hero', label: t.nav.home },
    { href: '/#services', label: t.nav.services },
    { href: '/#team', label: t.nav.team },
    { href: '/posts', label: t.nav.posts },
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pointer-events-none">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-500 ease-in-out pointer-events-auto ${
          scrolled 
            ? 'glass shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="/" 
              onClick={(e) => handleNavClick(e, '/#hero')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <motion.div
                className="relative flex flex-col items-center text-foreground"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <span className="text-xl md:text-2xl font-serif font-bold tracking-tight">
                  PAIXÃO & PAIXÃO
                </span>
                <span className={`w-full h-[1px] transition-colors duration-500 ${scrolled ? 'bg-primary/30' : 'bg-foreground/20'}`}></span>
                <span className="block text-[10px] md:text-xs tracking-widest uppercase mt-0.5 text-muted-foreground group-hover:text-foreground transition-colors">
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
                  className={`relative text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    isActive(link.href) ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary rounded-full"
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
                className="hidden sm:flex items-center gap-1.5 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="uppercase font-medium">{language}</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative overflow-hidden hover:bg-primary/10 hover:text-primary transition-colors"
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
                className="lg:hidden hover:bg-primary/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
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
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-6 pb-6 pt-4 border-t border-border/30 mt-4 mx-4">
                <nav className="flex flex-col gap-5">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`text-lg font-medium transition-colors cursor-pointer ${
                        isActive(link.href) ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="flex items-center gap-4 pt-4 border-t border-border/30 mt-2"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                      className="flex items-center gap-2 w-full justify-center border-primary/20 hover:bg-primary/10"
                    >
                      <Globe className="h-4 w-4" />
                      <span className="uppercase font-medium">{language === 'pt' ? 'English' : 'Português'}</span>
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};