import { FC, useEffect, useState } from "react";

import { Languages, languageStorage } from "../../constants/globals";
import { sendEventHelper } from "../../utils/utils-header";
import "./style.css"

export const Header: FC = () => {
    const [languageActive, setLanguageActive] = useState<string>(
        localStorage.getItem(languageStorage)
    );

    useEffect(() => {
        sendEventHelper(languageStorage, { language: languageActive });
        localStorage.setItem(languageStorage, languageActive);
    }, [languageActive]);


    const handleChangeLanguage = (language: string) => {
        setLanguageActive(language);
    }

    return (
        <header>
            <ul className="list-language">
                {Languages.map((select) => (
                    <li key={select}>
                        <button onClick={() => handleChangeLanguage(select)}>
                            {select === "es" ? "es /" : select}
                        </button>
                    </li>
                ))}
            </ul>
        </header>
    );
}
