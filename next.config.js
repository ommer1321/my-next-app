const withLess = require('next-with-less');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true, // ✅ Build sırasında lint hatalarını yoksay
  },

  typescript: {
    ignoreBuildErrors: true, // ✅ TypeScript hataları build'i durdurmasın (isteğe bağlı)
  },

  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true, // ✅ Less dosyalarında JS kullanılmasına izin ver
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
    ],
    domains: ['www.kasspor.com.tr',],
    
    // loader: 'custom',         // Eğer dış kaynaklı optimize resim kullanacaksan aç
    // loaderFile: './my-loader.ts', // Cloudinary gibi hizmet için özel loader tanımı
  },

  /**
   * 📦 Statik HTML çıktısı almak için export modu aktif.
   * Bu ayar sayesinde `npm run build` komutu sonrası `out/` klasörü oluşur.
   * SSR sayfalar desteklenmez! Yalnızca SSG (Static) sayfalar dışa aktarılabilir.
   * Yayın sonrası bu satırı kaldırmak istersen: output: 'export' satırını sil yeterli.
   */
  // output: 'export',
};

module.exports = withLess(nextConfig);
