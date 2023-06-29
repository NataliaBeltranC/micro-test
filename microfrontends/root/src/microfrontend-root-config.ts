import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import "./styles.css";
import microfrontendLayout from "./microfrontend-layout.html";

const Language = {
  es: "es",
  en: "en",
  storage: "language",
}
const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });
const setTranslate = () => {
  const language = localStorage.getItem(Language.storage)
  !language && localStorage.setItem(Language.storage, Language.es)
}

setTranslate();

applications.forEach(registerApplication);
layoutEngine.activate();
start();
