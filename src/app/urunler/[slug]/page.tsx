'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Col, Row, Typography } from 'antd';
import { fetchUrunKategoriById } from '@/services/api';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { UrunKategori } from '@/intefaces/urunKategoriIF';
import { log } from 'console';
const API_BASE_URL = process.env.NEXT_PUBLIC_CMS_BASE_URL;

const { Title, Text } = Typography;

export default function UrunDetaySayfasi() {
  const params = useParams();
  const slug = params?.slug;
  const [altUrunler, setAltUrunler] = useState<UrunKategori[]>([]);

useEffect(() => {
    const fetchData = async () => {
      if (slug) {
        try {
          const { data } = await fetchUrunKategoriById(slug);
          console.log('Kategori verisi:', data);

          // const altUrunlerData = data?.map(item => ({
          //   name: item.urunKategoriName,
          //  slug : `urunler/${item.urunKategoriName || ''}`,
          //  src : `${API_BASE_URL}${item.urunKategoriImage?.url || ''}`,
          // })) || [];

setAltUrunler(data);

        } catch (error) {
          console.error('Kategori verisi alınırken hata:', error);
        }
      }
    };

    fetchData();
    console.log('altUrunler:', altUrunler);
    
  }, [slug]);









  return (
    <section style={{ backgroundColor: '#fff', padding: '40px 16px' }}>
      {/* Üst Geniş Tanıtım Alanı */}
      <Row gutter={[24, 24]} justify="center" align="middle">
       
       
       {/* {altUrunler[0]?.urunKategoriDesc  &&(
        <Col xs={24} lg={12}>
          <div style={{ maxWidth: 600, padding: '0 16px' }}>
            <Title level={2} style={{ fontWeight: 700, color: '#b40024', marginBottom: 8 }}>
              {altUrunler[0]?.urunKategoriName ??' Kategori Adı Bulunamadı'}
            </Title>
            <Title level={4} style={{ margin: 0 }}>
              {altUrunler[0]?.urunKategoriDesc ??' Kategori DEsc Bulunamadı'}
            </Title>
            
            <Title level={4} style={{ margin: 0, fontWeight: 700 }}>
              DİKEY DURUŞ <span style={{ fontWeight: 400 }}>İLE</span>
            </Title>
            <Title level={4} style={{ marginTop: 0 }}>
              HEDEFİNE YAKLAŞ!
            </Title>
            <div
              style={{
                backgroundColor: '#000',
                display: 'inline-block',
                padding: '8px 20px',
                color: '#fff',
                fontWeight: 600,
                fontSize: 14,
                marginTop: 12,
              }}
            >
              TEKLİF AL
            </div>
            <Text style={{ display: 'block', marginTop: 8, fontSize: 13 }}>
              Türkiye’nin En Büyük Spor Aletleri Üreticisi
            </Text>
          </div>
        </Col>
)} */}


        <Col xs={24} lg={24}>
          <Image
            src={altUrunler[0]?.urunKategoriSlideImage?.url ? `${API_BASE_URL}${altUrunler[0]?.urunKategoriSlideImage.url }` : '/urunler/kasspor-urun1.webp'}
            alt="Ürün"
            width={700}
            height={400}
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </Col>
      </Row>

      {/* Alt Ürünler */}
      <div style={{ marginTop: 60, textAlign: 'center' }}>
        <Title level={4} style={{ fontWeight: 700, marginBottom: 8, fontFamily: 'var(--font-montserrat)' }}>
          ÜRÜNLER
        </Title>
        <div style={{ width: 40, height: 3, backgroundColor: '#000', margin: '0 auto 32px' }} />
      </div>

      <Row gutter={[24, 24]} justify="center">
        {altUrunler[0]?.urunlers?.map((item, index) => (
          console.log('Ürün:', item),
          <Col key={index} xs={12} sm={12} md={6}>
            <Link href={`/urun/${item.slug}`} style={{ textDecoration: 'none' }}>
              <div className="product-card">
                <Image
                  src={item.urunImage[0].url? `${API_BASE_URL}${item.urunImage[0].url}` : '/urunler/kasspor-urusn1.webp'}
                  alt={item.urunName}
                  width={400}
                  height={400}
                  className="product-image"
                />
                <div className="product-title">{item.urunName}</div>
              </div>
              <Title level={5} style={{ margin: 0, fontFamily: 'var(--font-montserrat)', textAlign: 'center' }}>
                {item.urunName}
            </Title>
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

        .product-title {
          text-align: center;
          margin-top: 12px;
          font-size: 14px;
          font-weight: 600;
          font-family: var(--font-montserrat);
          color: #111;
        }
      `}</style>
    </section>
  );
}

