import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend'; <--- REMOVE THIS LINE

// 1. DIRECTLY IMPORT TRANSLATION JSONS
import enTranslation from '../locales/en/translation.json';
import azTranslation from '../locales/az/translation.json';
import ruTranslation from '../locales/ru/translation.json';

// The configuration for i18next
i18n
  // .use(Backend) <--- REMOVE THIS LINE
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // 2. Add the resources property
    resources: {
      en: {
        translation: enTranslation,
      },
      az: {
        translation: azTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
    },

    // Set initial language
    lng: 'en',
    
    // Fallback language if translation is missing
    fallbackLng: 'en',
    
    // Supported languages
    supportedLngs: ['en', 'az', 'ru'],

    // REMOVE backend configuration block
    // REMOVED: backend: { loadPath: '/locales/{{lng}}/{{ns}}.json', },
    
    // Default namespace
    ns: ['translation'],
    defaultNS: 'translation',

    react: {
      useSuspense: false,
    },
    
    debug: false,
  });

export default i18n;