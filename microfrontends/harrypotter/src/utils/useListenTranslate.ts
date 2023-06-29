import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import { languageStorage } from "../constants/globals";

export const useListenTranslate = (): void => {
  const { i18n } = useTranslation();
  const [valueEvent, SetValueEvent] = useState<string>();

  useEffect(() => {
    const storage = localStorage.getItem(languageStorage);
    changeLanguage(storage);
  }, []);

  useEffect(() => {
    const changeEvents = ({ detail }: CustomEvent) => {
      SetValueEvent(detail.language);
    };

    window.addEventListener(languageStorage, changeEvents, false);

    changeLanguage(valueEvent);

    return () => {
      window.removeEventListener(languageStorage, changeEvents);
    };
  }, [valueEvent]);

  const changeLanguage = (value) => {
    if (i18n.language === value) return;
    i18n.changeLanguage(value);
  };
};
