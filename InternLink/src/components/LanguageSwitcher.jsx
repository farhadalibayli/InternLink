import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const supportedLanguages = [
    { code: 'en', label: 'EN' },
    { code: 'az', label: 'AZ' },
    { code: 'ru', label: 'RU' },
  ];

  const currentLang = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative inline-flex p-1 bg-slate-800/50 rounded-lg border border-slate-700/50">
      {supportedLanguages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          // Use layoutId for smooth transition between buttons
          layout
          transition={{ type: "spring", stiffness: 700, damping: 50 }}
          className={`relative px-3 py-1 text-sm font-semibold rounded-md z-10 transition-colors duration-300 ${
            currentLang === lang.code
              ? 'text-white' // Text remains white when active
              : 'text-gray-400 hover:text-white/80' // Faded text when inactive
          }`}
        >
          {lang.label}
          
          {/* Highlight Indicator (Only shows behind the active button) */}
          {currentLang === lang.code && (
            <motion.div
              layoutId="language-pill"
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-md shadow-purple-500/30"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}