import { useTranslation } from "react-i18next";

import "./locales/i18n";
import { useListenTranslate } from "./utils/useListenTranslate";
import "./style.css"

export default function Root(props) {
  const { t } = useTranslation();
  useListenTranslate();

  const sendIdSelect = () => {
    const event = new CustomEvent('callService', {detail: {"type": "harry"}});
    window.dispatchEvent(event)
  }

  return <button className="button-general" onClick={sendIdSelect}>{t("detalle.buttonHarry")}</button>;
}
