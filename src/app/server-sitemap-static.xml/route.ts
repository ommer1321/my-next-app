import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') || 'https://www.kasspor.com.tr';

export async function GET() {
  const staticUrls = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/hakkimizda', changefreq: 'yearly', priority: 0.6 },
    { url: '/hakkimizda/iade-sartlari', changefreq: 'yearly', priority: 0.5 },
    { url: '/iletisim', changefreq: 'yearly', priority: 0.5 },
    { url: '/kategoriler', changefreq: 'monthly', priority: 0.6 },
    { url: '/referanslar', changefreq: 'monthly', priority: 0.6 },
    { url: '/tesekkurler', changefreq: 'yearly', priority: 0.4 },
    { url: '/iade-sartlari', changefreq: 'yearly', priority: 0.4 },
  ];

  const stream = new SitemapStream({ hostname: BASE_URL });
  const xml = await streamToPromise(Readable.from(staticUrls).pipe(stream)).then((data) =>
    data.toString()
  );

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
