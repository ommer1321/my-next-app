'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Col, Row, Typography } from 'antd';

const { Title, Text } = Typography;

export default function UrunDetaySayfasi() {
  const altUrunler = [
    { name: 'ELLIPTICAL (LED SCREEN)', src: '/urunler/kasspor-urun1.webp', slug: '/urunler/elliptical/deneme' },
    { name: 'RECUMBENT BIKE (LED SCREEN)', src: '/urunler/kasspor-urun1.webp', slug: '/urunler/recumbent-bike/deneme' },
    { name: 'UPRIGHT BIKE (LED SCREEN)', src: '/urunler/kasspor-urun1.webp', slug: '/urunler/upright-bike/deneme' },
    { name: 'TREAD MILL', src: '/urunler/kasspor-urun1.webp', slug: '/urunler/tread-mill/deneme' },
  ];

  return (
    <section style={{ backgroundColor: '#fff', padding: '40px 16px' }}>
      {/* Üst Geniş Tanıtım Alanı */}
      <Row gutter={[24, 24]} justify="center" align="middle">
        <Col xs={24} lg={12}>
          <div style={{ maxWidth: 600, padding: '0 16px' }}>
            <Title level={2} style={{ fontWeight: 700, color: '#b40024', marginBottom: 8 }}>
              M SERIES
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
        <Col xs={24} lg={12}>
          <Image
            src="/urunler/kasspor-urunslide1.webp"
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
        {altUrunler.map((item, index) => (
          <Col key={index} xs={12} sm={12} md={6}>
            <Link href={item.slug} style={{ textDecoration: 'none' }}>
              <div className="product-card">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="product-image"
                />
                <div className="product-title">{item.name}</div>
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
