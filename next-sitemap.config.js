/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://weraa.vercel.app',
  generateRobotsTxt: true,
  excludeFromSitemap: ['/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://weraa.vercel.app/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  sitemapSize: 7000,
  outDir: 'public',
}; 