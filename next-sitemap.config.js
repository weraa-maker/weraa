const RSSParser = require('rss-parser');

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
  additionalPaths: async (config) => {
    const parser = new RSSParser();
    try {
      const feed = await parser.parseURL('https://medium.com/@weraatech');
      return feed.items.map(item => ({
        loc: item.link || '',
        lastmod: item.pubDate || '',
      }));
    } catch (error) {
      console.error('Error parsing RSS feed:', error);
      return [];
    }
  },
};

module.exports = config;
