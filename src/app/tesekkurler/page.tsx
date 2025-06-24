import Head from 'next/head';
import { Button } from 'antd';
import Link from 'next/link';
import Script from 'next/script';

export default function Tesekkurler() {
  return (
    <>
      {/* <Head>
        <title>Teşekkürler | Kasspor</title>
        <meta
          name="description"
          content="Formunuz başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Teşekkürler | Kasspor" />
        <meta
          property="og:description"
          content="Formunuz başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz."
        />
        <meta property="og:type" content="website" />
      </Head> */}

    {/* Dönüşüm takibi için tek seferlik script */}
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          window.gtag && gtag('event', 'conversion', {
            send_to: 'AW-10875118174/SLfdCPHt1s8aEN7E1MEo',
            value: 1.0,
            currency: 'TRY'
          });
        `}
      </Script>


      <div style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#b40024', fontSize: '32px', fontWeight: 700 }}>
          Teşekkürler!
        </h1>
        <p style={{ fontSize: '18px', margin: '24px 0' }}>
          Formunuz başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.
        </p>
        <Link href="/">
          <Button type="primary" style={{ background: '#b40024', border: 'none' }}>
            Anasayfaya Dön
          </Button>
        </Link>
      </div>
    </>
  );
}
