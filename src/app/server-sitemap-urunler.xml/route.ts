import { fetchUrunler } from '@/services/api';
import { SitemapStream, streamToPromise } from 'sitemap';
import { NextResponse } from 'next/server';
import { Readable } from 'stream';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') || 'https://www.kasspor.com.tr';

export async function GET() {
  const urunlerResponse = await fetchUrunler();

  if (!urunlerResponse?.data || !Array.isArray(urunlerResponse.data)) {
    return new NextResponse('Urun verisi yok', { status: 500 });
  }

  const urls = urunlerResponse.data.map((urun: any) => ({
    url: `/urun/${urun.slug}`,
    lastmod: urun.updatedAt || new Date().toISOString(),
    priority: 0.7,
    changefreq: 'monthly',
  }));

  const stream = new SitemapStream({ hostname: BASE_URL });
  const xml = await streamToPromise(Readable.from(urls).pipe(stream)).then((data) =>
    data.toString()
  );

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
