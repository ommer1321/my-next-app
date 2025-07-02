import { fetchUrunKategoriler } from '@/services/api';
import { SitemapStream, streamToPromise } from 'sitemap';
import { NextResponse } from 'next/server';
import { Readable } from 'stream';

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') || 'https://www.kasspor.com.tr';
const BASE_URL =  'https://www.kasspor.com.tr';

export async function GET() {
  const kategoriResponse = await fetchUrunKategoriler();

  if (!kategoriResponse?.data || !Array.isArray(kategoriResponse.data)) {
    return new NextResponse('Kategori verisi yok', { status: 500 });
  }

  const urls = kategoriResponse.data.map((kategori: any) => ({
    url: `/urunler/${kategori.slug}`,
    lastmod: kategori.updatedAt || new Date().toISOString(),
    priority: 0.7, // ❗️ string değil, number
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
