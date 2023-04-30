/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
