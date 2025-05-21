import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from 'next/font/google';

import { ConfigProvider, theme } from "antd";
import "antd/dist/reset.css";

import HeaderKaspor from "@/components/HeaderKaspor";
import FooterKaspor from "@/components/FooterKaspor";
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
      <body
        className={` ${montserrat.variable} antialiased`}
      >
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
          {/* Her sayfa için ortak header */}
          <HeaderKaspor />

          {/* Sayfa içeriği */}
          <main style={{ minHeight: "calc(100vh - 200px)" }}>{children}</main>

          {/* Her sayfa için ortak footer */}
          <FooterKaspor />

          {/* Opsiyonel: sabit WhatsApp butonu ve sosyal ikonlar */}
          {/* <SocialFooter /> */}
        </ConfigProvider>
      </body>
    </html>
  );
}
