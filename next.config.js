/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'worthy-thrill-7eb2c2bbd6.media.strapiapp.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'panel.cartollondon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'panel.cartollondon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'panel.kasspor.com.tr',
        pathname: '/**',
      },
    ],
    domains: ['www.kasspor.com.tr'],
  },

  async redirects() {
    try {
      // 🔥 require yerine dynamic import
      const fetch = (await import('node-fetch')).default;

      const res = await fetch('https://panel.kasspor.com.tr/api/redirects'
      // const res = await fetch('http://localhost:1337/api/redirects'
        , {
        headers: { Accept: 'application/json' },
      });

      if (!res.ok) {
        console.error('Strapi API hatası:', res.status);
        return [];
      }

      const json = await res.json();

      const redirects = json.data.map(item => {
        const oldPath = '/' + item.oldUrl.replace(/^https?:\/\/[^\/]+/, '').replace(/^\/|\/$/g, '');
        const newPath = '/' + item.newUrl.replace(/^https?:\/\/[^\/]+/, '').replace(/^\/|\/$/g, '');

   // permanent null ise default true, false ise geçici
  const isPermanent = item.permanent === null ? true : item.permanent;

  return {
    source: oldPath === '/' ? '/' : oldPath,
    destination: newPath === '/' ? '/' : newPath,
    permanent: isPermanent,
    statusCode: isPermanent ? 301 : 302
  };
      });

      console.log('✔ Redirects yüklendi:', redirects);
      return redirects;
    } catch (err) {
      console.error('Redirect çekme hatası:', err);
      return [];
    }
  },
};

const withLess = require('next-with-less');
module.exports = withLess(nextConfig);
