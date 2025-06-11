// lib/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'

i18n
  .use(HttpBackend) // ✅ load translation files via HTTP
  .use(LanguageDetector) // ✅ detect language from browser/localStorage
  .use(initReactI18next) // ✅ integrate with React
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // ✅ load from /public/locales/
    },
  })

export default i18n
