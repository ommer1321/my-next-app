import UrunKategoriGrid from "@/components/Home/HomeUrunKategoriGrid";
import { fetchUrunKategoriler, fetchUrunler } from "@/services/api";

export default async function HomePage() {
  const { data: urunler, meta } = await fetchUrunler();
  const { data } = await fetchUrunKategoriler();
  const API_BASE_URL = process.env.NEXT_PUBLIC_CMS_BASE_URL;

  const products = data.map(item => ({
    title: item.urunKategoriName,
    href: `urunler/${item.slug || ''}`,
    image: item.urunKategoriImage?.url?.startsWith('http')
      ? item.urunKategoriImage.url
      : `${API_BASE_URL}${item.urunKategoriImage?.url || ''}`,
  }));

  return <UrunKategoriGrid products={products} />;
}
