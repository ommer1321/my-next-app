'use client';

import { Button, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Typography  } from 'antd';
import { CSSProperties } from "react";
import { TagOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
interface Product {
  title: string;
  href: string;
  image: string;
}

export default function UrunKategoriGrid({ products }: { products: Product[] }) {
  const images = [
    '/kasspor-sıralı-1.jpg',
    '/kasspor-sıralı-2.jpg',
    '/kasspor-sıralı-3.jpg',
  ];

     const titleStyle: CSSProperties = {
    fontSize: 45,
    fontWeight: 700,
    fontFamily: 'var(--font-montserrat)',
    color: '#333',
    marginBottom: 24,
  };

  const paragraphStyle: CSSProperties = {
    fontSize: 18,
    lineHeight: 1.8,
    textAlign: 'left',
    fontFamily: 'var(--font-montserrat)',
    color: '#555',
  };

//   const strongParagraphStyle: CSSProperties = {
//     ...paragraphStyle,
//     color: '#333',
//     fontWeight: 600,
//     marginTop: 16,
//   };

const strongParagraphStyle: CSSProperties = {
  fontSize: 17,
  fontWeight: 600,
  color: '#333',
  fontFamily: 'var(--font-montserrat)',
  marginTop: 32,
  marginBottom: 8,
};


  const badgeStyle: CSSProperties = {
    display: 'inline-block',
    backgroundColor: '#b40024',
    color: '#fff',
    padding: '10px 16px',
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 15,
    marginTop: 24,
    fontFamily: 'var(--font-montserrat)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  };


const infoBoxStyle: CSSProperties = {
  backgroundColor: '#f0f0f0',
  padding: '12px 16px',
  borderRadius: 6,
  fontFamily: 'var(--font-montserrat)',
  color: '#444',
  fontSize: 15,
  fontWeight: 500,
};





  return (
    <section style={{ backgroundColor: '#fff', padding: '60px 16px' }}>
      <Row gutter={[16, 16]}>
        {products.map((product, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={index < 2 || index >= 6 ? 12 : 6}
          >
            <Link href={product.href}>
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


 <section style={{ background: '#fafafa', padding: '60px 16px' }}>
      <Row justify="center">
        <Col xs={24} sm={22} md={20} lg={16}>
          <Title level={3} style={titleStyle}>
            Yerli ve Milli Üretim
          </Title>
          <Paragraph style={paragraphStyle}>
            Kas Spor olarak Uzun Yıllardır Spor Salonu Makineleri Spor Aletleri Spor Salonu Ekipmanları üretmekteyiz.
            İstanbul Sultanbeyli’de olan fabrikamızda size özel renk tasarım seçenekleri ile kullanıcı odaklı makinaların üretimini gerçekleştiriyoruz.
          </Paragraph>
         



          
<Paragraph style={strongParagraphStyle}>
  <TagOutlined style={{ marginRight: 8, color: '#ff0040' }} />
  Toplu Alışverişler'de Uygulanan Kampanyalar İçin ' Teklif Al ' Kısmından  Bizlere Ulaşabilirsiniz.
</Paragraph>
<div style={badgeStyle}>
 Teklif Al
</div>
        </Col>
      </Row>
    </section>







 <section style={{ background: '#f5f5f5', padding: '60px 0' }}>
      <Row justify="center" align="middle">
        <Col xs={24} md={10} style={{ padding: '0 24px' }}>
          <Title
            level={3}
            style={{
              fontSize: 31,
              fontWeight: 700,
              fontFamily: 'var(--font-montserrat)',
              color: '#111',
              marginBottom: 8,
            }}
          >
            Yetkili Servis Ağı
          </Title>
          <div
            style={{
              width: 32,
              height: 2,
              backgroundColor: '#111',
              margin: '12px 0 24px',
            }}
          />
          <Paragraph
            style={{
              fontSize: 18,
              color: '#555',
              fontFamily: 'var(--font-montserrat)',
              lineHeight: 1.8,
              maxWidth: 500,
            }}
          >
            Tecrübeli ve aynı zamanda alanında eğitimli Teknisyenleri içinde
            barındıran teknik servis ekiplerimiz ile anında etkili ve kalıcı
            çözümleri 7/24 müşterilerimize sunmaktayız.
            <br />
            <strong style={{ color: '#444' }}>SERVİS KAYDI İÇİN</strong>
          </Paragraph>
          <Button
            type="primary"
            style={{
              backgroundColor: '#c8102e',
              border: 'none',
              marginTop: 24,
              fontWeight: 700,
              fontFamily: 'var(--font-montserrat)',
              padding: '12px 24px',
              fontSize: 16,
            }}
            size="large"
          >
            0 531 087 50 63
          </Button>
        </Col>

        <Col xs={20} md={12} style={{ padding: '20px 0px' }}>
          <Image
            src="/kasspor-hk.jpg" // kendi path'ine göre güncelle
            alt="Yetkili Servis"
            width={1200}
            height={700}
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </Col>
      </Row>
    </section>

   


 <section style={{  padding: '10px 0' }}>
      <Row justify="center" align="middle" gutter={[32, 32]}>



        
        {/* Sol Görsel */}
        <Col xs={24} md={12} style={{ textAlign: 'center' }}>
          <Image
            src="/kasspor-global.jpg" // Görselin yolu (örnek: public/images/kurulum-montaj.png)
            alt="Kurulum Montaj Bize Ait"
            width={3001}
            height={3001}
            style={{ maxWidth: '100%', height: 'auto' }}
            />
        </Col>

        {/* Sağ Başlık ve Açıklama */}
        <Col xs={22} md={12}>
          <Title
            level={3}
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontWeight: 700,
              marginBottom: 12,
            }}
            >
Sadece Salonlar Değil Güzel Dostluklar Kuruyoruz
          </Title>
          <div style={{ width: 40, height: 3, backgroundColor: '#000', marginBottom: 16 }} />


          <Paragraph style={{ fontSize: 18, lineHeight: 1.8, fontFamily: 'var(--font-montserrat)', color: '#555' }}>
  Kas Spor <strong>"İnsana Saygı Duy ve En İyisini Üret"</strong> mottosuyla 
  yıllardır dayanıklı spor alanları üretiyor.
</Paragraph>

        </Col>
      </Row>
    </section>


  <section style={{ background: '#fff', padding: '60px 16px' }}>
      <Row gutter={[16, 16]} justify="center">
        {images.map((src, index) => (
          <Col
            key={index}
            xs={24}   // mobilde tam genişlik
            sm={24}   // tablet yatayda yine tekli
            md={8}    // masaüstü ve üzeri: 3 sütun (8+8+8)
          >
            <div
              style={{
                border: '1px solid #ddd',
                borderRadius: 6,
                overflow: 'hidden',
              }}
            >
              <Image
                src={src}
                alt={`Galeri ${index + 1}`}
                width={500}
                height={800}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>
          </Col>
        ))}
      </Row>
    </section>


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
