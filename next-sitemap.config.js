/** @type {import('next-sitemap').IConfig} */
const siteUrl = (process.env.NEXT_PUBLIC_BASE_URL || 'https://www.kasspor.com.tr').replace(/\/$/, '');


module.exports = {
 siteUrl ,
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.6,
  sitemapSize: 5000,

  exclude: [
    '/admin',
    '/gizli-sayfa',
    '/404',
    '/500',
    '/_error',
    '/api',
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/gizli-sayfa', '/api'],
      },
    ],
    additionalSitemaps: [
    `${siteUrl}/server-sitemap-urunler.xml`,
    `${siteUrl}/server-sitemap-kategori.xml`,
    `${siteUrl}/server-sitemap-static.xml`,
      
    ],
  },

  // Opsiyonel: sitemap dosyasının adını özelleştirmek istersen:
  // sitemapBaseFileName: 'sitemap-index',
};
