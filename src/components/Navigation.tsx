import { useState, useEffect, useRef, memo } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Navigation = memo(function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const rafRef = useRef<number>();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      // throttle with requestAnimationFrame
      if (rafRef.current) return;
      
      rafRef.current = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        rafRef.current = undefined;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsLangMenuOpen(false);
  };

  const navItems = [
    { label: t('nav.team'), id: 'team', isRoute: false },
    { label: t('nav.projects'), id: 'projects', isRoute: false },
  ];

  const routeItems = [
    { label: t('nav.allProjects'), path: '/projects' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.button
              className="group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg sm:text-xl font-bold group-hover:text-[#88c8c3] transition-colors">
                {t('nav.brand')}
              </span>
            </motion.button>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {isHome && navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm lg:text-base text-gray-700 hover:text-[#88c8c3] transition-colors font-semibold relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#88c8c3] to-[#a8b5ff] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            
            {!isHome && (
              <Link to="/">
                <motion.button
                  className="text-sm lg:text-base text-gray-700 hover:text-[#88c8c3] transition-colors font-semibold"
                  whileHover={{ y: -2 }}
                >
                  Home
                </motion.button>
              </Link>
            )}

            {/* Language Selector */}
            <div className="relative">
              <motion.button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{currentLanguage.flag}</span>
              </motion.button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {languages.map((lang) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                          i18n.language === lang.code ? 'bg-[#88c8c3]/10 text-[#88c8c3]' : 'text-gray-700'
                        }`}
                        whileHover={{ x: 4 }}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {isHome ? (
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="relative px-4 lg:px-6 py-2 text-white rounded-full overflow-hidden text-sm lg:text-base font-semibold shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(136, 200, 195, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{t('nav.contact')}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#88c8c3] to-[#a8b5ff]"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                />
              </motion.button>
            ) : (
              <Link to="/#contact">
                <motion.button
                  className="relative px-4 lg:px-6 py-2 text-white rounded-full overflow-hidden text-sm lg:text-base font-semibold shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(136, 200, 195, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{t('nav.contact')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#88c8c3] to-[#a8b5ff]" />
                </motion.button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 hover:bg-gray-100 rounded-xl transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-gray-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-5 py-5 border-t border-gray-100"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-3">
                {isHome ? (
                  navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left px-5 py-3.5 text-gray-700 hover:text-[#88c8c3] hover:bg-gray-50 rounded-2xl transition-colors font-semibold text-base"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.button>
                  ))
                ) : (
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <motion.button
                      className="w-full text-left px-5 py-3.5 text-gray-700 hover:text-[#88c8c3] hover:bg-gray-50 rounded-2xl transition-colors font-semibold text-base"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Home
                    </motion.button>
                  </Link>
                )}
                
                {/* Mobile Language Selector */}
                <motion.div
                  className="flex gap-2 px-5 py-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex-1 px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                        i18n.language === lang.code
                          ? 'bg-[#88c8c3] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      {lang.flag} {lang.code.toUpperCase()}
                    </motion.button>
                  ))}
                </motion.div>

                {isHome ? (
                  <motion.button
                    onClick={() => scrollToSection('contact')}
                    className="px-5 py-3.5 bg-gradient-to-r from-[#88c8c3] to-[#a8b5ff] text-white rounded-2xl shadow-lg font-semibold text-base"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('nav.contact')}
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className="px-5 py-3.5 bg-gradient-to-r from-[#88c8c3] to-[#a8b5ff] text-white rounded-2xl shadow-lg font-semibold text-base"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('nav.contact')}
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
});