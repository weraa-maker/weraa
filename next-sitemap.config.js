/** @type {import('next-sitemap').IConfig} */
const RSSParser = require('rss-parser');

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://weraa.org', // Replace with your website URL
    generateRobotsTxt: true, // (Optional) Generate a `robots.txt` file
    sitemapSize: 5000, // Limit of entries per sitemap file

    // Adding alternate language URLs
    alternateRefs: [
        {
            hrefLang: 'en',
            href: 'https://weraa.org',
        },
        {
            hrefLang: 'es',
            href: 'https://weraa.org/es',
        },
        {
            hrefLang: 'fr',
            href: 'https://weraa.org/fr',
        },
        {
            hrefLang: 'zh',
            href: 'https://weraa.org/zh', // Chinese
        },
        {
            hrefLang: 'ja',
            href: 'https://weraa.org/ja', // Japanese
        },
        {
            hrefLang: 'de-CH',
            href: 'https://weraa.org/de-ch', // Swiss German
        },
    ],

    // Adding dynamic or additional paths
    additionalPaths: async (config) => {
        const parser = new RSSParser();
        const feed = await parser.parseURL('https://medium.com/@weraatech'); // Replace with your Medium RSS feed URL
        
        return feed.items.map(item => ({
            loc: item.link, // URL of the blog post
            lastmod: item.pubDate, // Last modification date
        }));
    },
};
