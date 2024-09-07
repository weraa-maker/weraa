// next-sitemap.config.js
const config = {
  siteUrl: process.env.SITE_URL || 'https://weraa.org',
  generateRobotsTxt: true, // Optional
  sitemapSize: 5000, // Maximum number of URLs per sitemap file
  alternateRefs: [
    { hreflang: 'en', href: 'https://weraa.org' },
    { hreflang: 'es', href: 'https://weraa.org/es' },
    { hreflang: 'fr', href: 'https://weraa.org/fr' },
    { hreflang: 'zh', href: 'https://weraa.org/zh' },
    { hreflang: 'ja', href: 'https://weraa.org/ja' },
    { hreflang: 'de-CH', href: 'https://weraa.org/de-ch' },
  ],
  additionalPaths: async (config) => {
    return [
      { loc: 'https://weraa.org/solution', lastmod: new Date().toISOString() },
      { loc: 'https://weraa.org/pricing', lastmod: new Date().toISOString() },
      // Add other static paths here
    ];
  },
};

module.exports = config;
