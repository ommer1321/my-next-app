'use client';

import { Row, Col, Typography } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { fetchUrunKategoriler, fetchUrunler } from '@/services/api';
// import './styles.css'; // CSS efektlerini buradan vereceğiz
  const { data: urunler, meta } = await fetchUrunler();
  const { data } = await fetchUrunKategoriler();
const API_BASE_URL = process.env.NEXT_PUBLIC_CMS_BASE_URL;

console.log(data,"kategori");


// // image olanları forma uygun dönüştür
//       const products = data.map(item => ({
//         title: item.urunKategoriName,
//         href: `${"urunler/"}${item.slug || ''}`,
//         image: `${API_BASE_URL}${item.urunKategoriImage?.url || ''}`,
//       }));


const products = data.map(item => ({
  title: item.urunKategoriName,
  href: `${"urunler/"}${item.slug || ''}`,
  image: item.urunKategoriImage?.url?.startsWith('http')
    ? item.urunKategoriImage.url
    : `${API_BASE_URL}${item.urunKategoriImage?.url || ''}`,
}));

console.log('Ürünler:', products,urunler,meta);


export default function UrunlerPage() {
  return (
    <section style={{ backgroundColor: '#fff', padding: '60px 16px' }}>
      {/* <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Title level={3} style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}>
          ÜRÜNLER
        </Title>
        <div style={{ width: 40, height: 3, backgroundColor: '#000', margin: '8px auto 0' }} />
      </div> */}

      <Row gutter={[16, 16]}>
        {products.map((product, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={index < 2 || index >= 6 ? 12 : 6} // 2-4-2 düzeni
          >
            <Link href={`${product.href}`} >
              <div className="product-card">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={1000}
                  height={1000}
                  className="product-image"
                />
                <div className="product-overlay">
                  <span>{product.title}</span>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
     <style jsx global>{`
  .product-card {
    position: relative;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 1 / 1;
  }

  .product-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 0.4s ease;
    display: block;
  }

  .product-card:hover .product-image {
    opacity: 0.7;
    transform: scale(1.02);
  }

  .product-overlay {
    position: absolute;
    bottom: 12px;
    left: 12px;
    background-color: #b40024;
    color: white;
    font-weight: 600;
    font-size: 13px;
    padding: 4px 12px;
    border-radius: 4px;
    font-family: var(--font-montserrat);
  }
`}</style>

    </section>

  );
}
