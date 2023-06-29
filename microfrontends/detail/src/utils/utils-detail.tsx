import { listApis } from "../constants/constants"

export const adapterData = (data:any) => {
    const validateInfo = data.nameApi === "ricky" ? data.dataApi.results : data.dataApi;
    const transformInfo = validateInfo.map((item: any) => ({
      nombre: item.personaje || item.name,
      imagen: item.imagen || item.image,
      especie: item?.species?.toLowerCase() || item?.casaDeHogwarts?.toLowerCase(),
      showUp: true,
    }))
    return transformInfo
}

export const upPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
 }

export const callApi = async (data: CustomEvent) => {
    const callApi = await fetch(listApis[data.detail.type]);
    const dataApi = await callApi.json()
    return {nameApi: data.detail.type, dataApi}
}