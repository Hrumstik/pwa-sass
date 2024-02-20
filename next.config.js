const nextComposePlugins = require("next-compose-plugins");
const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

const nextConfig = {};

module.exports = nextComposePlugins([[withNextIntl], [withPWA]], nextConfig);
