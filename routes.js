const trRoutes = {
  "/": {
    source: "/tr",
    destination: "/",
    locale: false,
  },
  "/about": {
    source: "/tr/hakkimizda",
    destination: "/about",
    locale: false,
  },
};

const enRoutes = {
  "/": {
    source: "/",
    destination: "/",
    locale: false,
  },
  "/about": {
    source: "/about",
    destination: "/about",
    locale: false,
  },
};

module.exports = {
  en: enRoutes,
  tr: trRoutes,
};
