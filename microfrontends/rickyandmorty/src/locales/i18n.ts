import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { en } from "./en";
import { es } from "./es";
import { Language, languageStorage } from "../constants/globals";

const resources = {
  en,
  es,
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem(languageStorage) || Language.es,
  interpolation: {
    escapeValue: false,
  },
  react: {
    transSupportBasicHtmlNodes: true,
  },
});
