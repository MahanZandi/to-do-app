import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import fa from './locales/fa/translation.json';

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fa,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en : {translation : en} ,
      fa : {translation : fa}
    },
    // lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
