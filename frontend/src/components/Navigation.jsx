import { motion } from 'framer-motion';
import { Rocket, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { LanguageSwitcher } from './LanguageSwitcher'; // Import LanguageSwitcher

export function Navigation({ currentPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation(); // Initialize translation hook

  // Use translation keys for labels
  const navItems = [
    { page: 'home', key: 'nav.home' },
    { page: 'internships', key: 'nav.internships' },
    { page: 'examination', key: 'nav.examination' },
    { page: 'career-fair', key: 'nav.career_fair' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('home')}
          >
            <div className="relative">
              <Rocket className="w-8 h-8 text-purple-400" />
              <motion.div
                className="absolute inset-0 bg-purple-500/30 blur-xl rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="text-white text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              InternLink
            </span>
          </motion.div>

          {/* Desktop Navigation + Language Switcher Container */}
          <div className="hidden md:flex items-center gap-4"> 
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className="relative px-4 py-2 text-gray-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Use translation function t() */}
                  {t(item.key)} 
                  {currentPage === item.page && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button + Language Switcher */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher /> 
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-2"
          >
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item.page
                    ? 'bg-purple-500/20 text-purple-400'
                    : 'text-gray-300 hover:bg-slate-800'
                }`}
              >
                {t(item.key)} {/* Use translation function t() */}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}