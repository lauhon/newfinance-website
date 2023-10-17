/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  trailingSlash: true,
};

module.exports = nextConfig;
