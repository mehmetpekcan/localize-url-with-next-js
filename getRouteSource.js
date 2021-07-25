import routes from "./routes";

export const getRouteSource = (name, language = global.locale) =>
  routes[language][name].source;
