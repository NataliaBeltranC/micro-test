import { useTranslation } from "react-i18next";

import "./locales/i18n";
import "./style.css"
import {useListenTranslate} from "./utils/useListenTranslate"

export default function Root(props) {
  useListenTranslate();

  const { t } = useTranslation();

  const sendIdSelect = () => {
    const event = new CustomEvent('callService', {detail: {"type": "ricky"}});
    window.dispatchEvent(event)
  }

  return <button className="button-general" onClick={sendIdSelect}>{t("detalle.buttonRicky")}</button>;
}
