/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://weraa.org', // Replace with your website URL
    generateRobotsTxt: true, // (Optional) Generate a `robots.txt` file
    sitemapSize: 5000, // Limit of entries per sitemap file
  };
  