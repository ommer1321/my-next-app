import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from 'next/font/google';

import { ConfigProvider, theme, App as Antdapp } from "antd";
import "antd/dist/reset.css";
import Script from "next/script";

import HeaderKaspor from "@/components/HeaderKaspor";
import FooterKaspor from "@/components/FooterKaspor";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/components/Context";
// Opsiyonel: Sosyal footer (sabit WhatsApp ve sosyal ikonlar)
// import SocialFooter from '@/components/SocialFooter';




const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kas Spor",
  description: "Kas Spor Resmî Web Sitesi",
};

const { defaultAlgorithm } = theme;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">

<head>
 {/* Google Tag Manager */}
<Script
  id="gtm-script"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MFHLRH2G');
    `,
  }}
/>

  {/* Google Site Doğrulama */}
  <meta
    name="google-site-verification"
    content="-V38MJLyqnmTFt1IUoXiC-8ThR4gT53KQhtCwIntmFs"
  />

  {/* Google Ads ve Analytics */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=AW-10875118174"
    strategy="afterInteractive"
  />
  <Script id="gtag-init" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'AW-10875118174');
      gtag('config', 'G-LQFWXNZTVL');
    `}
  </Script>
</head>

      <body
        className={` ${montserrat.variable} antialiased`}
        >
        <CartProvider>
         <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-MFHLRH2G"
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    ></iframe>
  </noscript>
        <ConfigProvider
          theme={{
            algorithm: defaultAlgorithm,
            token: {
              colorPrimary: "#b40024", // Kaspor kırmızısı
              borderRadius: 6,
              fontSize: 15,
              fontWeightStrong: 600,
            },
          }}
        >
        
        
<Toaster position="top-right" reverseOrder={false} />
          {/* Her sayfa için ortak header */}
          <HeaderKaspor />

          {/* Sayfa içeriği */}
          <main style={{ minHeight: "calc(100vh - 200px)" }}>
            <Antdapp>


            {children}
            </Antdapp>
            </main>

          {/* Her sayfa için ortak footer */}
          <FooterKaspor />

          {/* Opsiyonel: sabit WhatsApp butonu ve sosyal ikonlar */}
          {/* <SocialFooter /> */}
        </ConfigProvider>
             </CartProvider>
      </body>
    </html>
  );
}
