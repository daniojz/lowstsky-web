import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import global_es from "./es/global_es.json";
import global_en from "./en/global_en.json";
import home_es from "./es/home_es.json";
import home_en from "./en/home_en.json";

i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
  fallbackLng: "es",
  interpolation: { escapeValue: false },
  returnObjects: "true",
  resources: {
    es: {
      global: global_es,
      home: home_es,
    },
    en: {
      global: global_en,
      home: home_en,
    },
  },
});
