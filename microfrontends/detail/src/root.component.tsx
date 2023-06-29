import { useEffect, useState } from "react";
import { Detail } from "./interfaces/interfaces-detail";
import { adapterData, callApi, upPage } from "./utils/utils-detail";

import up from "./image/up.png";
import "./styles.css"

export default function Root(props) {

  const [info, setInfo] = useState([]);
  const [showCard, setShowCard] = useState(false);

  const  callService = async (data: CustomEvent) => {
    try {
      const infoApi = await callApi(data)
      const adaptInfo = adapterData(infoApi)
      setShowCard(true);
      setInfo(adaptInfo);
    } catch {
      return false;
    }
  }

  const targetElement = document.getElementById('detail');

  useEffect(() => {
    targetElement.scrollIntoView({ behavior: 'smooth' });
    window.addEventListener('callService', callService, false);
    return () => {
      window.removeEventListener('callService', callService);
    }
  })

  return (
    <>
      {
        showCard &&
        (
          <div>
            <div className="grid">
              {info.map((item: Detail, key) => (
                <div key={key}>
                    <div className="container-image">
                      <img src={item.imagen} alt={item.nombre}></img>
                    </div>
                    <p className={item.especie}>{item.nombre}</p>
                </div>
              )
              )}
            </div>
            <button className="up" onClick={() => upPage()}>
              <img src={up} alt="Ir a las opciones disponibles" />
            </button>
          </div>
        )
      }
    </>
  );
}
