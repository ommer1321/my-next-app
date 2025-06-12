// pages/tesekkurler.tsx

import { Button } from 'antd';
import Link from 'next/link';

export default function Tesekkurler() {
  return (
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
  );
}
