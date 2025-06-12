// src/app/not-found.tsx

'use client';

import Link from 'next/link';
import { Result, Button } from 'antd';

export default function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Üzgünüz, aradığınız sayfa bulunamadı."
      extra={
        <Link href="/">
          <Button type="primary">Anasayfaya Dön</Button>
        </Link>
      }
    />
  );
}
