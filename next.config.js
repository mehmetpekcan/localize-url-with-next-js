const { i18n } = require("./next-i18next.config");
const routes = require("./routes");

module.exports = {
  reactStrictMode: true,
  i18n,
  rewrites: async () => [
    ...Object.values(routes.en),
    ...Object.values(routes.tr),
  ],
};
