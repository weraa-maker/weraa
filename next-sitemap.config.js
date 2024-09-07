const config = {
    siteUrl: process.env.SITE_URL || 'https://weraa.org',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    alternateRefs: [
      { hreflang: 'en', href: 'https://weraa.org' },
      { hreflang: 'es', href: 'https://weraa.org/es' },
      { hreflang: 'fr', href: 'https://weraa.org/fr' },
      { hreflang: 'zh', href: 'https://weraa.org/zh' },
      { hreflang: 'ja', href: 'https://weraa.org/ja' },
      { hreflang: 'de-CH', href: 'https://weraa.org/de-ch' },
    ],
    // Comment out additionalPaths temporarily
    // additionalPaths: async (config) => {
    //   return [];
    // },
  };
  
  module.exports = config;
  